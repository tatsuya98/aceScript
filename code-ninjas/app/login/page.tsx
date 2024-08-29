"use client";
import * as React from "react";
import FormInput from "../components/forInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserContext } from "../Context/UserProvider";

export default function Login(): React.JSX.Element {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isAllInputFilled, setIsAllInputFilled] = React.useState(false);
  const [error, setError] = React.useState("");
  const { setUser } = React.useContext(UserContext);
  const router = useRouter();
  const handleLogin = (): void => {
    fetch(`/api/login`, {
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
          return;
        }

        setUser({
          username: data.username,
          avatar: data.avatar_url,
          problems_solved: data.problems_solved,
          isLoggedIn: true,
        });
        router.push("/dashboard");
      });
  };
  React.useEffect(() => {
    if (username && password) {
      setIsAllInputFilled(true);
    } else {
      setIsAllInputFilled(false);
    }
  }, [username, password]);
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Login</h1>
      {error && <p className="text-red-500 font-bold text-center">{error}</p>}
      <form
        className="flex flex-col gap-4 max-w-md mt-10 m-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormInput
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
        <div className="flex gap-2">
          <p>{`Don't have an account?`}</p>
          <Link
            className="underline text-blue-600 cursor-pointer"
            href={"/register"}
          >
            {" "}
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
    </>
  );
}
