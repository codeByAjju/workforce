import LoginForm from "../../../components/Form/User/Auth/Login/index.form";
import { SweetAlert } from "../../../components";
import { UserAuthServices } from "../../../Services/User/Auth/index.service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function UserLogIn() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const navigate = useNavigate();

  async function OnSubmit(values) {
    console.log("it is values", values);
    const res = await UserAuthServices.userLogIn(values);
    console.log(res);
    if (res) {
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
