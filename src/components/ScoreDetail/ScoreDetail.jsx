import React from "react";
import calorie from "/src/assets/image/calories-icon.png";
import protein from "/src/assets/image/protein-icon.png";
import glucide from "/src/assets/image/glucide-icon.png";
import lipide from "/src/assets/image/lipide-icon.png";

import "./ScoreDetail.scss";

function ScoreDetail({ userDetail }) {
  const dic = {
    calorieCount: "Calories",
    proteinCount: "Protéines",
    carbohydrateCount: "Glucides",
    lipidCount: "Lipides",
  };

  // import icon

  const iconPaths = {
    calorieCount: calorie,
    proteinCount: protein,
    carbohydrateCount: glucide,
    lipidCount: lipide,
  };

  const chartData =
    userDetail && userDetail.keyData
      ? Object.keys(userDetail.keyData).map((key) => ({
          keyData: dic[key],
          value: userDetail.keyData[key],
          icon: iconPaths[key],
        }))
      : [];

  // format value
 
  const formatValue = (key, value) => {
    if (key === "Calories") {
      const formatted =  (value / 1000).toFixed(3).replace(".", ",");
      return `${formatted}kCal`;
  
    } else {
      return `${value}g`;
    }
  };


  return (
    <>
      {chartData.map((data, index) => (
        <div className="container__icon" key={index}>
          <div>
            <img className="icon" src={data.icon} alt="" />
          </div>
          <div className="data-container">
            <p className="container__info">
              {formatValue(data.keyData, data.value)}
            </p>
            <p className="container__score">{`${data.keyData}`}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ScoreDetail;
