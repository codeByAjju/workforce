import LoginForm from "../../../components/Form/User/Auth/Login/index.form";
import { UserAuthServices } from "../../../Services/User/Auth/index.service";
import { useNavigate } from "react-router-dom";
function UserLogIn() {
  const navigate = useNavigate();

  async function OnSubmit(values) {
    console.log("it is values", values);
    // const res  = await UserAuthServices.userLogIn(values);
    // if(res){
    //     window.alert("SignIn successfull")
    //     navigate('/dashboard');
    // }
    // else
    //     window.alert("Unauthorized User");
  }
  return (
    <>
      <LoginForm onSubmit={OnSubmit} />
    </>
  );
}
export default UserLogIn;
