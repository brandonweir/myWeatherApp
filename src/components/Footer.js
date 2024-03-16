import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import DigitalDaneLogo from "../app/assets/Digital Dane Trademark.jpg";

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col
                        xs={{ size: 4, offset: 1 }}
                        sm={{ size: 2, offset: 1 }}
                    >
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={{ size: 4, offset: 1 }} className="text-center">
                        <br />
                        <a
                            role="button"
                            className="btn btn-link"
                            href="mailto:weather@digitaldane.com"
                        >
                            <i className="fa fa-envelope-o" />{" "}
                            weather@digitaldane.com
                        </a>
                    </Col>
                    <Col sm={{ size: 2, offset: 1 }}>
                        <img
                            src={DigitalDaneLogo}
                            alt="Digital Dane Logo"
                            style={{ maxWidth: "100%", height: "75px" }}
                        />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
