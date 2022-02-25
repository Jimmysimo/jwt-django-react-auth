import {createContext, useState, useEffect} from 'react'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {


    let [authtokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

    let loginUser = async (e )=> {
        e.preventDefault()
        console.log('form submission working')
        // let response = await fetch('http://127.0.0.1:8000/api/token/', {
        //     method: 'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({'username': e.target.username.value, 'password':e.target.password.value})
        // })
        // let data = await response.json()
        // console.log('data:', data)
    }

    let contextData = {
        loginUser:loginUser
    }
    return(
        <AuthContext.Provider value={{contextData}}>
            {children}
        </AuthContext.Provider>
    )
}