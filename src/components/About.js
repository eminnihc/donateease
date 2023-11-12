import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { Image } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

const About = () => {
  /* return <div>About</div>; */
  return (
    <div style={{ height: "1700px" }}>
      <MDBCarousel className="carousel" showIndicators showControls fade>
        <MDBCarouselItem
          className="w-100 d-block image-height-683"
          itemId={1}
          src="/images/about-logo.jpeg"
          alt="..."
        ></MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block image-height-683"
          itemId={2}
          src="/images/children_about.jpg"
          alt="..."
        >
          <h5>Give back to the community :)</h5>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block image-height-683"
          itemId={3}
          src="/images/oldage-home-about.jpg"
          alt="..."
        >
          <h5>Alone we can do so litte; together we can do so much</h5>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block image-height-683"
          itemId={4}
          src="/images/book_donation_about.jpg"
          alt="..."
        >
          <h5>
            Books are windows to new worlds, donate yours to help someone see
            beyond their own
          </h5>
        </MDBCarouselItem>
      </MDBCarousel>
      <div className="about-content">
        <span>
          DonateEase is a simple, secure, and affordable way to donate to your
          favorite charities. We believe that everyone should have the
          opportunity to make a difference, no matter how much they can give.
        </span>
        <br />
        <br />
        <span>
          Our mission is to make it easy for people to donate to the causes they
          care about, and to help charities raise more money. We do this by
          providing a user-friendly platform, low fees, and a variety of
          features to help charities succeed.
        </span>
        <br />
        <br />
        <span style={{ fontWeight: "600" }}>Why donate with DonateEase?</span>
        <span>
          <ol style={{ fontSize: "18px" }}>
            <li>
              Easy: It's easy to create an account and start donating in just a
              few minutes.
            </li>
            <li>
              Secure: We use the latest security technologies to protect your
              data and donations.
            </li>
            <li>
              Affordable: We charge low fees so that more of your donation goes
              to the charity you choose.
            </li>
            <li>
              Variety: We support a wide range of charities, so you can find one
              that supports the cause you care about most.
            </li>
          </ol>
        </span>

        <span style={{ fontWeight: "600" }}>How does DonateEase work?</span>
        <span>
          <ol style={{ fontSize: "18px" }}>
            <li>Create an account and provide your payment information.</li>
            <li>Choose a charity to donate to.</li>
            <li>
              Enter the amount you want to donate and select a payment method.
            </li>
            <li>
              Click "Donate" and your donation will be processed immediately.
            </li>
          </ol>
        </span>

        <br />
        <span
          style={{
            fontWeight: "900",
            fontFamily: "Roboto, sans-serif",
            fontSize: "40px",
            color: "#000080",
          }}
        >
          Thank you for choosing DonateEase!
        </span>

        <br />
        <br />

        <span style={{ fontWeight: "700" }}>
          We appreciate your support of our mission to make it easy for people
          to donate to the causes they care about. Together, we can make a
          difference in the world.
        </span>
      </div>
      <div>
        <h1
          align="center"
          style={{
            paddingTop: "3rem",
            paddingBottom: "1rem",
            textDecoration: "underline",
            /* textDecorationStyle: "dashed", */
          }}
        >
          Our Partners and Sponsors
        </h1>
      </div>
      <Container className="d-flex flex-row">
        <Row className="sponsors">
          <Image src="/images/sponsors/alltech-sponsor.jpg" alt="Sponsor 1" />
          <Image src="/images/sponsors/dsm-sponsor.jpg" alt="Sponsor 2" />
          <Image src="/images/sponsors/karthavya-sponsor.jpg" alt="Sponsor 3" />
          <Image src="/images/sponsors/kpi-sponsor.jpg" alt="Sponsor 4" />
          <Image
            src="/images/sponsors/springboard-sponsor.jpg"
            alt="Sponsor 5"
          />
        </Row>
      </Container>
    </div>
  );
};

export default About;
