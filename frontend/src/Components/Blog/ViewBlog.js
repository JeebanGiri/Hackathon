import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ViewBlog.css";

const ViewBlog = () => {
  // const [showPopups, setShowPopups] = useState(
  //   Array.from({ length: 6 }, () => false)
  // );

  // const handleReadClick = (index) => {
  //   const updatedPopups = [...showPopups];
  //   updatedPopups[index] = true;
  //   setShowPopups(updatedPopups);
  // };

  // const handlePopupClose = (index) => {
  //   const updatedPopups = [...showPopups];
  //   updatedPopups[index] = false;
  //   setShowPopups(updatedPopups);
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     // Check if the clicked element is not a popup content or its children
  //     if (event.target.closest(".popup-content") === null) {
  //       const updatedPopups = showPopups.map(() => false);
  //       setShowPopups(updatedPopups);
  //     }
  //   };

  //   // Attach the event listener to the document body
  //   document.body.addEventListener("click", handleClickOutside);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     document.body.removeEventListener("click", handleClickOutside);
  //   };
  // }, [showPopups]);

  const [showPopups, setShowPopups] = useState(
    Array.from({ length: 6 }, () => false)
  );

  // const handleReadClick = (index) => {
  //   const updatedPopups = [...showPopups];
  //   updatedPopups[index] = true;
  //   setShowPopups(updatedPopups);
  // };

  const handleReadClick = (index, event) => {
    event.preventDefault();
    event.stopPropagation();

    const updatedPopups = [...showPopups];
    updatedPopups[index] = true;
    setShowPopups(updatedPopups);
  };

  const handlePopupClose = (index) => {
    const updatedPopups = [...showPopups];
    updatedPopups[index] = false;
    setShowPopups(updatedPopups);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element is not a popup content or its children
      if (event.target.closest(".popup-content") === null) {
        const updatedPopups = showPopups.map(() => false);
        setShowPopups(updatedPopups);
      }
    };

    // Attach the event listener to the document body
    document.body.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [showPopups]);

  // Define an array of image URLs
  const imageUrls = [
    "https://mdbootstrap.com/img/new/standard/nature/023.jpg",
    "https://mdbootstrap.com/img/new/standard/nature/111.jpg",
    "https://mdbootstrap.com/img/new/standard/nature/002.jpg",
    "https://mdbootstrap.com/img/new/standard/nature/022.jpg",
    "https://mdbootstrap.com/img/new/standard/nature/035.jpg",
  ];

  return (
    <>
      <div className="container">
        <section className="text-center">
          <h4 className="mb-5 mt-3">
            <strong>Latest Blog posts</strong>
          </h4>
          <div className="row">
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="col-lg-4 col-md-12 mb-4" key={index}>
                <div className="card">
                  <div
                    className="bg-image hover-overlay"
                    data-mdb-ripple-init
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={imageUrls[index % imageUrls.length]} // Use different images for each card
                      className="img-fluid"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Make Environment Green</h5>
                    <p className="card-text">
                      Join us as we explore ways to harmonize human activities
                      with nature, fostering a world where balance and longevity
                      go hand in hand.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={(event) => handleReadClick(index, event)}
                      data-mdb-ripple-init
                    >
                      Read
                    </button>
                  </div>

                  {showPopups[index] && (
                    <div className="popup" key={`popup-${index}`}>
                      <div className="popup-content">
                        <span
                          className="close"
                          onClick={() => handlePopupClose(index)}
                        >
                          &times;
                        </span>
                        <h2>Additional Content</h2>
                        <p>
                          Make environment better for better life, useful
                          for everyone in in their dailylife for each second breath.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
export default ViewBlog;
