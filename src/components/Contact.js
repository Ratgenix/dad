import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap';
import emailjs from 'emailjs-com'
import ContactBox from './ContactBox';
import './components.css'


function Contact() {
    const emailRef=useRef()
    const firstRef=useRef()
    const lastRef=useRef()
    const phoneRef=useRef()
    const messageRef=useRef()
    const [error,setError]=useState("")
    const [loading, setLoading]=useState(false)

    async function handleSubmit(e){
        e.preventDefault()

        emailjs.sendForm('service_qvctmh8', 'template_htzkg6c',
        e.target,'user_Z1sSbAPGaJSUC6VUii0xy').then((result) => {
            console.log(result.text);
        },(error)=>{
            console.log(error.text);
        });
        
       console.log(emailRef.current.value, firstRef.current.value, lastRef.current.value, phoneRef.current.value, messageRef.current.value)

       e.target.reset();
        
    }


    return (
    <>
        <div className='c-box-body'>
            <ContactBox/></div>
    <div className="signin-container">
        <Card>
        <div className="cardBody">
            <Card.Body>
                <h1>Contact Us</h1>
                <p>Thank you for your interest in Carden Robotics & Automation. For more information regarding our services, fill out the form below the map or call us at (586) 262-4219. When filling our contact form below, please note that all fields with a RED asterisk (*) are required to submit and send the form to us.</p>
                {error&&<Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email<span className="ast">*</span>: </Form.Label>
                        <Form.Control type="email" ref={emailRef} required name='email'/>
                    </Form.Group>

                    <Form.Group id="firstName">
                        <Form.Label>First Name<span className="ast">*</span>: </Form.Label>
                        <Form.Control type="name" ref={firstRef} required name='first'/>
                    </Form.Group>   

                    <Form.Group id="lastName">
                        <Form.Label>Last Name<span className="ast">*</span>: </Form.Label>
                        <Form.Control type="name" ref={lastRef} required name='last'/>
                    </Form.Group> 

                    <Form.Group id="phone">
                        <Form.Label>Phone<span className="ast">*</span>: </Form.Label>
                        <Form.Control type="phone" ref={phoneRef} required name='phone'/>
                    </Form.Group> 
                    <Form.Group id="message">
                        <Form.Label>Message<span className="ast">*</span>: </Form.Label>
                        <Form.Control type="string" ref={messageRef} required name='message' as='textarea' rows={5}/>
                    </Form.Group> 
                    <br></br>
                        <div className="form-button">
                        <Button 
                        disabled={loading}
                        type="submit">Confirm!</Button>
                        </div>
                </Form>
            </Card.Body>
            </div>
        </Card>

        
    </div>
    </>
    )
}

export default Contact
