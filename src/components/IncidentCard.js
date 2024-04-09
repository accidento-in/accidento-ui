import { useState } from 'react';

function IncidentCard({ title, head, description, status, time }) {
  const [incidentStatus, setStatus] = useState(status);

  const updateStatus = () => {
    setStatus(incidentStatus === "Open" ? "Closed" : "Open");
  }

  const localDateTime = () => {
    const incidentDate = new Date(time);
    return incidentDate.toLocaleString();
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
          class={ incidentStatus === "Open" ? "btn btn-success" : "btn btn-secondary" }
          onClick={updateStatus}>
            {incidentStatus}
        </button>
      </div>
      <div class="card-footer text-muted">
        {localDateTime()}
      </div>
    </div>
    </div>
  );
}

export default IncidentCard;