import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './service/Auth';
import HeaderComponent from './components/header/HeaderComponent';

import './App.css'
import Container from './components/container/container';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
  }, [])

  return (
    <>
      <HeaderComponent/>
      <Container/>
    </>
  )
}

export default App
