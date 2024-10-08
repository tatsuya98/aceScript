import axios from "axios";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (sourceCode : string) => {
  console.log(sourceCode);
  const response = await API.post("/execute", {
    language: "javascript",
    version: "18.15.0",
    files: [
      {
        name: "script.js",
        content: sourceCode,
      },
    ],
  });
  return response.data;
};
