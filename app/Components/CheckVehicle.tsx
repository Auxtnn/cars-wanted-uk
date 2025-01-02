"use client";
import React, { useState, FormEvent } from "react";

interface Errors {
  fullname: boolean;
  email: boolean;
  phone: boolean;
  vehicleno: boolean;
  postal: boolean;
}

const CheckForm: React.FC = () => {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [vehicleno, setVehicleno] = useState<string>("");
  const [postal, setPostal] = useState<string>("");

  const [errors, setErrors] = useState<Errors>({
    fullname: false,
    email: false,
    phone: false,
    vehicleno: false,
    postal: false,
  });
  const [buttonText, setButtonText] = useState<string>("Send Message");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showFailureMessage, setShowFailureMessage] = useState<boolean>(false);

  const handleValidation = (): boolean => {
    let tempErrors: Errors = {
      fullname: false,
      email: false,
      phone: false,
      vehicleno: false,
      postal: false,
    };
    let isValid: boolean = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }

    if (email.length <= 0 || !email.includes("@")) {
      tempErrors["email"] = true;
      isValid = false;
    }

    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    if (vehicleno.length <= 0) {
      tempErrors["vehicleno"] = true;
      isValid = false;
    }
    if (postal.length <= 0) {
      tempErrors["postal"] = true;
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
            phone: phone,
            vehicleno: vehicleno,
            postal: postal,
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
          setPhone("");
          setPostal("");
          setVehicleno("");
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
    <section
      className="text-gray-600 body-font relative bg-white md:pt-8 pt-12"
      id="checkyourvehicle"
    >
      <div className=" px-5 md:py-10 mx-auto flex gap-7 flex-col lg:w-11/12">
        <div className="w-full mx-auto md:text-center">
          <h2 className="lg:text-4xl font-extrabold text-2xl  capitalize mb-4">
            <span className="text-primary"> Check </span>
            your Vehicle
          </h2>
          <p className="text-lg text-gray-700 mx-auto">
            You can only apply for a grant payment to scrap or retrofit a
            vehicle that fails to meet the ULEZ emissions standards. Fill out
            the form below and we can help check that your vehicle satisfies the
            grant requirements.
          </p>
        </div>
        {/* Right section */}
        <div className="flex-1 border mb-6 border-primary p-4 rounded order-last">
          <div className="text-start mt-10 md:mt-0 text-primary text-lg font-extrabold tracking-wide">
            Get A Quote
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

              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                placeholder="Enter Your Contact Number"
                className={`w-full h-12 px-4 bg-white placeholder-gray-900 rounded-md border ${
                  errors.fullname ? "border-red-500" : "border-primary"
                } py-3 text-base shadow-one outline-none focus:border-gold focus-visible:shadow-none`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm ">
                  Please enter your contact number.
                </p>
              )}

              <input
                type="text"
                name="vehicleno"
                value={vehicleno}
                onChange={(e) => {
                  setVehicleno(e.target.value);
                }}
                placeholder="Enter Your Vehicle Number"
                className={`w-full h-12 px-4 bg-white placeholder-gray-900 rounded-md border ${
                  errors.vehicleno ? "border-red-500" : "border-primary"
                } py-3 text-base shadow-one outline-none focus:border-gold focus-visible:shadow-none`}
              />
              {errors.vehicleno && (
                <p className="text-red-500 text-sm ">
                  Please enter your vehicle number.
                </p>
              )}

              <input
                type="text"
                name="postal"
                value={postal}
                onChange={(e) => {
                  setPostal(e.target.value);
                }}
                placeholder="Enter Your Postal Code"
                className={`w-full h-12 px-4 bg-white placeholder-gray-900 rounded-md border ${
                  errors.postal ? "border-red-500" : "border-primary"
                } py-3 text-base shadow-one outline-none focus:border-gold focus-visible:shadow-none`}
              />
              {errors.postal && (
                <p className="text-red-500 text-sm ">
                  Please enter your postal code.
                </p>
              )}

              <textarea
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Other Info"
                className={`w-full h-32 px-4 bg-white placeholder:pt-2 placeholder-gray-900 rounded-md border border-primary
                 py-3 text-base shadow-one outline-none focus:border-gold focus-visible:shadow-none`}
              ></textarea>

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
          <p className="text-lg text-gray-800 mt-4 mx-auto">
            Note: ULEZ scrappage scheme details courtesy of Transport For
            London.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CheckForm;
