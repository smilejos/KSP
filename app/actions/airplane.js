"use strict";
import { REQUEST_ARRIVAL_INFO, REQUEST_DEPARTURE_INFO,
	RECEIVE_ARRIVAL_INFO, RECEIVE_DEPARTURE_INFO } from '../config/actionTypes';
import * as airplane from '../api/airplane'

export function requestArrivalInfo() {
	airplane.getArrivalInfo();
	return {
    	type: REQUEST_ARRIVAL_INFO
	};
}

export function requestDepartureInfo() {
	airplane.getDepartureInfo();
	return {
    	type: REQUEST_DEPARTURE_INFO
	};
}

export function receiveArrivalInfo(data) {
	return {
    	type: RECEIVE_ARRIVAL_INFO,
			data
	};
}

export function receiveDepartureInfo(data) {
	return {
    	type: RECEIVE_DEPARTURE_INFO,
			data
	}
}
