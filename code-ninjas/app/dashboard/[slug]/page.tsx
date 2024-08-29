"use client";
import CodeEditor from "@/app/components/CodeEditor";
import React, { useState, useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { UserContext } from "../../Context/UserProvider";
import { useRouter } from "next/navigation";
import LinearProgress from "@mui/material/LinearProgress";

interface Question {
	_id?: string;
	title?: string;
	slug?: string;
	description?: string;
	example?: string;
	language?: string;
	difficulty?: string;
	topic?: string;
	tests: [];
	initial_code: string;
}

export default function Page() {
	const { user } = useContext(UserContext);
	const router = useRouter();
	const { slug } = useParams();
	const [loading, setLoading] = useState(false);
	const [question, setQuestion] = useState<Question>({
		tests: [],
		initial_code: "",
	});

	async function fetchQuestion(path: string): Promise<void> {
		try {
			setLoading(true);
			const response = await fetch(path);
			const data: Question = await response.json();
			setQuestion(data);
		} catch (error) {
			console.error("Error fetching question:", error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		if (!user?.isLoggedIn) {
			router.push("/login");
		}
		const path = `/api/katas/${slug}`;

		fetchQuestion(path);
	}, [slug]);

	if (loading) {
		return (
			<Box sx={{marginTop: '200px'}} >
				<LinearProgress />
			</Box>
		);
	}

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				p: 3,
				bgcolor: "#070815",
				color: "#E0E0E0",
				minHeight: "100vh",
				gap: 3,
			}}
		>
			<Box
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					gap: 2,
				}}
			>
				<Typography variant="h3" sx={{ color: "#E0E0E0" }}>
					{question.title}
				</Typography>
				<Typography variant="body1" sx={{ color: "#B0B0B0" }}>
					Difficulty: {question.difficulty}
				</Typography>
				{/* <Typography variant="body1" sx={{ color: '#B0B0B0' }}>
          Topic: {question.topic}
        </Typography> */}
				<Typography variant="body1" sx={{ color: "#E0E0E0" }}>
					{question.description}
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 1,
						mt: 2,
						p: 2,
						bgcolor: "#1A1B2E",
						borderRadius: 1,
					}}
				>
					<Typography variant="body1" sx={{ color: "#E0E0E0" }}>
						Example
					</Typography>
					<Typography
						variant="body2"
						sx={{
							bgcolor: "#070815",
							borderRadius: 1,
							p: 2,
							color: "#E0E0E0",
							fontFamily: "monospace",
						}}
					>
						{question.example}
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					gap: 3,
				}}
			>
				<CodeEditor question={question} />
			</Box>
		</Box>
	);
}
