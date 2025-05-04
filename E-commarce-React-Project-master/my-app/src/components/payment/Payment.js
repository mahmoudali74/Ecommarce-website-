import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from 'react-redux';
import "./payment.css";

function BasicExample() {
  const [data, setData] = useState({
    userNum: "",
    userName: "",
    userDate: "",
    userCVV: "",
  });
  const [errorData, setErrorData] = useState({
    numError: "",
    nameError: "",
    dateError: "",
    cvvError: "",
  });

  let rgxNum =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  let rgxName =
    /([A-Z]{1}[a-z]{1,30}[- ]{0,1}|[A-Z]{1}[- \']{1}[A-Z]{0,1}[A-Z]{1,30}[- ]{0,1}|[A-Z]{1,2}[ -\']{1}[A-Z]{1}[A-Z]{1,30}){2,5}/;
  let rexDate = /\d{2}\/\d{2}$/;
  let rexCVV = /^[0-9]{3,4}$/;
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    if (event.target.name === "userNum") {
      if (!rgxNum.test(event.target.value) && event.target.value !== "") {
        setErrorData({ ...errorData, numError: "Please enter valid number" });
      } else if (event.target.value === "") {
        setErrorData({ ...errorData, numError: "Card number is requared" });
      } else {
        setErrorData({ ...errorData, numError: "" });
      }
    }
    if (event.target.name === "userName") {
      if (!rgxName.test(event.target.value) && event.target.value !== "") {
        setErrorData({
          ...errorData,
          nameError: "Please enter valid name",
        });
      } else if (event.target.value === "") {
        setErrorData({ ...errorData, nameError: "Name is requared" });
      } else {
        setErrorData({ ...errorData, nameError: "" });
      }
    }
    if (event.target.name === "userDate") {
      if (!rexDate.test(event.target.value) && event.target.value !== "") {
        setErrorData({
          ...errorData,
          dateError: "Enter valid Date",
        });
      } else if (event.target.value === "") {
        setErrorData({ ...errorData, dateError: "Requared" });
      } else {
        setErrorData({ ...errorData, dateError: "" });
      }
    }
    if (event.target.name === "userCVV") {
      if (!rexCVV.test(event.target.value) && event.target.value !== "") {
        setErrorData({
          ...errorData,
          cvvError: "Enter valid CVV",
        });
      } else if (event.target.value === "") {
        setErrorData({ ...errorData, cvvError: "Requared" });
      } else {
        setErrorData({ ...errorData, cvvError: "" });
      }
    }
  };

  const cart = useSelector((state) => state.cart);
console.log(cart);

  return (
    <div className="App-header whole container mx-auto"> 
      <div className="border mx-auto bForm">
        <div className="info">
          <img src={require("./card.jpg")} alt="card"></img>
          <div className="data">
            <span>{data.userNum || "XXXXXXXXXXXXXXXX"}</span>
            <span>{data.userDate || "XX/XX"}</span>
            <span>{data.userName || "XXXXX XXXXX XXXXX"}</span>
          </div>
        </div>
        <div className="form-card">
        <Form
          className="w-75 my-2 from-content"
          style={{

          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label className="word">Card Number</Form.Label> */}
            <Form.Control
              className="inside"
              type="text"
              required
              placeholder="CARD NUMBER"
              name="userNum"
              value={data.userNum}
              onChange={(e) => handleChange(e)}
            />
            <Form.Text className="text-danger">{errorData.numError}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label className="word">Cardholder Name</Form.Label> */}
            <Form.Control
              className="inside"
              type="text"
              required
              placeholder="CARDHOLDER NAME"
              name="userName"
              value={data.userName}
              onChange={(e) => handleChange(e)}
            />
            <Form.Text className="text-danger">{errorData.nameError}</Form.Text>
          </Form.Group>
          <div className="row">
            <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
              <Form.Control
                className="inside"
                type="text"
                required
                placeholder="EXP DATE"
                name="userDate"
                value={data.userDate}
                onChange={(e) => handleChange(e)}
              />
              <Form.Text className="text-danger">
                {errorData.dateError}
              </Form.Text>
            </Form.Group>{" "}
            <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
              <Form.Control
                className="inside"
                type="text"
                required
                placeholder="CVV"
                name="userCVV"
                value={data.userCVV}
                onChange={(e) => handleChange(e)}
              />
              <Form.Text className="text-danger">
                {errorData.cvvError}
              </Form.Text>
            </Form.Group>
          </div>
          <Button variant="primary" type="submit" className="w-100 mt-3">
            PAY
          </Button>
        </Form>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;