import React from 'react';
import Checkboxes from "../checkboxes";
import {compose} from "../../utils";
import withTicketsService from "../hoc/with-tickets-service";
import {connect} from "react-redux";
import {filterByStops, ticketsLoaded} from "../../actions";

const StopsFilter = ({className, stopsAmount, maxStops, onStopsChange}) => {
	return (
		<div className={`${className} filter`}>
			<div className='filter__header'>Количество пересадок</div>
			<div className='filter__content'>
				<Checkboxes maxStops={maxStops} stops={stopsAmount} onStopsChange={onStopsChange}/>
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

const mapDispatchToProps = (dispatch) => {
	return {
		onStopsChange: (stops, el) => {
			dispatch(filterByStops(stops, el))
		}
	}
};

export default compose(withTicketsService(), connect(mapStateToProps, mapDispatchToProps))(StopsFilter);