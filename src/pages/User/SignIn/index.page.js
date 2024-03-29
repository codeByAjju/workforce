import { LoginForm } from "../../../components";
import { SweetAlert } from "../../../components";
import { UserAuthServices } from "../../../Services/User/Auth/index.service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setLocalStorageToken } from "../../../utils/common.util";
import { loginAction } from "../../../redux/AuthSlice/index";
import { useDispatch } from "react-redux";

function UserLogIn() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function OnSubmit(values) {
    console.log("it is values", values);
    const res = await UserAuthServices.userLogIn(values);
    console.log(res);
    if (res) {
      setLocalStorageToken(res?.data?.data?.User?.token);
      dispatch(loginAction(res?.data?.data?.User));
      setIsAlertVisible(true);
    } else window.alert("Unauthorized User");
  }
  return (
    <>
      <LoginForm onSubmit={OnSubmit} />
      <SweetAlert
        title="Congratulations"
        text="Login Successfull"
        show={isAlertVisible}
        icon="success"
        setIsAlertVisible={setIsAlertVisible}
        timer="1500"
      />
    </>
  );
}
export default UserLogIn;
