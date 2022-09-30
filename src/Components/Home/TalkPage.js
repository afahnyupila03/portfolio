import { Container } from "@mui/material";
import { Col, Row } from "react-bootstrap";


const TalkPage = () => {

    return (
        <>
            <Container style={{paddingBottom: '8rem'}}>
                <Row>
                    <Col sm="6">
                        <h1 className='mb-3'>
                            Designing With Passion While Exploring The World.
                        </h1>
                        <p>
                            Consectetur adipiscing elit, sed do eiusmod tempor 
                            ididunt ut labore et dolore magna aliqua. Quis ipsum 
                            suspendisces gravida. Risus commodo viverra sebfd dho 
                            eiusmod tempor maecenas accumsan lacus.
                        </p>
                        <p>
                            Consectetur adipiscing elit, sed do eiusmod tempor 
                            ididunt ut labore et dolore magna aliqua.
                        </p>
                    </Col>
                    <Col sm="6">
                        <h1 className="mb-3">
                            Any Type of Query &amp; Discussion.
                        </h1>
                        <p>
                            Late talk with me
                        </p>
                        <a href='###' style={{
                            textDecoration: 'none',
                            fontSize: '1.5rem',
                            color: '#f45828'
                        }}>hire@colorlib.com</a>
                    </Col>
                </Row>
            </Container>
        </>
    );

};

export default TalkPage;