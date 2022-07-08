import React from 'react';
import FitMatters from '../components/sol/measurement/FitMatters';
import GetNoticed from '../components/sol/measurement/GetNoticed';
import MeasurementProfile from '../components/sol/measurement/MeasurementProfile';
import PredictiveMeasurements from '../components/sol/measurement/PredictiveMeasurements';
import EaseOfMind from '../components/sol/measurement/EaseOfMind';
import Cellphone from '../components/sol/measurement/Cellphone';

function Measurement() {
  return (
    <div>
      <FitMatters />
      <GetNoticed />
      <MeasurementProfile />
      <PredictiveMeasurements />
      <EaseOfMind />
      <Cellphone />
    </div>
  );
}

export default Measurement;
