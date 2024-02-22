import React, { useEffect } from 'react'
import MyProfile from '../components/MyProfile'
import MenuBar from '../layout/MenuBar'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Profile() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {navigate("/")} 
  }, []);

  return (
    <>
      <MenuBar />
      <MyProfile />
    </>
  )
}

export default Profile
