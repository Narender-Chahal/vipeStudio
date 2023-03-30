import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import propy from "../assets/img/png/propy.png";
import ciela from "../assets/img/png/ciela.png";
import revuele from "../assets/img/png/revuele.png";
import spark from "../assets/img/png/spark.png";
function LongTerm() {
  return (
    <section className="Longterm_section_bg py-5 ">
      <Container>
        <div>
          <h2 className="ff_konexy fw-normal mb-0 fs_4xl mw_630 text-black">
            Long Term WordPress Partner
          </h2>
          <p className="mb-0 ff_GilroyRegular fw-normal fs_sm mw_650 clr_lightblack pt-3">
            Our motto is the long-term partnership – we will not only develop
            your perfect website, but will be behind you through the whole
            process. They already trusted us:
          </p>
        </div>
        <Row className="pt-lg-4  align-items-center">
          <Col sm={2} xs={4} className="pt-4">
            <img className="w-100" src={propy} alt="propy" />
          </Col>
          <Col sm={2} xs={4} className="pt-4">
            <img className="w-100" src={ciela} alt="ciela" />
          </Col>
          <Col sm={2} xs={4} className="pt-4">
            <img className="w-100" src={revuele} alt="revuele" />
          </Col>
          <Col sm={2} xs={4} className="pt-4">
            <img className="w-100" src={ciela} alt="ciela" />
          </Col>
          <Col sm={2} xs={4} className="pt-4">
            <img className="w-100" src={spark} alt="spark" />
          </Col>
          <Col sm={2} xs={4} className="pt-4">
            <img className="w-100" src={ciela} alt="ciela" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LongTerm;
