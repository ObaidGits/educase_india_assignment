import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <div id="login">
                <div className="card">
                    <div className="content-wrap">
                        <div className="heading-wrap">
                            <div className="welcome">Signing to your <br /> PopX account</div>
                            <div className="intro">Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit,</div>
                        </div>
                        <div className="input-wrapper">
                            <div className="input-div">
                                <label>Email Address</label>
                                <input type='email' placeholder='Enter email address' />
                            </div>
                            <div className="input-div">
                                <label>Password</label>
                                <input type='password' placeholder='Enter password' />
                            </div>
                            <button className='login-btn' type='button' onClick={()=>navigate("/settings")}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login