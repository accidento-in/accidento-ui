import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateIncidentForm from "../components/CreateIncidentForm";

function CreateIncident() {
    const [userSessionExists, setUserSessionExists] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userSession = JSON.parse(sessionStorage.getItem('userSession'));
    
        if (!userSession) {
            setUserSessionExists(true);
        } else {
            navigate('/');
        }
    }, [navigate]);

    return userSessionExists && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CreateIncidentForm />
        </div>
    );
}

export default CreateIncident;