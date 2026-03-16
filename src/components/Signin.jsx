import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  // Define the two hooks for capturing/storing the users input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // declare the three additional hooks
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // below we have the usNavigate hook to re direct us to another page on success login/signin
  const navigate = useNavigate()

  // below is the function to handle the signin action
  const handlesubmit = async (e) =>{
    // prevent the site from reloading
    e.preventDefault()

    // update the loading hook with a message
    setLoading("Please wait while we authenticate your account...")

    try{
      // Create a  formData object that will hold the email and the password
      const formdata = new FormData()

      // Insert/append the email and the password on the formData created.
      formdata.append("email", email);
      formdata.append("password", password)

      // interact with axios for the response
      const response = await axios.post("https://kbenkamotho.alwaysdata.net/api/signin", formdata)

      // set the loading hook back to default
      setLoading("");

      // check whether the user exists as part of your response from the API
      if(response.data.user){
        // if user is there, definately the details entered during sign in are correct
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // setSuccess("Login successful")
        // if it is successful, let a person get redirected to another page
        navigate("/");
      }
      else{
        // user is not found, that means the credentials entered on the form are incorrect
        setError("Login Filed. Please try again...")
      }
    }
    catch(error){
      // set loadig back to default
      setLoading("")

      // update the error hook with message
      setError("Oops, an error occured. Try again....")
    }
  }


  return (
    <div className='row justify-content-center mt-4'>
       <div className="col-md-6 card shadow p-4">
        <h1 className='text-primary'>Sign In</h1>

        <h5 className="text-info"> {loading} </h5>
        <h3 className="text-success"> {success}</h3>
        <h4 className="text-danger"> {error} </h4>

        <form onSubmit={handlesubmit}>
          <input type="email"
          placeholder='Enter the email address here...' 
          className='form-control'
          required
          value={email} 
          onChange={(e) => setEmail(e.target.value)}/> <br />

          {/* {email} */}

          <input type="password"
          placeholder='Enter the password here...' 
          className='form-control'
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/> <br />

          {/* {password} */}

          <input type="submit"
           value="Signin" 
           className='btn btn-info'/>
        </form>
       </div>
    </div>
  )
}

export default Signin;

// How can you store the users details in the local storage