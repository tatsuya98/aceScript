import { Box, Button, Alert , Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { executeCode } from "../utils/piston";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import patchUser from "../utils/passedTestPatch";
import { UserContext } from "../Context/UserProvider";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


export default function OutputBox({
  value,
  editorRef,
  question,
}: any) {
  const [output, setOutput] = useState<any>(null);
  const [description, setDescription] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tests, setTests] = useState<any>([]);
  const [passed, setPassed] = useState<boolean>(false);
  const [testResults, setTestResults] = useState<any[]>([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setTests(question.tests);
  }, [question]);

  interface Test {
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
      setTestResults([]);
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
    let failedTestsArray: Test[] = [];
    let passedTestsArray: Test[] = [];
    let results: any[] = [];
    setOutput(null)

    tests.forEach((test: any) => {
      const userCode = new Function(value + `; ${test.testCase};`);
      const result = userCode();

      if (result) {
        passedTestsArray.push(test);
        results.push({ ...test, passed: true });
      } else {
        failedTestsArray.push(test);
        results.push({ ...test, passed: false });
      }

      resultsArray.push(result);
    });

    setTestResults(results);

    if (failedTestsArray.length === 0 && user) {
      setDescription(null);
      setOutput(null);
      setPassed(true);
      patchUser(question.slug, user.username);
      user.problems_solved.push(question.slug);
      setUser(user);
    } else {
      setPassed(false);
    }
  };

  const handleReset = () => {
    setOutput(null);
    setDescription(null);
    setIsError(false);
    setTestResults([]);
    setPassed(false);
    if (editorRef && editorRef.current) {
      editorRef.current.setValue(question.initial_code)
    }
    if (question && question.tests) {
      setTests(question.tests);
    }
  };

  return (
    <Box
      sx={{
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        bgcolor: "#070815",
        color: "#E0E0E0",
        p: 1,
      }}
    >
      <Box sx={{ display: "flex", gap: 1 , justifyContent:"end" }}>
        <Button variant="contained" color="error" onClick={handleReset}>
          RESET
        </Button>
        <Button variant="contained" color="primary" onClick={runCode}>
          RUN CODE
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          border: "1px solid #333",
          borderRadius: 2,
          p: 2,
          boxShadow: 2,
          overflow: "auto",
          bgcolor: "#1E1E1E",
        }}
      >
        {passed && (
          <Alert severity="success" variant="filled" sx={{ mb: 2 }}>
            All tests have passed successfully!
          </Alert>
        )}

        {description && (
          <Typography variant="body1" sx={{ mb: 2 }}>
            {description}
          </Typography>
        )}

        <Box>
          {testResults.map((result, index) => (
            <Box
              key={index}
              sx={{
                color: result.passed ? "green" : "red",
                mb: "0.5rem",
              }}
            >
              
              <Typography
                variant="body1"
                sx={{ color: result.passed ? "green" : "red" }}
              >{result.passed ? (
                <CheckIcon sx={{ color: "#4CAF50" , mr:"1px" , mb:"3px" }} />
              ) : (
                <CloseIcon sx={{ color: "#F44336" }} />
              )}
                {result.description}
              </Typography>
            </Box>
          ))}

          {/* Display the code output */}
          {output && (
            <Box
              sx={{
                mt: 2,
                p: 2,
                backgroundColor: "#f5f5f5",
                borderRadius: 1,
                overflow: "auto",
                maxHeight: "150px",
                boxShadow: 1,
              }}
            >
              <SyntaxHighlighter
                language="javascript"
                style={docco}
                wrapLongLines={true}
              >
                {output.join("\n")}
              </SyntaxHighlighter>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

