'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('./index.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _iscroll = require('iscroll');

var _iscroll2 = _interopRequireDefault(_iscroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
props: data={
	title: {?string},
	content: {?string},
	btns: {?[{text: string, click: fn}]},
	type: {?'alert'|'confirm'},
	sureClick: {?fn},
	cancelClick: {?fn},
	show: {?boolean},
	align: {?'left'|'center'}
}
suggest use immutable data
*/
var Dialog = function (_Component) {
	(0, _inherits3.default)(Dialog, _Component);

	function Dialog() {
		(0, _classCallCheck3.default)(this, Dialog);
		return (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).apply(this, arguments));
	}

	(0, _createClass3.default)(Dialog, [{
		key: 'render',
		value: function render() {

			var footContent = [],
			    data = this.props.data.toJS ? this.props.data.toJS() : this.props.data,
			    type = data.type;

			if (!data.show) {
				return null;
			}

			(data.btns || []).forEach(function (b, i) {
				footContent.push(_react2.default.createElement(
					'div',
					{ key: 'dialog-btn-' + i, className: 'btn-wrap', onClick: b.click },
					b.text
				));
			});

			if (!footContent.length) {
				if (type.match(/alert/i)) {
					footContent.push(this.getAlertBtn(data.sureClick));
				} else if (type.match(/confirm/i)) {
					footContent = this.getConfirmBtns(data.sureClick, data.cancelClick);
				}
			}

			return _react2.default.createElement(
				'div',
				{ className: 'dialog-wrap', ref: 'dialogWrap' },
				_react2.default.createElement(
					'div',
					{ className: 'content-wrap', ref: 'contentWrap' },
					data.title ? _react2.default.createElement(
						'div',
						{ className: 'header' },
						_react2.default.createElement(
							'h4',
							null,
							data.title
						)
					) : null,
					_react2.default.createElement(
						'div',
						{ className: 'content', ref: 'dialogContent' },
						_react2.default.createElement('div', { className: 'content-trans', style: { textAlign: data.align || 'left' },
							dangerouslySetInnerHTML: { __html: data.content } })
					),
					_react2.default.createElement(
						'div',
						{ className: 'footer' },
						footContent
					)
				)
			);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (this.props.data.get('show') || this.props.data.show) {
				this.scroller = new _iscroll2.default('.dialog-wrap .content');
				this.refs.dialogWrap.addEventListener('touchmove', function (e) {
					e.preventDefault();
				}, false);
			}
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			return this.props.data !== nextProps.data;
		}
	}, {
		key: 'getAlertBtn',
		value: function getAlertBtn(sure) {
			return _react2.default.createElement(
				'div',
				{ key: 'dialog-btn-sure', className: 'btn-wrap', onClick: sure },
				'\u786E\u5B9A'
			);
		}
	}, {
		key: 'getConfirmBtns',
		value: function getConfirmBtns(sure, cancel) {
			return [_react2.default.createElement(
				'div',
				{ key: 'dialog-btn-cancel', className: 'btn-wrap', onClick: cancel },
				'\u53D6\u6D88'
			), _react2.default.createElement(
				'div',
				{ key: 'dialog-btn-sure', className: 'btn-wrap', onClick: sure },
				'\u786E\u5B9A'
			)];
		}
	}]);
	return Dialog;
}(_react.Component);

exports.default = Dialog;