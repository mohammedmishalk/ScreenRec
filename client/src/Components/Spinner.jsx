import React from 'react'
import { SpinnerRoundOutlined } from 'spinners-react';

function Spinner() {
  return (
  
      <div className="spinner-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <SpinnerRoundOutlined size={50} thickness={100} speed={100} color="#0062FF" />


    </div>
  )
}

export default Spinner
