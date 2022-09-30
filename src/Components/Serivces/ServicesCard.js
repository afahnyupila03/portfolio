import { Container, Card, CardActionArea, CardContent, Typography, CardActions } from "@mui/material";
import { Row, Image, Col } from "react-bootstrap";
import ServiceCardData from "./ServiceCardData";


const ServiceCard = () => {

    return (
        <>
            <Container style={{paddingBottom: '8rem'}}>
                <Row>
                    {
                        ServiceCardData.map((data, serviceCard) => (
                            <Col key={serviceCard} lg={4} md={12} sm={12}>
                                        <Card className='mb-3 p-3' style={{ border: 'none' }} variant="outlined">
                                            <CardActionArea className='p-4'>
                                                <Image
                                            src={data.image}
                                                    className='card-img-top m-auto align-self-center d-flex'
                                                    style={{
                                                        width: '5rem'
                                                    }}
                                                />
                                                <CardContent className='p-3' style={{color: '#f45828'}}>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                {data.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                {data.text}
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

export default ServiceCard;