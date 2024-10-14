import React from "react";
import TicTacToe from '../TicTacToe/TicTacToe';
import './Homepage.css';

function Homepage() {
  return (
    <>
        <div className='text-container'>
            <p>Welcome to the “Professional English” project website! We are an enthusiastic team of software developers committed to mastering the English language to work more effectively on international projects.</p>
            <p>The purpose of our website is to showcase our work and progress in the English language. Detailed resumes and contact information of team members can be found on the subpages, providing insight into our professional backgrounds and experiences. Additionally, you can view our reference works, which reflect our professional knowledge and creativity.</p>
            <p>Thank you for visiting us, and we hope you find our website useful! If you have any questions, please do not hesitate to contact us.</p>
        </div>
        <div className='tictactoe-container'>
            <TicTacToe></TicTacToe>
        </div>
    </>
  );
}
export default Homepage;
