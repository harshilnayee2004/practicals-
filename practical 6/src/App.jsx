import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="app-container">
      <h1>Student Profiles</h1>

      <div className="profiles-grid">
        <UserProfile
          name="Harshil"
          age={21}
          profilePicture="https://via.placeholder.com/150/0000FF/808080 ?Text=Harshil"
          backgroundColor="#e6f2ff"
        />

        <UserProfile
          name="Krish"
          age={20}
          profilePicture={null} // Uses default fallback
          backgroundColor="#e6ffe6"
        />

        <UserProfile
          name="Aayush"
          age={22}
          profilePicture="https://via.placeholder.com/150/FF0000/FFFFFF ?Text=Aayush"
          backgroundColor="#ffe6e6"
        />
      </div>
    </div>
  );
}

export default App;
