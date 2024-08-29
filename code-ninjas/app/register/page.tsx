"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { UserContext } from "../Context/UserProvider";
import { useRouter } from "next/navigation";
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isUserError, setIsUserError] = useState(false);
  const [isPassError, setIsPassError] = useState(false);
  const [isConfirmError, setIsConfirmError] = useState(false);
  const [isAllInputFilled, setIsAllInputFilled] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);
  const router = useRouter();
  const handleRegister = (): void => {
    if (checkPassword()) {
      fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            setError(data.message);
          } else {
            setUser({
              username: data.username,
              avatar: data.avatar_url,
              problems_solved: data.problems_solved,
              isLoggedIn: true,
            });
            router.push("/dashboard");
          }
        });
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
  const checkPassword = (): boolean => {
    if (password === confirmPassword) {
      return true;
    }
    setError("Passwords do not match");
    return false;
  };
  useEffect(() => {
    if (username && password && confirmPassword) {
      setIsAllInputFilled(true);
    } else {
      setIsAllInputFilled(false);
    }
  }, [username, password, confirmPassword]);
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">Register</h1>
      {error && (
        <p className="text-red-500 font-bold text-center mt-10">{error}</p>
      )}
      <form
        className="flex flex-col gap-4 max-w-md mt-10 m-auto"
        onSubmit={(e) => e.preventDefault()}
      >
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
          {isUserError && <p className="text-red-500">Field is required</p>}
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
            onFocus={() => {
              setIsPassError(false), setError("");
            }}
          />

          {isPassError && <p className="text-red-500">Field is required</p>}
          <div className="flex flex-col gap-2">
            <label htmlFor="confirm-password">Confirm password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirm-password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) =>
                handleInputChange(e.target.value, setConfirmPassword)
              }
              onBlur={() => checkInput(confirmPassword, setIsConfirmError)}
              onFocus={() => {
                setIsConfirmError(false), setError("");
              }}
            />
            {isConfirmError && (
              <p className="text-red-500">Field is required</p>
            )}
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="showPassword" onClick={handleClick} />
            <label htmlFor="showPassword">show password</label>
          </div>
        </div>
        <div className="flex gap-2">
          <p>{`Already have an account?`}</p>
          <Link
            href={"/login"}
            className="underline text-blue-600 cursor-pointer"
          >
            Login
          </Link>
        </div>
        {isAllInputFilled ? (
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleRegister}
          >
            Register
          </button>
        ) : (
          <button
            disabled
            className=" bg-blue-500 text-white font-bold py-2 px-4 opacity-75 rounded cursor-not-allowed"
          >
            Register
          </button>
        )}
      </form>
    </>
  );
}
