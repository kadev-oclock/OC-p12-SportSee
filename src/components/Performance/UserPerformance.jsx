import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "./UserPerformance.scss";

function UserPerformance({ userPerformance }) {
  const dic = {
    1: "cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };
  const chartData =
    userPerformance && userPerformance.data
      ? userPerformance.data.map((data) => ({
          kind: dic[data.kind],
          value: data.value,
        }))
      : [];

  // Définir l'ordre des catégories sur l'axe
  const inverseDic = Object.keys(dic).map(function (key) {
    return dic[key];
  });

  // console.log(inverseDic);

  const dicInverse = inverseDic.reverse();

  // console.log(dicInverse);

  return (
    <div className="perf">
      <ResponsiveContainer width="326" height={380}>
        <div className="contain">
          <RadarChart
            height={300}
            width={285}
            outerRadius="80%"
            data={chartData}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              domain={dicInverse}
              tick={{ fill: "white" }}
            />
            <PolarRadiusAxis axisLine={false} tick={false} />
            <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.5} />
          </RadarChart>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
export default UserPerformance;
