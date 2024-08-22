"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import Link from "next/link";

interface ResultData {
	title: string;
	slug: string;
	status: "completed" | "incomplete";
	attempts: number;
	difficulty: "Easy" | "Medium" | "Hard";
}

const Dashboard: React.FC = () => {
	const [progress, setProgress] = useState<ResultData[]>([]);
	const { user } = useContext(UserContext);
	useEffect(() => {
		const fetchProgress = async () => {
			const data = await fetch("/api/katas").then((res) => res.json());
			const kataData = data.response;
			setProgress(kataData);
		};

		fetchProgress();
	}, []);

	// const handleQuestionClick = (questionId: string) => {
	//   router.push(`/questions/${questionId}`);
	// };

	return (
		<div
			style={{
				padding: "20px",
				width: "1200px",
				margin: "0 auto",
				background: "black",
			}}
		>
			<h1
				style={{
					fontSize: "2.5rem",
					fontWeight: "bold",
					textAlign: "center",
					marginBottom: "20px",
					color: "white",
				}}
			>
				User Progress
			</h1>

			<table
				style={{
					width: "100%",
					borderCollapse: "collapse",
					marginBottom: "20px",
					color: "black",
				}}
			>
				<thead>
					<tr>
						<th
							style={{
								padding: "10px",
								textAlign: "left",
								borderBottom: "2px solid #ddd",
								fontSize: "1.2rem",
								color: "white",
							}}
						>
							Question Title
						</th>
						<th
							style={{
								padding: "10px",
								textAlign: "left",
								borderBottom: "2px solid #ddd",
								fontSize: "1.2rem",
								color: "white",
							}}
						>
							Difficulty
						</th>
						<th
							style={{
								padding: "10px",
								textAlign: "left",
								borderBottom: "2px solid #ddd",
								fontSize: "1.2rem",
								color: "white",
							}}
						>
							Status
						</th>
						<th
							style={{
								padding: "10px",
								textAlign: "left",
								borderBottom: "2px solid #ddd",
								fontSize: "1.2rem",
								color: "white",
							}}
						>
							Attempts
						</th>
					</tr>
				</thead>
				<tbody>
					{progress.map((entry) => (
						<Link href={`/dashboard/${entry.slug}`}>
							<tr
								key={entry.slug}
								style={{
									backgroundColor:
										entry.status === "completed" ? "#f0f8ff" : "#fff",
								}}
							>
								<td
									style={{
										padding: "10px",
										borderBottom: "1px solid #ddd",
										color: "blue",
										cursor: "pointer",
									}}
								>
									{entry.title}
								</td>
								<td
									style={{
										padding: "10px",
										borderBottom: "1px solid #ddd",
										color: "black",
									}}
								>
									{entry.difficulty}
								</td>
								<td
									style={{
										padding: "10px",
										borderBottom: "1px solid #ddd",
										color: entry.status === "completed" ? "green" : "red",
									}}
								>
									{entry.status === "completed"
										? "✔️ Completed"
										: "⏳ Incomplete"}
								</td>
								<td
									style={{
										padding: "10px",
										borderBottom: "1px solid #ddd",
										color: "black",
									}}
								>
									{entry.difficulty}
								</td>
								<td
									style={{
										padding: "10px",
										borderBottom: "1px solid #ddd",
										color: entry.status === "completed" ? "green" : "red",
									}}
								>
									{entry.status === "completed"
										? "✔️ Completed"
										: "⏳ Incomplete"}
								</td>
								<td
									style={{
										padding: "10px",
										borderBottom: "1px solid #ddd",
										color: "black",
									}}
								>
									{entry.attempts}
								</td>
							</tr>
							
						</Link>
					))}
				</tbody>
			</table>

			<div style={{ textAlign: "center" }}>
				<button
					// onClick={() => router.push('/detailed-report')}
					style={{
						padding: "10px 20px",
						fontSize: "1.2rem",
						backgroundColor: "#007BFF",
						color: "#fff",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
						boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
					}}
				>
					View Detailed Report
				</button>
			</div>
		</div>
	);
};

// onClick={() => handleQuestionClick(entry.questionId)}

export default Dashboard;
