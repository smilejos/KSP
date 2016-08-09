import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import { AilplaneHome, Arrival, Departure } from '../components/Airplane'

export default function Routes () {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Arrival" title="Airplane Arrival" component={Arrival} initial={true} />
        <Scene key="Departure" title="Airplane Departure" component={Departure} />
      </Scene>
    </Router>
  )
}
