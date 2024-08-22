import * as React from "react";
type inputProps = {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
};
export default function FormInput({
  username,
  password,
  setUsername,
  setPassword,
}: inputProps): React.JSX.Element {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isUserError, setIsUserError] = React.useState(false);
  const [isPassError, setIsPassError] = React.useState(false);
  const handleInputChange = (
    input: string,
    inputFn: (input: string) => void
  ): void => {
    console.log(input);

    inputFn(input);
  };
  const handleClick = (): void => {
    setShowPassword(!showPassword);
  };
  const checkInput = (input: string, setFn: (value: boolean) => void): void => {
    if (input.length < 6) {
      setFn(true);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => handleInputChange(e.target.value, setUsername)}
          onBlur={() => checkInput(username, setIsUserError)}
          onFocus={() => setIsUserError(false)}
        />
        {isUserError && <p className="text-red-500">Username is required</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={password}
          onChange={(e) => handleInputChange(e.target.value, setPassword)}
          onBlur={() => checkInput(password, setIsPassError)}
          onFocus={() => setIsPassError(false)}
        />
        {isPassError && <p className="text-red-500">Password is required</p>}
        <div className="flex gap-2">
          <input type="checkbox" id="showPassword" onClick={handleClick} />
          <label htmlFor="showPassword">show password</label>
        </div>
      </div>
    </>
  );
}
