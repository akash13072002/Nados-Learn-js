import React, { useState, useEffect } from 'react'
import { auth } from '../firbase'

export const AuthContext = React.createContext()

export function AuthProvider({children}) {

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }



    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unSub = auth.onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false)

        })
        return () => {
            unSub()
        }
    }, [])

  const store={
    user,
    signup,
    login,
    logout
  }

   return(
    <AuthContext.Provider value={store}>
{!loading && children}

    </AuthContext.Provider>
   );

}



 
