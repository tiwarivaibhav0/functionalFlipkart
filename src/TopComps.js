import React from "react";

export const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-primary"
            id="navbarSupportedContent"
          >
            <div
              className="col  nav-item"
              style={{
                // height: "45px",
                color: "white",
              }}
            >
              <div style={{ marginLeft: "20%" }}>
                <a href="#" style={{ marginLeft: "2%" }}>
                  <img src="/logo.jpeg" alt="" height={"42px"} />
                </a>

                <div
                  className="border search"
                  contentEditable="true"
                  style={{
                    height: "33px",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                    width: "300px",
                    marginLeft: "2%",
                    display: "inline-block",
                    backgroundColor: "#FFF",
                    overflow: "auto",
                    verticalAlign: "middle",
                  }}
                >
                  <i className="bi bi-search float-end text-primary"></i>

                  <small className="text-muted mx-2">
                    <span style={{ width: "100%" }}>
                      {" "}
                      Search for product,brands and more
                    </span>
                  </small>
                </div>
                <button
                  className="text-primary btn btn-light btn-sm"
                  style={{ marginLeft: "2%", height: "60%", width: "55px" }}
                >
                  Login
                </button>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    marginLeft: "2%",
                    height: "60%",
                    width: "10%",
                  }}
                >
                  <small className="text-light">Become a Seller</small>
                </a>

                <div className=" dropdown" style={{ display: "inline-block" }}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <small className="text-light">More</small>
                  </a>
                  <div className="dropdown-menu" ariaLabelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Action 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Action 2
                    </a>
                  </div>
                </div>
                <div style={{ display: "inline-block" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none" }}
                    className="text-light"
                  >
                    <span>
                      <i className="bi bi-cart"></i>
                    </span>
                    <span style={{ marginLeft: "5px" }}>Cart</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export const Comp2 = () => {
  return (
    <div
      style={{
        justifyContent: "space-between",
        // marginLeft: "6.5%",
        padding: "auto",
        textAlign: "center",
      }}
    >
      <div
        style={{
          alignContent: "center",
          width: "100px",
          display: "inline-block",
        }}
      >
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
          width={"80%"}
        />
        <a href="#" className="text-dark" style={{ textDecoration: "none" }}>
          <small>Top Offers</small>
        </a>
      </div>
      <div
        style={{
          alignContent: "center",
          width: "100px",
          display: "inline-block",
        }}
      >
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
          width={"80%"}
        />
        <a href="#" className="text-dark" style={{ textDecoration: "none" }}>
          <small>Grocery</small>
        </a>
      </div>
      <div
        style={{
          alignContent: "center",
          width: "100px",
          display: "inline-block",
        }}
      >
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
          width={"80%"}
        />
        <a href="#" className="text-dark" style={{ textDecoration: "none" }}>
          <small>Mobile</small>
        </a>
      </div>
      <div
        style={{
          alignContent: "center",
          width: "100px",
          display: "inline-block",
        }}
      >
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
          width={"80%"}
        />
        <div className=" dropdown" style={{ display: "inline-block" }}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <small className="text-dark">Fashion</small>
          </a>
          <div className="dropdown-menu" ariaLabelledby="dropdownId">
            <a className="dropdown-item" href="#">
              Action 1
            </a>
            <a className="dropdown-item" href="#">
              Action 2
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          alignContent: "center",
          width: "100px",
          display: "inline-block",
        }}
      >
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
          width={"80%"}
        />
        <div className=" dropdown" style={{ display: "inline-block" }}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <small className="text-dark">Electronics</small>
          </a>
          <div className="dropdown-menu" ariaLabelledby="dropdownId">
            <a className="dropdown-item" href="#">
              Action 1
            </a>
            <a className="dropdown-item" href="#">
              Action 2
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          alignContent: "center",
          width: "100px",
          display: "inline-block",
        }}
      >
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
          width={"80%"}
        />
        <div className=" dropdown" style={{ display: "inline-block" }}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <small className="text-dark">Home</small>
          </a>
          <div className="dropdown-menu" ariaLabelledby="dropdownId">
            <a className="dropdown-item" href="#">
              Action 1
            </a>
            <a className="dropdown-item" href="#">
              Action 2
            </a>
          </div>
        </div>{" "}
      </div>
      <div
        style={{
          alignContent: "center",
          width: "100px",
          display: "inline-block",
        }}
      >
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
          width={"80%"}
        />
        <a href="#" className="text-dark" style={{ textDecoration: "none" }}>
          <small>Appliances</small>
        </a>
      </div>
      <div
        style={{
          alignContent: "center",
          width: "100px",
          display: "inline-block",
        }}
      >
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
          width={"80%"}
        />
        <a href="#" className="text-dark" style={{ textDecoration: "none" }}>
          <small>Travel</small>
        </a>
      </div>
      <div
        style={{
          alignContent: "center",
          width: "100px",
          display: "inline-block",
        }}
      >
        <img
          src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
          width={"80%"}
        />
        <div className=" dropdown" style={{ display: "inline-block" }}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <small className="text-dark">Toys & more</small>
          </a>
          <div className="dropdown-menu" ariaLabelledby="dropdownId">
            <a className="dropdown-item" href="#">
              Action 1
            </a>
            <a className="dropdown-item" href="#">
              Action 2
            </a>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
