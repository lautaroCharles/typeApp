import React from 'react';
//context
import { AppWrapper } from '../context/context';
import NavBar from '../components/navBar/navBar';
import Card from '../components/card/container/cardContainer'

const Home = () => {
    return (
        <AppWrapper>
        <div style={{ margin: '20px' }}>
          <div className='nav-container'>
            <NavBar/>
            <Card/>
          </div>
        </div>
        </AppWrapper>
    )
}

export default Home;