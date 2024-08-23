import {Box, Button , Typography} from "@mui/material"
import { useEffect, useState } from "react";
import { executeCode } from "../utils/piston";

export default function OutputBox({value , editorRef , question} : any){
  const [output, setOutput] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tests, setTests] = useState<any>([]);
  const [failedTests, setFailedTests] = useState<test[]>([]);
	const [passedTests, setPassedTests] = useState<test[]>([]);

  useEffect(()=> {
    setTests(question.tests)
  } , [question])

  interface test {
		testCase: string;
		description: string;
	}

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  	const handleSubmit = () => {
		let resultsArray: boolean[] = [];
		let failedTestsArray: test[] = [];
		let passedTestsArray: test[] = [];
		tests.forEach((test: any) => {
			const userCode = new Function(value + `; ${test.testCase};`);
			const result = userCode();
      console.log(result)
			result ? passedTestsArray.push(test) : failedTestsArray.push(test);
			resultsArray.push(result);
		});
		setFailedTests(failedTestsArray);
    console.log(failedTests)
		setPassedTests(passedTestsArray);
    console.log(passedTests)

		if (resultsArray.includes(false)) {setOutput("failed")}
		else {setOutput("passed")};
	};
    
    return(
        <Box height="40vh">
            <Button variant="outlined" >RESET</Button>
            <Button variant="outlined" onClick={runCode}>RUN CODE</Button>
            <Button variant="outlined" onClick={handleSubmit}>SUBMIT</Button>
            <Box sx={{height:"75%" , border:"1px solid" , borderRadius:"4px" , p:"1rem"}}>{output}</Box>
        </Box>
    )
}