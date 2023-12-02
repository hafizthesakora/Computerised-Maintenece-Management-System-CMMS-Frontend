import React from 'react';
import welcomeLogo from '../images/1.jpeg';

export default function Home() {
  return (
    <div id="homePage">
      {' '}
      <img src={welcomeLogo} alt="welcomelog" style={{ width: '100%' }} />{' '}
    </div>
  );
}
