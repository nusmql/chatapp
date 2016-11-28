'use strict'

const React = require('react')
const socket = io.connet()


var UserList = React.createClass({
	render: function() {
		return (
			<div className='users'>
				<h3> Online Users </h3>

				<ul>
					{
						this.props.users.map(user, i) => {
							return (
								<li key={i}> {user} </li>
							)
						}
					}
				</ul>
			</div>
		)
	}
})

var Message = React.createClass({
	render: () => {
		return (
			<div className='message'>
				<strong>{this.props.user}</strong>
				<strong>{this.props.text}</strong>
			</div>
		)
	}
})
