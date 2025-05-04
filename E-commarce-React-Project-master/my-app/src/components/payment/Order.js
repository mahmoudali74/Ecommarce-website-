import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function GroupExample() {
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  console.log(cart);
  useEffect(() => {}, [quantity]);
  var sum = 0;
  let allPrice = () => {
    for (const key in cart) {
      console.log(cart[key].price);
      sum += cart[key].price * cart[key].quantity;
    }
  };
  allPrice();
  console.log(sum.toFixed(2));
  return (
    <div className="container">
      <div className=" row my-4">
        {cart.map((product) => (
          <div className="col-lg-4  col-md-6 col-sm-12 p-0">
            <Card className="m-3">
              <div>
                <Card.Img
                  className="p-4 my-auto"
                  variant="top"
                  src={product.image}
                  style={{ height: "390px" }}
                />
              </div>
              <Card.Body>
                <Card.Title>{product.category}</Card.Title>
                <Card.Text style={{minHeight:"250px"}}>{product.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Price of item: {product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Quantity Of item: {product.quantity}{" "}
                  <input
                    type="number"
                    min={1}
                    onChange={(numQuant) => {
                      product.quantity = numQuant.target.value;
                      setQuantity(product.quantity);
                    }}
                    style={{
                      border: "solid 2px green",
                      outline: "none",
                      width: "64px",
                      borderRadius: "5px",
                    }}
                  ></input>
                </ListGroup.Item>
              </ListGroup>
              <Card.Footer>
                Total Price: {(product.price * product.quantity).toFixed(2)}
              </Card.Footer>
              <ListGroup>
                <ListGroup.Item className="p-0 m-0 border-0 rounded-0">
                  <Button
                    variant=""
                    className=" rounded-0 border-0 text-center bg-danger text-white w-100  "
                    onClick={(changeStar) => {
                      let deletitem;
                      for (const key in cart) {
                        if (product.id === cart[key].id) {
                          deletitem = key;
                        }
                      }
                      setQuantity(deletitem)
                      delete cart[deletitem];
                    }}
                  >
                    Remove
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        ))}
        <Link
          to={"/payment"}
          className="btn bg-success text-white  w-75 mb-3 mx-auto mt-5"
        >
          Pay Using Card {` ( ${sum.toFixed(2)} )`}
        </Link>
      </div>
    </div>
  );
}
export default GroupExample;
