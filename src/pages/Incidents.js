import React, { useState, useEffect } from 'react';
import IncidentCard from "../components/IncidentCard";
import CreateButton from "../components/CreateButton";

function Incidents({ orgName }) {
    const [incidents, setIncidents] = useState([]);
    const [userSessionExists, setUserSessionExists] = useState(false);

    useEffect(() => {
        const userSession = JSON.parse(sessionStorage.getItem('userSession'));
    
        if (userSession && userSession.orgName === orgName) {
            setUserSessionExists(true);
        }
    
        // fetch(`https://api.example.com/org/${orgName}/incidents`)
        //     .then((res) => res.json())
        //     .then((data) => setIncidents(data));
    
        setIncidents([
            { title: "Incident 1", head: 'head 1', description: 'description 1', status: "Open" },
            { title: "Incident 2", head: 'head 2', description: 'description 2', status: "Closed" },
        ]);
    }, [orgName]);

    return (
        <div style={{ marginTop: '10%' }}>
            {userSessionExists && <CreateButton />}
            {incidents.map((incident) => (
                <IncidentCard
                    key={incident.id}
                    title={incident.title}
                    head={incident.head}
                    description={incident.description}
                    status={incident.status}
                />
            ))}
        </div>
    );
}

export default Incidents;