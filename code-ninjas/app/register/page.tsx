"use client";
import { useEffect, useState } from "react";
import FormInput from "../components/forInput";
import Link from "next/link";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAllInputFilled, setIsAllInputFilled] = useState(false);

  useEffect(() => {
    if (username && password) {
      setIsAllInputFilled(true);
    } else {
      setIsAllInputFilled(false);
    }
  }, [username, password]);
  return (
    <form
      className="flex flex-col gap-4 max-w-md m-auto "
      onSubmit={(e) => e.preventDefault()}
    >
      <FormInput
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
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
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
  );
}
