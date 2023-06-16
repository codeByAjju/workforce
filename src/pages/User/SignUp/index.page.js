import SignUpForm from "../../../components/Form/User/Auth/SignUp/index.form";
import { UserAuthServices } from "../../../Services/User/Auth/index.service";
import Navbar from "../../../components/pageLoder/navbar";
function UserSignUp() {
    async function onSubmit(values){
        console.log(values);
        const res  = await UserAuthServices.userSignUp(values);
        if(res)
            window.alert("SignUp successfull")
        else    
            window.alert("error");
    }
    return <>
        <Navbar/>
        <SignUpForm onSubmit={onSubmit}/>
    </>
}
export default UserSignUp;