<h2>INSTALL</h2>
	npm install @dreamland/react-dialog --save

<h2>USEAGE</h2>
	import Dialog from '@dreamland/react-dialog'

	<Dialog data={{
		title: '',
		content: 'Alert',
		type: 'alert',
		sureClick: () => {}
		}} />

<h2>USE WITH REDUX</h2>
	// action
	import * as dialogActions from '@dreamland/react-dialog/lib/action'

	// reducer
	import dialogData from '@dreamland/react-dialog/lib/reducer'

	import Dialog from '@dreamland/react-dialog'
	import Immutable from 'immutable'

	<Dialog data={dialogData} />

	dispatch(dialogActions.alert('Alert'))

<h2>PARAMS</h2>
<code>
    @param title {?string} 标题，为空不显示标题区域，也可以在content中自己实现
</code>
<br/>
<code>
    @param content {!string} 提示内容，可以是html串
</code>
<br/>
<code>
    @param type {?'alert'|'confirm'} 在btns为空时判断type值来自动填充按钮
</code>
<br/>
<code>
    @param btns {?[{text: string, click: fn}]} 自定义的按钮
</code>
<br/>
<code>
    @param sureClick {?fn} 确定按钮回调
</code>
<br/>
<code>
    @param cancelClick {?fn} 取消按钮回调
</code>
<br/>
<code>
    @param show {!boolean} 显示控制开关
</code>
<br/>
<code>
    @param align {?'left'|'center'} 内容靠左、居中显示
</code>

<h2>TIPS</h2>
	1. 当内容出现滚动条时，使用iscroll的滑动效果，避免弹框底部的滚动，依赖iscroll
