export class UserActivitySanitize {
  constructor(data) {
    this.userId = (data && data.userId) || 0;
    this.sessions = (data && data.sessions) || [];
    this.sessions = this.sessions.map((session) => ({
      day: session.day || 0,
      kilogram: session.kilogram || 0,
      calories: session.calories || 0,
    }));
  }
}
