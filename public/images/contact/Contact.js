import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { Tilt } from "react-tilt";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 100%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const Contact = () => {
  return (
    <Stack direction="horizontal" className="w-100 h-100">
      <Stack
        className="justify-content-center align-items-center w-25 p-3"
        gap={5}
      >
        <div>
          <Tilt
            options={defaultOptions}
            className="w-100 p-1 h-100"
            style={{
              border: "2px solid darkgray",
              borderRadius: "8px",
              backgroundColor: "whitesmoke",
            }}
          >
            <a href="https://facebook.com/" target="_blank">
              <Image
                src="./images/contact/facebook-logo.png"
                className="w-100 p-3 h-100"
              ></Image>
            </a>
          </Tilt>
        </div>

        <div>
          <Tilt
            options={defaultOptions}
            className="w-100 p-1 h-100"
            style={{
              border: "2px solid darkgray",
              borderRadius: "8px",
              backgroundColor: "whitesmoke",
            }}
          >
            <a href="https://www.instagram.com/" target="_blank">
              <Image
                src="./images/contact/instagram-logo.png"
                className="w-100 p-3 h-100"
              ></Image>
            </a>
          </Tilt>
        </div>
        <div>
          <Tilt
            options={defaultOptions}
            className="w-100 p-1 h-100"
            style={{
              border: "2px solid darkgray",
              borderRadius: "8px",
              backgroundColor: "whitesmoke",
            }}
          >
            <a href="https://twitter.com/" target="_blank">
              <Image
                src="./images/contact/twitter-logo.jpeg"
                className="w-100  p-3 h-100"
              ></Image>
            </a>
          </Tilt>
        </div>
      </Stack>
      <Stack className="justify-content-center align-items-center w-50">
        <h1 style={{ marginTop: 20, color: "black" }}>
          Feel free to contact us
        </h1>
        <Image
          src="/images/contact/contact.png"
          className="w-75 p-2 h-75"
        ></Image>
      </Stack>
      <Stack
        className="justify-content-center align-items-center w-25 p-3"
        gap={5}
      >
        <div>
          <Tilt
            options={defaultOptions}
            className="w-100 p-1 h-100"
            style={{
              border: "2px solid darkgray",
              borderRadius: "8px",
              backgroundColor: "whitesmoke",
            }}
          >
            <a href="https://mail.google.com/" target="_blank">
              <Image
                src="./images/contact/gmail-logo.png"
                className="w-100 p-3 h-100"
              ></Image>
            </a>
          </Tilt>
        </div>
        <div>
          <Tilt
            options={defaultOptions}
            className="w-100 p-1 h-100"
            style={{
              border: "2px solid darkgray",
              borderRadius: "8px",
              backgroundColor: "whitesmoke",
            }}
          >
            <a href="https://youtube.com/" target="_blank">
              <Image
                src="./images/contact/youtube-logo.png"
                className="w-100 p-3 h-100"
              ></Image>
            </a>
          </Tilt>
        </div>
        <div>
          <Tilt
            options={defaultOptions}
            className="w-100 p-1 h-100"
            style={{
              border: "2px solid darkgray",
              borderRadius: "8px",
              backgroundColor: "whitesmoke",
            }}
          >
            <a href="#" target="_blank">
              <Image
                src="./images/contact/whatsapp-logo.png"
                className="w-100 p-3 h-100"
              ></Image>
            </a>
          </Tilt>
        </div>
      </Stack>
    </Stack>
  );
};

export default Contact;
