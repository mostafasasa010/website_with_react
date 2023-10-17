import Header from "../components/Header";
import MainForm from "../components/MainForm";

function SignUp() {
  return (
    <>
      <Header />
      <MainForm
        button="Register"
        title="Sign Up"
        endPoint="register"
        setLocalStorage={true}
        to=""
        name=""
        email=""
        emailError={true}
        class="sign-up"
      />
    </>
  );
}

export default SignUp;
