import React from 'react'

const loginPage = () => {
  return (
    <div>
        <form>
            <input type="text" name="username" placeholder="Enter Username" />
            <input type="text" name="password" placeholder="Enter Password" />
            <input type="submit" />
        </form>
    </div>
  )
}

export default loginPage