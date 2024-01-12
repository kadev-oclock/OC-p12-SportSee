export class UserPerformancesSanitize {
  constructor(data) {
    this.userId = (data && data.userId) || 0;
    this.kind = (data && data.kind) || {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    };
    this.data = (data && data.data) || [];
    this.data = this.data.map((performance) => ({
      value: performance.value || 0,
      kind: performance.kind || 0,
    }));
  }
}
