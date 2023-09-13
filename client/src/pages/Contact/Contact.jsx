import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link} from "react-router-dom";
import SectionSubtitle from "../../components/SectionSubtitle";
import "./styles.css";
import { saveContactMessage } from "../../actions/contact";

import axios from "axios";
import { useState } from "react";
import { RiYoutubeFill, RiGithubFill, RiInstagramFill,RiMap2Line, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  const {submitted}=useSelector(state=>state.gallery);
  const dispatch= useDispatch();
  const [contactDetails,setContactDetails]=useState({
    name:"",
    email:"",
    message:""
  })
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(saveContactMessage(contactDetails));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact" style={{ paddingBottom: "60px" }}>
      <Container>
        <Row className="flex justify-between flex-col md:flex-row ">
          <Col lg="4" md="6">

            <h3 className="mt-4 mb-4 text-2xl">Connect with us</h3>

            <ul style={{
              listStyle: "none",
              paddingLeft: "0",
              marginTop: "40px",
            }}>
              <li className="info__item">
                <span>
                  <i className="ri-map-pin-line"></i>
                  {/* <RiMap2Line /> */}
                </span>
                <p>Planet Earth 🌍</p>
              </li>
              <li className="info__item">
                <span>
                  <a href="mailto:chaudharysuraj2252@gmail.com">
                    <i className="ri-mail-line"></i>
                  </a>
                </span>
                <p>
                  <a href="mailto:chaudharysuraj2252@gmail.com">
                    chaudharysuraj2252@gmail.com
                  </a>
                </p>
              </li>
            </ul>

            <div className="social__links">
              <Link
                className="hover:text-[#01d293] duration-300"
                aria-label="Youtube Channel"
                href="https://youtube.com/@piyushgargdev"
                target="_blank"
              >
                <RiYoutubeFill />
              </Link>
              <Link
                className="hover:text-[#01d293] duration-300"
                aria-label="Instagram Profile"
                href=""
                target="_blank"
              >
                <RiInstagramFill />
              </Link>
              <Link
                className="hover:text-[#01d293] duration-300"
                aria-label="Twitter Account"
                href=""
                target="_blank"
              >
                <RiTwitterFill />
              </Link>
              <Link
                className="hover:text-[#01d293] duration-300"
                aria-label="LinedIn Account"
                href=""
                target="_blank"
              >
                <RiLinkedinFill />
              </Link>
            </div>
          </Col>
          <Col lg="5" md="6">
            {submitted ? (
              <div className="flex justify-center items-center text-xl font-bold h-[30vh]">
                <p>Message Sent!</p>
              </div>
            ) : (
              <>
                <div className="mt-4 mb-4 text-2xl"><SectionSubtitle subtitle="Contact Us" /></div>

                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                  <input
                    className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white"
                    type="text"
                    name="name"
                    onChange={(e)=>{setContactDetails({...contactDetails,name:e.target.value})}}
                    value={contactDetails.name}
                    placeholder="Your Full Name"
                    required
                    autoComplete="off"
                  />
                  <input
                    className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white"
                    type="email"
                    name="email"
                    value={contactDetails.email}
                    onChange={(e)=>{setContactDetails({...contactDetails,email:e.target.value})}}
                    placeholder="Your Email"
                    required
                    autoComplete="off"
                  />
                  <textarea
                    className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white"
                    name="message"
                    value={contactDetails.message}
                    onChange={(e)=>{setContactDetails({...contactDetails,message:e.target.value})}}

                    placeholder="Your Message"
                    required
                    rows="4"
                    autoComplete="off"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </Col>
        </Row>
      </Container>

    </section>
  );
};

export default Contact;
