import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tickImage from "../assets/img/svg/tickImage.svg";
import girlImage from "../assets/img/png/girlImage.png";
import rightImage from "../assets/img/svg/rightImage.svg";
const AllVipeStudio = () => {
  return (
    <>
      <div className="bg-black pb-5 overflow-hidden">
        <Container>
          <Row className="py-5">
            <Col className="my-3 my-lg-0" lg={5}>
              <h2 className="ff_konexy fw-normal text-white fs_3xl mb-0">
                All Vipe Studio WordPress services include:
              </h2>
            </Col>
            <Col className="my-3 my-lg-0" lg={7}>
              <Row className="align-items-center">
                <Col sm={6} lg={6}>
                  <h5 className="text-white ff_GilroySemiBold fw-semibold fs_lg">
                    By Industry
                  </h5>
                  <div className="d-flex align-items-center mt-3 mt-lg-4">
                    <img src={tickImage} width={30} alt="tickImage" />
                    <p className="mb-0 text-white ff_GilroyRegular fw-normal ms-2 fs_sm">
                      Lorem in elementum pellentesque
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-2 ">
                    <img src={tickImage} width={30} alt="tickImage" />
                    <p className="mb-0 text-white ff_GilroyRegular fw-normal ms-2 fs_sm">
                      Molestie cursus praesent mi
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-2 ">
                    <img src={tickImage} width={30} alt="tickImage" />
                    <p className="mb-0 text-white ff_GilroyRegular fw-normal ms-2 fs_sm">
                      Leo sed viverra cras
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-2 ">
                    <img src={tickImage} width={30} alt="tickImage" />
                    <p className="mb-0 text-white ff_GilroyRegular fw-normal ms-2 fs_sm">
                      Laoreet feugiat ut at
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-2 ">
                    <img src={tickImage} width={30} alt="tickImage" />
                    <p className="mb-0 text-white ff_GilroyRegular fw-normal ms-2 fs_sm">
                      Risus aliquam molestie viverra
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-2 ">
                    <img src={tickImage} width={30} alt="tickImage" />
                    <p className="mb-0 text-white ff_GilroyRegular fw-normal ms-2 fs_sm">
                      Diam enim pulvinar velit
                    </p>
                  </div>
                </Col>
                <Col className="mt-4 mt-sm-0" sm={6} lg={6}>
                  <h5 className="text-white ff_GilroySemiBold fw-semibold fs_lg">
                    By Services
                  </h5>
                  <div className="d-flex align-items-center mt-3 mt-lg-4 ">
                    <img src={tickImage} width={30} alt="tickImage" />
                    <p className="mb-0 text-white ff_GilroyRegular fw-normal ms-2 fs_sm">
                      Accumsan, dui a semper
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-2 ">
                    <img src={tickImage} width={30} alt="tickImage" />
                    <p className="mb-0 text-white ff_GilroyRegular fw-normal ms-2 fs_sm">
                      Interdum malesuada vulputate neque
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-2 ">
                    <img src={tickImage} width={30} alt="tickImage" />
                    <p className="mb-0 text-white ff_GilroyRegular fw-normal ms-2 fs_sm">
                      Nullam non a, morbi
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-2 ">
                    <img src={tickImage} width={30} alt="tickImage" />
                    <p className="mb-0 text-white ff_GilroyRegular fw-normal ms-2 fs_sm">
                      Arcu morbi leo eu
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-2 ">
                    <img src={tickImage} width={30} alt="tickImage" />
                    <p className="mb-0 text-white ff_GilroyRegular fw-normal ms-2 fs_sm">
                      Viverra venenatis, in ornare
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-2 ">
                    <img src={tickImage} width={30} alt="tickImage" />
                    <p className="mb-0 text-white ff_GilroyRegular fw-normal ms-2 fs_sm">
                      Erat id aliquam habitant
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container className="">
          <div className=" py-lg-0 mt-lg-5   z_4 position-relative b_radius_26">
            <div className="bg_blur_pink position-absolute blur_absolute zn_2  "></div>
            <div className="bg_blur_blue position-absolute blue_absolute zn_2  "></div>
            <Row className="align-items-center justify-content-center py-1 px-3 bg-black b_radius_26 justify-content-lg-between">
              <Col className="my-3 my-lg-0" md={6} lg={4}>
                <h4 className="ff_konexy fw-normal text-white pe-md-5 fs_xl ">
                  Not Sure which service you need yet?
                </h4>
                <div className="d-flex mt-5 pt-md-4">
                  <a
                    className="Navbtn text-white ff_GilroySemiBold fw-semibold"
                    href="#"
                  >
                    Schedule An Appointment
                  </a>
                </div>
              </Col>
              <Col className="my-3 my-lg-0" md={6} lg={4}>
                <h4 className="text-white  ff_GilroySemiBold fs_lg fw-bold">
                  20-m free consultation that will help us identifyif you need
                </h4>

                <div className="ps-3">
                  <div className="mt-4 pt-2 d-flex align-items-center">
                    <img src={rightImage} width={20} alt="rightImage" />
                    <p className="mb-0 ff_GilroyRegular text-white fs_sm ms-2 fw-normal">
                      Technical Description & Discovery
                    </p>
                  </div>
                  <div className="mt-4 d-flex align-items-center">
                    <img src={rightImage} width={20} alt="rightImage" />
                    <p className="mb-0 ff_GilroyRegular text-white fs_sm ms-2 fw-normal">
                      Custom WordPress Development
                    </p>
                  </div>
                  <div className="mt-4 d-flex align-items-center">
                    <img src={rightImage} width={20} alt="rightImage" />
                    <p className="mb-0 ff_GilroyRegular text-white fs_sm ms-2 fw-normal">
                      Support & Maintenance
                    </p>
                  </div>
                  <div className="mt-4 d-flex align-items-center">
                    <img src={rightImage} width={20} alt="rightImage" />
                    <p className="mb-0 ff_GilroyRegular text-white fs_sm ms-2 fw-normal">
                      Other WordPress Service
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="my-3 my-lg-0" md={6} lg={4}>
                <img className="w-100  py-4" src={girlImage} alt="girlImage" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AllVipeStudio;
