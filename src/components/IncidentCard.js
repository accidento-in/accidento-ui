import { useState } from 'react';

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
    <div style={{ minWidth: '300px', width: '40%', marginBottom: '20px', border: '1px solid #ddd', boxShadow: '0px 0px 5px #151819' }} class="card">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button
          style={{ minWidth: '80px', minHeight: '20px', width: '20%', height: '10%' }}
          class={ incidentStatus === "Open" ? "btn btn-success" : "btn btn-primary" }
          onClick={updateStatus}>
            {incidentStatus}
        </button>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>
    </div>
  );
}

export default IncidentCard;