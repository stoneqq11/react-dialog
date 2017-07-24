'use strict'

import './index.css'

import React, { Component } from 'react'
import iScroll from 'iscroll'


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
export default class Dialog extends Component {

	render () {

		let footContent = [],
			data = this.props.data.toJS ? this.props.data.toJS() : this.props.data,
			type = data.type

		if (!data.show) {
			return null
		}

		(data.btns || []).forEach((b, i) => {
			footContent.push(
				<div key={'dialog-btn-' + i} className='btn-wrap' onClick={b.click}>{b.text}</div>)
		})

		if (!footContent.length) {
			if (type.match(/alert/i)) {
				footContent.push(this.getAlertBtn(data.sureClick))
			} else if (type.match(/confirm/i)) {
				footContent = this.getConfirmBtns(data.sureClick, data.cancelClick)
			}
		}

		return (
			<div className='dialog-wrap' ref='dialogWrap'>
				<div className='content-wrap' ref='contentWrap'>
					{
						data.title ? <div className='header'><h4>{data.title}</h4></div> : null
					}
					<div className='content' ref='dialogContent'>
						<div className='content-trans' style={{ textAlign: data.align || 'left' }}
							 dangerouslySetInnerHTML={{__html: data.content}}></div>
					</div>
					<div className='footer'>{footContent}</div>
				</div>
			</div>
		)
	}

	componentDidUpdate () {
		if (this.props.data.get('show') || this.props.data.show) {
			this.scroller = new iScroll('.dialog-wrap .content')
			this.refs.dialogWrap.addEventListener('touchmove', e => {
				e.preventDefault()
			}, false)
		}
	}

	shouldComponentUpdate (nextProps) {
		return this.props.data !== nextProps.data
	}

	getAlertBtn (sure) {
		return <div key='dialog-btn-sure' className='btn-wrap' onClick={sure}>确定</div>
	}

	getConfirmBtns (sure, cancel) {
		return [
			<div key='dialog-btn-cancel' className='btn-wrap' onClick={cancel}>取消</div>,
			<div key='dialog-btn-sure' className='btn-wrap' onClick={sure}>确定</div>
		]
	}
}