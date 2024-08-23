"use client";
import CodeEditor from "@/app/components/CodeEditor";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";



export default function Page() {
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

	const { slug } = useParams();
	const [question, setQuestion] = useState<Question>({
		tests: [],
		initial_code: "",
	});

	const [tests, setTests] = useState<any>([]);
	


	useEffect(() => {
		const path = `/api/katas/${slug}`;
		fetch(path)
			.then((response) => response.json())
			.then((data: Question) => {
				console.log(data);
				setQuestion(data);
				setTests(data.tests);
				// setStarterCode(data.initial_code);
			});
	}, []);

;


	// const handleSubmit = () => {
	// 	let resultsArray: boolean[] = [];
	// 	let failedTestsArray: test[] = [];
	// 	let passedTestsArray: test[] = [];
	// 	tests.forEach((test: any) => {
	// 		console.log(test);
	// 		const userCode = new Function(value + `; ${test.testCase};`);
	// 		const result = userCode();
	// 		result ? passedTestsArray.push(test) : failedTestsArray.push(test);
	// 		resultsArray.push(result);
	// 	});
	// 	setFailedTests(failedTestsArray);
	// 	setPassedTests(passedTestsArray);
	// 	if (resultsArray.includes(false)) setOutcome("failed");
	// 	else setOutcome("passed");
	// };

	return (
		<section className="flex px-10 mt-20 ">
			<div className="w-1/2 flex flex-col gap-5">
				<h1>{question.title}</h1>
				<p>{question.difficulty}</p>
				<p>{question.topic}</p>
				<p>{question.description}</p>
				<div className="flex flex-col gap-3">
					<p>Example</p>
					<code>{question.example}</code>
				</div>
			</div>
			<div className="flex w-1/2 flex-col gap-5">
			<CodeEditor question={question}/>
			</div>

				{/* <p>outcome : {outcome}</p>
				<div>
					<h2>Failed Tests</h2>

					{failedTests.length > 0
						? failedTests.map((test) => (
								<>
									<p>{test.testCase}</p>
									<p>{test.description}</p>
								</>
						  ))
						: null}
				</div>
				<div>
					<h2>Passed Tests</h2>
					{passedTests.length > 0
						? passedTests.map((test) => (
								<>
									<p>{test.testCase}</p>
									<p>{test.description}</p>
								</>
						  ))
						: null}
				</div> */}
		</section>
	);
}
