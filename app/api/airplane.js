import { receiveArrivalInfo, receiveDepartureInfo } from '../actions/airplane';
import moment from 'moment';
import store from '../stores';
import { Airline } from '../config/api';

export function getDepartureInfo() {
  let date = moment('20160807').format("YYYY-MM-DD");;
  //let date = moment(new Date()).format("YYYY-MM-DD");;
  let url = Airline + '?queryDate='+date+'&departFrom=Kinmen';

  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      store.dispatch(receiveDepartureInfo(responseJson.data));
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getArrivalInfo() {
  let date = moment('20160807').format("YYYY-MM-DD");;
  //let date = moment(new Date()).format("YYYY-MM-DD");;
  let url = Airline + '?queryDate='+date+'&departTo=Kinmen';
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        store.dispatch(receiveArrivalInfo(responseJson.data));
    })
    .catch((error) => {
      console.error(error);
    });
}
