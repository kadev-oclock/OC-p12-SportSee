import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./Score.scss";

export default function Score({ userDetail }) {
  const todayScore = userDetail ? userDetail.todayScore : 0;
  // Multipliez todayScore par 100 pour le convertir en pourcentage
  const percentageScore = Math.round(todayScore * 100);

  const data = [{ value: percentageScore }];
  const COLORS = ["#ff0000", "#eeeeee"]; // Couleur rouge pour la barre, couleur de fond grise

  return (
    <div className="pie">
       
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          dataKey="value"
          cx="50px"
          cy="50px"
          outerRadius={87}
          innerRadius={74}
          startAngle={45}
          endAngle={250}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            cornerRadius={10}
            style={{ outline: "none" }}
            />
            ))}
        </Pie>
      </PieChart>
      <p>
        {percentageScore}%<br />
        <span>
        de votre
        <br /> objectif
        </span>
      </p>
      <h1 className="score">score</h1>
    </div>
  );
}
