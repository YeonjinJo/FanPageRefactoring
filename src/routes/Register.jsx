import React, { useEffect } from 'react'
import SignUp from '../components/SignUp'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Register() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {navigate("/home")} 
  }, []);

  return (
    <div>
      <SignUp />
    </div>
  )
}

export default Register
