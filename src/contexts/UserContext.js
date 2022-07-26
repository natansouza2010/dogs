import React, { createContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api';

export const UserContext = createContext();


export const UserStorage = ({children}) => {
    const [data, setData] =  useState(null)
    const [login, setLogin] = useState(null);
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    useEffect(()=>{
      async function autoLogin(){
        const token = window.localStorage.getItem('token')
        if(token){
          try{
            setError(null);
            setLoading(true);
            const {url, options} = TOKEN_VALIDATE_POST(token);
            const response = await fetch(url,options);
            if(!response.ok) throw new Error('Token invalid');
            await getUser(token)
          }catch(err){
              userLogout();
          }finally{
            setLoading(false)
          }
         
          
        }else{
          setLoading(false)
        }
      }
      autoLogin();
    }
    
    
    ,[])


    async function userLogout(){
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('token')

      navigate('/login');
    }
    async function getUser(token){
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options); 
        const json = await response.json();
        setData(json)
        setLogin(true)
        console.log(json);
      }

    async function userLogin(username, password){
      try{
        setError(null);
        setLoading(true);
        const {url, options} = TOKEN_POST({username , password})
        const tokenRes = await fetch(url, options) 
        console.log(tokenRes);
        if(!tokenRes.ok) throw new Error(`Error: Usuário inválido`)
        
        const {token} = await tokenRes.json();
        // console.log()
        window.localStorage.setItem('token', token);
        await getUser(token);
        debugger;
        navigate('/conta')


      }catch(err){
        console.log(err.message)
        setError(err.message);
        setLogin(false);
      }finally{
        setLoading(false);

      }
        
    }
    

  return (
    <UserContext.Provider value= {{userLogin, data, userLogout, error, loading, login }}> 
        {children}
    </UserContext.Provider>
  );
}
