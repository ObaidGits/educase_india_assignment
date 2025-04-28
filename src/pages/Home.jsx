import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div id="home">
                <div className="card">
                    <div className="floating-div">
                        <div className="welcome">Welcome to PopX</div>
                        <div className="intro">Lorem ipsum, dolor sit amet consectetur adipisicing elit,</div>
                        <Link to="/signup" className="create-btn">Create Account</Link>
                        <Link to="/login" className="login-btn">Already Registered ? Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home