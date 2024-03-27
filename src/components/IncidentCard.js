import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function IncidentCard({ title, head, description, status }) {
  const [incidentStatus, setStatus] = useState(status);

  const updateStatus = () => {
    // fetch(`https://api.example.com/incident/${id}/status`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ status: status === "Open" ? "Closed" : "Open" }),
    // })
    setStatus(incidentStatus === "Open" ? "Closed" : "Open");
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ minWidth: '300px', width: '40%', marginBottom: '20px', border: '1px solid #ddd', boxShadow: '0px 0px 5px #151819' }}>
        <Card.Header as="h5">{head}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button
            style={{ minWidth: '80px', minHeight: '20px', width: '20%', height: '10%' }}
            variant={ incidentStatus === "Open" ? "success" : "primary" }
            onClick={updateStatus}>
              {incidentStatus}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default IncidentCard;