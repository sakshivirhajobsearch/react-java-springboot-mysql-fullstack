// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './components/UserList'; // Just an example of another component

function App() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Make the API request when the component mounts
		axios.get('http://192.168.2.104:8080/api/your-endpoint')
			.then(response => {
				// Handle successful response
				setData(response.data);
			})
			.catch(error => {
				// Handle error response
				setError(error);
				console.error('There was an error!', error);
			});
	}, []); // Empty dependency array means it runs once, when the component mounts

	return (
		<div className="App">
			<h1>User List</h1>
			{error && <p>Error fetching data: {error.message}</p>}
			{data ? (
				<UserList data={data} />
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default App;
