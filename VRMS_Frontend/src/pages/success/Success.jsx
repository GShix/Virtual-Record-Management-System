import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Success.css'
const Success = () => {
  return (
    <div>
      <Header/>
      <div className="success flex">
          <div className="applicationSent">
            <div className="successGif">
              <img src='.././success.gif'/>
            </div>
            <div className="successMessage">
              <h4>Application Submitted</h4>
              <h6>Thank you for submitting Online Death Registration Application</h6>
              <p>Have a great day!</p>
            </div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Success