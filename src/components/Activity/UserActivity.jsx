import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./UserActivity.scss";

function UserActivity({ userActivity }) {
  const chartData = userActivity && userActivity.sessions
    ? userActivity.sessions.map((session) => ({
        day: new Date(session.day).getDate(),
        kilograms: session.kilogram,
        calories: session.calories,
      }))
    : [];
    

  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div
          style={{
            background: "#db0303",
            border: 0,
            padding: "10px",
            width: "70px",
            height: "100px",
          }}
        >
          <p style={{ color: "#fff" }}>{data.kilograms} kg</p>
          <p style={{ color: "#fff" }}>{data.calories} Kcal</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <h2 className="legend">Activité quotidienne</h2>
      {chartData.length > 0 && (
        <ResponsiveContainer  height={300}>
          <BarChart barGap={8} data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="4 4" />
            <XAxis dataKey="day" />
            <YAxis dataKey="calories" type="number" orientation="right" />
            <Tooltip width="200px" content={customTooltip} />
            <Legend verticalAlign="top" height={36} />
            <Bar
              top={20}
              dataKey="kilograms"
              barSize={7}
              fill="#282D30"
              radius={[50, 50, 0, 0]}
            />
            <Bar
              dataKey="calories"
              barSize={7}
              fill="#E60000"
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
      {chartData.length === 0 && <p>No user activity data available.</p>}
    </div>
  );
}
export default UserActivity;
