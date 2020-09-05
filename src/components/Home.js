import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import developer from '../images/developer.svg'
import online from '../images/online1.svg'
import useWebAnimations, { slideInLeft, fadeIn, fadeInDown, slideInUp } from '@wellyshen/use-web-animations';




const Home = () => {
    const [show, setShow] = useState({
        elem1: false,
        elem2: false,
        elem3: false,
        elem4: false,
        elem5: false,
    }),
        { keyframes, timing } = slideInLeft,

        { ref: ref1 } = useWebAnimations(show.elem1 && {
            keyframes,
            timing: {
                ...timing,
                duration: 2000,
            }
        }),

        { ref: ref2 } = useWebAnimations(show.elem2 && {
            keyframes: [
                { transform: "scale3d(0.7, 0.7, 0.7)", opacity: 0 },
                { transform: "none", opacity: 1 }
            ],
            timing: {
                easing: 'ease-in-out',
                duration: 3000,
                delay: 1000,
                fill: 'both',
            }
        }),
        { keyframes: keyframes_ref3, timing: timing_ref3 } = fadeIn,
        { ref: ref3 } = useWebAnimations(show.elem3 && {
            keyframes: keyframes_ref3,
            timing: {
                ...timing_ref3,
                duration: 2000,
                delay: 1100,
                fill: 'backwards',
            }
        }),
        { keyframes: keyframes_ref4, timing: timing_ref4 } = fadeInDown,
        { ref: ref4 } = useWebAnimations(show.elem4 && {
            keyframes: keyframes_ref4,
            timing: {
                ...timing_ref4,
                duration: 2000,
            }
        }),
        { keyframes: keyframes_ref5, timing: timing_ref5 } = slideInUp,
        { ref: ref5 } = useWebAnimations(show.elem5 && {
            keyframes: keyframes_ref5,
            timing: {
                ...timing_ref5,
                duration: 2000,
            }
        });
    useLayoutEffect(() => {
        const topPos = elem => elem.getBoundingClientRect().top,
            getElem1 = document.getElementById('elem1'),
            getElem2 = document.getElementById('elem2'),
            getElem3 = document.getElementById('elem3'),
            getElem4 = document.getElementById('elem4'),
            getElem5 = document.getElementById('elem5'),
            onScroll = () => {
                const elem1Pos = topPos(getElem1),
                    elem2Pos = topPos(getElem2),
                    elem3Pos = topPos(getElem3),
                    elem4Pos = topPos(getElem4),
                    elem5Pos = topPos(getElem5),
                    scrollPos = window.innerHeight;
                if (elem1Pos > 0) {
                    setShow(state => ({ ...state, elem1: true }));
                }
                if (elem2Pos > 0) {
                    setShow(state => ({ ...state, elem2: true }));
                }
                if (elem3Pos < scrollPos && elem3Pos > 0) {
                    setShow(state => ({ ...state, elem3: true }));
                }
                if (elem4Pos < scrollPos) {
                    setShow(state => ({ ...state, elem4: true }));
                }
                if (elem5Pos < scrollPos) {
                    setShow(state => ({ ...state, elem5: true }));
                }
            };
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const { ref } = useWebAnimations({
        keyframes: [
            { transform: 'translateY(-20px)' },
            { transform: 'translateY(20px)' }
        ],
        timing: {
            duration: 2000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
        }
    }),
        { ref: online_ref } = useWebAnimations({
            keyframes: [
                { transform: 'skewX(-8deg)' },
                { transform: 'skewX(6deg)' },
            ],
            timing: {
                duration: 2000,
                iterations: Infinity,
                direction: 'alternate',
                easing: 'ease-in-out',
            }
        }),
        [showAlert, setAlert] = useState(false);
    useEffect(() => {
        window.addEventListener('load', () => {
            setTimeout(() => {
                setAlert(true)
            }, 10000)
        })
    }, [])

    return (

        <Container fluid className='body'>
            
            <Row>
                <Col lg={true}>
                    <h1 ref={ref1} id='elem1' className="cl">What is Python?</h1>
                    <div ref={ref2} id='elem2'>
                        <p className="cl">Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together.</p>
                        <Row>
                            <img ref={ref} src={developer} className='animated_svg' alt='developer' />
                        </Row>
                        <p className="cl">Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed
                    </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col ref={ref3} id='elem3'>
                    <h1 className="cl">Online Python Courses</h1>
                    <p className="cl">
                    Enroll in one of many excellent introductory Python courses and become proficient in the language in only a few short weeks. Many python online courses are self-paced so you can start to learn programming in python immediately..
                    </p>
                </Col>
            </Row>
            <Row>
                <img ref={online_ref} src={online} className='animated_svg' alt='online course' />
            </Row>
            <Row>
                <Col ref={ref4} id='elem4'>
                    <h1 className="cl" >Jobs in Python</h1>
                    <p  className="cl">
                    Python Developers are computer programmers who specialize in writing server-side web application logic. Their job is to use the Python programming language to develop, debug, and implement application projects. They also connect applications with third-party web services and support front-end developers with application integration.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col ref={ref5} id='elem5'>
                    <h3 className="cl">Beginner at Python?</h3>
                    <p className="cl">
                        If you are completely new to Python and have no idea what it is, read this article called
                    <a href='https://www.w3schools.com/python/' target="_blank" rel="noopener noreferrer"> Python Basics</a>   </p>
                </Col>
            </Row>
        </Container>
    )
}
export default Home;