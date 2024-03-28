import React, { useState } from 'react';

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
        <div style={{ marginTop: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form style={{ minWidth: '400px', width: '35%', marginBottom: '20px', border: '1px solid #ddd', boxShadow: '0px 0px 5px #151819', padding: '10px' }} className='card'>
                <div className="form-group row" style={{ marginBottom: '10px' }}>
                    <h4 style={{ textAlign: 'center' }}>Register your Organization</h4>
                </div>
                <div className="form-group row" style={{ marginBottom: '10px' }}>
                    <label for="orgName" style={{ width: '100px'}} className="col-sm-2 col-form-label">Org name</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="orgName" placeholder="example" value={orgName} onChange={e => setOrgName(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row" style={{ marginBottom: '10px' }}>
                    <label for="email" style={{ width: '100px'}} className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-9">
                        <input type="email" className="form-control" id="email" placeholder="email@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary" onClick={onHandleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;