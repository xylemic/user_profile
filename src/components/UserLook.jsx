import React from 'react'

function UserLook({ avatar, followers, following, public_repos }) {
  return (
    <div className="text-center">
      <img src={avatar} alt="User Avatar" className="rounded-lg" style={{ width: '100px', height: '100px' }} />
      <h2>{followers} Followers</h2>
      <h2>{following} Following</h2>
      <h2>{public_repos} Public Repos</h2>
    </div>
  )
}

export default UserLook
