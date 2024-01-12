/* eslint-disable no-console */
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import "./UserAverageSession.scss";

function UserAverageSession({ userAverageSession }) {
  const dic = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };
  const chartData =
    userAverageSession && userAverageSession.sessions
      ? userAverageSession.sessions.map((session) => ({
          day: dic[session.day],
          sessionLength: session.sessionLength,
        }))
      : [];

  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div
          style={{
            background: "#FFF",
            border: 0,
            padding: "5px",
            width: "70px",
            height: "50px",
          }}
        >
          <p style={{ color: "#000" }}>{data.sessionLength} min</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="average">
      <h2 className="legend">Durée moyenne des sessions</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={250}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {/* Couleur de fond pour les week-ends */}
          <ReferenceArea
            stroke="white"
            strokeWidth={4}
            isFront={false}
            ifOverflow="hidden"
            x1={"S"}
            x2={"D"}
            fill="#c32121"
          />
          <XAxis dataKey="day" stroke="#FFF" axisLine={false} />
          <YAxis stroke="#FFF" hide={true} />
          <Tooltip width="200px" content={customTooltip} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFF"
            strokeWidth="2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default UserAverageSession;
