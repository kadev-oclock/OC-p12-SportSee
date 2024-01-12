export class UserDetailSanitize {
  constructor(data) {
    this.userId = data && data.userId ? data.userId : 0;
    this.objectif = data && data.objectif ? data.objectif : 0;
    this.userInfos = {}
    this.userInfos.firstName = data && data.userInfos && data.userInfos.firstName ? data.userInfos.firstName : "beber";
    this.userInfos.lastName = data && data.userInfos && data.userInfos.lastName ? data.userInfos.lastName : "test",
    this.userInfos.age= data && data.userInfos && data.userInfos.age ? data.userInfos.age: 0,
    this.todayScore = data && data.todayScore ? data.todayScore : data.score ? data.score:0;

    this.keyData = {}
    this.keyData.calorieCount= data && data.keyData && data.keyData.calorieCount?data.keyData.calorieCount:0
    this.keyData.proteinCount= data && data.keyData && data.keyData.proteinCount?data.keyData.proteinCount:0
    this.keyData.carbohydrateCount= data && data.keyData && data.keyData.carbohydrateCount?data.keyData.carbohydrateCount:0
    this.keyData.lipidCount= data && data.keyData && data.keyData.lipidCount?data.keyData.lipidCount:0

  }
}





