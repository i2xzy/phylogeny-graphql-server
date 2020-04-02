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

  async createUser({ data }) {
    try {
      const response = await this.post('users', data);
      return { success: !!response };
    } catch (e) {
      console.warn(e);
      return e;
    }
  }

  async updateUser({ id, data }) {
    const response = await this.put(`users/${id}`, data);
    if (response) return { success: true };
  }

  async destroyUser({ id }) {
    const response = await this.put(`users/${id}`);
    console.log(response);
  }

  userReducer(user) {
    return {
      ...user,
      id: user._id,
      role: { ...user.role, id: user.role._id }
    };
  }
}

export default UserAPI;
