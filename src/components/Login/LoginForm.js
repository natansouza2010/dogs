import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import {Input} from '../Forms/Input'
import { Button } from '../Forms/Button'
import { useForm } from '../../hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../api'
import { UserContext } from '../../contexts/UserContext'

export const LoginForm = () => {

  const {userLogin , data} = useContext(UserContext);
  
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
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}> 
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Senha"   type="password" name="password" {...password}/>
        
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar/">Cadastros</Link>

    </div>
  )
}
