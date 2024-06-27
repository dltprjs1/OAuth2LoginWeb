import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';

export default function OAuth() {

  const { token, expirationTime } = useParams();
  const [ cookie, setcookie] = useCookies();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token || !expirationTime) return;
    
        const now = (new Date().getTime()) * 1000;
        const expires = new Date(now + Number(expirationTime));

        setcookie('accessToken', token, { expires, path: '/' });

        //navigate('/'); 

        window.location.href = 'http://localhost:8080';

  },[token]);

  return (
    <></>
  )
}
