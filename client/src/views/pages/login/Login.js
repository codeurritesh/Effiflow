import React, { useState } from 'react';
import '../login/style.css'
import { Navigate } from 'react-router-dom';
import effiflowLogo from '../../../assets/brand/effiflow_logo.png';

const Login = () => {

  const[token, setToken] = useState(false);

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
      const response = await fetch('http://localhost:8000/api/v2/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Request was successful, you can handle the response here
        const data = await response.json();
        if(data.token) {
          setToken(true);
        }
      } else {
        // Handle error cases
        console.error('Error:', response.statusText);
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
            <h2 class="css-1ssb0u9 leafygreen-ui-oaqrgz" data-testid="login-page-header">Log in to your account</h2>
            <span class="css-18pc7rp e5i1odf4">Don't have an account?<a href="/account/register?n=%2Fv2%2F656977499a44a60c03ad709f&amp;nextHash=%23overview">&nbsp;Sign Up</a></span>
            <fieldset class=" css-2lr4lu e5i1odf3">
              <label for="username" id="usernameLabel" class="css-1a3x6qd e5i1odf1">Username
                <div class="css-9gfscg e5i1odf0 leafygreen-ui-90q1a7">
                  <div class="leafygreen-ui-lzja97">
                    <input name="username" autocomplete="email" aria-labelledby="usernameLabel" type="text" class="leafygreen-ui-rizwn0" required="" placeholder="" id="username" aria-invalid="false" value={username} onChange={handleUsernameChange} />
                    <div class="lg-ui-icon-selector-0000 leafygreen-ui-uy5fvv"></div>
                  </div>
                </div>
              </label>
            </fieldset>

            <fieldset class=" css-2lr4lu e5i1odf3">
              <label for="password" id="password" class="css-1a3x6qd e5i1odf1">Password
                <div class="css-9gfscg e5i1odf0 leafygreen-ui-90q1a7">
                  <div class="leafygreen-ui-lzja97">
                    <input name="password" autocomplete="password" aria-labelledby="usernameLabel" type="password" class="leafygreen-ui-rizwn0" required="" placeholder="" id="password" aria-invalid="false" value={password} onChange={handlePasswordChange} />
                    <div class="lg-ui-icon-selector-0000 leafygreen-ui-uy5fvv"></div>
                  </div>
                </div>
              </label>
            </fieldset>

            <footer>
              <button type="submit"
                className={`lg-ui-button-0001 leafygreen-ui-p6fkp8 css-polse2 ${isBothFieldsFilled ? 'active' : ''}`}
                aria-disabled={!isBothFieldsFilled}
                aria-pressed="false"
                name="login"
                disabled={!isBothFieldsFilled}
                onClick={handleSubmit}
                >
                <div class="leafygreen-ui-v038xi">
                </div>
                <div class="leafygreen-ui-1qmzz4y">
                  Next
                </div>
              </button>
            </footer>
          </div>
        </div>
        {/* Left Section */}
        <div className='css-72xieo e5i1odf3'>
          <div class="css-1x8un19 e5i1odf4">
            <div class="css-12jerk5 e5i1odf6">
              Identify, filter, or group related resources.
            </div>
            <div class="css-zaynj3 e5i1odf5">
              Enhance your deployment management with resource tags. Add metadata using tags from the Atlas UI, CLI, or Admin API
            </div>
            <a href="https://www.mongodb.com/blog/post/operating-at-scale-using-resource-tags?utm_campaign=resource_tagging&amp;utm_source=website&amp;utm_medium=cloud_login" target="_blank" rel="noopener noreferrer" class="css-eco3i7 e5i1odf2">
              <span class="css-hrwrno e5i1odf0">
                Add Tags
              </span>
              <span class="css-1oybzbz e5i1odf1">→
              </span>
            </a>
          </div>

          <a href="https://www.mongodb.com/blog/post/operating-at-scale-using-resource-tags?utm_campaign=resource_tagging&amp;utm_source=website&amp;utm_medium=cloud_login" target="_blank" rel="noopener noreferrer" class="css-yc1f8r e5i1odf3"><span class="css-hrwrno e5i1odf0">Add Atlas Resource Tags</span><span class="css-1oybzbz e5i1odf1">→</span></a>
        </div>
      </div>
    </div>
  );
};

export default Login;
