import React, { useEffect, useState } from 'react'
import { db, provider, auth } from '../../firebase'

const GroupListContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const groupCollection = db.collection('group')

  useEffect(() => {
    (async () => {
      const isLoggedIn = checkAuthenticationState()
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

  const checkAuthenticationState = () => {
    const userData = !!JSON.parse(window.localStorage.getItem('loginData'))
    setIsLoggedIn(userData)
  }

  const showZaPopup = async () => {
    console.log(`I don't do much yet`)
    // https://firebase.google.com/docs/auth/web/github-auth?authuser=0
    try {
      const { user, additionalUserInfo } = await auth().signInWithPopup(provider.github)
      console.log(`Yeeey, let's go to Mars now!`)
      const { uid, displayName, email, photoURL } = user
      const { username } = additionalUserInfo
      console.group()
      saveLogin({ uid, displayName, email, photoURL, username })
      console.groupEnd()
    } catch (error) {
      console.log(`This is it, you made a buba: `, error)
    }
  }

  const saveLogin = loginData => {
    // store the data in localStorage
    window.localStorage.setItem(
      'loginData',
      JSON.stringify(loginData)
    )
    setIsLoggedIn(true)
  }

  const hideZaPopup = () => {
    console.log(`I do a lot of stuff, like logging out`)
    auth().signOut()
    window.localStorage.setItem('loginData', null)
    setIsLoggedIn(false)
  }

  return (
    <div>
      {!isLoggedIn && <button onClick={showZaPopup}>Log me in dude</button>}
      {isLoggedIn && <button onClick={hideZaPopup}>Log me out, or else!</button>}
    </div>
  )
}

export { GroupListContainer }
