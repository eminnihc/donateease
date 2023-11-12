import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

const Book_Donation_Drives = () => {
  return (
    <div className="book-donation-drive">
      <Image src="/images/book donation 1.jpg" className="image-class" />
      <div>
        <p className="book-donation-drive-p1">
          Books are bridges that connect people and cultures. Help build those
          bridges by donating.
        </p>
      </div>
      <div>
        <p className="book-donation-drive-p2">
          Book Donation in India is an extremely important issue because of the
          following reasons:
        </p>

        <ListGroup as="ol" className="book-donation-drive-content" numbered>
          <ListGroup.Item as="li">
            <b>Low literacy rate:</b> India has a literacy rate of 77.7% as of
            2021, which is lower than the global average of 86.3%. This means
            that a significant proportion of the Indian population does not have
            access to books or the ability to read them.
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <b>Unequal distribution of books:</b> Even among the literate
            population, there is an unequal distribution of books. According to
            a 2019 study by the National Council of Educational Research and
            Training (NCERT), only 12% of Indian children have access to a
            library at their school. This means that the majority of children
            have to rely on their families or other sources to get books.
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <b>High cost of books:</b> Books can be expensive, especially for
            low-income families. According to a 2020 study by the National Book
            Trust, the average price of a book in India is ₹200. This may seem
            like a small amount, but for many families, it is a significant
            expense.
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div>
        <p className="book-donation-drive-p2">Statistics:</p>
        <ul>
          <li>
            According to a 2019 report by the World Bank, only 20% of Indian
            children have access to age-appropriate books at home.
          </li>
          <li>
            According to a 2020 study by the National Book Trust, the average
            Indian child reads less than 2 books per year.{" "}
          </li>
          <li>
            According to a 2021 report by the UNESCO Institute for Statistics,
            India has the highest number of illiterate people in the world, with
            over 250 million people unable to read or write.
          </li>
        </ul>
      </div>
      <div className="book-donation-image-flex">
        <img
          src="/images/book donation drive 1.jpg"
          alt="Book Donation Drive"
        />
        <img
          src="/images/book donation drive 2.jpg"
          alt="Book Donation Drive"
        />
        <img
          src="/images/book donation drive 3.jpg"
          alt="Book Donation Drive"
        />
      </div>
    </div>
  );
};

export default Book_Donation_Drives;
