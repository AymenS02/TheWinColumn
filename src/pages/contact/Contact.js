import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center justify-start bg-[#AECDD9] m-10 p-8 rounded-3xl border-2 border-[#333738] shadow-lg">
        <h1 className="mt-10 text-3xl">Contact Us!</h1>
        <form className="flex flex-col min-w-[40vh] mt-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="inline-block w-[100px] mr-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full h-[2vh] p-2 border rounded"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="subject" className="inline-block w-[100px] mr-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="w-full h-[2vh] p-2 border rounded"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="inline-block w-[100px] mr-2">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="w-full h-[10vh] p-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-[#333738] text-[#e3dddd] border border-[#e3dddd] rounded-lg cursor-pointer transition-colors hover:bg-[#e3dddd] hover:text-[#333738] hover:border-[#333738]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
