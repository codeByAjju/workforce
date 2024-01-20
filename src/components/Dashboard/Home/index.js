import React from "react";
import { Col, Row } from "react-bootstrap";

function UserDashboard() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 d-flex">
          <div className="col-lg-6">
            <span className="h5">Dashboard</span>
            <span className="mx-2">Home</span>
            <span>Dashboard</span>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <span className="mx-2">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <span className="mx-2">
              <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
            </span>
            <span className="mx-2">
              <i className="fa fa-bell" aria-hidden="true"></i>
            </span>
            <span className="mx-2">
              <i className="fa fa-power-off" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="col-lg-12 d-flex mt-4 bg-light">
          <div className="col-lg-4">
            <span className="h5">Welcome Ajay Patel</span>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <div>Check In At - 10:06</div>
              <span>Time Since Check-In: 8 hrs 17</span>
            </div>
          </div>

          <div className="col-lg-2 d-flex justify-content-end">
            <button className="btn btn-danger">Check Out</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 d-flex mt-3">
          <div className="col-lg-2">123</div>
          <div className="col-lg-2">123</div>
          <div className="col-lg-2">123</div>
          <div className="col-lg-2">123</div>
          <div className="col-lg-2">123</div>
          <div className="col-lg-2">123</div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
