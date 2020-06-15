import React, { useState } from "react";
import baseUrl from './../utils/baseUrl'

const INITIAL_FORM = {
  senderName: "",
  senderEmail: "",
  senderSubject: "",
  senderMessage: "",
};

const Contact = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const notifications = Object.values(error);
  if (props.data) {
    var name = props.data.name;
    var street = props.data.address.street;
    var city = props.data.address.city;
    var state = props.data.address.state;
    var zip = props.data.address.zip;
    var phone = props.data.phone;
    var email = props.data.email;
    var message = props.data.contactmessage;
  }

  const { senderName, senderEmail, senderSubject, senderMessage } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = baseUrl + "/contact-forms";
    try {
      const response = await fetch(url, {
        method: "POST",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.error) {
        setError(result.data.errors);
        setSuccess(false);
      } else {
        setError({});
        setSuccess(true);
        setFormData(INITIAL_FORM);
      }
    } catch (error) {
      console.log("this is error", error);
    }
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Iletisime Gec</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Adiniz <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={senderName}
                  size="35"
                  id="contactName"
                  name="senderName"
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  E postaniz <span className="required">*</span>
                </label>
                <input
                  type="email"
                  value={senderEmail}
                  size="35"
                  id="contactEmail"
                  name="senderEmail"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Konu</label>
                <input
                  type="text"
                  value={senderSubject}
                  size="35"
                  id="contactSubject"
                  name="senderSubject"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Mesajiniz <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="senderMessage"
                  value={senderMessage}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div>
                <button className="submit">Gonder</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div
            style={
              notifications.length
                ? { display: "flex", flexDirection: "column" }
                : { display: "none" }
            }
            id="message-warning"
          >
            <div>{error.senderName && "Adiniz cok uzun!"}</div>
            <div>{error.senderSubject && "Konu adiniz cok uzun!"}</div>
            <div>
              {error.senderMessage &&
                "Mesajiniz en az 10, en fazla 1000 karakter olmalidir!"}
            </div>
            <div>
              {error.senderEmail && "Gecerli bir email adresi giriniz!"}
            </div>
          </div>
          {success && (
            <div id="message-success" style={{ display: "flex" }}>
              <i className="fa fa-check"></i>Mesajin icin tesekkurler!
              <br />
            </div>
          )}
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Adres ve Tel Bilgileri</h4>
            <p className="address">
              {name}
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>

          {/* <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>
              <ul id="twitter">
                <li>
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum consequatur
                    dicta impedit voluptates mollitia sunt perspiciatis nemo voluptatem obcaecati
                    animi.
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="#">5 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius illo odio
                    similique tenetur possimus enim aliquam asperiores quo harum?
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="#">3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div> */}
        </aside>
      </div>
    </section>
  );
};

export default Contact;
