'use strict'

import Immutable from 'immutable'
import * as actions from './action'

const INIT_DATA = Immutable.fromJS({
	title: '',
	content: '',
	type: '',
	btns: [],
	sureClick: null,
	cancelClick: null,
	show: false
})

export default (state = INIT_DATA, action) => {

	switch (action.type) {

		case actions.SET_DIALOG:
			return INIT_DATA.merge(action.value).set('show', true)

		case actions.RESET_DIALOG:
			return INIT_DATA

		default:
			return state
	}
}