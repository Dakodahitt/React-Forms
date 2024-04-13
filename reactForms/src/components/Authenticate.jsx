import React, { useState } from "react";

export default function Authenticate() {
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  async function handleAuthentication(event) {
    event.preventDefault();

    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      const result = await response.json();
      console.log(result);

      if (result.success) {
        setAuthenticated(true);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Authenticate</h2>
      {error && <p>{error}</p>}
      {authenticated ? (
        <p>You are authenticated!</p>
      ) : (
        <form onSubmit={handleAuthentication}>
          <label>
            Token:
            <input
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
          </label>
          <button type="submit">Authenticate</button>
        </form>
      )}
    </>
  );
}