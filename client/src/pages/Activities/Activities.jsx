import { Container, Row, Col, Button } from "reactstrap";
import Slider from "react-slick";
import SectionSubtitle from "../Blogs/SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Activities = ({ highlights }) => {
    const settings = {
        dots: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <section id="activities">
            <Container>
                <Row>
                    <Col lg="3" md="12" sm="12">
                        <Slider
                            {...settings}
                            className=" cursor-pointer mb-10 md:mb:0"
                        >
                            {highlights
                                ?.map((highlight, index) => (
                                    <div
                                        style={{ padding: "10px" }}
                                        key={index}
                                    >
                                        <img
                                            src={highlight.image}
                                            height={0}
                                            width={0}
                                            sizes="100vw"
                                            style={{
                                                borderRadius: "20px",
                                                marginBottom: "10px",
                                                width: "100%",
                                                height: "auto",
                                            }}
                                            alt="higlight"
                                        />
                                        <p>{highlight.title}</p>
                                        <p className="p-2.5 bg-[#171f38] w-fit text-xs text-white mt-2 rounded-md">
                                            {highlight.publishTime}
                                        </p>
                                    </div>
                                ))}
                        </Slider>
                    </Col>
                    <Col lg="3" md="6">
                        <ServicesItem
                            title="400+ Active Members"
                            icon="ri-user-add-line"
                        />
                        <ServicesItem
                            title="1000+ Dicsuuions & Workshops "
                            icon=""
                        />
                    </Col>

                    <Col lg="6" md="6" className={`${classes.service__title}`}>
                        <SectionSubtitle subtitle="stats" />
                        <h3 className="mb-0 mt-4">Beyond the Horizon: </h3>
                        <h3 className="mb-2">Antariksh's Inquisitive Workshops and Conversations</h3>
                        <p>
                            Embark on cosmic journeys, learn, and share in the wonders of the universe. Join us
                        </p>
                        <p className="mb-3">Wish you colors!</p>
                        <a
                            href="/#contact"
                            rel="noreferrer"
                        >
                            <Button color="danger">Join Us</Button>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Activities;
