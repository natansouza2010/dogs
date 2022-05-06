import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import {Input} from '../Forms/Input'
import { Button } from '../Forms/Button'
import { useForm } from '../../hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../api'
import { UserContext } from '../../contexts/UserContext'
import { Erro } from '../Helper/Erro'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'

export const LoginForm = () => {

  const {userLogin , data, error, loading } = useContext(UserContext);
  
  const username = useForm();
  const password = useForm();



  


  async function handleSubmit (event) {
    console.log(data);
    event.preventDefault();

    if(username.validate() && password.validate()){
     userLogin(username.value, password.value)
    
      // const token = data
      // console.log(data);
        
  }
    

  }

  


  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}> 
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Senha"   type="password" name="password" {...password}/>
        
        {loading ? 
        (<Button disabled>Carregando</Button>): 

        (<Button>Entrar</Button>)
        }

        <Erro erro={error}/>  
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">Perdeu a senha ?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}> Cadastre-se</h2>
        <p>Ainda não possui conta ? Cadastre-se no site.</p>
      </div>
      <Link className={stylesBtn.button} to="/login/criar/">Cadastro</Link>

    </section>
  )
}
