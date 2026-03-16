import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  // initialize the hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // Define the three states an application will move to
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Below is a function that will handle the submit action
  const handleSubmit = async(e) =>{
    // Below will prevent our site from reloading
    e.preventDefault()

    // Update our loading hook with a message that will be displayed to the users who are trying to register
    setLoading("Please wait as registration is in progress...")

    try{
      // create a form data object that will enable you to capture the four details enterded on the form
      const formdata = new FormData();

      // insert the four details (username, email, password, phone) interms of key- value pairs
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("phone", phone);

      // by use of axios, we can access the method post
      const response =await axios.post("https://tashaandeso.alwaysdata.net/api/signup", formdata)

      // set back the loading to default
      setLoading("");

      // just incase everything goes on well, update the success hook with a message
      setSuccess(response.data.message)

      // clear your hooks
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");

      setTimeout(() => {
    setSuccess("");
  }, 5000);
    }
    catch(error){
      // set the loading back to default
      setLoading("");

      // update the error hook with the message given ack from the response
      setError(error.message)
    }

  }

  return (
    <div className='row justify-content-center mt-4'>
        <div className="card col-md-6 shadow p-4">
          <h1 className='text-primary'>Sign Up</h1>
          
          <h5 className="text-warning">{loading}</h5>
          <h3 className="text-success">{success}</h3>
          <h4 className="text-danger">{error}</h4>

          <form onSubmit={handleSubmit}>

            <input type="text"
            placeholder='Enter the username'
            className='form-control'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required /> <br />

            {/* {username} */}

            <input type="email"
            placeholder='Enter the email address'
            className='form-control' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/> <br />

            {/* {email} */}

            <input type="password"
            placeholder='Enter the password'
            className='form-control' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/> <br />

            {/* {password} */}

            <input type="number"
            placeholder='Enter the mobile phone number'
            className='form-control'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required /> <br />

            {/* {phone} */}

            <input type="submit" value="Signup" className='btn btn-primary' />
            <br /> <br />

            Already have an account? <Link to='/signin'>Signin</Link>
          </form>
        </div>
    </div>
  )
}

export default Signup;

// Research on Axios module in reactjs