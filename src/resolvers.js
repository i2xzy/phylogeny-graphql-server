export default {
  Query: {
    tree: (_, { id, depth }, { dataSources }) =>
      dataSources.treeAPI.getTree({ id, depth }),
    clade: (_, { id }, { dataSources }) => dataSources.treeAPI.getClade({ id })
  }
};
