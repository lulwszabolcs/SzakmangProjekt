import React from 'react';
import './CVstyle.css';

function VinceCV() {
    return (
      <div className='cv-container'>
      <h1 className='name-title'>Harcsa Vince</h1>
      <p>20c_harcsav@nyirszikszi.hu | +36303577764 | 4400 Nyíregyháza Városmajor street 4.</p>
      <div className='cv-education'>
      <h2>Education</h2>
      <p className='cv-year'>2020-2025:</p>
      <p>Széchenyi István Technical School Nyíregyháza</p>
      <p className='cv-year'>2018-2020:</p>
      <p>Móra Ferenc Primary School</p>
      <p className='cv-year'>2012-2018:</p>
      <p>Kodály Zoltán Primary School</p>
      </div>
      <div className='cv-skills'>
      <h2>Skills</h2>
      <ul>
        <li>Experience in Word & Excel</li>
        <li>Programming skills in Java, Python, Javascript</li>
        <li>Great communication skills</li>
        <li>Great team working skills</li>
      </ul>
      </div>
      <h2>Language skills</h2>
      <p>Average knowledge of English</p>
      <h2>Hobbies</h2>
      <p>-</p>
      </div>
      );
};
  
export default VinceCV;