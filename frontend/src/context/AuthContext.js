import {createContext, useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {

    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=>localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    let loginUser = async (e ) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})
        })
        let data = await response.json()
        
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/home')
        }else{
            alert('Something has gone wrong!')
        }
    }

    let logoutUser = () => {
        setAuthTokens()
        setUser()
        localStorage.removeItem('authTokens')
        navigate('home')
    }

    let updateToken = async ()=> {
        // preventDefault()
        console.log('update worked uWu')
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh': authTokens.refresh})
        })
        let data = await response.json()
        
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logoutUser()
        }
    }

    useEffect(()=> {

        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval) //prevent interval from looping infinitely 

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={{ loginUser, logoutUser, user }}>
            { children }
        </AuthContext.Provider>
    )
}