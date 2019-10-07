import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import logo from './logo.svg';
import './App.css';
import client from './graphql/apollo';
import Users from './pages/Users';


const App: React.FC = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Users />
        <p>
          Edit
          {' '}
          <code>
          src/App.ts
          </code>
and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </ApolloProvider>
);

export default App;
