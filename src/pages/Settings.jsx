import React from 'react';
import avatar_img from '../assets/ai_avatar.png';
import camera_icon from '../assets/camera-icon.png';

const Settings = () => {
    return (
        <>
            <div id="settings">
                <div className="card">
                    <div className="header"> Account Settings</div>
                    <div className="wrapper">
                        <div className="profile">
                            <div className="img-wrap">
                            <img src={avatar_img} className='avatar-img'/>
                            <div className="camera-icon">
                                <img src={camera_icon}/>
                            </div>
                            </div>
                            <div className="name-wrap">
                                <p style={{"fontWeight":"700", "fontSize":"17px"}}>Marry Doe</p>
                                <p>Marry@Gmail.Com</p>
                            </div>
                        </div>
                        <div className="bio">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat optio quisquam, voluptatum expedita odio consequatur nihil quibusdam.</div>
                    </div>
                    <div className="line-div"></div>
                </div>
            </div>
        </>
    )
}

export default Settings