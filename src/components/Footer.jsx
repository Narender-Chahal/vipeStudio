import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo_img from "../assets/img/png/logo.png";
import arrow_img from "../assets/img/png/arrow.png";
import phn_img from "../assets/img/png/phn.png";
import msg_img from "../assets/img/png/msg.png";
import home_img from "../assets/img/png/msg.png";
function Footer() {
  return (
    <div className="bg-black ">
      <section className=" pt-lg-5">
        <Container>
          <div className="pt-5 d-sm-flex align-items-center justify-content-between">
            <img src={logo_img} alt="logo_img" />
            <div className=" align-items-center d-flex justify-content-between input_box   ms-lg-5 mt-4 mt-sm-0">
              <input
                type="text"
                className="py-2 px-3 bg-white border-0 outline_none ff_GilroyRegular fw-normal fs_sm w-100 input_box clr_lightblack"
                placeholder="Search here...."
              />
              <a className="me-4" href="#">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.7"
                    d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                    stroke="#313131"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <Row className="justify-content-center">
            <Col lg={3} md={4} sm={6}>
              <h2 className="mb-0 fw-normal ff_GilroyRegular fs_sm text-white pt-5">
                Services
              </h2>
              <ul className="ps-0">
                <li className="d-flex  align-items-center pt-3">
                  <a href="#">
                    <img src={arrow_img} alt="arrow_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    WordPress Development
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-2 mt-1">
                  <a href="#">
                    <img src={arrow_img} alt="arrow_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    WooCommerce Development{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-2 mt-1">
                  <a href="#">
                    <img src={arrow_img} alt="arrow_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    WordPress Maintenance{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-2 mt-1">
                  <a href="#">
                    <img src={arrow_img} alt="arrow_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    Speed Optimization{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-2 mt-1">
                  <a href="#">
                    <img src={arrow_img} alt="arrow_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    Dedicated WordPress Developer{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-2 mt-1">
                  <a href="#">
                    <img src={arrow_img} alt="arrow_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    Headless WordPress Development{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-2 mt-1">
                  <a href="#">
                    <img src={arrow_img} alt="arrow_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    White Label Development{" "}
                  </a>
                </li>
              </ul>
            </Col>{" "}
            <Col lg={3} md={4} sm={6}>
              <h2 className="mb-0 fw-normal ff_GilroyRegular fs_sm text-white pt-sm-5 pt-3">
                Services
              </h2>
              <ul className="ps-0">
                <li className="d-flex  align-items-center pt-3">
                  <a href="#">
                    <img src={arrow_img} alt="arrow_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    WordPress Hosting{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-2 mt-1">
                  <a href="#">
                    <img src={arrow_img} alt="arrow_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    PSD, XD, Figma to WordPress Conversion{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-2 mt-1">
                  <a href="#">
                    <img src={arrow_img} alt="arrow_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    Custom WordPress Theme{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-2 mt-1">
                  <a href="#">
                    <img src={arrow_img} alt="arrow_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    Custom WordPress Plugins{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-2 mt-1">
                  <a href="#">
                    <img src={arrow_img} alt="arrow_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    CMS to WordPress{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-2 mt-1">
                  <a href="#">
                    <img src={arrow_img} alt="arrow_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    WordPress Malware Removal{" "}
                  </a>
                </li>
              </ul>
            </Col>{" "}
            <Col lg={3} md={4} sm={6}>
              <h2 className="mb-0 fw-normal ff_GilroyRegular fs_sm text-white pt-md-5 pt-3">
                Latest Articles
              </h2>
              <ul className="ps-0">
                <li className="d-flex  align-items-center pt-3">
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white "
                    href="#"
                  >
                    7 WordPress Plugins to Create an Effective Newsletter
                    03.01.2022{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-3 mt-1">
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white "
                    href="#"
                  >
                    What’s the Perfect Blog Post Length for Your WordPress
                    Site’s SEO? 02.01.2022{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-3 mt-1">
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white "
                    href="#"
                  >
                    5 Reasons the Future of WordPress Is Headless 01.01.2022{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-3 mt-1">
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white "
                    href="#"
                  >
                    Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the
                    Amazingly Successful 2021 30.12.2021{" "}
                  </a>
                </li>
              </ul>
            </Col>{" "}
            <Col lg={3} md={4} sm={6}>
              <h2 className="mb-0 fw-normal ff_GilroyRegular fs_sm text-white pt-lg-5 pt-3">
                Contact
              </h2>
              <ul className="ps-0">
                <li className="d-flex  align-items-center pt-3">
                  <a href="#">
                    <img src={phn_img} alt="phn_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    EU: +359 988 993 128{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-4 mt-1">
                  <a href="#">
                    <img src={phn_img} alt="phn_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    US: +1 (1 888) 266-6917{" "}
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-4 mt-1">
                  <a href="#">
                    <img src={msg_img} alt="msg_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    office@vipestudio.com
                  </a>
                </li>
                <li className="d-flex  align-items-center pt-4 mt-1">
                  <a href="#">
                    <img src={home_img} alt="home_img" />
                  </a>
                  <a
                    className="fw-normal ff_GilroyRegular fs_xsm text-white ps-2"
                    href="#"
                  >
                    14 Srebarna, Sofia 1407, Bulgaria{" "}
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>{" "}
      </section>
      <section className="pt-3 ">
        <div className="hr_line  mt-5 "></div>
        <Container>
          <div className="d-md-flex align-items-center justify-content-between pb-4">
            <div className="py-4">
              <p className="mb-0 ff_GilroyRegular fw-normal fs_xsm text-white  ">
                © Vipe Studio 2016-2022
              </p>
              <div className="d-flex align-items-center pt-3">
                {" "}
                <div className=" d-flex align-items-center ps-2">
                  <p className="mb-0 ff_GilroyRegular fw-normal fs_xsm text-white">
                    Privacy
                  </p>
                  <div className="small_line ms-2"></div>
                </div>
                <div className=" d-flex align-items-center ps-2">
                  <p className="mb-0 ff_GilroyRegular fw-normal fs_xsm text-white">
                    Careers
                  </p>
                  <div className="small_line ms-2"></div>
                </div>
                <div className=" d-flex align-items-center ps-2">
                  <p className="mb-0 ff_GilroyRegular fw-normal fs_xsm text-white">
                    Media
                  </p>
                  <div className="small_line ms-2"></div>
                </div>
                <p className="mb-0 ff_GilroyRegular fw-normal fs_xsm text-white ps-2">
                  Client Area{" "}
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <a
                  className="circle d-flex align-items-center justify-content-center"
                  href="#"
                >
                  <svg
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.42233 20.003C7.42233 20.899 7.43233 21.756 7.43833 22.288C7.43946 22.4166 7.48073 22.5417 7.55639 22.6457C7.63206 22.7496 7.73832 22.8274 7.86033 22.868C9.93833 23.554 12.1773 23.586 14.2743 22.959L14.5663 22.872C14.7038 22.8309 14.8245 22.7467 14.9105 22.6319C14.9966 22.517 15.0435 22.3776 15.0443 22.234C15.0493 21.501 15.0613 20.217 15.0613 18.704C15.0613 17.332 14.5843 16.454 14.0303 15.997C17.4293 15.631 21.0003 14.387 21.0003 8.77004C21.0003 7.16004 20.4083 5.86004 19.4343 4.83604C19.5873 4.47004 20.1223 2.97004 19.2813 0.958038C19.2813 0.958038 18.0013 0.555038 15.0803 2.45804C13.834 2.12722 12.5498 1.96114 11.2603 1.96404C9.96233 1.96404 8.66333 2.12904 7.44133 2.45804C4.52033 0.572038 3.24033 0.958038 3.24033 0.958038C2.40033 2.97004 2.93433 4.47004 3.08733 4.83604C2.06736 5.8898 1.50458 7.30359 1.52133 8.77004C1.52133 14.368 5.07333 15.63 8.47233 15.997C8.03333 16.363 7.63233 17.003 7.49933 17.954C6.62033 18.338 4.42433 18.96 3.04933 16.747C2.76333 16.307 1.90333 15.228 0.700334 15.247C-0.579666 15.265 0.184334 15.942 0.720334 16.217C1.36833 16.564 2.11333 17.863 2.28533 18.284C2.59133 19.107 3.58433 20.68 7.42233 20.004V20.003Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div className="ms-sm-3 ms-2">
                <a
                  className="circle d-flex align-items-center justify-content-center"
                  href="#"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 4.92188C3.60457 4.92188 4.5 4.02644 4.5 2.92188C4.5 1.81731 3.60457 0.921875 2.5 0.921875C1.39543 0.921875 0.5 1.81731 0.5 2.92188C0.5 4.02644 1.39543 4.92188 2.5 4.92188Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.0833333"
                    />
                    <path
                      d="M0.5 7.92188H4.5V20.4219H0.5V7.92188ZM8.5 12.6719V20.4219H12V13.4219C12 12.1719 12.75 11.1719 14 11.1719C15.25 11.1719 16 12.4219 16 13.4219V20.4219H19.5V12.6719C19.5 11.1719 17.75 7.92188 14 7.92188C10.25 7.92188 8.5 11.1719 8.5 12.6719Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.0833333"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="ms-sm-3 ms-2">
                <a
                  className="circle d-flex align-items-center justify-content-center"
                  href="#"
                >
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.6425 2.85895C22.8075 3.22895 21.9105 3.47895 20.9675 3.59195C21.9405 3.00974 22.6685 2.09342 23.0155 1.01395C22.1014 1.55694 21.1009 1.93915 20.0575 2.14395C19.3559 1.39482 18.4266 0.898278 17.4138 0.731426C16.4011 0.564574 15.3616 0.736743 14.4568 1.2212C13.5519 1.70567 12.8323 2.47531 12.4097 3.41066C11.9871 4.346 11.8851 5.3947 12.1195 6.39395C10.2672 6.30095 8.45515 5.8195 6.80095 4.98086C5.14674 4.14221 3.68736 2.96511 2.51752 1.52595C2.11752 2.21595 1.88752 3.01595 1.88752 3.86795C1.88708 4.63495 2.07596 5.3902 2.4374 6.06669C2.79885 6.74318 3.32168 7.31999 3.95952 7.74595C3.2198 7.72242 2.4964 7.52254 1.84952 7.16295V7.22295C1.84945 8.29869 2.22156 9.34133 2.90271 10.174C3.58386 11.0066 4.53209 11.5779 5.58652 11.791C4.90031 11.9767 4.18086 12.004 3.48252 11.871C3.78002 12.7966 4.35952 13.606 5.13989 14.1859C5.92026 14.7658 6.86244 15.0871 7.83452 15.105C6.18436 16.4004 4.14641 17.103 2.04852 17.1C1.6769 17.1001 1.3056 17.0784 0.936523 17.035C3.066 18.4041 5.54486 19.1308 8.07652 19.128C16.6465 19.128 21.3315 12.03 21.3315 5.87395C21.3315 5.67395 21.3265 5.47195 21.3175 5.27195C22.2288 4.61293 23.0154 3.79685 23.6405 2.86195L23.6425 2.85895Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div className="ms-sm-3 ms-2">
                <a
                  className="circle d-flex align-items-center justify-content-center"
                  href="#"
                >
                  <svg
                    width="11"
                    height="23"
                    viewBox="0 0 11 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.77006 22.9015V12.588H0.0429688V8.87466H2.77006V5.70298C2.77006 3.21065 4.38097 0.921875 8.09284 0.921875C9.59572 0.921875 10.707 1.06595 10.707 1.06595L10.6195 4.53358C10.6195 4.53358 9.48611 4.52255 8.24934 4.52255C6.91078 4.52255 6.69632 5.13941 6.69632 6.16324V8.87466H10.7259L10.5505 12.588H6.69632V22.9015H2.77006Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div className="ms-sm-3 ms-2">
                <a
                  className="circle d-flex align-items-center justify-content-center"
                  href="#"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0001 6.79767C8.2798 6.79767 6.87589 8.20158 6.87589 9.92189C6.87589 11.6422 8.2798 13.0461 10.0001 13.0461C11.7204 13.0461 13.1243 11.6422 13.1243 9.92189C13.1243 8.20158 11.7204 6.79767 10.0001 6.79767ZM19.3704 9.92189C19.3704 8.62814 19.3821 7.34611 19.3095 6.0547C19.2368 4.5547 18.8946 3.22345 17.7978 2.12658C16.6985 1.02736 15.3696 0.687514 13.8696 0.614857C12.5759 0.542201 11.2939 0.55392 10.0025 0.55392C8.7087 0.55392 7.42667 0.542201 6.13527 0.614857C4.63527 0.687514 3.30402 1.0297 2.20714 2.12658C1.10792 3.22579 0.76808 4.5547 0.695424 6.0547C0.622767 7.34845 0.634486 8.63048 0.634486 9.92189C0.634486 11.2133 0.622767 12.4977 0.695424 13.7891C0.76808 15.2891 1.11027 16.6203 2.20714 17.7172C3.30636 18.8164 4.63527 19.1563 6.13527 19.2289C7.42902 19.3016 8.71105 19.2899 10.0025 19.2899C11.2962 19.2899 12.5782 19.3016 13.8696 19.2289C15.3696 19.1563 16.7009 18.8141 17.7978 17.7172C18.897 16.618 19.2368 15.2891 19.3095 13.7891C19.3845 12.4977 19.3704 11.2156 19.3704 9.92189ZM10.0001 14.7289C7.33995 14.7289 5.19308 12.582 5.19308 9.92189C5.19308 7.26173 7.33995 5.11486 10.0001 5.11486C12.6603 5.11486 14.8071 7.26173 14.8071 9.92189C14.8071 12.582 12.6603 14.7289 10.0001 14.7289ZM15.004 6.04064C14.3829 6.04064 13.8814 5.53908 13.8814 4.91798C13.8814 4.29689 14.3829 3.79533 15.004 3.79533C15.6251 3.79533 16.1267 4.29689 16.1267 4.91798C16.1269 5.06546 16.0979 5.21153 16.0416 5.34782C15.9852 5.48411 15.9026 5.60795 15.7983 5.71223C15.694 5.81652 15.5701 5.89921 15.4339 5.95556C15.2976 6.01191 15.1515 6.04082 15.004 6.04064Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div className="ms-sm-3 ms-2">
                <a
                  className="circle d-flex align-items-center justify-content-center"
                  href="#"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.891 5.70983C18.614 7.03227 18.992 8.51564 18.99 10.0228C18.9904 11.5961 18.5777 13.1418 17.7933 14.5056C17.0089 15.8693 15.8801 17.0032 14.52 17.7938L17.266 9.85483C17.779 8.57283 17.95 7.54583 17.95 6.63583C17.9504 6.32621 17.9307 6.0169 17.891 5.70983ZM11.24 5.79683C11.583 5.77996 11.9252 5.75061 12.266 5.70883C12.751 5.64583 12.694 4.93383 12.21 4.95983C12.21 4.95983 10.747 5.07183 9.81 5.07183C8.923 5.07183 7.435 4.94683 7.435 4.94683C6.948 4.92283 6.885 5.65983 7.374 5.68483C7.374 5.68483 7.823 5.73683 8.312 5.75983L9.711 9.59783L7.736 15.4968L4.462 5.77283C4.80543 5.75556 5.14825 5.72788 5.49 5.68983C5.977 5.62683 5.92 4.91483 5.435 4.94283C5.435 4.94283 3.98 5.05783 3.04 5.05783C2.873 5.05783 2.675 5.05083 2.465 5.04483C4.093 2.64783 6.862 1.03483 10 1.03483C12.341 1.03483 14.471 1.92883 16.071 3.39483C16.033 3.39283 15.995 3.38683 15.954 3.38683C15.071 3.38683 14.444 4.15683 14.444 4.98283C14.444 5.72383 14.871 6.35183 15.327 7.09083C15.67 7.69183 16.069 8.46083 16.069 9.57183C16.069 10.3348 15.774 11.2338 15.384 12.4708L14.488 15.4578L11.238 5.78283L11.24 5.79683ZM10 19.0088C9.14028 19.0097 8.28489 18.8871 7.46 18.6448L10.157 10.8068L12.92 18.3788C12.941 18.4228 12.962 18.4638 12.985 18.5028C12.0258 18.8392 11.0165 19.011 10 19.0108V19.0088ZM1.01 10.0228C1.00854 8.76228 1.27368 7.51568 1.788 6.36483L6.075 18.1138C4.55646 17.3765 3.27611 16.2267 2.38039 14.7958C1.48468 13.365 1.00978 11.7109 1.01 10.0228ZM10 0.0228271C4.487 0.0228271 0 4.50983 0 10.0228C0 15.5358 4.487 20.0228 10 20.0228C15.513 20.0228 20 15.5358 20 10.0228C20 4.50983 15.513 0.0228271 10 0.0228271Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Footer;
