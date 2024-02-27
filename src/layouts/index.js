import React from "react";

export const MainLayout = React.lazy(()=>import("./Main/index.layout"));
export const PublicLayout = React.lazy(()=> import("./public/index.layout"));
export const PrivateLayout = React.lazy(() => import("./private/index.layout"));
export const AdminMainLayout = React.lazy(()=>import("./adminMain/index.latout"));