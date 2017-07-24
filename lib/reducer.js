'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _action = require('./action');

var actions = _interopRequireWildcard(_action);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INIT_DATA = _immutable2.default.fromJS({
	title: '',
	content: '',
	type: '',
	btns: [],
	sureClick: null,
	cancelClick: null,
	show: false
});

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_DATA;
	var action = arguments[1];


	switch (action.type) {

		case actions.SET_DIALOG:
			return INIT_DATA.merge(action.value).set('show', true);

		case actions.RESET_DIALOG:
			return INIT_DATA;

		default:
			return state;
	}
};