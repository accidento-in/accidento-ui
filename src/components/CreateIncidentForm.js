import React, { useState } from 'react';

function CreateIncidentForm() {
    const [title, setTitle] = useState('');
    const [head, setHead] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission here
    };

    return (
        // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ minWidth: '300px', width: '40%', marginBottom: '20px', border: '1px solid #ddd', boxShadow: '0px 0px 5px #151819' }} className="card">
                <div className="card-header">
                    Create Incident
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Title:</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Head:</label>
                            <input type="text" value={head} onChange={(e) => setHead(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>
                </div>
            </div>
        // </div>
    );
}

export default CreateIncidentForm;