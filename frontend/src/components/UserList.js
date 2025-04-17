import React, { useEffect, useState } from 'react';
import userService from '../services/userService';

function UserList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		userService.getUsers()
			.then(response => {
				setUsers(response.data);
			})
			.catch(error => {
				console.error('Error fetching users:', error);
			});
	}, []);

	return (
		<div>
			<h2>Users</h2>
			<ul>
				{users.map(user => (
					<li key={user.id}>{user.name} ({user.email})</li>
				))}
			</ul>
		</div>
	);
}

export default UserList;