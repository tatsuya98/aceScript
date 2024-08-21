"use client";
import * as React from "react";
import FormInput from "../components/forInput";
import Link from "next/link";

export default function Login(): React.JSX.Element {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isAllInputFilled, setIsAllInputFilled] = React.useState(false);
  React.useEffect(() => {
    if (username && password) {
      setIsAllInputFilled(true);
    } else {
      setIsAllInputFilled(false);
    }
  }, [username, password]);
  return (
    <form
      className="flex flex-col gap-4 max-w-md m-auto"
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
        <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded">
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
  );
}
