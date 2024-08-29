"use client";
import * as React from "react";
import FormInput from "../components/forInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserContext } from "../Context/UserProvider";
import { Box} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

export default function Login(): React.JSX.Element {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
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
