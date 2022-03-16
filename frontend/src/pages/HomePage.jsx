import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/UseAxios'

const HomePage = () => {
  let [notes, setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)

  let api = useAxios()

  useEffect(()=> {
      getNotes()
  }, [])

  let getNotes = async()=> {
    let response = await api.get('/api/notes/')

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