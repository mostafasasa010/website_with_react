import MainForm from "../components/MainForm";
function CreateUser() {
  return (
    <MainForm
      button="Add"
      title="Create"
      endPoint="user/create"
      setLocalStorage={false}
      to="dashboard/users"
      name=""
      email=""
      emailError={true}
      class="create"
    />
  );
}

export default CreateUser;
