import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

const Food_Donation_Drives = () => {
  return (
    <div className="book-donation-drive">
      <Image src="/images/food donation 1.jpg" className="image-class" />
      <div>
        <p className="book-donation-drive-p1">
          When you donate food, you are not just giving food; you are giving
          hope.
        </p>
      </div>
      <div>
        <p className="book-donation-drive-p2">
          Food donation is important because it helps to reduce food waste and
          ensure that everyone has access to enough food to eat. According to
          the United Nations Food and Agriculture Organization, approximately
          one-third of all food produced for human consumption is wasted each
          year. This is enough food to feed nearly 2 billion people.
        </p>
      </div>
      <div>
        <p className="book-donation-drive-p2">
          Food donation drives are a great way to get involved in your community
          and help those in need. There are many different types of food
          donation drives, including:
        </p>

        <ListGroup as="ol" className="book-donation-drive-content" numbered>
          <ListGroup.Item as="li">
            <b>Food drives for food banks:</b> Food banks collect and distribute
            food to people in need. They often rely on food donations from
            individuals, businesses, and organizations.
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <b>Food drives for soup kitchens and homeless shelters:</b> Soup
            kitchens and homeless shelters provide food and other services to
            people who are homeless or experiencing food insecurity. They also
            rely on food donations to provide meals to their clients.
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <b>Food drives for schools and childcare centers:</b> Schools and
            childcare centers often provide meals to children from low-income
            families. Food donations can help to ensure that all children have
            access to healthy and nutritious meals.
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="book-donation-image-flex">
        <img
          src="/images/food donation drive 1.jpg"
          alt="Book Donation Drive"
        />
        <img
          src="/images/food donation drive 2.jpg"
          alt="Book Donation Drive"
        />
        <img
          src="/images/food donation drive 3.jpg"
          alt="Book Donation Drive"
        />
      </div>
    </div>
  );
};

export default Food_Donation_Drives;
