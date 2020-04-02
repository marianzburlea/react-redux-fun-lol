import React, { useEffect } from 'react'
import { db } from '../../firebase'

const GroupListContainer = () => {
  const groupCollection = db.collection('group')

  useEffect(() => {
    (async () => {
      // test adding a group
      // groupCollection.add({
      //   message: 'Tam is very happy'
      // })

      // // group
      // {
      //   creatorId = 'myidfrom'
      //   name = 'nice name'
      // }

      // // group-access
      // {
      //   memberId = 'my-id'
      //   groupId = 'firestore doc id'
      //   status = 'pending|accepted'
      // }
    })()
  }, [])

  return (
    <div>
      uuu
    </div>
  )
}

export { GroupListContainer }
