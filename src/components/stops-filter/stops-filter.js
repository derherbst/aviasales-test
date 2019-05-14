import React from 'react';
import Checkboxes from "../checkboxes";
import {compose} from "../../utils";
import withTicketsService from "../hoc/with-tickets-service";
import {connect} from "react-redux";
import {filterByStops} from "../../actions";

const StopsFilter = ({className, stopsAmount, maxStops}) => {
	return (
		<div className={`${className} filter`}>
			<div className='filter__header'>Количество пересадок</div>
			<div className='filter__content'>
				<Checkboxes maxStops={maxStops} stops={stopsAmount} />
			</div>
		</div>
	)
};


// похоже можно сделать через реселект

const mapStateToProps = (state) => {
	return {
		tickets: state.tickets,
		stopsAmount: state.stopsAmount,
		maxStops: state.maxStops
	}
};

export default compose(withTicketsService(), connect(mapStateToProps, { onCurrencyChange: filterByStops }))(StopsFilter);