import loadable from "@loadable/component";

export const AdminLogin = loadable(()=>import("./Login/index.page"));
export const AdminDashBoard = loadable(()=>import("./Dashboard/index"))