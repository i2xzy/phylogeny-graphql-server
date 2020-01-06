export default {
  Query: {
    tree: (_, { id, depth }, { dataSources }) =>
      dataSources.treeAPI.getTree({ id, depth }),
    clade: (_, { id }, { dataSources }) => dataSources.treeAPI.getClade({ id }),
    search: (_, { value }, { dataSources }) =>
      dataSources.treeAPI.searchClade({ value }),
    users: (_, __, { dataSources }) => dataSources.userAPI.getUsers(),
    user: (_, { id }, { dataSources }) => dataSources.userAPI.getUser({ id })
  }
};
