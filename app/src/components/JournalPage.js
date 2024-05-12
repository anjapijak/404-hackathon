import React from 'react';
import './../components-css/JournalPage.css';

function JournalPage({ date, note, activities }) {
  function formatDate (dateString) {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  return (
    <div className="col-md-12 mb-4" id="a-page">
      <div className="diary-page p-3 rounded shadow">
        <p className="entry-date" style={{fontSize: '1.2vw'}}>
          
          <strong>Date:</strong> {formatDate(date)}
        </p>
        <p className="entry-content" style={{fontSize: '1.2vw'}}>{note}</p>
        <div className="entry-activities" style={{fontSize: '1.2vw'}}>
          <strong>Activities:</strong>
          <ul className="activity-list" style={{fontSize: '1.2vw'}} >
            {activities && Array.isArray(activities) ? (
              activities.map((activity, idx) => (
                <li key={idx}>
                  <strong>{activity.name}</strong> - {activity.category} | Rating: {activity.rating} | Budget: {activity.maxSpend} €
                </li>
              ))
            ) : (
              <li>No activities available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JournalPage;
