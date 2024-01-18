import { loadable } from "@loadable/component";

export const Attendance = loadable(()=>import("./Attendance/index"));
export const Holiday = loadable(()=>import("./Holiday/index"));
export const Leaves = loadable(()=> import("./Leaves/index"))
export const PunchInReport = loadable(()=>import("./PunchInReport/index"));
