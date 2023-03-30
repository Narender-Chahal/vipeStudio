import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeroImage from "../assets/img/png/heroImage.png";
import trustpilotStar from "../assets/img/svg/trustpilotStar.svg";

const HeroSection = () => {
  return (
    <div className="bg-black d-flex flex-column align-items-center justify-content-center flex-grow-1">
      <Container className="py-md-4">
        <Row className="py-3 py-xl-5 align-items-center flex-column-reverse flex-lg-row">
          <Col className="my-3 my-xl-0" lg={6}>
            <h2 className="ff_konexy text-white  fw-normal fs_5xl mb-0 position-relative  line_content">
              WordPress Development Agency
            </h2>
            <p className="text-white fw-bold ff_Gilroy ff_GilroySemiBold fs_lg py-2 mb-0">
              for Enterprise + Friendly Team
            </p>
            <p className="  fs_sm clr_darkwhite fw-semibold ff_GilroyRegular mb-0 ">
              Vipe Studio is a WordPress Agency for development - a long-term
              partner for any WordPress service. Websites and,online shops
              development, maintenance and customization is what we do best.
            </p>
            <div className="mt-4 d-flex  flex-column flex-sm-row gap-3 justify-content-center justify-content-sm-start align-items-center">
              <div className="d-flex me-sm-4 ">
                <a
                  href="#"
                  className="heroBtn text-white fw-semibold  fs_sm ff_GilroySemiBold"
                >
                  Get Started
                </a>
              </div>
              <a href="#">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0C7.16429 0 0 7.16429 0 16C0 24.8357 7.16429 32 16 32C24.8357 32 32 24.8357 32 16C32 7.16429 24.8357 0 16 0ZM21.1464 16.2464L13.3464 21.9214C13.3037 21.9522 13.2533 21.9705 13.2008 21.9744C13.1482 21.9784 13.0957 21.9678 13.0488 21.9438C13.0019 21.9198 12.9626 21.8834 12.9351 21.8385C12.9075 21.7936 12.8929 21.7419 12.8929 21.6893V10.3464C12.8927 10.2937 12.9071 10.2419 12.9346 10.1968C12.962 10.1518 13.0014 10.1152 13.0484 10.0912C13.0954 10.0671 13.1481 10.0566 13.2007 10.0606C13.2533 10.0647 13.3037 10.0833 13.3464 10.1143L21.1464 15.7857C21.1833 15.8118 21.2133 15.8463 21.2341 15.8864C21.2548 15.9265 21.2657 15.9709 21.2657 16.0161C21.2657 16.0612 21.2548 16.1057 21.2341 16.1458C21.2133 16.1858 21.1833 16.2204 21.1464 16.2464Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="mb-0 fw-normal fs_sm clr_darkwhite ff_GilroyRegular ms-sm-3"
              >
                What is Vipe? (1min)
              </a>
            </div>
          </Col>
          <Col className="my-3 my-xl-0" lg={6}>
            <div className="position-relative z_4">
              <div className="bg_blur_pink position-absolute blur_position zn_1  "></div>
              <div className="bg_blur_blue position-absolute blue_position zn_1  "></div>
              <div className="bg_blur position-absolute bottom-0 start-0 ms-sm-3 mb-sm-3 px-3 py-2">
                <img src={trustpilotStar} alt="trustpilotStar" />
                <p className="mb-0 text-white mt-2 fs_sm fw-normal ff_josh">
                  Rated 5.0 Excellent
                </p>
              </div>
              <img src={HeroImage} className="w_xxl_100 " alt="HeroImage" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
