// ici on fait les fetch et on charge les composants graphiqu
import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// import {
//   getUserDetails,
//   getUserActivity,
//   getUserAverageSession,
//   // getUserPerformances,
// } 
// from "../../service/api";
import {
  getUserDetails,
  getUserActivity,
  getUserAverageSession,
  getUserPerformances,
} 
from "../../service/mock";
import "./Dashboard.scss";
import UserActivity from '../../components/Activity/UserActivity';
import UserAverageSession from '../../components/AverageSession/UserAverageSession';
import UserPerformance from '../../components/Performance/UserPerformance';
import Score from '../../components/score/Score';
import ScoreDetail from '../../components/ScoreDetail/ScoreDetail';


function Dashboard() {
   const {userID } = useParams();
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    (async () => {
      const ud = await getUserDetails(userID);
   
      // setUser(new UserDetailSanitize(userData));
      setUserDetail(ud);
    })();
  },[userID]);

  const[userActivity, setUserActivity] = useState({});
  useEffect(() => {
    (async ()=>{
    const ua = await getUserActivity(userID)
    setUserActivity(ua);
  })();
},[userID]);

const[userAverageSession, setUserAverageSession] = useState({});
useEffect(() => {
  (async ()=>{
  const uas = await getUserAverageSession(userID)
  setUserAverageSession(uas);
})();
},[userID]);


const[userPerformance, setUserPerformance] = useState({});
useEffect(() => {
  (async ()=>{
  const up = await getUserPerformances(userID)
  setUserPerformance(up);
})();
},[userID]);

  
  return (
    <div className="contain">
  
    <h1 className='user' >Bonjour {userDetail.userInfos && <span className="user__name">{userDetail.userInfos.firstName}</span>}</h1>
    <h2 className='user__txt'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    <div>
      <div className="activity">
        <UserActivity userActivity = {userActivity} />
        <div className='contain__performance'>
        <UserAverageSession userAverageSession= {userAverageSession} />
         <UserPerformance userPerformance = {userPerformance} />
         <Score userDetail = {userDetail}  />
        <ScoreDetail userDetail = {userDetail}  />
       </div>
      </div>
    </div>

    </div>
  )
}
export default Dashboard;