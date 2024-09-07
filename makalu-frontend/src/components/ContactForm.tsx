"use client"
import { url } from '@/lib/api';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   if(formData.name === "" || formData.email === "" || formData.message === ""){
    return alert("please fill the form completely")
   }
    try {
      const response = await fetch(`${url}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message');
    }
  };

  return (
    <form className="max-w-2xl mx-auto mt-8 space-y-8" onSubmit={handleSubmit}>
          <div data-aos="fade-up"  data-aos-duration="8000">
            <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
            <input type="text" id="name" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" value={formData.name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setFormData({...formData,name:e.target.value})} />
          </div>
          <div data-aos="fade-up"  data-aos-duration="6000">
            <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
            <input type="email" id="email" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" value={formData.email} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setFormData({...formData,email:e.target.value})} />
          </div>
          <div data-aos="fade-up"  data-aos-duration="2000">
            <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
            <textarea id="message" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"value={formData.message} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>setFormData({...formData,message:e.target.value})}></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"data-aos="fade-up"  data-aos-duration="3000">Send Message</button>
        </form>
  );
};

export default ContactForm;
