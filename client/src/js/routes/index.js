import React from 'react'
import { Route, Switch } from 'react-router'

import Homepage from './Homepage'

import Header from '../components/Header'

const routes = (
	<main>
		<Switch>
			<Route exact path={"/"} component={Homepage}/>
		</Switch>
		<Header/>
	</main>
)


export default routes
