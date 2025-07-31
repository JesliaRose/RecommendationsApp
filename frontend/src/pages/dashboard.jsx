import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from "../components/Navbar.jsx";
import "../styles/Dashboard.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];

const Dashboard = () => {
  const [activity, setActivity] = useState([]);
  const [categoryStats, setCategoryStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // This could be replaced with an API call like: await fetch('/api/user/activity')
      const response = await Promise.resolve({
        userId: "123",
        activity: [
          {
            type: "movie",
            title: "Inception",
            category: "Sci-Fi",
            watchedAt: "2025-07-28",
          },
          {
            type: "book",
            title: "1984",
            category: "Dystopian",
            watchedAt: "2025-07-27",
          },
          {
            type: "movie",
            title: "Matrix",
            category: "Sci-Fi",
            watchedAt: "2025-07-25",
          },
          {
            type: "book",
            title: "Brave New World",
            category: "Dystopian",
            watchedAt: "2025-07-24",
          },
          {
            type: "movie",
            title: "Interstellar",
            category: "Sci-Fi",
            watchedAt: "2025-07-23",
          },
          {
            type: "book",
            title: "The Alchemist",
            category: "Fiction",
            watchedAt: "2025-07-22",
          },
        ],
      });
      setActivity(response.activity);

      const stats = {};
      response.activity.forEach((item) => {
        stats[item.category] = (stats[item.category] || 0) + 1;
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
            {activity.map((item, index) => (
              <li key={index} className="history-item">
                <span>
                  {item.title} ({item.type})
                </span>
                <span className="date">{item.watchedAt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
