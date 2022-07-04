import React from "react";

export const Deals = () => {
  return (
    <div className="row mx-auto my-2">
      <Col10 />
      <Col2 />
    </div>
  );
};

export const Col10 = () => {
  return (
    <div className="col-10 px-2 py-2 " style={{ overflow: "hidden" }}>
      <div className="shadow-lg px-2 py-2" style={{ height: "8vh" }}>
        <span className="text-dark">Deals of the Day</span>
        <span className="mx-2">
          <i className="bi bi-clock"></i>
        </span>
        <span className="mx-2 text-muted">20:11:40 left</span>

        <button
          className="btn-primary btn text-light float-end mx-2"
          style={{ height: "110%", width: "70px" }}
        >
          <span style={{ fontSize: "1.20vw" }}>View All</span>
        </button>
      </div>
      <br></br>
      <Images />
      <Images />

      <Images />

      <Images />
      <Images />
      <Images />
      <div
        className="shadow-lg px-2 py-2"
        style={{
          height: "8vh",
          marginTop: "55px",
          marginLeft: "5px",
          width: "35px",
          display: "inline-block",
        }}
      >
        <a href="#">
          <i class="bi bi-chevron-compact-right h2 text-dark"></i>
        </a>
      </div>
    </div>
  );
};

export const Col2 = () => {
  return (
    <div className="col-2">
      <a href="#">
        <img
          src="https://rukminim1.flixcart.com/flap/464/708/image/a60eb148185597ad.jpg?q=70"
          height={"275px"}
          width={"100%"}
        />
      </a>
    </div>
  );
};

export const Images = () => {
  return (
    <div
      style={{
        justifyContent: "space-between",
        alignContent: "center",
        float: "left",
        textAlign: "center",
        width: "130px",
      }}
    >
      <a href="#" style={{ textDecoration: "none" }}>
        <img
          src="https://rukminim1.flixcart.com/image/150/150/jy0frm80/deodorant/g/f/p/400-hamilton-deodorant-body-spray-denver-men-original-imafgb9fsafampwz.jpeg?q=70"
          width={"100px"}
        />
        <span style={{ fontSize: "1.0vw" }}>
          <p>Deals on Furnishings</p>
          <p className="text-info">Upto 80% off</p>
          <p className="text-muted">Cushions,pillows & more</p>
        </span>
      </a>
    </div>
  );
};
