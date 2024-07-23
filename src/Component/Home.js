import React from 'react'
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <>
     <div className='homecontainer'>
        <h1>Our Startup</h1>
        <p>Our Startup is a startup that is trying to make a difference in the world.</p>
        <Button variant="outline-danger">Get Services</Button>
     </div>
     <div className='imgslider'>
     <div class="sbox2">
            <div class="sbox21">
                <img src="https://www.shutterstock.com/shutterstock/photos/1932042689/display_1500/stock-photo-businessman-using-mobile-smart-phone-business-global-internet-connection-application-technology-1932042689.jpg" alt=""/>
            </div>
            <div class="sbox22">
                <h1>Aim for the Best</h1>
                <p>You’re looking for a staffing experience that’s different, one where you find in-depth knowledge, stability, and a truly personal experience – something that’s not very easy to find. We are a staffing agency that’s been delivering personal, attentive and superior service to clients and candidates for over 20 years. It’s time to stop searching for a better staffing partner.</p>
            </div>
        </div>
     </div>
     <div>
      <h1>Our Startup</h1>
     </div>
     <div className='hcard'>
        <div className='hcard11'></div>
        <div className='hcard11'></div>
        <div className='hcard11'>
        <div class="box62">
                <h2>Our Clints</h2>
                <div id="scroll-container">
                    <div id="scroll-text">
                        <h3>FINANCIAL/BANKING</h3>
                        <li>AIG</li>
                        <li>BANK OF AMERICA</li>
                        <li>BANK OF TOKYO</li>
                        <li>BARCLAYS</li>
                        <li>BLOOMBERG</li>
                        <li>CITIGROUP</li>
                        <li>CREDIT AGRICOLE</li>
                        <li>CREDIT SUISSE</li>
                        <li>DE SHAW GROUP</li>
                        <li>FORTRESS INVESTMENT GROUP</li>
                        <li>GOLDMEN</li>
                        <li>JP MORGAN CHASE</li>
                        <li>MORGAN STANLEY</li>
                        <li>NASDAQ</li>
                        <li>NEUBERGER</li>
                        <h2>MANAGEMENT</h2>
                        <li>RJO'S BRIEN</li>
                        <li>UBS</li>
                        <li>WELLS FARGO</li>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Home