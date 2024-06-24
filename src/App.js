import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [names, setNames] = useState([]);
  const [searchId, setSearctId] = useState([]);
  const [name, setName] = useState([]);
  const [error, setError] = useState([]);

  // 全件検索
  useEffect(() => {
    fetch("http://localhost:80/api/customers")
      .then((res) => res.json())
      .then((json) => setNames(json))
      .catch((error) => setError("エラーです"));
  }, []);

  // ID検索
  const handleSearchId = async () => {
    await fetch(`http://localhost:80/api/customers/${searchId}`)
      .then((res) => res.json())
      .then((json) => setName(json))
      .catch((error) => {
        setError("Customer no found");
        setName(null);
      }
      );
  };

  return (
    <div className="App">
      <h1>Customer Search</h1>
      <div>
        {error && <p>{error}</p>}
        <ul>
          {names.map(name => (
            <li key={name.id}>{name.title}</li>
          ))}
        </ul>
      </div>
      <h2>Search Customer by ID</h2>
      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearctId(e.target.value)}
        placeholder="Enter customer ID"
      />
      <button onClick={handleSearchId}>ID検索</button>
      {name && (
        <div>
          <h3>Customer Details</h3>
          <p>ID: {name.id}</p>
          <p>Title: {name.title}</p>
        </div>
      )}
    </div>
  );
}

export default App;
