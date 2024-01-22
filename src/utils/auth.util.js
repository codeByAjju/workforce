import { WindowsFilled } from "@ant-design/icons";
import { baseRoutes } from "../helpers/baseRoutes";
import { GetLocalStorageToken } from "./common.util";

function authDrive(route, userData, pathname) {
    try {
        let checkData = GetLocalStorageToken();
        let user = "";

        if (pathname.search(baseRoutes.adminBaseRoute.replace("/", "")) >= 0) {
            user = "admin";
        } else {
            user = "user";
        }
        let userCheck = userData?.userData?.userType ?? user;
        if (
            (userCheck === "admin" && route?.adminAccess === true) ||
            (userCheck === "user" && route?.commonRoute === true)
        ) {
            return true;
        }
        else if (route.private && userData?.userData?.userType === user) {
            // ********For secure route**************
            if (!!checkData) {
                return true;
            } else {        
                return false;
            }
        }
        else {
            // **Non secure route****
            if (!!checkData) {
                return false;
            }
            if (route.private === false) {

                return true;
            } else {
                return false;
            }
        }

    } catch (error) {
        return false;
    }
}

export default authDrive;