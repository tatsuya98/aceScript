import { Box, Stack } from "@mui/material";
import Editor, { loader } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import OutputBox from "./OutputBox";

export default function CodeEditor({ question }: { question: any }) {
	const editorRef = useRef();
	const [starterCode, setStarterCode] = useState<any>([]);
	const [value, setValue] = useState("");

	useEffect(() => {
		setStarterCode(question.initial_code);
		setValue(question.initial_code);
	}, [question]);

	const onMount = (editor: any) => {
		editorRef.current = editor;
		editor.focus();
	};

	useEffect(() => {
		loader.init().then((monaco) => {
			monaco.editor.defineTheme("customTheme", {
				base: "vs-dark", // You can choose 'vs' (light) or 'vs-dark' (dark) as the base
				inherit: true, // Inherit other settings from the base theme
				rules: [], // Add custom token color rules here if needed
				colors: {
					"editor.background": "#1A1B2E", // Set your custom background color
					"editor.foreground": "#FFFFFF", // Optional: Set text color
					// You can customize other parts of the editor here as well
				},
			});
		});
	}, []);

	return (
		<Box
			width="100%"
			sx={{
				backgroundColor: "#070815",
				color: "#E0E0E0",
				padding: 2,
				borderRadius: 2,
				boxShadow: 2,
			}}
		>
			<Stack>
				<Box
					sx={{
						backgroundColor: "#1E1E1E",
						borderRadius: '14px',
						overflow: "hidden",
					}}
				>
					<Editor
						height="40vh"
						defaultLanguage="javascript"
						theme="customTheme"
						value={value}
						onMount={onMount}
						onChange={(value: any) => setValue(value)}
						options={{
							minimap: {
								enabled: false, // Optional: Disable the minimap if you don't need it
							},
						}}
					/>
				</Box>
				<OutputBox editorRef={editorRef} question={question} value={value} />
			</Stack>
		</Box>
	);
}
