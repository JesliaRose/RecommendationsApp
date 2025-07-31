import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from './components/Navbar'; 


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
          { type: "movie", title: "Inception", category: "Sci-Fi", watchedAt: "2025-07-28" },
          { type: "book", title: "1984", category: "Dystopian", watchedAt: "2025-07-27" },
          { type: "movie", title: "Matrix", category: "Sci-Fi", watchedAt: "2025-07-25" },
          { type: "book", title: "Brave New World", category: "Dystopian", watchedAt: "2025-07-24" },
          { type: "movie", title: "Interstellar", category: "Sci-Fi", watchedAt: "2025-07-23" },
          { type: "book", title: "The Alchemist", category: "Fiction", watchedAt: "2025-07-22" },
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
    <Navbar/>
    <div style={{ padding: "1rem" }}>
      <h1>Dashboard</h1>
      </div>
  
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Dashboard</h1>

      {/* Category Pie Chart */}
      <div className="w-full h-72 mb-6">
        <h2 className="text-xl font-semibold mb-2">Most Watched Categories</h2>
        <ResponsiveContainer>
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
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* History Timeline */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Watch/Read History</h2>
        <ul className="space-y-2">
          {activity.map((item, index) => (
            <li
              key={index}
              className="bg-gray-100 p-3 rounded-md shadow-sm flex justify-between"
            >
              <span>{item.title} ({item.type})</span>
              <span className="text-sm text-gray-600">{item.watchedAt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
