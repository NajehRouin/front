import './style.css';
import image from "./Register.svg";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import validator from 'validator';

import { Link, useNavigate} from 'react-router-dom'



function Register() {
  const user = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passion, setPassion] = useState("");
  const [niveau, setNiveau] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const registerHandler = async (e) => {
    e.preventDefault();
    if (!username || !email || !password ){
      setError("the registre field is empty");
  }
  else if(username.length < 4){
    setError('username required');

  }
  else if(!validator.isEmail(email)){
    setError('email is not valid');
  }
  else if(!validator.isStrongPassword(password)){
    setError('Password not strong enough');
  }
    try {

      await axios.post('/api/auth/register', {
        username,
        email,
        passion,
        niveau,
        password


      });

      navigate('/login');

    } catch (error) {
      setError("register failed");
    
    }


  }
  useEffect(() => {
    user && navigate('/');
  }, [navigate, user]);


  return (
    
    <form className='Content'>
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
    <h2> Sign Up </h2>
        <h4> Create a new account. </h4>
        <hr />
        <div>
       <img src={image} alt=""/>
      </div>
         <div className="from-group row">
          <label className="col-md-2">Username</label>
          <div className="mb-4 col-md-10">
              <input  name="text" className="form-control"
                 onChange={(e) => setUsername(e.target.value)} placeholder='Your Username' />
               </div>
         </div>
         
        <div className="from-group row">
         <label className="col-md-2" >Email</label>
         <div className="mb-4 col-md-10">
              <input name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder='Your Email'  />
              </div>
        </div>
         
        <div className="from-group row">
          <label className="col-md-2"> Password</label>
          <div className="mb-4 col-md-10">
              <input type="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder='Your Password' />
              </div>
         </div>
         <div className="from-group row">
          <label className="col-md-2" >Passion</label>
          <div className="mb-4 col-md-10">
            <select class="form-select" aria-label="Default select example" 
         onChange={(e) => setPassion(e.target.value)} name="passion">
                        <option selected>Choisir Votre Passions </option>
              <option >Voyage</option>
              <option >Cinéma</option>
              <option >Photoshope</option>
              <option >Cuisine</option>
              <option >Sports</option>
            </select>
          </div>
        </div>
        <div className="from-group row">
          <label className="col-md-2" >Niveau</label>

          <div className="mb-4 col-md-10">

            <select class="form-select" aria-label="Default select example"
             onChange={(e) => setNiveau(e.target.value)} name="niveau" >
             <option selected >Choisir Votre Niveau</option>
              <option >Debutant</option>
              <option>Intermediaire</option>
              <option >Expert</option>
            </select>
          </div>
        </div>
        <div className="from-group">
            <div className="col-md-10 offset-md-2 ">
            <button type="submit" className=" w-25  rounded-pill"  onClick={registerHandler}>Register</button>

            </div>
            {error && <span className='error'>{error}</span>}

        </div>
         <br />
         <p className="col-md-10 offset-md-2">
         Have an Account Already?  <Link to="/login" className='name' >Login Here</Link>
          </p>
         </div>
          </form>
  );
}

export default Register;
