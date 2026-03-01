import { useState } from 'react'
import './App.css'

const usersData = [
  { id: 1, name: "Harshil", age: 20, city: "Surat" },
  { id: 2, name: "Krish", age: 21, city: "Ahmedabad" },
  { id: 3, name: "Aayush", age: 22, city: "Mumbai" },
  { id: 4, name: "Rahul", age: 19, city: "Delhi" },
];

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="container">
      <h1>User Directory</h1>
      <p className="subtitle">Practical 7: State and Map Function</p>

      <div className="content">
        <div className="user-list">
          <h2>Select a User</h2>
          {usersData.map((user) => (
            <button
              key={user.id}
              className={`user-btn ${selectedUser?.id === user.id ? 'active' : ''}`}
              onClick={() => setSelectedUser(user)}
            >
              {user.name}
            </button>
          ))}
        </div>

        <div className="user-details">
          <h2>User Details</h2>
          {selectedUser ? (
            <div className="card">
              <h3>{selectedUser.name}</h3>
              <p><strong>Age:</strong> {selectedUser.age}</p>
              <p><strong>City:</strong> {selectedUser.city}</p>
            </div>
          ) : (
            <p className="placeholder">Click on a user to see their details.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
