import routesMap from "../../../routeControl/userRoutMap";
import UserSignUp from "../../../pages/User/SignUp/index.page";
import UserLogIn from "../../../pages/User/SignIn/index.page";
export default function route(){
    return [
        {
            path: routesMap.SIGNUP.path,
            name: "Sign Up",
            key: routesMap.SIGNUP.path,
            commonRoute: false,
            private: false,
            element: <UserSignUp/>,
          },
          {
            path: routesMap.LOGIN.path,
            name: "Login",
            key: routesMap.LOGIN.path,
            commonRoute: false,
            private: false,
            element: <UserLogIn/>,
          },
    ]    
}