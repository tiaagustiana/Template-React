import React from 'react'
import { toast, Zoom } from 'react-toastify'
import { motion } from 'motion/react';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "5a6267d1-0ad6-4a92-8279-039273f4c913");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully", {transition: Zoom});
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <motion.div 
    initial={{ opacity:0, y: -100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text:4xl text-center font-bold mb-2'>Contact
            <span className='underline underline-offset-4 decoration-1 under font-light'> With Us</span>
        </h1>
        <p className='text-gray-500 max-w-80 mx-auto text-center mb-8'>Ready to make a Move? Let&apos;s 
        Build Your Future Together.
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-center text-gray-600 pt-8'>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
            <input type='hidden' name='from_name' value='BimaMediaGlobal' />
              Your Name
              <input type='text' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-blue-500' name='Name' placeholder='Your Name' required />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
              Your Email
              <input type='email' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-blue-500' name='Email' placeholder='Your Email' required />
            </div>
          </div>
          <div className='my-6 text-left'>
            Message
            <textarea name='Message' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none focus:outline-blue-500' placeholder='Your Message' required></textarea>
          </div>
          <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>
            {result ? result : "Send Message"}
          </button>
        </form>
    </motion.div>
  )
}

export default Contact