import React, { Component } from 'react'
import { connect } from 'react-redux'
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
						<a onClick={this.props.logout}>logout</a>
					</li>
				)
		}
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo">Emaily</a>
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
export default connect(mapStateToProps, { logout })(Header)
