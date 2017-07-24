'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setDialog = setDialog;
exports.alert = alert;
exports.confirm = confirm;
exports.resetDialog = resetDialog;
var SET_DIALOG = exports.SET_DIALOG = 'SET_DIALOG';
function setDialog(value) {
	return function (dispatch) {
		dispatch({
			type: SET_DIALOG,
			value: value
		});
	};
}

function alert(content, title, sureClick) {
	return function (dispatch) {
		dispatch({
			type: SET_DIALOG,
			value: {
				content: content,
				title: title,
				type: 'alert',
				sureClick: sureClick || function () {
					dispatch(resetDialog());
				}
			}
		});
	};
}

function confirm(content, title, sureClick) {
	return function (dispatch) {
		dispatch({
			type: SET_DIALOG,
			value: {
				content: content,
				title: title,
				type: 'confirm',
				sureClick: sureClick,
				cancelClick: function cancelClick() {
					dispatch(resetDialog());
				}
			}
		});
	};
}

var RESET_DIALOG = exports.RESET_DIALOG = 'RESET_DIALOG';
function resetDialog(flg) {
	return function (dispatch) {
		dispatch({ type: RESET_DIALOG });
	};
}