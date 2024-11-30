import React, { useRef } from 'react';
import '../Styling/Testimonial.css';
import forward_arrow from '../images/forward arrow.png';
import back_arrow from '../images/back arrow.png';
import user_1 from '../images/user1.png';
import user_2 from '../images/user2.png';
import user_3 from '../images/user1.png';
import user_4 from '../images/user2.png';

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className="testimonials">
            <img src={back_arrow} alt="Back" className="back-btn" onClick={slideBackward} />
            <img src={forward_arrow} alt="Next" className="next-btn" onClick={slideForward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="User 1" />
                                <div>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions
                                I've ever made. The supportive community, state-of-the-art facilities, 
                                and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="User 2" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions
                                I've ever made. The supportive community, state-of-the-art facilities, 
                                and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="User 3" />
                                <div>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions
                                I've ever made. The supportive community, state-of-the-art facilities, 
                                and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="User 4" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions
                                I've ever made. The supportive community, state-of-the-art facilities, 
                                and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonial;
