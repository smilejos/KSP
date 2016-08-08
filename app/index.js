import React from 'react'
import Routes from './config/routes'
import { Provider } from 'react-redux'
import store from './stores'

export default function App () {
	return (
		<Provider store={store}>
				<Routes />
		</Provider>
	)
}
