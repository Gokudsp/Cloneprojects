import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate} from 'react-router-dom';



function LoginPage() {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();

   
    
    return (
        <div className='login'>
            <Link to='/login'>
                <img
                    alt=''
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login_container'>
                

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='login_register'>Singin</button>
                    
                </form>

                <p>
                by clicking sign-in you agree to out terms and condition Lorem ipsum dolor sit,
                 amet consectetur adipisicing elit. 
                 Inventore cupiditate deleniti,
                  itaque facere tempora blanditiis similique porro totam perferendis iusto excepturi voluptas deserunt nihil repellendus assumenda ex, 
                  atque obcaecati ullam?
                </p>

                <button className='login_registerButton'>Singup</button>
            </div>
        </div>
    )
}

export default LoginPage