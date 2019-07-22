import React from 'react';
import './App.css';
import {Col,Row} from 'react-bootstrap/';
import Feed from './Components/feed';
import Trendcard from './Components/trendcard';
import Navigation from './Components/navbar';
import Follow from './Components/follow';
import UserCard from './Components/UserCard/index'

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-body">
        <Row>
          <Col sm="auto">
          <UserCard style={{MarginRight:'20rem'}}
          cardClass='float'
          header='https://i.imgur.com/w5tX1Pn.jpg'
          avatar='https://i.imgur.com/uDYejhJ.jpg'
          name='Jaypsu Lacorte'
          positionName='Senior Software Developer'
          stats={[
            {
              name: 'followers',
              value: 21
            },
            {
              name: 'following',
              value: 37
            },
            {
              name: 'posts',
              value: 117
            }
          ]}
        /> 
          <Trendcard /></Col>          
            
          <Col sm="6"> <Feed /></Col>
  
          <Col sm="auto"><Follow /></Col>
        </Row>
      
      </header>
    </div>
  );
}

export default App;
