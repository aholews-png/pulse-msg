import React from 'react';
import './CallsPage.css';

function CallsPage() {
  const [calls, setCalls] = React.useState([]);

  return (
    <div className="calls-page">
      <div className="calls-header">
        <h2>Звонки</h2>
      </div>
      <div className="calls-list">
        {calls.length === 0 ? (
          <div className="empty-state">Нет записей звонков</div>
        ) : (
          calls.map((call) => (
            <div key={call.id} className="call-item">
              <div className="call-avatar">{call.name[0]}</div>
              <div className="call-info">
                <div className="call-name">{call.name}</div>
                <div className="call-time">{call.time}</div>
              </div>
              <div className="call-duration">{call.duration}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CallsPage;
