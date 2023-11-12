import Figure from "react-bootstrap/Figure";

const Main = () => {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://www.pexels.com/photo/symmetry-18180323/"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  );
};

export default Main;
