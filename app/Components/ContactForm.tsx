"use client";
import React, { useState, FormEvent } from "react";

interface Errors {
  fullname: boolean;
  email: boolean;
  message: boolean;
}

const ContactForm: React.FC = () => {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [errors, setErrors] = useState<Errors>({
    fullname: false,
    email: false,
    message: false,
  });
  const [buttonText, setButtonText] = useState<string>("Send Message");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showFailureMessage, setShowFailureMessage] = useState<boolean>(false);

  const handleValidation = (): boolean => {
    let tempErrors: Errors = { fullname: false, email: false, message: false };
    let isValid: boolean = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }

    if (email.length <= 0 || !email.includes("@")) {
      tempErrors["email"] = true;
      isValid = false;
    }

    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    let isValidForm: boolean = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");

      try {
        const response = await fetch("", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            fullname: fullname,
            message: message,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (response.ok) {
          setEmail("");
          setFullname("");
          setMessage("");
          setShowSuccessMessage(true);
          setShowFailureMessage(false);
        } else {
          throw new Error("Error sending email");
        }
      } catch (error) {
        console.error(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
      }

      setButtonText("Send Message");
    }
  };
  return (
    <section className="text-gray-600 body-font relative bg-white md:pt-8 pt-12">
      <div className=" px-5 md:py-10 mx-auto flex md:flex-row gap-7 flex-col lg:w-11/12">
        {/* Left section */}
        <div className="rounded-lg w-full md:w-1/2 ">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            className=" w-full h-full border-none outline-none"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.011410645244!2d0.2076449758180465!3d51.549689771822955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8baddbd263c59%3A0x617c2b4e0281bf57!2s16%20Hunter%20Dr%2C%20Hornchurch%20RM12%205TS%2C%20UK!5e0!3m2!1sen!2sus!4v1735821543504!5m2!1sen!2sus"
            allowFullScreen={true}
          ></iframe>
        </div>
        {/* Right section */}
        <div className="flex-1 border border-primary p-4 rounded order-first md:order-last">
          <div className="text-start mt-10 md:mt-0 text-gold text-lg font-extrabold tracking-wide">
            Send Us a Message
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mt-6 space-y-4 w-full">
              <input
                type="text"
                name="fullname"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                placeholder="Enter Your Name"
                className={`w-full h-12 px-4 bg-white placeholder-gray-900 rounded-md border ${
                  errors.fullname ? "border-red-500" : "border-primary"
                } py-3 text-base shadow-one outline-none focus:border-gold focus-visible:shadow-none`}
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm ">Please enter your name.</p>
              )}

              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Your Email"
                className={`w-full h-12 px-4 bg-white placeholder-gray-900 rounded-md border ${
                  errors.email ? "border-red-500" : "border-primary"
                } py-3 text-base shadow-one outline-none focus:border-gold focus-visible:shadow-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  Please enter a valid email.
                </p>
              )}

              <textarea
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Write Your Message"
                className={`w-full h-32 px-4 bg-white placeholder:pt-2 placeholder-gray-900 rounded-md border ${
                  errors.message ? "border-red-500" : "border-primary"
                } py-3 text-base shadow-one outline-none focus:border-gold focus-visible:shadow-none`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">
                  Please enter your message.
                </p>
              )}

              {showSuccessMessage && (
                <p className="text-green-500 text-sm">
                  Message sent successfully!
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red-500 text-sm">
                  Failed to send message. Please try again.
                </p>
              )}

              <button
                type="submit"
                className="mt-2 h-12 px-8 bg-primary text-white hover:text-primary hover:bg-transparent hover:border-primary border border-primary rounded-md focus:outline-none"
                disabled={buttonText === "Sending..."} // Disable button when sending
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
