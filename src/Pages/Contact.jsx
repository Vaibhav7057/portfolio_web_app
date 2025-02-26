import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0u7nhoy",
        "template_7ngmwhi",
        form.current,
        "h8a04V2f5ZlMJKcPQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong!");
        }
      );
  };

  return (
    <div id="contact" className="bg-white dark:bg-darkbg2">
      <Toaster />
      <div className="flex flex-col md:flex-row px-10 py-3 pt-16 ">
        <div className=" flex-1 pt-6 mb-14 sm:mb-0 ">
          <h3 className="text-[28px] md:text-[2vmax] font-bold text-favtext dark:text-darkt1">
            Get in Touch
          </h3>
          <h3 className="text-[28px] md:text-[2vmax] font-bold text-dor">
            Contact Me
          </h3>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row mt-24 gap-5">
            <div className="flex dark:shadow-darkt3 dark:bg-darkt1 px-4 py-3 shadow-xl border-2 rounded-lg border-slate-200 gap-5 cursor-pointer sm:justify-start sm:items-center items-center hover:scale-105 transition-all">
              <img src="/images/email.png" alt="email" className="w-[40px]" />
              <a
                href="mailto:vaibhavgedmavg.vg@gmail.com"
                className="font-medium"
              >
                vaibhavgedamvg.vg @gmail.com
              </a>
            </div>
            <div className="flex dark:shadow-darkt3 dark:bg-darkt1 px-4 py-3 shadow-xl border-2 rounded-lg border-slate-200 gap-7 cursor-pointer sm:justify-start sm:items-center items-center hover:scale-105 transition-all">
              <img
                src="/images/whatsapp.png"
                alt="whatsapp"
                className="w-[40px]"
              />
              <a
                href="https://wa.me/919923870977"
                target={"_blank"}
                rel="noreferrer"
                className="font-medium "
              >
                +91 9923870977
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 py-10 pb-28 ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-1  items-center "
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              name="user_name"
              className="w-full sm:w-[80%] py-2 px-3 rounded-lg outline-none bg-[#d1deec8a] dark:bg-darkt2 "
            />
            <br />
            <input
              type="email"
              required
              placeholder="Your Email"
              name="user_email"
              className="w-full sm:w-[80%] py-2 px-3 rounded-lg outline-none bg-[#d1deec8a] dark:bg-darkt2 "
            />
            <br />
            <textarea
              name="message"
              required
              cols="30"
              rows="6"
              placeholder="Your Message"
              className="w-full sm:w-[80%] py-2 px-3 rounded-lg outline-none bg-[#d1deec8a] dark:bg-darkt2 "
            />
            <br />
            <button className="transition-all hover:scale-[107%] mt-5 text-white font-medium px-5 py-1.5 rounded-full  bg-gradient-to-r from-yellow-500  to-dor hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
