import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

const Clothes_Donation_Drives = () => {
  return (
    <div className="book-donation-drive">
      <Image src="/images/clothes donation 1.jpg" className="image-class" />
      <div>
        <p className="book-donation-drive-p1">
          Let clothing not be a privilege.
        </p>
      </div>
      <div>
        <p className="book-donation-drive-p2">
          Clothes donation is important because it helps to reduce waste and
          ensure that everyone has access to the clothes they need. According to
          the Environmental Protection Agency, Americans throw away over 11
          million tons of clothing each year. This clothing often ends up in
          landfills, where it takes hundreds of years to decompose.
        </p>
      </div>

      <div>
        <p className="book-donation-drive-p2">
          Clothes donation drives are a great way to get involved in your
          community and help those in need. There are many different types of
          clothes donation drives, including:
        </p>

        <ListGroup as="ol" className="book-donation-drive-content" numbered>
          <ListGroup.Item as="li">
            <b>Clothes drives for homeless shelters:</b> Homeless shelters
            provide food, clothing, and other services to people who are
            homeless. They often rely on clothes donations from individuals,
            businesses, and organizations.
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <b>Clothes drives for thrift stores:</b> Thrift stores sell donated
            clothes and other items at a discounted price. The proceeds from
            thrift stores often benefit charitable organizations.
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <b>Clothes drives for developing countries:</b>
            Many people in developing countries do not have access to the
            clothes they need. Clothes donation drives can help to provide
            clothes to people in need in these countries.
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="book-donation-image-flex">
        <img
          src="/images/clothes donation drive 1.jpg"
          alt="Clothes Donation Drive"
        />
        <img
          src="/images/clothes donation drive 2.jpg"
          alt="Clothes Donation Drive"
        />
        <img
          src="/images/clothes donation drive 3.jpg"
          alt="Clothes Donation Drive"
        />
      </div>
    </div>
  );
};

export default Clothes_Donation_Drives;
