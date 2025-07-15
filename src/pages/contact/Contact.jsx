import React, { useContext } from 'react'
import UserContext from '../../Utils/UserContext';
function Contact() {
  const data = useContext(UserContext);
  return (
    <div>
        <h1>Contact us</h1>
        <p>Don't contact us, unless you really have something important</p>
        <h2>{data.loggedUser}</h2>
    </div>
  )
}

export default Contact;