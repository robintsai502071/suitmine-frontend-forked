import React from 'react';
import FitMatters from '../components/sol/measurement/FitMatters';
import GetNoticed from '../components/sol/measurement/GetNoticed';
import MeasurementProfile from '../components/sol/measurement/MeasurementProfile';
import PredictiveMeasurements from '../components/sol/measurement/PredictiveMeasurements';
import EaseOfMind from '../components/sol/measurement/EaseOfMind';
import Cellphone from '../components/sol/measurement/Cellphone';
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutMain from '../components/robert/LayoutMain';
import LayoutFooter from '../components/robert/LayoutFooter';

function Measurement() {
  
  return (
    <div>
      <LayoutHeader />
      <FitMatters />
      <LayoutMain />

      <GetNoticed />
      <MeasurementProfile />
      <PredictiveMeasurements />
      <EaseOfMind />
      <Cellphone />
      <LayoutFooter />
    </div>
  );
}

export default Measurement;
