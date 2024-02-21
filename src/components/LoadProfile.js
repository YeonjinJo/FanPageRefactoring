import axios from 'axios';
import { useState } from 'react'
import { useSelector } from 'react-redux';

function LoadProfile() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const token = useSelector((state) => state.auth.token);

  const loadProfile = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_AUTH_SERVER_ADDRESS}/user`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setNickname(data.nickname)
    setEmail(data.id)
  };

  loadProfile()
  
  return {nickname, email}
}

export default LoadProfile
