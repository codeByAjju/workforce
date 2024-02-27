import { Outlet, useNavigate } from "react-router-dom";
import AppLayout from "../App/index.layout";
import { useEffect, useState } from "react";
function PrivateLayout() {
    const [redirectpath, setRedirectPath] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        navigate(redirectpath);
    }, [redirectpath]);
    
    return <>
        <AppLayout setRedirectPath={setRedirectPath}>
            <Outlet />
        </AppLayout>
    </>
}

export default PrivateLayout;