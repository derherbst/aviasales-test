import React from 'react';
import { connect } from 'react-redux';
import Currencies from '../currencies';
import withTicketsService from '../hoc/with-tickets-service';
import { compose } from "../../utils";
import { filterByCurrency } from '../../actions';
import { createSelector } from 'reselect';

import './index.scss';

const Filter = (props) => {

	const { className, currency, onCurrencyChange } = props;

	return(
		<div className={`${className} filter`}>
			<div className="filter__header">Валюта</div>
			<div className="filter__content">
				<Currencies currency={currency} onCurrencyChange={onCurrencyChange} />
			</div>
		</div>
	)
};

// кажется, диспатч тут не нужен. нужно в селекторе написать то что сейчас у меня в функции которая над редюсером.

const mapStateToProps = (state) => {
	return {
		currency: state.currency
	}
};

// вместо того чтобы писать mapStateToProps можно уже в самомконнекте написать объект,
// где ключом будет метод а значением функция которая диспачится. обычно аргументы одни и теже поэтому они не нужны
export default compose(withTicketsService(), connect(mapStateToProps, { onCurrencyChange: filterByCurrency }))(Filter);