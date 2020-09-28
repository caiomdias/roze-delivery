import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Routes from './components/Routes';
import { clientApollo } from './services/Apollo';

const App = () => (
	<ApolloProvider client={clientApollo}>
		<Routes />
	</ApolloProvider>
);

export default App;
