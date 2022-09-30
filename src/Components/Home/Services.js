import { Card, CardContent, Container, Typography, CardActionArea, CardActions } from "@mui/material";
import { Row, Col, Image } from "react-bootstrap";
import ServiceData from "./ServiceData";


const Services = () => {

    return (
        <>
            <Container style={{ paddingBottom: '8rem' }}>
                <Row>
                    <Row>
                        <Col xs lg="5">
                            <h1 className='mb-5' style={{
                                color: '#f45828'
                            }}>
                                What Services you will Get from  me
                            </h1>
                        </Col>
                    </Row>
                    {
                        ServiceData.map((service, data) => (
                            <Col key={data} lg={4} md={12} sm={12}>
                                <Card className='mb-3 p-3' style={{ border: 'none' }} variant="outlined">
                                    <CardActionArea className='p-4'>
                                        <Image
                                            src={service.image}
                                            className='card-img-top m-auto align-self-center d-flex'
                                            style={{
                                                width: '5rem'
                                            }}
                                        />
                                        <CardContent className='p-3'>
                                            <Typography gutterBottom variant="h5" component="div" style={{ color: '#f45828' }}>
                                                {service.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {service.text}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    </CardActions>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );

};

export default Services;