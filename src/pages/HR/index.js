import React from "react";

export const UserLeaves = React.lazy(()=>import("./Leaves/index"));
export const UserAttendance = React.lazy(()=>import("./Attendance/index"));
export const UserHoliday = React.lazy(()=>import("./Holiday/index"));
export const UserPunchInReport = React.lazy(()=>import("./PunchInReport/index"));