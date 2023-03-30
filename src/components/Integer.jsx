import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import frame from "../assets/img/png/Frame.png";
import frame1 from "../assets/img/png/Frame1.png";
import frame3 from "../assets/img/png/frame3.png";
const Integer = () => {
  return (
    <div>
      <Container>
        <h2 className="ff_konexy fw-normal mt-5 fs_4xl pt-md-2">
          Integer et nisl non
        </h2>
        <Row className="mb-4 py-4 justify-content-center py-md-5">
          <Col className="my-3 my-xl-0" md={6} xl={4}>
            <div className="colCards p-4 h-100">
              <div className="d-flex pt-3 justify-content-center">
                <img src={frame} alt="frame" />
              </div>
              <h4 className="text-center ff_inter fw-semibold fs_lg mt-4">
                Enterprise WordPress Solutions{" "}
              </h4>
              <p className="text-center ff_inter fw-normal clr_gray fs_sm">
                Pretium, a et sapien non nunc libero. Id dolor sed quis
                convallis turpis purus feugiat nibh eu. Auctor cras hac ac,
                sociis diam montes, turpis commodo elit.
              </p>
              <div className="d-flex pt-1 justify-content-center">
                {" "}
                <a
                  className="clr_primary text-center ff_inter fw-semibold fs_sm"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </Col>
          <Col className="my-3 my-xl-0" md={6} xl={4}>
            <div className="colCards p-4 h-100">
              <div className="d-flex pt-3 justify-content-center">
                <img src={frame1} alt="frame1" />
              </div>
              <h4 className="text-center ff_inter fw-semibold fs_lg mt-4">
                Small to Mid Size Business Development
              </h4>
              <p className="text-center ff_inter fw-normal clr_gray fs_sm">
                Et nunc fermentum id amet tempus, elementum. Eget ac ultrices
                tortor, mattis amet blandit aenean amet. Massa diam lacus,
                aliquam neque, cursus.
              </p>
              <div className="d-flex pt-1 justify-content-center">
                <a
                  className="clr_primary text-center ff_inter fw-semibold fs_sm"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </Col>
          <Col className="my-3 my-xl-0" md={6} xl={4}>
            <div className="colCards p-4 h-100">
              <div className="d-flex pt-3 justify-content-center">
                <img src={frame3} alt="frame3" />
              </div>
              <h4 className="text-center ff_inter fw-semibold fs_lg mt-4">
                Support & Maintenance
              </h4>
              <p className="text-center ff_inter fw-normal clr_gray fs_sm">
                Ac donec ipsum fringilla tortor, consectetur etiam sociis amet
                quis. Viverra volutpat pretium non in fusce tellus sed urna.
                Pharetra ullamcorper et donec aliquam.
              </p>
              <div className="d-flex pt-1 justify-content-center">
                <a
                  className="clr_primary text-center ff_inter fw-semibold fs_sm"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Integer;
