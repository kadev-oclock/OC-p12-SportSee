import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./Score.scss";

export default function Score({ userDetail }) {
  const todayScore = userDetail ? userDetail.todayScore : 0;
  // Multiplie todayScore par 100 pour le convertir en pourcentage
  const percentageScore = Math.round(todayScore * 100);

  const data = [{ value: percentageScore }, {value: 100 - percentageScore}];
  

  const COLORS = ["#ff0000", "#eeeeee"]; // Couleur rouge pour la barre, couleur de fond grise

  return (
    <div className="pie">
       
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={100}
          startAngle={90}
          // endAngle={250}
          fill="#8884d8"
        >
         < Pie
            data={[{value: 100 - percentageScore}]}
            dataKey={'value'}
            cx='50%'
            cy='50%'
            innerRadius={0}
            outerRadius={90}
            fill='white'
            // isAnimationActive={false}
          />
          {data.map((entry, index) => (
            <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            style={{ outline: "none" }}
            cornerRadius={10}
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