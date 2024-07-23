import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contactus = () => {
  return (
    <>
    <div className='ccontainer'>
      <div className='ccard ccard1'><span></span><h1>Contact Us</h1></div>
      <div className='ccard ccard2'>
        <div className='cbox map'><iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.5765372670508!2d77.39036427550012!3d28.612477975675716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM2JzQ0LjkiTiA3N8KwMjMnMzQuNiJF!5e0!3m2!1sen!2sin!4v1721017327971!5m2!1sen!2sin"></iframe></div>
        <div className='cbox meet'>
          <h2>Meet Us</h2>
          <span><FontAwesomeIcon icon="fa fa-phone-rotary" /> <p>+xxxxxxxxxx</p></span>
          <span><FontAwesomeIcon icon="fa fa-phone-rotary" /> <p>conatc@gmail.com</p></span>
          <span><FontAwesomeIcon icon="fa fa-phone-rotary" /> <p>location</p></span>
          
        </div>
        <div className='cbox dataa'>
        <form id="contact-form" action="/contact" method="post">
            <input type="text" id="name" name="name" placeholder='Enter Your Name'/>
            <input type="email" id="email" name="email" placeholder='Email'/>
            <input type="tel" id="phone" name="phone" placeholder='+91-xxxxxxxxxx'/>
            <textarea id="message" name="message" placeholder='Enter Description Here....'/>
            <input type="submit" value="Send"/>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contactus