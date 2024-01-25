import React, { useState } from 'react';
import PersonalInfoStep from './components/personaldata';
import AddressInfoStep from './components/addressinfo';
import AccountSetupStep from './components/accountset';
import SummaryPage from './components/wholedata';


const App = () => {
  const [step, setStep] = useState(1);
  const [personalData, setPersonalData] = useState({});
  const [addressData, setAddressData] = useState({});
  const [accountData, setAccountData] = useState({});


  const handleNextPersonal = (data) => {
    setPersonalData(data);
    setStep(step + 1);
  };

  const handleNextAddress = (data) => {
    setAddressData(data);
    setStep(step + 1);
  };

  const handleNextAccount = (data) => {
    setAccountData(data);
    setStep(step + 1);
  };


  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div className="container">
      {step === 1 && <PersonalInfoStep onNext={handleNextPersonal} />}
      {step === 2 && <AddressInfoStep onNext={handleNextAddress} onPrev={handlePrev} personaldata={personalData} />}
      {step === 3 && <AccountSetupStep onNext={handleNextAccount} onPrev={handlePrev} addressData={addressData} />}
      {step === 4 && <SummaryPage      accountdata={accountData} />}
    </div>
  );
};

export default App;


