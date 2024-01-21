import React from "react";
import "./userDashboard.css";
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
          <div className="col-lg-3 d-flex box-shadow p-3">
            <div className="col-10">
              <i className="fa fa-user-circle" style={{ fontSize: "60px" }}></i>
              <div className="mt-3">
                <span className="font-size">Ajay Patel</span>{" "}
                <span>CST0611</span>
              </div>
              <div className="">Associate Software Engineer</div>
            </div>

            <div className="col-2">
              <i className="fa fa-edit right"></i>
            </div>
          </div>
          {/* <div className="col-lg-1 bg-danger">123</div> */}
          <div className="col-lg-1">
            <div className="row h-50">
              <div className="text-center">
                <div style={{ textAlign: "justify" }}>
                  <span>Present</span>
                  <br />
                  <span className="mt-3">19</span>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <i className="fa fa-briefcase" aria-hidden="true"></i>
              </div>
            </div>
            <div className="row h-50">
              <div className="text-center">
                <div style={{ textAlign: "justify" }}>
                  <span>Logs</span>
                  <br />
                  <span className="mt-3">146:15</span>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <i class="fa fa-copy"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-2">123</div>
          <div className="col-lg-2">123</div>
          <div className="col-lg-2">123</div>
          <div className="col-lg-1">123</div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
