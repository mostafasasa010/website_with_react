import Header from "../components/Header";
import MainForm from "../components/MainForm";

function SignUp() {
  return (
    <>
      <Header />
      <MainForm
        button="Register"
        endPoint="register"
        setLocalStorage={true}
        to=""
        name=""
        email=""
        emailError={true}
      />
    </>
  );
}

export default SignUp;
