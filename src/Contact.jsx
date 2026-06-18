import React, { useState } from 'react'
import './Contact.css'

import emailjs from '@emailjs/browser'
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaSms
} from 'react-icons/fa'

const Contact = () => {

  const [message, setMessage] = useState('')
  const [mobile, setMobile] = useState('')
  const [countryCode, setCountryCode] = useState('+91')



  // SEND EMAIL
  const handleSend = (e) => {

    e.preventDefault()


    // MOBILE VALIDATION
    if (!mobile) {
      alert('Please enter your mobile number')
      return
    }


    // EMAIL DATA
    const templateParams = {

      country_code: countryCode,

      mobile_number: mobile,

      message: message || 'No message entered'

    }


    // EMAILJS
    emailjs.send(

      'service_z2cibac',
      'template_fxog1pp',
      templateParams,
      'PIKL-LoM81tcHSa0J'

    )

    .then(() => {

      alert('Request sent successfully')

      setMessage('')
      setMobile('')

    })

    .catch(() => {

      alert('Something went wrong')

    })

  }



  // AUTO TEXT
  const handleQuotation = () => {
    setMessage(
      'Hello GS Surgical, I want to get a quotation for medical products.'
    )
  }

  const handlePriceList = () => {
    setMessage(
      'Hello GS Surgical, please send me your latest product price list.'
    )
  }

  const handleDeals = () => {
    setMessage(
      'Hello GS Surgical, I am looking for the best deals and offers.'
    )
  }



  return (

    <section className='contact_section'>

      <div className='contact_top'>

        <h1 className='main_heading'>
          Send Your Requirement
        </h1>

        <p className='main_para'>
          Contact us for medical and surgical products.
        </p>

      </div>



      {/* CARD */}
      <div className='contact_card'>

        <h2 className='contact_title'>
          Contact Us
        </h2>



        {/* BUTTONS */}
        <div className='tags'>

          <button onClick={handleQuotation}>
            Get Quotation
          </button>

          <button onClick={handlePriceList}>
            Price List
          </button>

          <button onClick={handleDeals}>
            Best Deals
          </button>

        </div>



        {/* TEXTAREA */}
        <textarea

          className='message_box'

          placeholder='Enter your requirement details'

          value={message}

          onChange={(e) => setMessage(e.target.value)}

        ></textarea>



        {/* INPUT ROW */}
        <div className='input_row'>


          {/* COUNTRY CODE */}
          <select

            className='country_select'

            value={countryCode}

            onChange={(e) => setCountryCode(e.target.value)}

          >

            <option value="+91">🇮🇳 +91</option>

            <option value="+1">🇺🇸 +1</option>

            <option value="+44">🇬🇧 +44</option>

            <option value="+971">🇦🇪 +971</option>

            <option value="+61">🇦🇺 +61</option>

            <option value="+92">🇵🇰 +92</option>

            <option value="+880">🇧🇩 +880</option>

          </select>



          {/* MOBILE */}
          <input

            type="number"

            placeholder='Mobile Number'

            className='mobile_input'

            value={mobile}

            onChange={(e) => setMobile(e.target.value)}

          />

        </div>



        {/* SEND BTN */}
        <button

          className='send_btn'

          onClick={handleSend}

        >

          Send Now

        </button>

      </div>
      
        {/* CONTACT ACTION BUTTONS */}

<div className='contact_actions'>

  {/* SMS */}
  <a
    href='sms:+918002445408'
    className='action_card'
  >
    <FaSms className='action_icon' />
    <p>SMS</p>
  </a>



  {/* WHATSAPP */}
  <a
    href='https://wa.me/918002445408'
    target='_blank'
    rel='noreferrer'
    className='action_card'
  >
    <FaWhatsapp className='action_icon' />
    <p>WhatsApp</p>
  </a>



  {/* EMAIL */}
  <a
    href='mailto:gssurgical@gmail.com'
    className='action_card'
  >
    <FaEnvelope className='action_icon' />
    <p>Email</p>
  </a>



  {/* CALL */}
  <a
    href='tel:+918002445408'
    className='action_card'
  >
    <FaPhoneAlt className='action_icon' />
    <p>Call</p>
  </a>

</div>


    </section>

  )
}

export default Contact