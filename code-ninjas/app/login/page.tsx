"use client";
import * as React from "react";
import FormInput from "../components/forInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserContext } from "../Context/UserProvider";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

export default function Login(): React.JSX.Element {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isUserError, setIsUserError] = React.useState(false);
  const [isPassError, setIsPassError] = React.useState(false);
  const [isAllInputFilled, setIsAllInputFilled] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { setUser } = React.useContext(UserContext);
  const router = useRouter();

  const handleLogin = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch(`/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.message) {
        setError(data.message);
        return;
      }

      setUser({
        username: data.username,
        avatar: data.avatar_url,
        problems_solved: data.problems_solved,
        isLoggedIn: true,
      });

      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (value: string, setFn: any) => {
    setFn(value);
  };
  const checkInput = (input: string, setFn: (value: boolean) => void): void => {
    if (input.length < 1) {
      setFn(true);
    }
  };
  const handleClick = (): void => {
    setShowPassword(!showPassword);
  };
  React.useEffect(() => {
    if (username && password) {
      setIsAllInputFilled(true);
    } else {
      setIsAllInputFilled(false);
    }
  }, [username, password]);

  if (loading) {
    return (
      <Box sx={{ marginTop: "200px" }}>
        <LinearProgress />
      </Box>
    );
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Login</h1>
      {error && (
        <p className="text-red-500 font-bold text-center mt-10">{error}</p>
      )}
      <form
        className="flex flex-col gap-4 w-4/5 justify-center sm:w-1/4 m-auto mt-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className=""
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
        <div className="flex gap-2">
          <p>{`Don't have an account?`}</p>
          <Link
            className="underline text-blue-600 cursor-pointer"
            href={"/register"}
          >
            Register{" "}
          </Link>
        </div>
        {isAllInputFilled ? (
          <button
            className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        ) : (
          <button
            disabled
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-75 cursor-not-allowed"
          >
            Login
          </button>
        )}
      </form>
    </div>
  );
}
