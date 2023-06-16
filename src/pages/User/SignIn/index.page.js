import LoginForm from "../../../components/Form/User/Auth/Login/index.form";
import { UserAuthServices } from "../../../Services/User/Auth/index.service";
import Navbar from "../../../components/pageLoder/navbar";
function UserLogIn() {
    async function onSubmit(values){
        const res  = await UserAuthServices.userLogIn(values);
        if(res)
            window.alert("SignIn successfull")
        else    
            window.alert("Unauthorized User");
    }
    return <>
        <Navbar/>
        <LoginForm onSubmit={onSubmit}/>
    </>
}
export default UserLogIn;