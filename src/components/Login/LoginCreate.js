import React, { useContext } from 'react'
import {Input} from '../Forms/Input';
import {Button} from '../Forms/Button';
import { useForm } from '../../hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../contexts/UserContext';

export const LoginCreate = () => {
  const username = useForm();
  const email = useForm('form')
  const password = useForm();

  const {userLogin} = useContext(UserContext);

  async function handleSubmit(event){

    event.preventDefault();
    const {url, options} = USER_POST(
      {
        username: username.value,
        email: email.value,
        password: password.value,
 
    })
    const response = await fetch(url, options);
    if(response.ok) userLogin(username.value, password.value)
    
    console.log(response)

  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastra-se</h1>
      <form onSubmit={handleSubmit}>
         <Input label="Usuário" type="text" name="username" {...username}/>
         <Input label="Email" type="email" name="email" {...email}/>
         <Input label="Senha" type="password" name="password" {...password}/>
         <Button>Cadastrar</Button>
      </form>
    </section>
  )
}
