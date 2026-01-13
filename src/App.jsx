 
import { useDispatch } from 'react-redux';
import './App.css'
import CardSection from './components/CardSection/CardSection'
import Navbar from './components/Navbar/Navbar'
import VideoRow from './components/VideoRow/VideoRow'
import { useEffect } from 'react';
import { fetchHomeNews } from './redux/slice/homeSlice';
import Category from './components/Category/Category';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeNews());
  }, [dispatch]);

  return (
    <>
      
     <Navbar/>
     <CardSection/>
     <VideoRow/>
       <Category/>
    </>
  )
}

export default App
