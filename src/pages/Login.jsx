// src/pages/Login.jsx
import React from "react";

const Login = () => {
  const handleGoogleSignIn = () => {
    alert("Google Sign-In clicked (functionality not yet connected)");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome</h1>
        <button style={styles.googleButton} onClick={handleGoogleSignIn}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google logo"
            style={styles.googleIcon}
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#121212",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#1e1e1e",
    padding: "3rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    textAlign: "center",
  },
  title: {
    color: "white",
    marginBottom: "2rem",
  },
  googleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    color: "#444",
    fontSize: "1rem",
    padding: "0.7rem 1.5rem",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    gap: "10px",
  },
  googleIcon: {
    width: "20px",
    height: "20px",
  },
};

export default Login;
