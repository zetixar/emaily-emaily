import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { logout } from '../actions'

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return null
			case false:
				return (
					<li>
						<a href="/auth/google">Login with Google</a>
					</li>
				)
			default:
				return (
					<li>
						<a
							onClick={event => {
								event.preventDefault()
								this.props.logout(this.props.history)
							}}
						>
							logout
						</a>
					</li>
				)
		}
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						to={this.props.auth ? '/surveys' : '/'}
						className="left brand-logo"
					>
						Emaily
					</Link>
					<ul className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		)
	}
}

function mapStateToProps({ auth }) {
	return {
		auth
	}
}
export default connect(mapStateToProps, { logout })(withRouter(Header))
