import React, { useState } from "react";
import UsersData from "./components/UsersData";
import ArrayOperations from "./components/ArrayOperations";
import Button from "./components/Button";

function App() {
  const [isUserClick, setIsUserClick] = useState("");

  const ConditionalRender = () => {
    if (!isUserClick) {
      return;
    } else if (isUserClick==="user") {
      return <UsersData />;
    } if (isUserClick==="array") {
      return <ArrayOperations />;
    }
  }

  const handleUserClick = () => {
    setIsUserClick("user");
  };
  
  const handleArrayClick = () => {
    setIsUserClick("array");
  };

  return (
    <>
      <Button
        style={{ marginRight: "10px" }}
        title="Show User Data"
        onClick={handleUserClick}
      />
      <Button title="Show Array Data" onClick={handleArrayClick} />
      <ConditionalRender isUserClick={isUserClick} />
    </>
  );
}

export default App;
