import React from "react";

function MapSection() {
  return (
    <>
      <div className="map-section">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923040553!2d77.23700973928675!3d28.522404037240705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1731596136325!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            title="Map section"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default MapSection;
