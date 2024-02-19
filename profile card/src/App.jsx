import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.css'
import img from './umar.jpg'
const App = () => (

<div className='card'>

  <Card 
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={img} />}
    >
    <Meta title="Mohammad Umar" description="Front End Developer" />
    <icons style={{display: 'flex',gap: '20px',fontSize: '2rem'}}>

    <a href='https://www.instagram.com/_m_d_umar/'>
      <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href='https://www.linkedin.com/in/md-umar1/'>
      <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href='https://github.com/md-umar1'>
      <FontAwesomeIcon icon={faGithub} />
      </a>
    </icons>
  </Card>
    </div>
);
export default App;