import React, { useEffect } from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client';
import { setContext } from '@apollo/link-context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutePage from './RoutePage';
import UserProvider from './components/auth/UserContext';
import { initWebSocket } from './websocket';


const App: React.FC = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration: ServiceWorkerRegistration) => {
          console.log('Service worker registered:', registration);
        })
        .catch(error => {
          console.error('Service worker registration failed:', error);
        });
    });
  }

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : null,
      },
    };
  });

  const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' });
  const wsLink = new WebSocketLink({
    uri: 'ws://localhost:5000/graphql',
    options: {
      reconnect: true,
    },
  });
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink
  );
  const link = authLink.concat(splitLink);

  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });
  useEffect(() => {
    initWebSocket('ws://localhost:5000/graphql');
  }, []);

  return (
        <UserProvider>
        <ApolloProvider client={client}>
        <Router>
        <RoutePage /> 
        </Router>
        </ApolloProvider>
        </UserProvider>
  );
};

export default App;