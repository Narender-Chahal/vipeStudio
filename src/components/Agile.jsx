import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aglie from "../assets/img/png/agile.png";
function Agile() {
  return (
    <section className="py-5 my-3">
      <Container>
        <Row className="align-items-center">
          <Col lg="6">
            <img className="w-100" src={aglie} alt="aglie" />
          </Col>
          <Col lg="6" className="pt-5 pt-lg-0">
            <h6 className="mb-0 ff_konexy fw-normal fs_4xl">
              <span className="clr_primary">Agile WordPress</span> Development
              Project management
            </h6>{" "}
            <p className="mb-0 fw-normal fs_sm ff_Gilroy pt-2 ">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
              Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
              tortor sollicitudin risus eget euismod in bibendum turpis.{" "}
            </p>
            <button className="btn_modify mt-4">Explore</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Agile;
