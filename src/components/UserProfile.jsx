import React, { useState, useEffect } from 'react';
import UserDetails from './UserDetails';
import UserLook from './UserLook';

function UserProfile() {
  const [username, setUserName] = useState('octokit');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      setError('failed to fetch user data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">loading...</div>
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg">{error}</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">github user profile</h1>
      {/* input for github username */}
      <div className="flex justify-center mb-6">
        <input type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter github username" 
        className="border border-gray-300 rounded-md p-2 w-full max-w-sm" 
        />
        <button 
        onClick={fetchUserData}
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          fetch user
        </button>
      </div>

      {/* pass the fetched data to the child components */}
      <div className="bg-gray-100 p-6 rounded-md shadow-md">
        <UserDetails
        name={userData.name}
        bio={userData.bio}
        locaction={userData.locaction}
        />
        <UserLook
        avatar={userData.avatar_url}
        followers={userData.followers}
        following={userData.following}
        public_repos={userData.public_repos}
        />
      </div>
    </div>
  )
}

export default UserProfile
