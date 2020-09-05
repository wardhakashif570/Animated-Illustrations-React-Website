import React, { useLayoutEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import useWebAnimations, { slideInDown, fadeIn, slideInUp } from '@wellyshen/use-web-animations';
import courses from '../images/courses.svg'
import bulb from '../images/bulb.gif'

const Courses = () => {

    const { ref } = useWebAnimations({
        keyframes: [
            { transform: 'skewY(-5deg)' },
            { transform: 'skewY(5deg)' },
        ],
        timing: {
            duration: 2000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
        }
    }),
        [show, setShow] = useState({
            moreAbout: false,
            ol: false,
            courses_head: false,
            course_p: false
        }),
        { keyframes: keyframes_ref2, timing: timing_ref2 } = slideInDown,
        { ref: ref2 } = useWebAnimations(show.courses_head && {
            keyframes: keyframes_ref2,
            timing: {
                ...timing_ref2,
                duration: 2000,
            }
        }),
        { keyframes: keyframes_ref3, timing: timing_ref3 } = fadeIn,
        { ref: ref3 } = useWebAnimations(show.course_p && {
            keyframes: keyframes_ref3,
            timing: {
                ...timing_ref3,
                duration: 2000,
            }
        }),
        { keyframes: keyframes_ref4, timing: timing_ref4 } = slideInUp,
        { ref: ref4 } = useWebAnimations(show.ol && {
            keyframes: keyframes_ref4,
            timing: {
                ...timing_ref4,
                easing: 'ease-in-out',
                duration: 3000,
            }
        }),
        { ref: moreAboutRef } = useWebAnimations(show.moreAbout && {
            keyframes: keyframes_ref3,
            timing: {
                ...timing_ref3,
                duration: 2000,
                delay: 1000,
            }
        });

    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top,
            elemMoreAbout = document.getElementById('more_about'),
            el_course_h = document.getElementById('courses_head'),
            el_course_p = document.getElementById('course_p'),
            elem_ol = document.getElementById('ol'),

            onScroll = () => {
                const elem1Pos = topPos(elemMoreAbout),
                    elem2Pos = topPos(elem_ol),
                    elem3Pos = topPos(el_course_h),
                    elem4Pos = topPos(el_course_p),
                    scrollPos = window.innerHeight;
                if (elem1Pos < scrollPos) {
                    setShow(state => ({ ...state, moreAbout: true }));
                }
                if (elem2Pos < scrollPos) {
                    setShow(state => ({ ...state, ol: true }));
                }
                if (elem3Pos > 0) {
                    setShow(state => ({ ...state, courses_head: true }));
                }
                if (elem4Pos > 0) {
                    setShow(state => ({ ...state, course_p: true }));
                }
            };
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (

        <Container fluid className='body'>
            <Row>
                <Col>
                    <h1 id='courses_head' ref={ref2} className="cl">Best Online Python Courses (Free and Paid)</h1>
                    <p id='course_p' ref={ref3} className="cl">.Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed
                    To make things easier for you, we have curated a list of the 10 best online Python
                    courses that you can take. We have mentioned both free and paid courses so you can start despite a budget constraint. So, without any
                    further delay, let’s get into our list, shall we?</p>
                </Col>
            </Row>
            <Row>
                <img ref={ref} src={courses} className='animated_svg' alt='developer' />
            </Row>
            <Row>
                <Col ref={ref4} id='ol'>
                    <h3 className="cl">Best Free and Paid Python Courses in 2020</h3>
                    <ol className='ml-2 cl' >
                        <li>
                        Complete Python Bootcamp: Go from zero to hero in Python (Udemy)
                            <p className='course_fee' > Buy Course on Udemy: Starting at $129.99</p>
                        </li>
                        <li>
                        Applied Data Science with Python Certification (Coursera)
                            <p className='course_fee' >Enroll 0n Coursera  : Free</p>
                        </li>
                        <li>
                        Python Certification for Data Science by IBM (Coursera)
                            <p className='course_fee' >Enroll 0n Coursera  : Free</p>
                        </li>
                        <li>
                        Python Certification (W3School)
                            <p className='course_fee' >Buy Course on W3Scholl: Starting at $95.00</p>
                        </li>
                        <li>
                        Python Certification (Digital Defynd)
                            <p className='course_fee' >Enroll on Digital Defynd  Free</p>
                        </li>
                        <li>
                        PCAP: Programming Essentials in Python (Cisco Networking Academy)
                            <p className='course_fee' >Cost: Determined by Institution</p>
                        </li>
                        <li>
                        Complete Python Course (Udemy)
                            <p className='course_fee' >Buy Course on Udemy: Starting at $129.99</p>
                        </li>
                        <li>
                        Python Programming Cornell Certification Program (eCornell)
                            <p className='course_fee' > Enroll on eCornell at  $3,600</p>
                        </li>
                        
                    </ol>
                    
                </Col>
            </Row>
            <Row>
                <Col id='more_about' ref={moreAboutRef}>
                    <h3 className="cl" >More about Python</h3>
                    <p className="cl">Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed</p>
                    <img src={bulb} className='' alt='bulb' width='60' />
                    <a href='https://www.udemy.com/topic/python/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Branded-Topic_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_84507553088_._ad_386251517959_._kw_%2Bpython%20%2Budemy_._de_c_._dm__._pl__._ti_kwd-315802958299_._li_9077146_._pd__._&matchtype=b&gclid=EAIaIQobChMIi5WggbvS6wIVktwYCh10CwwJEAAYASAAEgIcf_D_BwE' target='_blank' rel="noopener noreferrer">VIEW FREE PYTHON COURSES</a>
                </Col>
            </Row>
        </Container>
    )
}
export default Courses;