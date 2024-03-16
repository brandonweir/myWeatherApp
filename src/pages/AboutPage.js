import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current="About" />
            <Row className="row-content">
                <Col sm="6">
                    <h3>Our Mission</h3>
                    <p>To provide a simple weather app without any fuss.</p>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardHeader className="bg-primary text-white">
                            <h3>Facts at a Glance</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">Dec 23, 2023</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">1</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;
