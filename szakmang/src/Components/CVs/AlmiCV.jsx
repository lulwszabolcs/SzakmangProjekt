import React from 'react';
import './CVstyle.css';

function AlmiCV() {
    return (
      <div className='cv-container'>
      <h1 className='name-title'>László-Devera Álmos</h1>
      <p>20c_laszlo-deveraa@nyirszikszi.hu | +36307310869 | 4400 Nyíregyháza Városmajor street 4.</p>
      <div className='cv-education'>
      <h2>Education</h2>
      <p className='cv-year'>2020-2025:</p>
      <p>Széchenyi István Technical School Nyíregyháza</p>
      <p className='cv-year'>2012-2020:</p>
      <p>Apáczai Primary School</p>
      </div>
      <div className='cv-skills'>
      <h2>Skills</h2>
      <ul>
        <li>Advanced Programming knowledge</li>
        <li>Advanced knowledge of Microsoft applications</li>
        <li>Great communication skills</li>
        <li>Complex problem solving</li>
      </ul>
      </div>
      <h2>Language skills</h2>
      <p>Fluent English & Beginner German & Beginner Spanish</p>
      <h2>Hobbies</h2>
      <p>Football, travelling, fratting</p>
      </div>
      );
};
  
export default AlmiCV;