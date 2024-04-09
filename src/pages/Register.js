import React, { useState } from 'react';
import '../static/Register.css'; // Import the CSS file

function Register() {
    const [email, setEmail] = useState('');
    const [orgName, setOrgName] = useState('');

    const onHandleSubmit = (e) => {
        e.preventDefault();
        // fetch('https://api.example.com/org', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email, orgName }),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //     });
    }

    return (
        <div className="register-container">
            <form className="register-form">
                <h5 className="register-title">Register your Organization</h5>
                <div className="input-group">
                    <label htmlFor="orgName">Org name</label>
                    <input type="text" id="orgName" placeholder="example" value={orgName} onChange={e => setOrgName(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="email@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="submit-button" onClick={onHandleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Register;