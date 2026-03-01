import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <h1 className="header-title">User Information</h1>

      <div className="cards-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          users.map((user) => (
            <div className="card" key={user.id}>
              <div className="card-content">
                <img
                  // Using an avatar service that gives consistent unique images based on ID
                  src={`https://i.pravatar.cc/150?u=${user.id}`}
                  alt={user.name}
                  className="profile-image"
                />
                <div className="user-details">
                  <h2 className="user-name">{user.name}</h2>
                  <div className="divider"></div>
                  <p className="user-info">Age: {20 + user.id}</p>
                  <p className="user-info">City: {user.address.city}</p>
                </div>
              </div>

              <div className="card-action">
                <button className="view-profile-btn">View Profile</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
