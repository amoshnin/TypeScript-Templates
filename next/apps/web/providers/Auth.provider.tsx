// PLUGINS IMPORTS //
import React, { useState, useEffect, useContext, createContext } from 'react'
import nookies from 'nookies'

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { FirebaseClient } from '@app/web/shared/config/firebase-client.config'

/////////////////////////////////////////////////////////////////////////////

const AuthContext = createContext<{ user: FirebaseClient.User | null }>({
  user: null,
})

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<FirebaseClient.User | null>(null)

  useEffect(() => {
    return FirebaseClient.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null)
        nookies.destroy(null, 'token')
        nookies.set(null, 'token', '', {})
        return
      }

      const token = await user.getIdToken()
      setUser(user)
      nookies.destroy(null, 'token')
      nookies.set(null, 'token', token, {})
    })
  }, [])

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing token...`)
      const user = FirebaseClient.auth().currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)
    return () => clearInterval(handle)
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
