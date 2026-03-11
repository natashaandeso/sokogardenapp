import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  // initialize the hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");



  return (
    <div className='row justify-content-center mt-4'>
        <div className="card col-md-6 shadow p-4">
          <h1 className='text-primary'>Sign Up</h1>

          <form>
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

            <input type="button" value="Signup" className='btn btn-primary' />
            <br /> <br />

            Already have an account? <Link to='/signin'>Signin</Link>
          </form>
        </div>
    </div>
  )
}

export default Signup;

// Research on Axios module in reactjs