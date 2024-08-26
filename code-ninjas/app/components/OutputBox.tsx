import { Box, Button, Paper } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { executeCode } from "../utils/piston";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import patchUser from "../utils/passedTestPatch";
import { UserContext } from "../Context/UserProvider";
export default function OutputBox({
  value,
  editorRef,
  question,
  handleReset,
}: any) {
  const [output, setOutput] = useState<any>(null);
  const [description, setDescription] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tests, setTests] = useState<any>([]);
  const [passed, setPassed] = useState<boolean>(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setTests(question.tests);
  }, [question]);

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
      setDescription(null);
      setPassed(false);
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
      if (result) {
        passedTestsArray.push(test);
      } else {
        setOutput(test.testCase);
        setDescription(test.description);
        setPassed(false);
        failedTestsArray.push(test);
      }
      resultsArray.push(result);
    });
    if (failedTestsArray.length === 0) {
      setDescription(null);
      setOutput(null);
      setPassed(true);
      patchUser(question.slug, user?.username);
      user?.problems_solved.push(question.slug);
      setUser(user);
    }
  };

  return (
    <Box height="40vh">
      <Button variant="outlined" onClick={handleReset}>
        RESET
      </Button>
      <Button variant="outlined" onClick={runCode}>
        RUN CODE
      </Button>
      <Button variant="outlined" onClick={handleSubmit}>
        SUBMIT
      </Button>
      <Box
        sx={{
          height: "75%",
          border: "1px solid",
          borderRadius: "4px",
          p: "1rem",
        }}
      >
        <h2 className="font-bold">{passed && "Passed all tests"}</h2>
        <br></br>
        <p>{description}</p>

        {!passed && (
          <>
            <h2>Failed</h2>
            <br></br>
            <SyntaxHighlighter
              language="javascript"
              style={docco}
              wrapLongLines={true}
            >
              {output}
            </SyntaxHighlighter>
          </>
        )}
      </Box>
    </Box>
  );
}
