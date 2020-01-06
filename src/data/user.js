import { RESTDataSource } from 'apollo-datasource-rest';

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://user.phylogenyexplorerproject.com/';
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getUsers() {
    const response = await this.get('users', {});
    return response.map(user => this.userReducer(user));
  }

  async getUser({ id }) {
    // mongoose ObjectId
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      const response = await this.get(`users/${id}`);
      if (response) {
        return this.userReducer(response);
      }
    }
  }

  userReducer(user) {
    return {
      ...user,
      id: user._id
    };
  }
}

export default UserAPI;
