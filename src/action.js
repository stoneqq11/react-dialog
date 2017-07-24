'use strict'

export const SET_DIALOG = 'SET_DIALOG'
export function setDialog ( value ) {
	return dispatch => {
		dispatch({
			type: SET_DIALOG,
			value
		})
	}
}

export function alert (content, title, sureClick) {
	return dispatch => {
		dispatch({
			type: SET_DIALOG,
			value: {
				content,
				title,
				type: 'alert',
				sureClick: sureClick || function () {dispatch(resetDialog())}
			}
		})
	}
}

export function confirm (content, title, sureClick) {
	return dispatch => {
		dispatch({
			type: SET_DIALOG,
			value: {
				content,
				title,
				type: 'confirm',
				sureClick,
				cancelClick: function () {dispatch(resetDialog())}
			}
		})
	}
}

export const RESET_DIALOG = 'RESET_DIALOG'
export function resetDialog ( flg ) {
	return dispatch => {
		dispatch({ type: RESET_DIALOG })
	}
}