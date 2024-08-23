import {Box, Button , Typography , Stack} from "@mui/material"
import Editor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import OutputBox from "./OutputBox";

export default function CodeEditor({question} : {question:any}){
	const editorRef = useRef();
    const [starterCode, setStarterCode] = useState<any>([]);
    const [value, setValue] = useState("");
    const handleEditorChange = (value: any): void => {
		setValue(value);
	}

	useEffect(()=>{
		setStarterCode(question.initial_code)
	} , [question]) 
	
	const onMount = (editor:any) => {
		editorRef.current = editor;
		editor.focus()
	  };

	return(
    <Box width="100%">
		<Stack>
			<Box>
       	 	<Editor
					height="40vh"
					defaultLanguage="javascript"
					theme="vs-dark"
					value={starterCode}
					onMount={onMount}
					onChange={(value: any) => setValue(value)}
				/>
			</Box>
            <OutputBox editorRef={editorRef} question={question}  value={value}/>
		</Stack>
    </Box>
)
}