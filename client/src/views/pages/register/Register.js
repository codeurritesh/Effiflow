import React, { useState } from 'react';
import '../login/style.css'
import { Navigate } from 'react-router-dom';
import effiflowLogo from '../../../assets/brand/effiflow_logo.png';
import axiosInstance from '../../../api/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

  const[token, setToken] = useState(false);
  const[error, setError] = useState(false);
  const[isRegister, setisRegister] = useState(true);

  // Define state variables for username and password
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  // Handler functions to update state on input change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Determine if both username and password are filled
  const isBothFieldsFilled = username.trim() !== '' && name.trim() !== '';

  const handleSubmit = async (e) => {
    // e.preventDefault();

    // if (!isBothFieldsFilled) {
    //   return; // Prevent submission if fields are not filled
    // }

    // try {
    //   // Send AJAX request
    //   const response = await axiosInstance.post('/api/v2/register', {
    //     username, password,
    //   });
    //   if(response.data.token) {
    //     setToken(true);
        
    //   }
    // } catch (error) {
    //   console.error('Error:', error.message);
    // }
    setisRegister(false);
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
            {isRegister ? (
              <div>
                <h2 className="css-1ssb0u9 leafygreen-ui-oaqrgz" data-testid="login-page-header">Book a Demo</h2>
                <span className="css-18pc7rp e5i1odf4">Already Register?<a href="/#/login">&nbsp;Login</a></span>
                <fieldset className=" css-2lr4lu e5i1odf3">
                  <label htmlFor="username" id="usernameLabel" className="css-1a3x6qd e5i1odf1">Email
                    <div className="css-9gfscg e5i1odf0 leafygreen-ui-90q1a7">
                      <div className="leafygreen-ui-lzja97">
                        <input name="username" autoComplete="email" aria-labelledby="usernameLabel" type="text" className="leafygreen-ui-rizwn0" required="" placeholder="" id="username" aria-invalid="false" value={username} onChange={handleUsernameChange} />
                        <div className="lg-ui-icon-selector-0000 leafygreen-ui-uy5fvv"></div>
                      </div>
                    </div>
                  </label>
                </fieldset>

                <fieldset className=" css-2lr4lu e5i1odf3">
                  <label htmlFor="name" id="password" className="css-1a3x6qd e5i1odf1">Name
                    <div className="css-9gfscg e5i1odf0 leafygreen-ui-90q1a7">
                      <div className="leafygreen-ui-lzja97">
                        <input name="name" autoComplete="name" aria-labelledby="usernameLabel" type="text" className="leafygreen-ui-rizwn0" required="" placeholder="" id="password" aria-invalid="false" value={name} onChange={handleNameChange} />
                        <div className="lg-ui-icon-selector-0000 leafygreen-ui-uy5fvv"></div>
                      </div>
                    </div>
                  </label>
                </fieldset>

                <footer>
                  <button
                    type="submit"
                    className={`lg-ui-button-0001 leafygreen-ui-p6fkp8 css-polse2 ${isBothFieldsFilled ? 'active' : ''}`}
                    aria-disabled={!isBothFieldsFilled}
                    aria-pressed="false"
                    name="login"
                    disabled={!isBothFieldsFilled}
                    onClick={handleSubmit}
                  >
                    <div className="leafygreen-ui-v038xi"></div>
                    <div className="leafygreen-ui-1qmzz4y">
                      Book
                    </div>
                  </button>
                </footer>
              </div>
            ) : (
              <>
                <div style={{display: 'flex', flexDirection: 'column', paddingTop: "2rem", justifyContent: 'space-between', alignItems:'center', margin: '0 20px 0 -10px'}}>
                  <FontAwesomeIcon icon={faEnvelope} size="4x" bounce style={{ color: "green" }} />
                  <h3 style={{ color: "green", fontWeight: "400", paddingTop: "1rem" }}>Your Demo is Confirmed!</h3>
                  <p style={{textAlign: 'justify'}}>Thank you for choosing us. Your demo has been successfully booked. Our team will contact you via email to guide you through the next steps. Please check your email regularly for further instructions and updates.</p>
                  <h4 style={{ textAlign: 'center', color: 'green', fontWeight: '400', paddingTop: '1rem' }}>
                    Thank You!
                  </h4>
                  <span className="css-18pc7rp e5i1odf4" style={{paddingTop:'5rem'}}>Already Register?<a href="/#/login">&nbsp;Login</a></span>
                </div>
              </>
            )}
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
