import React from 'react';

const GoogleMap = () => {
  return (
    <div style={{ width: '100%', height: '500px' }} className='mt-8 border-none'>
      <iframe
        title="Makalu English Boarding School"
        width="100%"
        height="100%"
        style={{ border: '0' }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.152703415486!2d87.24843607674995!3d26.671822099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c832de953ab%3A0xb5966409c486bfe6!2sMakalu%20English%20Boarding%20School!5e0!3m2!1sen!2snp!4v1690933320541!5m2!1sen!2snp"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
