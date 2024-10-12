import React from 'react'

function UserDetails({ name, bio, location }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">user details</h2>
      <p className="text-lg"><strong>name:</strong> {name || 'n/a'}</p>
      <p className="text-lg"><strong>bio:</strong> {bio || 'no bio available'}</p>
      <p className="text-lg"><strong>location:</strong> {location || 'location not available'}</p>
    </div>
  )
}

export default UserDetails
