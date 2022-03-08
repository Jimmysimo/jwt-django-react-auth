import {createContext, useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({ children }) => {


    let [authtokens, setAuthTokens] = useState()
    let [user, setUser] = useState()

    const navigate = useNavigate()

    let loginUser = async (e ) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username': e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/home')
        }else{
            alert('Something has gone terribly wrong!')
        }
    }

    return(
        <AuthContext.Provider value={{ loginUser, user }}>
            { children }
        </AuthContext.Provider>
    )
}