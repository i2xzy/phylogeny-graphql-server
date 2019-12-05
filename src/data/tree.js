import { RESTDataSource } from 'apollo-datasource-rest';

class TreeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://tree.phylogenyexplorerproject.com/clades/';
  }

  async getTree({ id, depth }) {
    const response = await this.get(
      `tree/${id ? `${id}` : ''}/${depth ? `depth/${depth}` : ''}`
    );
    return this.treeReducer(response);
  }

  async getClade({ id }) {
    const response = await this.get(id);
    return this.cladeReducer(response);
  }

  treeReducer(tree) {
    return {
      ...tree,
      root: this.cladeReducer(tree.root)
    };
  }

  cladeReducer(clade) {
    return {
      ...clade,
      id: clade._id,
      parent: this.parentReducer(clade.parent),
      children:
        clade.children && clade.children.map(child => this.cladeReducer(child))
    };
  }

  parentReducer(parent) {
    if (!parent) return null;
    return parent._id ? this.cladeReducer(parent) : { id: parent };
  }
}

export default TreeAPI;
