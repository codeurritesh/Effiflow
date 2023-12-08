import React, { useState } from 'react';
import '../login/style.css'
import { Navigate } from 'react-router-dom';
import effiflowLogo from '../../../assets/brand/effiflow_logo.png';
import axiosInstance from '../../../api/useAuth';
import { useAuth } from '../../../auth/userAuth';

const Login = () => {
  const { login } = useAuth();

  const[token, setToken] = useState(false);
  const[isError, checkError] = useState(false);
  const[error, setError] = useState('');

  // Define state variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handler functions to update state on input change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Determine if both username and password are filled
  const isBothFieldsFilled = username.trim() !== '' && password.trim() !== '';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isBothFieldsFilled) {
      return; // Prevent submission if fields are not filled
    }

    try {
      // Send AJAX request
      const response = await axiosInstance.post('/api/v1/login', {
        username, password,
      });
      console.log(response.data);
      if(response.data.error) {
        checkError(response.data.error);
        setError(response.data.error);
      }
      if(response.data.token) {
        setToken(true);
        login(response.data.token);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div id='mms-body-application' className='mms-body-application'>
      {token && (
          <Navigate to="/dashboard" replace={true} />
        )}
      <div className='css-56ctc5 e5i1odf6'>
        <div className='css-1sags8k e5i1odf4'>
          <div className='css-eimrqs e5i1odf5'>
            <img src={effiflowLogo} style={{width: 300}}/>
            <h2 className="css-1ssb0u9 leafygreen-ui-oaqrgz" data-testid="login-page-header">Log in to your account</h2>
            <span className="css-18pc7rp e5i1odf4">Don't have an account?<a href="/#/register">&nbsp;Sign Up</a></span>
            <fieldset className=" css-2lr4lu e5i1odf3">
              <label htmlFor="username" id="usernameLabel" className="css-1a3x6qd e5i1odf1">Username
                <div className="css-9gfscg e5i1odf0 leafygreen-ui-90q1a7">
                  <div className="leafygreen-ui-lzja97">
                    <input name="username" autoComplete="email" aria-labelledby="usernameLabel" type="text" className="leafygreen-ui-rizwn0" required="" placeholder="" id="username" aria-invalid="false" value={username} onChange={handleUsernameChange} />
                    <div className="lg-ui-icon-selector-0000 leafygreen-ui-uy5fvv"></div>
                  </div>
                </div>
              </label>
            </fieldset>

            <fieldset className=" css-2lr4lu e5i1odf3">
              <label htmlFor="password" id="password" className="css-1a3x6qd e5i1odf1">Password
                <div className="css-9gfscg e5i1odf0 leafygreen-ui-90q1a7">
                  <div className="leafygreen-ui-lzja97">
                    <input name="password" autoComplete="password" aria-labelledby="usernameLabel" type="password" className="leafygreen-ui-rizwn0" required="" placeholder="" id="password" aria-invalid="false" value={password} onChange={handlePasswordChange} />
                    <div className="lg-ui-icon-selector-0000 leafygreen-ui-uy5fvv"></div>
                  </div>
                </div>
              </label>
            </fieldset>
            {isError ? (
              <p style={{color: 'red'}}>{error}</p>
            ) : (null)}
            <footer>
              <button type="submit"
                className={`lg-ui-button-0001 leafygreen-ui-p6fkp8 css-polse2 ${isBothFieldsFilled ? 'active' : ''}`}
                aria-disabled={!isBothFieldsFilled}
                aria-pressed="false"
                name="login"
                disabled={!isBothFieldsFilled}
                onClick={handleSubmit}
                >
                <div className="leafygreen-ui-v038xi">
                </div>
                <div className="leafygreen-ui-1qmzz4y">
                  Login
                </div>
              </button>
            </footer>
          </div>
        </div>
        {/* Left Section */}
        <div className='css-72xieo e5i1odf3'>
          <div className="css-1x8un19 e5i1odf4">
            <div className="css-12jerk5 e5i1odf6">
              Identify, filter, or group related resources.
            </div>
            <div className="css-zaynj3 e5i1odf5">
              Enhance your deployment management with resource tags. Add metadata using tags from the Atlas UI, CLI, or Admin API
            </div>
            <a href="https://www.mongodb.com/blog/post/operating-at-scale-using-resource-tags?utm_campaign=resource_tagging&amp;utm_source=website&amp;utm_medium=cloud_login" target="_blank" rel="noopener noreferrer" className="css-eco3i7 e5i1odf2">
              <span className="css-hrwrno e5i1odf0">
                Add Tags
              </span>
              <span className="css-1oybzbz e5i1odf1">→
              </span>
            </a>
          </div>

          <a href="https://www.mongodb.com/blog/post/operating-at-scale-using-resource-tags?utm_campaign=resource_tagging&amp;utm_source=website&amp;utm_medium=cloud_login" target="_blank" rel="noopener noreferrer" className="css-yc1f8r e5i1odf3"><span className="css-hrwrno e5i1odf0">Add Atlas Resource Tags</span><span className="css-1oybzbz e5i1odf1">→</span></a>
        </div>
      </div>
    </div>
  );
};

export default Login;
