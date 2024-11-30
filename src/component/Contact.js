import React from 'react'
import '../Styling/Contact.css'
import { FiSend } from "react-icons/fi";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {


    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>
                    Send us a Message <FiSend style={{ marginRight: "10px" }} />
                </h3>
                <p>
                    Feel free to reach out through the contact form or find our contact
                    information below. Your feedback, questions, and suggestions are
                    important to us as we strive to provide exceptional service to our
                    university community.
                </p>
                <ul>
                    <li>
                        <FaEnvelope style={{ marginRight: "10px" }} />
                        Contact@GreatStack.dev
                    </li>
                    <li>
                        <FaPhone style={{ marginRight: "10px" }} />
                        +1123-456-7890
                    </li>
                    <li>
                        <FaMapMarkerAlt style={{ marginRight: "10px" }} />
                        77 Massachusetts Ave, Cambridge
                        <br />
                        MA 02139, United States
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form>
                    <label>Your Name</label>
                    <br />
                    <input type="text" name="name" placeholder="Enter Your Name" required />
                    <br />
                    <label>Phone Number</label>
                    <br />
                    <input type="tel" name="phone" placeholder="Enter Your Mobile Number" required />
                    <br />
                    <label>Your Email</label>
                    <br />
                    <input type="email" name="email" placeholder="Enter Your Email" required />
                    <br />
                    <label>Write your messages here</label>
                    <br />
                    <textarea name="message" rows={5} placeholder="Enter Your Message" required />

                    <div className="h-captcha" data-captcha="true" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2">
                        <iframe src="https://newassets.hcaptcha.com/captcha/v1/05c78a4/static/hcaptcha.html#frame=checkbox&id=0grgx6j7d2t4&host=greatstack.in&sentry=true&reportapi=https%3A%2F%2Faccounts.hcaptcha.com&recaptchacompat=off&custom=false&hl=en&tplinks=on&pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&sitekey=50b2fe65-b00b-4b9e-ad62-3ba471098be2&theme=light&origin=https%3A%2F%2Fgreatstack.in" tabIndex={0} frameBorder={0} scrolling="no" allow="private-state-token-issuance 'src'; private-state-token-redemption 'src'" title="Widget containing checkbox for hCaptcha security challenge" data-hcaptcha-widget-id="0grgx6j7d2t4" />
                    </div>
                    <br />
                    <button type="submit" className="btn dark-btn submit-btn">
                        Submit Now
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgB7dnRDYJAEEXRpxVYAiXQgpVICVqB2IEdaAeUQAlrB9iBdjDOyPqhm2yCX7xhTzIJhITkBgJkAWZIRDY6vYw624cHGtLItzA1bo15+o2odTqwi7dikNQF7LzHVTrD0uKOYFfiWJU4VhpR6zyWFrez46u4cUb6GcOssbBBNyr48rSPYE9X6uMddtC5w5cTWGUeHnuwykS1YJV5QbdgVaJYlCgWmagrWMm4mOMyKriKMpKuBJsw5RwsK8E3nS3YxVuxi1eqlz9+SrwAYrdvIKJt0HIAAAAASUVORK5CYII=" alt="" />
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Contact
