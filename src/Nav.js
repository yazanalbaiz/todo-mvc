import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<div>
				<nav className='nav'>
					<ul className='menu'>
						<li className='menu-item'><Link to='/'>All</Link></li>
						<li className='menu-item'><Link to='/active'>Active</Link></li>
						<li className='menu-item'><Link to='/completed'>Completed</Link></li>
						{this.props.checkCompleted() && (
							<li className='menu-item' onClick={this.props.clearCompleted}>
								<span>Clear Completed</span>
							</li>
						)}
					</ul>
				</nav>
			</div>
		);
	}
}

export default Nav;