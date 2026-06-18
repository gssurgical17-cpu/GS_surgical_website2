import React from 'react'
import './About.css'

const About = () => {
  return (

    <section className='about_section'>

      {/* TOP TITLE */}
      <div className='about_title_box'>
        <h1 className='about_title'>
          Company Profile
        </h1>
      </div>

      {/* MAIN CARD */}
      <div className='about_card'>

        <h2 className='company_name'>
          GS Surgical
        </h2>

        <p className='about_text'>
          GS Surgical, based in India, is a trusted supplier and provider of
          high quality medical and surgical equipment designed to meet the
          growing needs of hospitals, clinics, laboratories, and healthcare
          professionals.

          <br /><br />

          The company is committed to delivering reliable healthcare
          solutions, offering a wide range of surgical instruments,
          hospital equipment, medical devices, and healthcare essentials.

          <br /><br />

          At GS Surgical, we focus on quality, reliability, and customer
          satisfaction by collaborating with trusted manufacturers and
          ensuring that every product meets high industry standards.

          <br /><br />

          Our goal is to provide durable, efficient, and cost effective
          medical solutions that support better patient care and smooth
          healthcare operations.

          <br /><br />

          With a customer focused approach, GS Surgical emphasizes timely
          delivery, competitive pricing, and dependable after sales support.
          Our dedication to excellence and long term relationships makes us
          a reliable partner for healthcare institutions seeking quality
          medical and surgical products.
        </p>

      </div>

    </section>

  )
}

export default About