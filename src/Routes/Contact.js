import React from 'react'

function Contact() {
  return <div style={{ marginTop: "5.2rem" }}>
    <h1>Contact Me</h1>
    <p class="lead mb-5">
      Hi there, contact me to ask me about anything you have in mind.
    </p>
    <form>
      <div className='full-name'>
        <div className="mb-3">
          <label for="exampleInputFirstName1" className="form-label">First Name</label>
          <input type="text" className="form-control" placeholder="Enter your first name" id="first_name" aria-describedby="firstNameHelp" required />
        </div >
        <div className="mb-3">
          <label for="exampleInputLastName1" className="form-label">Last Name</label>
          <input type="text" className="form-control" placeholder="Enter your last name" id="last_name" aria-describedby="lastNameHelp" required />
        </div >
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" placeholder="yourname@email.com" id="email" aria-describedby="emailHelp" required />
      </div >
      <div className="mb-3">
        <label for="floatingTextarea2" className="form-label">Message</label>
        <textarea className="form-control" placeholder="Send me a message and I'll reply you as soon as possible..." id="message" style={{ height: "100px" }} required></textarea>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
        <label className="form-check-label" for="exampleCheck1">You agree to providing your data to Israel Ashaolu who may contact you.</label>
      </div>
      <button type="submit" className="btn btn-primary w-100" id="btn__submit" style={{ marginTop: "1rem", marginBottom: "8rem" }}>Submit</button>
    </form >
  </div >
}

export default Contact;