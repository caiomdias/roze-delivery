import { ApolloClient, InMemoryCache, gql} from '@apollo/client';

const { ZE_BASE_URL }  = process.env;

export const clientApollo = (BASE_URL = ZE_BASE_URL) =>
  new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache()
  });

export const createQuery = (queryString) => 
  gql`${queryString}`

export default {
  clientApollo,
  createQuery
};
