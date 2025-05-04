import {useRef}  from 'react';
// import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';


const Contact =()=>{
  const form= useRef()

    const sendEmail = (e) => {
      e.preventDefault();
  
    //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
  };


    return(<div style={{background:"#6a11cb", marginTop:'-20px',marginBottom:'-20'}}>
    
    <Form ref={form} onSubmit={sendEmail} className='form-control w-50 m-auto bg-#008B8B'>
      <h2>Contact Us</h2>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
       
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary">Submit</Button>{' '}
    </Form>
 

        </div>

    )
}
export default Contact;