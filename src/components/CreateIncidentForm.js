import React, { useState } from 'react';
import '../static/CreateIncidentForm.css';

function CreateIncidentForm() {
    const [title, setTitle] = useState('');
    const [head, setHead] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission here
    };

    return (
        <div className="create-incident-form">
            <h3>Create Incident</h3>
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
    );
}

export default CreateIncidentForm;