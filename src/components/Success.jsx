import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import success_img from "../assets/img/png/sucess.png";
import { data } from "../components/card";
function Success() {
  return (
    <section className="mt-lg-5 pt-5 mb-4">
      <Container>
        <Row className="align-items-center flex-lg-row justify-content-center">
          <Col lg={4} md={8}>
            <img className="w-100" src={success_img} alt="success" />
          </Col>
          <Col lg={8} className="pt-lg-0 pt-4">
            <p className="mb-0 ff_GilroyRegular fw-normal fs_sm">
              HAVE YOU SEEN OUR MASCOT?
            </p>
            <h2 className="ff_konexy fw-normal fs_4xl text-black">
              {" "}
              Success Guides{" "}
            </h2>
            <div className="d-sm-flex">
              <div className="pt-3">
                <button className="ff_GilroySemiBold fw-semibold fs_sm category1_button category_button_padding">
                  Category-1
                </button>
                <button className="ff_GilroySemiBold fw-semibold fs_sm category_button category_button_padding ms-2">
                  Category-2
                </button>
              </div>
              <div className="pt-3">
                <button className="ff_GilroySemiBold fw-semibold fs_sm category_button category_button_padding ms-sm-2">
                  Category-3
                </button>
                <button className="ff_GilroySemiBold fw-semibold fs_sm category_button category_button_padding ms-2">
                  Category-4
                </button>
              </div>
            </div>{" "}
            <Row className="justify-content-center">
              {data
                .map((fun) => {
                  return (
                    <Col sm={6} md={4} className="pt-4">
                      {" "}
                      <div className="card_box p-3">
                        <img className="w-100" src={fun.img} alt="" />
                        <h2 className="mb-0 ff_GilroySemiBold fw-semibold fs_lg pt-3">
                          {fun.h2}
                        </h2>
                        <p className="mb-0 ff_GilroyRegular fw-normal fs_sm">
                          {fun.p}
                        </p>
                        <a
                          className="fw-semibold ff_GilroySemiBold fs_Sm pt-2 a"
                          href="#"
                        >
                          {fun.a}
                        </a>{" "}
                      </div>
                    </Col>
                  );
                })
                .slice(0, 3)}
            </Row>
          </Col>
        </Row>
        <div className="Haveyou_box p-4  align-items-center justify-content-between transfrom_Y d-lg-flex mt-lg-0 mt-4 zindex_2">
          <div>
            <h2 className="mb-0 fw-400 fs_4xl ff_konexy text-white">
              Have you
            </h2>
            <p className="mb-0 fw-semibold ff_GilroySemiBold fs_lg mw_630 text-white pt-2">
              read our study about Speed and Performance in WordPress?
            </p>
          </div>
          <div className="pt-lg-0 pt-3">
            <button className="check_button fw-semibold ff_inter fs_sm clr_primary">
              Check It Out
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Success;
