import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../actions'
import Header from './Header'
import Landing from './Landing'

const Dashboard = () => <div>Dashboard</div>
const SurveyNew = () => <div>SurveyNew</div>

class App extends Component {
	componentDidMount() {
		this.props.fetchUser()
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div className="container">
						<Header />
						<Route path="/surveys/new" component={SurveyNew} />
						<Route exact path="/surveys" component={Dashboard} />
						<Route exact path="/" component={Landing} />
					</div>
				</BrowserRouter>
			</div>
		)
	}
}

export default connect(null, actions)(App)
