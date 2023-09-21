import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = e =>{
        e.preventDefault();

    }

    const register = e =>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'>
      <h2 className='login_logo'>OneStopShop</h2>
    </Link>

    <div className="login_container">
        <h2>Sign in</h2>

        <form >
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type="password" value={password}
            onChange={e => setPassword(e.target.value)} />

            <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>

            <button onClick={register} className='login_newAccButton'>Create a new account</button>
        </form>
    </div>
    </div>
    
  )
}
