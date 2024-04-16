import { Container, Row, Col } from "react-bootstrap";
import Typewriter from 'typewriter-effect';
import "./home.css";
import romaFoto from "../../assets/images/romaSinfondo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileClipboard} from '@fortawesome/free-regular-svg-icons';
import cvRomario from "../../assets/pdf/HV_Romario__ENGLISH_.pdf"


export const Home = () => {

    const spanStyle = {
        gap:"4px"
    }

    function downladCV(e){

        if(e.target.tagName === 'BUTTON'){
            (e.target.children[0].click())
        }
    
    }   

    return (
    <section className="home" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <h2 className="tagline">Hey there! Welcome to my digital Portfolio</h2>
                    <h1>{`I'm Romario Julio`}</h1>
                    <span className="d-flex" style={spanStyle}> I am 
                    <Typewriter
                        options={{
                            strings: [' an Engineer', ' a Developer', 'Full-Stack' ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </span>
                    <span id="intro">
                    As an ambitious engineer, I am determined to build a thriving career in the technology sector. I graduated from UIS, a prestigious Colombian university, and my engineering education has equipped me with strong analytical and statistical abilities, enabling me to effectively tackle complex challenges. With a deep interest in geek culture and technology, I have been diligently honing my skills in this field since 2021 through self-directed learning and participation in bootcamps.
                    </span>
                    <button id="downloadCv" onClick={downladCV}> 
                        <a href={cvRomario} download={cvRomario.toString()} > Download my CV <FontAwesomeIcon icon={faFileClipboard} bounce /> </a>   </button>
                </Col>
                <Col xs={12} md={6} xl={5} className="d-flex justify-content-center align-items-center" >
                    <div className="blueCricle">
                        <img id="foto" className="rounded-circle" src={romaFoto.toString()} alt="profileFoto" />

                    </div>
                </Col>
            </Row>
        </Container>

    </section>
    );

}