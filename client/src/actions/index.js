import axios from 'axios'
import { FETCH_USER, LOGOUT } from './types'

// async await syntax
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user')

	dispatch({ type: FETCH_USER, payload: res.data })
}

/* // normal promise
export const fetchUser = () => async dispatch => {
	return function(dispatch) {
		axios
			.get('/api/current_user')
			.then(res => dispatch({ type: FETCH_USER, payload: res.data }))
	}
}
*/

export const logout = event => {
	event.preventDefault()
	return function(dispatch) {
		axios.get('/auth/logout').then(dispatch({ type: LOGOUT }))
	}
}
