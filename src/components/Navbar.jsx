import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ 
      background: '#A06CD5', 
      padding: '1rem 0.05rem',
      color: "white",
      position: 'fixed',   // Stick to top
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000         // Stay above other content
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%' 
      }}>
        <ul style={{ 
          display: 'flex', 
          gap: '1rem', 
          listStyle: 'none', 
          margin: 0, 
          padding: 0 
        }}>
            <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/interests" style={{ color: 'white', textDecoration: 'none' }}>Recommendations</Link></li>
            <li><Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>

        </ul>

        <div 
          style={{ 
            width: '35px', 
            height: '35px', 
            borderRadius: '50%', 
            backgroundColor: '#888',
          }}
        ></div>
      </div>
    </nav>
  )
}
