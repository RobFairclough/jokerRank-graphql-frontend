import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getIntrospectionQuery } from 'graphql';
import { gql } from 'apollo-boost';
import { getUsers } from '../graphql/queries/users';

const Users: React.FC = (props) => {
  const { loading, error, data } = useQuery(gql`${getIntrospectionQuery()}`);

  console.log({ loading, error, data });

  return <div />;
};

export default Users;
