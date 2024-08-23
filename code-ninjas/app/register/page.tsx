"use client";
import { useEffect, useState } from "react";
import FormInput from "../components/forInput";
import Link from "next/link";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAllInputFilled, setIsAllInputFilled] = useState(false);
  const [error, setError] = useState("");
  const handleRegister = (): void => {
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
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (username && password) {
      setIsAllInputFilled(true);
    } else {
      setIsAllInputFilled(false);
    }
  }, [username, password]);
  return (
    <>
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
