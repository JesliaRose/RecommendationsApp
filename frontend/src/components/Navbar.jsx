import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faU, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.username || "Guest";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav
      style={{
        background: "#A06CD5",
        padding: "1rem 0.05rem",
        color: "white",
        position: "fixed", // Stick to top
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000, // Stay above other content
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/interests"
              style={{ color: "white", textDecoration: "none" }}
            >
              Recommendations
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              style={{ color: "white", textDecoration: "none" }}
            >
              Dashboard
            </Link>
          </li>
        </ul>
        <div
          className="profile-data"
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
          <Link to="/profile">
            <div
              style={{
                width: "auto",
                height: "35px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center"
              }}
            >
              <FontAwesomeIcon
                icon={faUser}
                size="xl"
                style={{ color: "#ffffff" }}
              />
              <p style={{color: "white"}}>{username}</p>
            </div>
          </Link>
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
