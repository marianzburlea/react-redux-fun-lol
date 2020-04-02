import React from 'react'

const GroupList = ({ data }) => {
  return (
    <div>
      <h2>Group List</h2>
      {data.map(({ message, id }) => {
        return (
          <div>Message: {message}</div>
        )
      })}
    </div>
  )
}

export { GroupList }
