class UserRepository {
  constructor({ dbConnection }) {
    this.dbConnection = dbConnection;
  }

  async find(query) {
    this.dbConnection.find(query);
  }
}

module.exports = UserRepository;
