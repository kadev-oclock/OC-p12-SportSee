/* eslint-disable no-console */
// ici on fait les fetch et on charge les composants graphiqu
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  getUserDetails,
  getUserActivity,
  getUserAverageSession,
  getUserPerformances,
} from "../../service/api";
// import {
//   getUserDetails,
//   getUserActivity,
//   getUserAverageSession,
//   getUserPerformances,
// }
// from "../../service/mock";
import "./Dashboard.scss";
import UserActivity from "../../components/Activity/UserActivity";
import UserAverageSession from "../../components/AverageSession/UserAverageSession";
import UserPerformance from "../../components/Performance/userPerformance";
import Score from "../../components/score/Score";
import ScoreDetail from "../../components/ScoreDetail/ScoreDetail";
import { UserDetailSanitize } from "../../sanitize/userDetailSanitize";
import { UserActivitySanitize } from "../../sanitize/userActivitySanitize";
import { UserAverageSessionSanitize } from "../../sanitize/userAverageSessionSanitize";
import { UserPerformancesSanitize } from "../../sanitize/userPerformancesSanitize";

function Dashboard() {
  const { userID } = useParams();
  const [userDetail, setUserDetail] = useState(new UserDetailSanitize({}));
  useEffect(() => {
    (async () => {
      try {
        const ud = await getUserDetails(userID);

        // setUser(new UserDetailSanitize(userData));
        setUserDetail(new UserDetailSanitize(ud));
      } catch (err) {
        alert(err);
      }
    })();
  }, [userID]);

  const [userActivity, setUserActivity] = useState(
    new UserActivitySanitize({})
  );
  useEffect(() => {
    (async () => {
      try {
        const ua = await getUserActivity(userID);
        setUserActivity(new UserActivitySanitize(ua));
      } catch (err) {
        console.error(err);
      }
    })();
  }, [userID]);

  const [userAverageSession, setUserAverageSession] = useState(
    new UserAverageSessionSanitize({})
  );
  useEffect(() => {
    (async () => {
      try {
        const uas = await getUserAverageSession(userID);
        setUserAverageSession(new UserAverageSessionSanitize(uas));
      } catch (err) {
        console.error(err);
      }
    })();
  }, [userID]);

  const [userPerformance, setUserPerformance] = useState(
    new UserPerformancesSanitize({})
  );
  useEffect(() => {
    (async () => {
      try {
        const up = await getUserPerformances(userID);
        setUserPerformance(new UserPerformancesSanitize(up));
      } catch (err) {
        console.error(err);
      }
    })();
  }, [userID]);

  return (
    <div className="containDash">
      <div className="userInfo">
        <h1 className="user">
          Bonjour{" "}
          {userDetail.userInfos && (
            <span className="user__name">{userDetail.userInfos.firstName}</span>
          )}
        </h1>
        <h2 className="user__txt">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </h2>
      </div>
      <div className="activity">
        <UserActivity userActivity={userActivity} />
      </div>
      <div className="contain__performance">
        <UserAverageSession userAverageSession={userAverageSession} />
        <UserPerformance userPerformance={userPerformance} />
        <Score userDetail={userDetail} />
      </div>
      <div className="scoreDetail">
        <ScoreDetail userDetail={userDetail} />
      </div>
    </div>
  );
}
export default Dashboard;
