import { useEffect, useState  } from "react";
import IncidentCard from "../components/IncidentCard";

function Incidents({ orgName }) {
    const [incidents, setIncidents] = useState([]);
    useEffect(() => {
        // fetch(`https://api.example.com/org/${orgName}/incidents`)
        //     .then((res) => res.json())
        //     .then((data) => setIncidents(data));

        setIncidents([
            { title: "Incident 1", head: 'head 1', description: 'description 1', status: "Open" },
            { title: "Incident 2", head: 'head 2', description: 'description 2', status: "Closed" },
        ]);
    } , []);

    return (
        <div style={{ marginTop: '10%' }}>
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
