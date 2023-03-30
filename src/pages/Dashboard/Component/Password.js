import React, { useState } from "react";
import auth from "../../../firebase.init";

const Password = () => {
  const [password, setPassword] = useState(auth);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor="password">Password</label>
      <input
        type={showPassword ? "text" : "password"}
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={toggleShowPassword}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Password;
