import { loadable } from "@loadable/component";

export const Project = loadable(()=>import("./Projects/index"));
export const TimeLogs = loadable(()=>import("./TimeLogs/index"))