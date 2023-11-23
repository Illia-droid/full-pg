import React from "react";
import { useSelector } from "react-redux";
import UserForm from "../components/UserForm";
const RegistrationPage = () => {
  const { error, isFetching, userAuth } = useSelector((store) => store.users);
  if (error) {
    return (
      <>
        {error && <p>Error!</p>}
        {isFetching && <p>Loading...</p>}
        {!error && !isFetching && !userAuth && <UserForm />}
        {!error && !isFetching && userAuth && <p>Welcome!</p>}
      </>
    );
  }
  return <UserForm />;
};

export default RegistrationPage;
