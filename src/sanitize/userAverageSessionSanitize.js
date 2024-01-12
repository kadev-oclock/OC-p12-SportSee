export class UserAverageSessionSanitize {
  constructor(data) {
    this.userId = (data && data.userId) || 0;
    this.sessions = (data && data.sessions) || [];
    this.sessions = this.sessions.map((session) => ({
      day: session.day || 0,
      sessionLength: session.sessionLength || 0,
    }));
  }
}
