import React from 'react'
import './Footer.css'

import GS_surgical from './data/GS_surgical.jpeg'

import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Footer = () => {
  return (

    <footer className='footer'>

      {/* TOP AREA */}
      <div className='footer_top'>

        <img
          src={GS_surgical}
          alt=""
          className='footer_logo'
        />

        <h1 className='footer_company'>
          GS Surgical
        </h1>

        <p className='footer_desc'>
          Trusted supplier of medical and surgical equipment,
          delivering quality healthcare solutions with reliability
          and customer satisfaction.
        </p>

      </div>



      {/* CONTACT INFO */}
      <div className='footer_contact'>

        <div className='footer_item'>
          <FaMapMarkerAlt className='footer_icon' />

          <p>
            Our office will open soon in Bhagirath Palace
          </p>
        </div>



        <div className='footer_item'>
          <FaPhoneAlt className='footer_icon' />

          <a href='tel:+918002445408'>
            +91 8002445408
          </a>
          <p>Sagar kumar (Proprietor)</p>
        </div>



        <div className='footer_item'>
          <FaWhatsapp className='footer_icon' />

          <a
            href='https://wa.me/918002445408'
            target='_blank'
            rel='noreferrer'
          >
            Chat on WhatsApp
          </a>
        </div>



        <div className='footer_item'>
          <FaEnvelope className='footer_icon' />

          <a href='mailto:gssurgical17@gmail.com'>
            gssurgical17@gmail.com
          </a>
        </div>

      </div>



      {/* BOTTOM */}
      <div className='footer_bottom'>

        <p>
          © 2026 GS Surgical. All Rights Reserved.
        </p>

        <span>
          Designed by Sagar Kumar
        </span>

      </div>

    </footer>

  )
}

export default Footer