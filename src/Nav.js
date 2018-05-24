import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Nav extends Component {
	render() {
		const itemsLeft = this.props.itemsLeft;
		return (
			<div>
				<nav className='nav'>
					<div>
						{itemsLeft === 1 ?
							(<p>{itemsLeft} Item Left</p>)
							: (<p>{itemsLeft} Items Left</p>)
						}
					</div>
					<ul className='menu'>
						<li className='menu-item'><Link to='/'>All</Link></li>
						<li className='menu-item'><Link to='/active'>Active</Link></li>
						<li className='menu-item'><Link to='/completed'>Completed</Link></li>
						{this.props.checkCompleted() && (
							<li className='menu-item' onClick={this.props.clearCompleted}>
								<button>Clear Completed</button>
							</li>
						)}
					</ul>
				</nav>
			</div>
		);
	}
}

Nav.propTypes = {
	itemsLeft: PropTypes.number.isRequired,
	checkCompleted: PropTypes.func.isRequired,
	clearCompleted: PropTypes.func.isRequired
}

export default Nav;