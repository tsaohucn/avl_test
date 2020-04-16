import React, { useRef, useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";

const limit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "/"];

const NumberInputBlock = () => {
  const [valueOne, setValueOne] = useState("/");
  const [valueTwo, setValueTwo] = useState("/");
  const [valueThree, setValueThree] = useState("/");
  const [valueFour, setValueFour] = useState("/");

  const inputOne = useRef(null);
  const inputTwo = useRef(null);
  const inputThree = useRef(null);
  const inputFour = useRef(null);

  //useEffect(() => {
  //  inputOne.current.focus();
  //  console.log("aaa");
  //});

  const onChaneValueOne = (event) => {
    const value = event.target.value.slice(-1);
    if (limit.includes(value)) {
      //inputOne.current.blur();
      inputTwo.current.focus();
      setValueOne(value);
    }
  };

  const onChaneValueTwo = (event) => {
    const value = event.target.value.slice(-1);
    if (limit.includes(value)) {
      setValueTwo(value);
      inputThree.current.focus();
    }
  };

  const onChaneValueThree = (event) => {
    const value = event.target.value.slice(-1);
    if (limit.includes(value)) {
      setValueThree(value);
      inputFour.current.focus();
    }
  };

  const onChaneValueFour = (event) => {
    const value = event.target.value.slice(-1);
    if (limit.includes(value)) {
      setValueFour(value);
    }
  };

  return (
    <Row className={["justify-content-around"]} style={{ paddingTop: "20vw" }}>
      <FormControl
        value={valueOne}
        placeholder="_"
        style={styles.input}
        onChange={onChaneValueOne}
        ref={inputOne}
      />
      <FormControl
        value={valueTwo}
        placeholder="_"
        style={styles.disable}
        onChange={onChaneValueTwo}
        ref={inputTwo}
      />
      <FormControl
        value={valueThree}
        placeholder="_"
        style={styles.disable}
        onChange={onChaneValueThree}
        ref={inputThree}
      />
      <FormControl
        value={valueFour}
        placeholder="_"
        style={styles.disable}
        onChange={onChaneValueFour}
        ref={inputFour}
      />
    </Row>
  );
};

const styles = {
  input: {
    width: "70px",
    height: "70px",
    backgroundColor: "#000000",
    color: "#00AEAE",
    fontSize: "30px",
    textAlign: "center",
  },
  disable: {
    width: "70px",
    height: "70px",
    backgroundColor: "#000000",
    color: "#00AEAE",
    fontSize: "30px",
    textAlign: "center",
    pointerEvents: "none",
    cursor: "none",
  },
};

export default NumberInputBlock;
