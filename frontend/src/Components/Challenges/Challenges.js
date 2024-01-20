import {React, useEffect} from 'react';
import './Challenges.css';
import backgroundImage from '../../images/unsplash.jpg';

const TaskPage = () => {
    // Function to handle button clicks and color changes
    const handleButtonClick = (leftButtonId, doneButtonId) => {
    const leftButton = document.getElementById(leftButtonId);
    const doneButton = document.getElementById(doneButtonId);

    // Add a click event listener to the "Done" button
    doneButton.addEventListener('click', () => {
      // Toggle the 'clicked' class on the left button
      leftButton.classList.toggle('clicked');
    });
  };

  // Call the function for the first set of buttons
  useEffect(() => {
    handleButtonClick('leftButton1', 'doneButton1');
  }, []);

  // Call the function for the second set of buttons
  useEffect(() => {
    handleButtonClick('leftButton2', 'doneButton2');
  }, []);

  // Call the function for the third set of buttons
  useEffect(() => {
    handleButtonClick('leftButton3', 'doneButton3');
  }, []);

  // Call the function for the fourth set of buttons
  useEffect(() => {
    handleButtonClick('leftButton4', 'doneButton4');
  }, []);

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
      <div className="Box">
        <div className="heading">
          <div className="whites">
            <h1 className='header'>Challenges</h1>
          </div>
        </div>
        <div className="list">
          
          <div className="button-container">
            <button id="leftButton1">Clean the Sewage</button>

            <button id="doneButton1">Done</button>
          </div>

          <div className="button-container">
            <button id="leftButton2">Clean the drainage</button>

            <button id="doneButton2">Done</button>
          </div>

          <div className="button-container">
            <button id="leftButton3">Clean the Street</button>

            <button id="doneButton3">Done</button>
          </div>
          <div className="button-container">
            <button id="leftButton4">Plant five trees</button>

            <button id="doneButton4">Done</button>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default TaskPage;
