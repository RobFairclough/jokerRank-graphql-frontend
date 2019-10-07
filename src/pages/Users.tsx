import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getUsers } from '../graphql/queries/users';

const Users: React.FC = (props) => {
  const { loading, error, data } = useQuery(getUsers);

  console.log({ loading, error, data });

  return <div />;
};

export default Users;
