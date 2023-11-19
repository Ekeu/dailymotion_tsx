import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationProvider } from './context/notification';
import { TaskProvider } from './context/task';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <NotificationProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </NotificationProvider>
    </ApolloProvider>
  </React.StrictMode>
);
