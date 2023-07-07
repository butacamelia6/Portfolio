import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons"
import logo from "../assets/images/logo.png";

export const Banner = () => {
    /*positia textului preluat din lista*/
    const [loopNum, setLoopNum] = useState(0);
    /*constanta care sa reprezinte stergerea */
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Out of the box ", "Or ", "Change the perspective "]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period  = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
/*clear the tick everytime the text is updated */
        return () => { clearInterval(ticker)};
    }, [text])
    const tick= () => {
        /*setting the index to which is the position of the text is in oRotate const*/
        let i = loopNum % toRotate.length;
        /*keep on track the number position*/
        let fullText = toRotate[i];
        /*the text will be updated when "isDeleting" in this case fullText is text lenght -1 position :-means if not  */
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1);
        
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{'Hi I am Camelia - '} <span className="wrap">{text}</span></h1>
                        <p>Open-minded person who wants to discover new opportunities and overcome any obstacles. I have the ability to talk to each type of person to find out their needs, feelings and qualities.</p>
                        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={logo} alt="Header Img" />
                    </Col>

                </Row>

            </Container>
        </section>
    )
}