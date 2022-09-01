import React from 'react';

import FitMatters from '../../../components/for-measurement/fitMatters.compoent';
import GetNoticed from '../../../components/for-measurement/getNoticed.compoent';
import MeasurementProfile from '../../../components/for-measurement/measurementProfile.compoent';
import PredictiveMeasurements from '../../../components/for-measurement/predictiveMeasurements.compoent';
import EaseOfMind from '../../../components/for-measurement/easeOfMind.compoent';
import Cellphone from '../../../components/for-measurement/cellphone.compoent';

import LayoutMain from '../../../components/layout/layout-main/layoutMain.component';
import LayoutFooter from '../../../components/layout/layout-footer/layoutFooter.component';

function Measurement() {
  return (
    <div>
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
