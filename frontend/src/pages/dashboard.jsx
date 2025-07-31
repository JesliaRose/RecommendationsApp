import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar.jsx";
import "../styles/Dashboard.css";

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#2ECC71", "#E74C3C", "#3498DB", "#8E44AD", "#27AE60", "#E67E22", "#7F8C8D", "#9ba36aff"];

const Dashboard = () => {
  const [activity, setActivity] = useState([]);
  const [categoryStats, setCategoryStats] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
      setActivity(stored);

      const stats = {};
      stored.forEach((item) => {
        const key = item.genre; 
        stats[key] = (stats[key] || 0) + 1;
      });

      const formatted = Object.entries(stats).map(([category, count]) => ({
        category,
        count,
      }));
      setCategoryStats(formatted);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: "1rem" }}>
        <h2>Dashboard</h2>
      </div>

      {/* Category Pie Chart */}
      <div className="dashboard-container">
        {/* Pie Chart */}
        <div className="chart-container">
          <h2>Most Watched Categories</h2>
          <div className="chart-box">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryStats}
                  dataKey="count"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {categoryStats.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* History */}
        <div className="history-container">
          <h2>Watch/Read History</h2>
          <ul className="history-list">
            {activity.slice().reverse().map((item, index) => (
              <li key={index} className="history-item">
                <span className="history-list-items">
                  {item.type==='movie' && <FontAwesomeIcon icon={faClapperboard} />}
                  {item.type==='tv' && <FontAwesomeIcon icon={faTv} />}
                  {item.type==='book' && <FontAwesomeIcon icon={faBook} />} 
                  {item.title} - {item.genre}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
