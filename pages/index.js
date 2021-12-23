import { useState } from 'react';

import LoginForm from '../components/loginForm'
import axios from 'axios';
import Admin from '../components/CookieStandAdmin'

const baseUrl ='https://cookie-stand-api-rawnaq.herokuapp.com/';
const tokenUrl = baseUrl+'api/token/';

const Home = () => {

const [token, setToken] = useState('');

const submitHandler = async (e, credintials)=>{
  e.preventDefault();
  axios.post(tokenUrl,credintials).then(data=>{
    setToken(data.data.access)
  });
  console.log(token)
}


  return (
  <>

    
    {!token ? <LoginForm submitHandler={submitHandler} /> : <Admin token={token}/>}
    
    </>  
    )
  

  

}
export default Home;