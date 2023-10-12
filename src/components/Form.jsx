import React, { useState } from 'react';
import styles from '../style';
import Sib from "sib-api-v3-sdk";

function Form() {

  var defaultClient = Sib.ApiClient.instance;
  var apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = 'API_KEY_GOES_HERE';

  const formMessage = document.querySelector('#form_message');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formMessage.innerHTML = "Thank you, we will be in touch soon!";
    // Begin Send Email to contact@virtualbluetechnologies.com

      const tranEmailApi = new Sib.TransactionalEmailsApi()

      const sender = {
          email: formData.email,
          name: formData.name,
      }

      const receivers = [
          {
              email: 'contact@virtualbluetechnologies.com',
          },
      ];

      tranEmailApi.sendTransacEmail({
        sender,
        to: receivers,
        subject: 'Virual Blue Technologies Quote Form',
        textContent: 'Name: ' + formData.name + '\nPhone:' + formData.phone + ' \nProduct: ' + formData.product + ' \nMessage:' + formData.message,
        params: {
            role: 'Frontend',
        },
    })
    .then(console.log)
    .catch(console.log)
      // End Send Email

  };

  return (
    <form className="p-8 bg-black-gradient rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gradient font-bold mb-2" htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        />
      </div>
      <div>
        <label className="block text-gradient font-bold mb-2" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        />
      </div>
      <div>
        <label className="block text-gradient font-bold mb-2" htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        />
      </div>
      <div>
        <label className="block text-gradient font-bold mb-2" htmlFor="produt">Product / Services:</label>
        <select 
          size="1"
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        >
          <option value="Other">-- What are you interested in? --</option>
          <option value="application">Custom Web3 Applications</option>
          <option value="Consulting">Consulting</option>
          <option value="cto">Remote CTO Services</option>
        </select>
      </div>
      <div>
        <label className="block text-gradient font-bold mb-2" htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-40"
        />
      </div>
      <br className="sm:block hidden" />
      <div id="form_message" className="block text-message-gradient font-bold mb-2"></div>
      <button type="submit" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>Submit</button>
    </form>
  );
  
}

export default Form;