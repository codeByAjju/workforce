import { useSelector } from "react-redux";
import { generatePath, useLocation, useNavigate, useParams } from "react-router-dom";
import { getCompletePathList } from "../../route";
import { AuthDrive } from "../../utils";
import { baseRoutes } from "../../helpers/baseRoutes";
import { useEffect } from "react";
import Swal from "sweetalert2";

function AppLayout({ setRedirectPath, children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const userData = useSelector(state => state.auth);

    function getGeneratedPath(data) {
        try {
            return generatePath(data, params);
        } catch (error) {
            return data;
        }
    }
    const activeRoute = getCompletePathList().find((e) => {
        const routePath = getGeneratedPath(e.key);
        const browserPath = location.pathname;
        return routePath === browserPath;
    });

    // const activeRoute = getCompletePathList().find(e => e.key === location.pathname);
    // const activeRoute = getCompletePathList().find(e => e.key.search(location.pathname.replace(/[0-9]/g, '')) >=0)
    const isPrivate = activeRoute?.private;
    const isValid = AuthDrive(activeRoute, userData, location.pathname);
    function checkValid() {
        if (!isValid) {
            let publicPath = "/";
            let privatePath = "";
            let path = "";
            if (
                location.pathname.search(baseRoutes.adminBaseRoute.replace("/", "")) >=
                0
            ) {

                path = "admin";
            } else {
                path = "user";
            }

            let checkData = userData?.userData?.role ?? path;
            if (checkData === "admin") {
                Swal.fire({
                    title: 'You Will Have To Login First',
                    icon: "warning",
                    iconColor: "red",
                    timer: 2000,
                    showConfirmButton: false
                })
                privatePath = `${baseRoutes.adminBaseRoute}/dashboard`;
                publicPath = `${baseRoutes.adminBaseRoute}/login`;
            }
            else if (checkData === "user") {
                Swal.fire({
                    text: 'You have To Login First',
                    icon: "warning",
                    timer: 2000,
                    showConfirmButton: false
                })
                privatePath = `${baseRoutes.userBaseRoute}dashboard`;
                publicPath = `${baseRoutes.userBaseRoute}login`;
            }
            else {

                privatePath = "/";
            }
            if (isPrivate) {
                /** ******* If route type is private but not*****************
                 * ******* able to prove their identity as valid entity*****
                 * ********* so redirect it to public route******** */
                // modalNotification({
                //     type: "warning",
                //     message: "Your Session is expired. Please login again.",
                // });
                // navigate("/vendor/login")
                // return false;

                setRedirectPath(publicPath)
            } else {
                /** ******* If route type is public but not*****************
                 * ******* able to prove their identity as valid entity*****
                 * ********* so redirect it to private route******** */
                setRedirectPath(privatePath)
            }
        } else {
            // setRedirectPath(location.pathname);
        }
    }

    useEffect(() => {
        checkValid();
    }, [location.pathname]);

    return <>{isValid && children}</>;
}

export default AppLayout;