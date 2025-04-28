import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "Marry Doe",
        phoneNumber: "Marry Doe",
        email: "Marry Doe",
        password: "Marry Doe",
        companyName: "Marry Doe",
        agency: "yes",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (e) => {
        setFormData(prev => ({ ...prev, agency: e.target.value }));
    };

    return (
        <div id="signup">
            <div className="card">
                <div className="content-wrap">
                    <div className="welcome" style={{"marginBottom":"25px"}}>Create your <br /> PopX account</div>
                    <div className="input-wrapper">
                        <div className="input-div">
                            <label>Full Name<span className='asterisk'>*</span></label>
                            <input type="text" name="fullName" placeholder="Enter full name" value={formData.fullName} onChange={handleChange} />
                        </div>
                        <div className="input-div">
                            <label>Phone Number<span className='asterisk'>*</span></label>
                            <input type="text" name="phoneNumber" placeholder="Enter phone number" value={formData.phoneNumber} onChange={handleChange} />
                        </div>
                        <div className="input-div">
                            <label>Email Address<span className='asterisk'>*</span></label>
                            <input type="email" name="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="input-div">
                            <label>Password<span className='asterisk'>*</span></label>
                            <input type="text" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
                        </div>
                        <div className="input-div" style={{ marginBottom: "10px" }}>
                            <label>Company Name</label>
                            <input type="text" name="companyName" placeholder="Enter company name" value={formData.companyName} onChange={handleChange} />
                        </div>
                        <div className="radio-div">
                            <label>Are you an agency?<span className='asterisk'>*</span></label>
                            <div className="radio-wrap">
                                <input type="radio" id="yes" name="agency" value="yes" checked={formData.agency === "yes"} onChange={handleRadioChange} />
                                <label htmlFor="yes" style={{ fontSize: "14px" }}>Yes</label>
                                <input type="radio" id="no" name="agency" value="no" checked={formData.agency === "no"} onChange={handleRadioChange} style={{ margin: "5px 5px 5px 15px" }} />
                                <label htmlFor="no" style={{ fontSize: "14px" }}>No</label>
                            </div>
                        </div>
                        <button className="create-btn" type="button" onClick={() => navigate("/settings")}>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
