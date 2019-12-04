import { RESTDataSource } from 'apollo-datasource-rest';

class TreeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://tree.phylogenyexplorerproject.com/clades/';
  }

  async getTree(id, depth) {
    return this.get(
      `tree/${id ? `${id}` : ''}/${depth ? `depth/${depth}` : ''}`
    );
  }

  async getClade(id) {
    return this.get(`${id}`);
  }
}

export default TreeAPI;
