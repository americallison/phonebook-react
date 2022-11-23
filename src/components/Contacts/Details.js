import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMessage, faBackArrow } from '@fortawesome/free-solid-svg-icons'

export default function ContactDetails({
  contact,
  setContactDetail,
  setShow,
  setTrackContact,
}) {
  function handleClick(e) {
    e.preventDefault();
    setContactDetail({});
    setShow(true);
    setTrackContact({
      current: 'contact-list',
      previous: 'contact-detail',
      next: null,
    });
  }

  return (
    <div className="contact-details">
      <div className="bgimg">
        <span>
          <a href="" onClick={handleClick}>
          <FontAwesomeIcon icon={faBackArrow} />Contacts
          </a>
        </span>
        <img src={contact.img_url} width={40} alt={contact.name} />
        <h3>{contact.name}</h3>
      </div>
      <div className="contact-content">
        <ul>
          {contact.msisdns.map((msisdn) => {
            return <li>{msisdn}</li>;
          })}
          <li>{contact.address}</li>
        </ul>
      </div>
    </div>
  );
}