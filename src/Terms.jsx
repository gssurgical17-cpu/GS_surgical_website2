import React from 'react'
import './Terms.css'

const Terms = () => {
  const openPDF = () => {
    window.open('/GS_Surgical_Terms_and_Conditions.pdf', '_blank')
  }

  return (
    <div className="terms-container">
      <span className="terms-link" onClick={openPDF}>
        Terms and Conditions
      </span>
    </div>
  )
}

export default Terms