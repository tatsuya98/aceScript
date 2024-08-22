"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import Link from "next/link";

interface ResultData {
  title: string;
  slug: string;
  status: 'completed' | 'incomplete';
  attempts: number;
  difficulty: "Easy" | "Medium" | "Hard";
}

const Dashboard: React.FC = () => {
  const [progress, setProgress] = useState<ResultData[]>([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    const fetchProgress = async () => {
      const data = await fetch('/api/katas').then((res) => res.json())
      const kataData = data.response
      setProgress(kataData);

      // below hardcoded in is problems solved in user array to mark them as complete
      // shows type error but is working
      user?.problems_solved.push('make-counter')
      user?.problems_solved.push('mean')
      user?.problems_solved.push('flatten')

    };
    fetchProgress();
  }, []);


  return (
    <div
      className={"flex flex-col items-center justify-center bg-[070815] mt-0 m-20 min-w-[900px] py-10 px-10"}
    >
      <h1
        className="text-4xl font-bold text-center mb-10 text-[#CBD5E1] "
      >
        Challenges
      </h1>

      <table
       className="w-4/5 text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead>
          <tr>
            <th
             className="px-6 py-3 text-white text-xl font-medium"
            >
              Title
            </th>
            <th
             className="hidden lg:block px-6 py-3 text-white text-xl font-medium"
              
            >
              Difficulty
            </th>
            <th
             className="px-6 py-3 text-white text-xl font-medium"
              
            >
              Progress
            </th>
          </tr>
        </thead>
        <tbody className="text-white">
          {progress.map((entry) => (

            <tr key={entry.slug} className="border-b dark:border-gray-700 bg-[1e2042]">
              <td className="px-6 py-2" >
                <Link href={`/katas/${entry.slug}`}>
                {entry.title}
                </Link>
              </td>  
              <td className="hidden lg:block px-6 py-2" >{entry.difficulty}</td>
              <td className={`px-4 py-2 ${ user?.problems_solved.includes(entry.slug) ? 'text-green-500' : 'text-red-500'}`}>
                { user?.problems_solved.includes(entry.slug as string) ? '✔️ Completed' : '⏳ Incomplete'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Dashboard;
