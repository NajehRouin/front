import './style.css';
import image from "./Login.svg";
import { useDispatch, useSelector } from 'react-redux'
import { login } from './redux/apiCalls'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validator from 'validator';

function Login() {
  const user = useSelector((state) => state.user.currentUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [ermail, setErrormail] = useState(null);

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!email || !password){
      setError("Fieled ");
  } 
  else if(!validator.isEmail(email)){
    setErrormail('email is not valid');
  }
 
       try {
    login(dispatch, { email, password });
  }catch (error) {
    setError("Registration failed. Please try again!");
  }

  }

  useEffect(() => {
    user && navigate('/login');
  }, [navigate, user]);

  return (

    <form className='Content' >
 
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <h2>Sign In</h2>
        <h4>Use your registered email and password to login </h4>
        <hr />
        <div>
          <img src={image} alt="logouser" id="imglog" />
        </div>
        <div className="from-group row">
          <label className="col-md-2" >Email
          </label>
          <div className="mb-4 col-md-10">
            <input name="email" className="form-control"
            placeholder='Your Email'  onChange={(e) => setEmail(e.target.value)} />
            {ermail && <span className='error'>{ermail}</span>}
          </div>
        </div>
        
        <div className="from-group row">
          <label className="col-md-2"> Password</label>
          <div className="col-md-10">
            <input type="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder='Your Password' />
          </div>
        </div>

        <br />
        <div className="from-group">
          <div className="col-md-10 offset-md-2 ">
            <button type="submit" className="w-25 mt-4 rounded-pill" onClick={loginHandler} >Log in</button>
          </div>
          {error && <span className='error'>{error}</span>}

        </div>
        <br />
        <p className="col-md-10 offset-md-2">
          Don't Have an Account?<Link to="/" className='name'  > Register Here</Link>
        </p>
        <p
          className="padding"></p>
      </div>
    </form>

  );
}

export default Login;
