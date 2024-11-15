import React, { useEffect, useState } from "react";
import Layout from "../components/container/layout";

// import { toast } from "react-toastify";

import { useFormik } from "formik";
import * as Yup from "yup";
import { PageTye, useGlobalContext } from "../context/useGlobalContext";
import emailjs from "@emailjs/browser";
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
import {
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { toast } from "react-toastify";

type Formd = {
  firstName: string;
  message: string;
  email: string;
  phone: string;
};

const Contact: React.FC = () => {
  const { setpageType, contactInfo } = useGlobalContext();

  const [isAboveMediumScreens, setIsAboveMediumScreens] = useState<boolean>(
    window.innerWidth >= 1060
  );

  useEffect(() => {
    const handleResize = () => {
      setIsAboveMediumScreens(window.innerWidth >= 1060);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
    setpageType(PageTye.contact);
  }, []);

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      message: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Must be more than 2 character")
        .required("Please enter your name"),
      message: Yup.string()
        .min(5, "Must be more than 2 character")
        .required("Your message can't be empty"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
      phone: Yup.string()
        .min(5, "Must be more than 10 character")
        .required("Please enter your phone number"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      sendEmail(values);
    },
  });

  const sendEmail = (values: Formd) => {
    const { firstName, message, email, phone } = values;

    setLoading(true);

    emailjs
      .send(
        "service_chenl7r",
        "template_73wmvqe",
        {
          email,
          from_name: firstName,
          phone: phone,
          message,
        },
        "iFthpcfM2-hGNnZIk"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          toast.success("Email Sent Successfully!");
          formik.resetForm();
        },
        function (error) {
          console.log("FAILED...", error);
          setLoading(false);
          toast.error("Email Fail to send. Try again later");
        }
      );
  };

  return (
    <Layout bannerTitle="Contact">
      <>
        <section className="center py-20">
          <div className=" mb-24">
            <div className="">
              <p className="  text-4xl text-center  font-semibold">
                Let's get in touch.
              </p>
            </div>

            <div className="grid gap-16 my-16 md:grid-cols-2 xl:gap-0 xl:grid-cols-4">
              <div className="flex flex-col items-center text-white text-center p-6 lg:rounded-l-xl bg-[#c54e02] gap-4 ">
                <BuildingOffice2Icon className="h-16" />

                <p className="text-base font-medium">Head Office</p>
                <p>
                  Maayoit Healthcare Complex, Opp. GSS, old Jebba Rd, Ilorin,
                  Kwara State.
                </p>
              </div>
              <div className="flex flex-col items-center text-white text-center p-6   bg-primary gap-4 ">
                <PhoneIcon className="h-16" />

                <p className="text-base font-medium">Phone Number</p>
                <p>{contactInfo.contactPhone}</p>
                <p>{contactInfo.contactPhone2}</p>
              </div>
              <div className="flex flex-col items-center text-white text-center p-6   bg-[#c54e02] gap-4 ">
                <EnvelopeIcon className="h-16" />

                <p className="text-base font-medium">Email Address</p>
                <p>{contactInfo?.contactEmail}</p>
              </div>
              <div className="flex flex-col items-center text-white text-center p-6 lg:rounded-r-xl  bg-primary gap-4 ">
                <ClockIcon className="h-16" />

                <p className="text-base font-medium">Opening Hours</p>

                <p>Monday - Friday</p>
                <p>9am - 5pm</p>
              </div>
            </div>
          </div>

          <div className="grid gap-16 xl:gap-0 xl:grid-cols-2">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15784.365027720218!2d4.57276074867623!3d8.490507874807939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364d7795564c15%3A0xa77efbf78223398d!2sMaayoit%20Healthcare%20Limited!5e0!3m2!1sen!2sng!4v1721143979771!5m2!1sen!2sng"
                width={isAboveMediumScreens ? "90%" : "100%"}
                height="750"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="">
              <p className="font-medium text-lg mb-6">
                Got questions? <br /> Reach out to us
              </p>

              <div className="shadow-lg px-3 py-6 sm:p-6 xl:p-9 rounded bg-[#eff1f1]">
                <form
                  className="flex flex-col gap-5 "
                  onSubmit={formik.handleSubmit}
                >
                  <div className="flex flex-col">
                    <label className="text-sm mb-1" htmlFor="firstName">
                      Your Name
                    </label>
                    <input
                      id="firstName"
                      className="border-[#eee] p-3 rounded border-2 outline-none"
                      type="text"
                      {...formik.getFieldProps("firstName")}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="text-red-500 py-2 text-sm font-medium">
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="border-[#eee] p-3 rounded border-2 outline-none"
                      type="email"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 py-2 text-sm font-medium">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      className="border-[#eee] p-3 rounded border-2 outline-none"
                      type="number"
                      {...formik.getFieldProps("phone")}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-red-500 py-2 text-sm font-medium">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="border-[#eee] p-3 rounded border-2 outline-none"
                      rows={6}
                      {...formik.getFieldProps("message")}
                    />
                    {formik.touched.message && formik.errors.message ? (
                      <div className="text-red-500 py-2 text-sm font-medium">
                        {formik.errors.message}
                      </div>
                    ) : null}
                  </div>
                  <div className=" ">
                    <button
                      disabled={loading}
                      type="submit"
                      className="bg-primary py-4 px-8  font-semibold w-48 text-sm  text-white"
                    >
                      {loading ? "Loading..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Contact;
