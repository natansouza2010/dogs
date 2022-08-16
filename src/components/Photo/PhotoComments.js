import React, {useContext, useState} from 'react'
import PhotoCommentsForm from '../../components/Photo/PhotoCommentsForm.js'
import {UserContext} from '../../contexts/UserContext.js'
import styles from './PhotoComments.module.css'

const PhotoComments = (props) => {
  const [comments, setComments] = useState(()=> props.comments)
  const { login } = useContext(UserContext);
  return (
    <>
      <ul className={styles.comments}>
        {comments.map(comment => <li key ={comment.comment_ID}>
            <b>{comment.comment_author} :</b>
            <span>{comment.comment_content}</span>
           </li>)}
      </ul>
        {login && <PhotoCommentsForm id={props.id} setComments= {setComments}/>}
    </>
    
  )
}

export default PhotoComments