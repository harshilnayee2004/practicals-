import React, { useState } from "react";

function App() {

  const [movies, setMovies] = useState([
    "Inception",
    "The Dark Knight",
    "Interstellar",
  ]);


  const [newMovie, setNewMovie] = useState("");


  const addMovie = () => {
    if (newMovie !== "") {
      setMovies([...movies, newMovie]);
      setNewMovie("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>My Favorite Movies</h2>


      <input
        type="text"
        placeholder="Enter movie name..."
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />


      <button onClick={addMovie} style={{ padding: "5px 10px" }}>
        Add Movie
      </button>

      <br />
      <br />


      <ul style={{ paddingLeft: "20px" }}>
        {movies.map((movie, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {movie}
            <button style={{ marginLeft: "15px", color: "red" }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
