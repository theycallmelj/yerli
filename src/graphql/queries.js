/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTestmodel = /* GraphQL */ `
  query GetTestmodel($id: ID!) {
    getTestmodel(id: $id) {
      id
      title
    }
  }
`;
export const listTestmodels = /* GraphQL */ `
  query ListTestmodels(
    $filter: TableTestmodelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestmodels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
      }
      nextToken
    }
  }
`;
