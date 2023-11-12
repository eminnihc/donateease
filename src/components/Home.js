import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 align="center" className="home-heading">
        Want to donate something? We have got you covered!
      </h1>
      <Row
        className="d-flex justify-content-center align-items-center space-around"
        style={{ marginTop: "40px" }}
      >
        <Card style={{ width: "18rem", maxHeight: "400px" }}>
          <Card.Img
            variant="top"
            src="/images/book_donation_home.jpg"
            className="card-image"
          />
          <Card.Body>
            <Card.Title>Book Donation Drives</Card.Title>
            <Card.Text className="card-text">
              A book is an investment that lasts forever. No matter your age or
              circumstances, everyone deserves the gift of knowledge.
            </Card.Text>
            <Button variant="primary">
              <Link to="/book-donation-drives" className="link-text">
                View book donation drives
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", maxHeight: "400px" }}>
          <Card.Img
            variant="top"
            src="/images/food_donation_home.jpg"
            className="card-image"
          />
          <Card.Body>
            <Card.Title>Food Donation Drives</Card.Title>
            <Card.Text className="card-text">
              The true measure of a society's greatness is how it takes care of
              its most vulnerable. Donate food, nurture greatness.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
            <Button variant="primary">
              <Link to="/food-donation-drives" className="link-text">
                View food donation drives
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", maxHeight: "400px" }}>
          <Card.Img
            variant="top"
            src="/images/clothes_donation_home.jpg"
            className="card-image"
          />
          <Card.Body>
            <Card.Title>Clothes Donation Drives</Card.Title>
            <Card.Text className="card-text">
              When you donate clothes, you're not just giving away clothes,
              you're giving away dignity and confidence.
            </Card.Text>
            <Button variant="primary">
              <Link to="/clothes-donation-drives" className="link-text">
                View clothes donation drives
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default Home;
