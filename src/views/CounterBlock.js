import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Circle from "react-circle";

const CounterBlock = ({ completed = 100, correct = 75, accuracy = 75 }) => (
  <Row>
    <Col md={12} xs={6}>
      <Row
        className={["justify-content-center"]}
        style={{
          paddingTop: "5vw",
          paddingBottom: "5vw",
        }}
      >
        <Circle
          progress={accuracy}
          size={150}
          textColor="#ffffff"
          progressColor="#00CACA"
          lineWidth={5}
        />
      </Row>
    </Col>
    <Col md={12} xs={6} style={{ paddingTop: "5vw", paddingBottom: "5vw" }}>
      <Row>
        <Col md={3} xs={3}></Col>
        <Col md={9} xs={9}>
          <Row className={["justify-content-start"]}>
            <p
              style={{
                color: "#ffffff",
                fontSize: "10px",
                alignSelf: "center",
              }}
            >
              {"COMPLETED"}
            </p>
          </Row>
          <Row className={["justify-content-start"]}>
            <p
              style={{
                color: "#ffffff",
                fontSize: "50px",
                marginRight: "5px",
              }}
            >
              {completed}
            </p>
            <p
              style={{
                color: "#8E8E8E",
                fontSize: "10px",
                alignSelf: "center",
                marginLeft: "5px",
              }}
            >
              {"PROBLEMS"}
            </p>
          </Row>

          <Row className={["justify-content-start"]}>
            <p
              style={{
                color: "#ffffff",
                fontSize: "10px",
                alignSelf: "center",
              }}
            >
              {"CORRECT"}
            </p>
          </Row>
          <Row className={["justify-content-start"]}>
            <p
              style={{
                color: "#ffffff",
                fontSize: "50px",
                marginRight: "5px",
              }}
            >
              {correct}
            </p>
            <p
              style={{
                color: "#8E8E8E",
                fontSize: "10px",
                alignSelf: "center",
                marginLeft: "5px",
              }}
            >
              {"PROBLEMS"}
            </p>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default CounterBlock;
