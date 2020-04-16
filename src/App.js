import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NumberInputBlock from "../src/components/NumberInputBlock";
import trend from "../src/images/trend.png";
import CommonButton from "../src/views/CommonButton";
import CounterBlock from "../src/views/CounterBlock";
import "./App.css";

const buttons = ["Popular", "Arithemetic", "Popular", "More Filters"];

const App = () => {
  return (
    <Container fluid style={styles.container}>
      <Row className={["h-100"]}>
        <Col md={3} xs={12}>
          <CounterBlock completed={100} correct={75} accuracy={75} />
        </Col>
        <Col md={9} xs={12} style={styles.rightBlock}>
          <Row
            className={["align-content-center", "justify-content-around"]}
            style={{ height: 100 }}
          >
            {buttons.map((variant, index) => (
              <CommonButton key={index} variant={variant} />
            ))}
          </Row>
          <Row>
            <Col md={6} xs={12}>
              <p style={{ color: "#ffffff" }}>
                {
                  "Little Red Riding Hood lived with her mother at the edge of the forest. Her grandmother lived at the other edge of the forest, and every Sunday Little Red Riding Hood would pack a basket of food and go visit her. One Sunday, as Little Red Riding Hood was wandering down the lane, a wolf blocked her way."
                }
              </p>
              <img
                src={trend}
                style={{ width: "450px", height: "350px" }}
                alt="trend"
              />
              <Row
                className={["justify-content-around"]}
                style={{ paddingTop: 10, paddingBottom: 10 }}
              >
                <Button type="submit">{"TagA"}</Button>
                <Button type="submit">{"TagB"}</Button>
                <Button type="submit">{"TagC"}</Button>
              </Row>
            </Col>
            <Col md={6} xs={12}>
              <NumberInputBlock />

              <Row
                className={["justify-content-around"]}
                style={{ paddingTop: "20vw" }}
              >
                <Button type="submit">{"Skip"}</Button>
                <Button type="submit">{"Submit"}</Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  container: { backgroundColor: "#000000", height: "60vw" },
  rightBlock: { backgroundColor: "#272727" },
};

export default App;
