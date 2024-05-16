
import React, { useState } from "react";
import './body.css'
import mainimg from './mainimg.png'

const Body = () => {
  const [showForm, setShowForm] = useState(false);

  const showForms = () => {
    setShowForm(!showForm);
  }
  const hideForm = () => {
    setShowForm(!showForm);
  }

  return (
    <>
      <div className="main">
        <div className="connect">
          <ul>
            <li><a href="">FB</a></li>
            <li><a href="https://github.com/Usman-2302">Ghub</a></li>
            <li><a href="https://www.linkedin.com/in/usman-gujjar-844925309/">Lnkdn</a></li>
            <li><a href="">Insta</a></li>
            <li><a href="">X</a></li>
            <li><a href="https://wa.me/03193655980">WA</a></li>
          </ul>
        </div>
        <div className="discription">
          <h1>Hi</h1>
          <h2>I am Usm@n <br /> <span>&#123;<span>Frontend Developer</span>&#125;</span></h2>
          <button onClick={showForms}>Contact me</button>
        </div>
        <div className="des-img">
          <img src={mainimg} alt="img not avlb" />
        </div>
      </div>
      {showForm && (
        <div className="contact-me">
          <button className="hide" onClick={hideForm}> &#10060; </button>
          <form action="usmang2090@gmail.com" method="post" enctype="text/plain">
            Name<br />
            <input type="text" name="name" />
            Email<br />
            <input type="text" name="mail" />
            Comment<br />
            <input type="text" name="comment" />
            <input type="submit" value="Send" />

          </form>
        </div>)}

      <div className="top">
        &#8593;
      </div>


    </>
  )
}

export default Body
