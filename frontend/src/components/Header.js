import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'



const Header = () => {
  let {contextData} = useContext(AuthContext)
  return (
    <div>
        <Link to="/home" >Home</Link>
        <span> | </span>
        <Link to="/login" >Login</Link>

        {/* <h3>Hello {name}</h3> */}
    </div>
  )
}

export default Header;