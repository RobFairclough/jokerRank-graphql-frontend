import ApolloClient from 'apollo-boost';
import { API_URL } from '../config/index';

const client = new ApolloClient({
  uri: API_URL,
});

export default client;
