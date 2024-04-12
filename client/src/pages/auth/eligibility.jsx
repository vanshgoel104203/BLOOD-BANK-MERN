import React, { useState } from 'react';
import './eligibility.css';
const BloodDonationEligibilityChecker = () => {
  const [age, setAge] = useState('');
  const [gram, setGram] = useState('');
  const [weight, setWeight] = useState('');
  const [isEligible, setIsEligible] = useState(null);
const[lastDonationDate, setlastDonationDate]= useState('');
  const checkEligibility = () => {

    const minimumWaitingPeriod = 90;
    const parsedAge = parseInt(age, 10);
    const parsedWeight = parseInt(weight, 10);
    const parsedGram = parseInt(gram, 0);

    const parsedlastDonationDate = parseInt(lastDonationDate, 10);
    if (!lastDonationDate || isNaN(new Date(lastDonationDate).getTime())) {
      console.error('Invalid or missing last donation date');
      setIsEligible(false);
      return;
    }

    const today = new Date();
    const lastDonation = new Date(lastDonationDate);
    const timeDifferenceInDays = (today - lastDonation) / (1000 * 60 * 60 * 24);
    if (parsedAge >= 18 && parsedWeight >= 50 && parsedGram >= 10 && timeDifferenceInDays >= minimumWaitingPeriod) {
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
  };

  return (
   <div className='flexbox'>  
    <h2 > Blood Donation Eligibility Checker</h2> 
    
    <div className="forms">
    
      <label>
        <h2>Age</h2>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <p></p>
      <label>
       <h2>weight</h2>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <p></p>
      <p></p>
      <label>
       <h2>Hemoglobin</h2>
        <input
          type="number"
          value={gram}
          onChange={(e) => setGram(e.target.value)}
        />
      </label>
      <br />
      <p></p>
      <label>
       <h2>Last Donation Date</h2>
        <input
          type="date"
          value={lastDonationDate}
          onChange={(e) => setlastDonationDate(e.target.value)}
        />
      </label>
      <p></p>
      <p></p>

      <button  className="button" onClick={checkEligibility}>Check Eligibility</button>
      <br />
    </div>
    <div className='result'>
      {isEligible === true && <h1>You are eligible to donate blood!</h1>}
      {isEligible === false && <h1>Sorry, you are not eligible to donate blood.</h1>}
      </div>
    </div>
  );
};

export default BloodDonationEligibilityChecker;