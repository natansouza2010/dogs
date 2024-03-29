import React, { useState } from 'react'
import {ReactComponent as Enviar } from '../../assets/enviar.svg'
import {useFetch} from '../../hooks/useFetch.js'
import { COMMENT_POST } from '../../api'
import { Erro } from '../Helper/Erro.js'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments}) => {
  const [comment, setComment] = useState('')
  const {request,error} = useFetch();

  async function handleSubmit(event){
    event.preventDefault();
    const {url, options} = COMMENT_POST(id, {comment})
    const{response, json} = await request(url, options)
    console.log(json)
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
    
    
  }
    
  return (
    <form className={styles.form} onSubmit = {handleSubmit}>
        <textarea 
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder= "Comente..."
        value={comment} 
        onChange={({target}) => setComment(target.value)}
        />

        <button className={styles.button}><Enviar/></button>
        <Erro erro={error}/>
    </form>
    
  )
}

export default PhotoCommentsForm