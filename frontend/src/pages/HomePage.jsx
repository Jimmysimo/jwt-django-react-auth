import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import AxiosInstance from '../utils/AxiosInstance'

const HomePage = () => {
  let [notes, setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)


  useEffect(()=> {
      getNotes()
  }, [])

  let getNotes = async()=> {
    let response = await AxiosInstance.get('/api/notes/')

    if (response.status === 200){
        setNotes(response.data)
    }
  }


  return (
    <div>
      <h1>You are logged in to the home page!</h1>
        <ul>
          {notes.map(note=> (
            <li key={note.id} >{note.body}</li>
          ))}
        </ul>
    </div>
  )
}

export default HomePage;