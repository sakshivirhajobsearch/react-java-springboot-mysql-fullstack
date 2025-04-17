// frontend/src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios.get('http://192.168.2.104:8080/api/users')
			.then(response => {
				setUsers(response.data);
			})
			.catch(error => {
				setError(error);
				console.error('There was an error!', error);
			});
	}, []); // Empty array makes sure it runs once when the component mounts

	if (error) {
		return <p>Error loading user data: {error.message}</p>;
	}

	return (
		<div>
			<h2>User List</h2>
			{users.length === 0 ? (
				<p>No users found.</p>
			) : (
				<ul>
					{users.map((user, index) => (
						<li key={index}>{user.name}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default UserList;
