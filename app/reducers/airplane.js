import { REQUEST_ARRIVAL_INFO, REQUEST_DEPARTURE_INFO,
  RECEIVE_ARRIVAL_INFO, RECEIVE_DEPARTURE_INFO } from '../config/actionTypes';
const initialState = {
  arrival_data: [],
  departure_data: []
}

export default function airplane (state = initialState, action) {
	switch (action.type) {
    case RECEIVE_ARRIVAL_INFO:
      return {
        ...state,
        arrival_data: action.data
      }
    case RECEIVE_DEPARTURE_INFO:
      return {
        ...state,
        departure_data: action.data
      }
		case REQUEST_ARRIVAL_INFO:
		case REQUEST_DEPARTURE_INFO:
		default :
			return state
	}
}
