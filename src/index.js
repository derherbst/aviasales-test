import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './components/app';
import TicketsService from './services/ticketsService';
import { TicketsServiceProvider } from './components/tickets-service-context';
import './styles/index.scss';

import store from './store';

const ticketsService = new TicketsService();

ReactDOM.render(
	<Provider store={store}>
		<TicketsServiceProvider value={ticketsService}>
			<App />
		</TicketsServiceProvider>
	</Provider>
	,document.getElementById('root')
);