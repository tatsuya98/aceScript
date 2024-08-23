"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  useEffect(() => {
    if (!user?.isLoggedIn) {
      router.push("/login");
    }
    const fetchProgress = async () => {
      const data = await fetch("/api/katas").then((res) => res.json());
      const kataData = data.response;
      setProgress(kataData);
    };
    fetchProgress();
  }, []);

  return (
    <div
      className={
        "flex flex-col items-center justify-around bg-[070815] mt-0 m-auto sm:min-w-[600px] lg:min-w-[900px]"
      }
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-[#CBD5E1] ">
        Challenges
      </h1>

      <table className=" w-4/5 text-lg text-center md:text-sm sm:text-left md:h-4/5 text-gray-500 dark:text-gray-400">
        <thead>
          <tr>
            <th className="px-6 py-3 text-white text-xl font-medium">Title</th>
            <th className="hidden lg:table-cell px-6 py-3 text-white text-xl font-medium">
              Difficulty
            </th>
            <th className=" hidden sm:table-cell px-6 py-3 text-white text-xl font-medium">
              Progress
            </th>
          </tr>
        </thead>
        <tbody className="text-white">
          {progress.map((entry) => (
            <tr
              key={entry.slug}
              className="border-b dark:border-gray-700 bg-[1e2042]"
            >
              <td className="px-6 py-2">
                <Link href={`/katas/${entry.slug}`}>{entry.title}</Link>
              </td>
              <td className="hidden lg:table-cell px-6 py-2">
                {entry.difficulty}
              </td>
              <td
                className={` hidden sm:table-cell px-4 py-2 ${
                  user?.problems_solved.includes(entry.slug)
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {user?.problems_solved.includes(entry.slug as string)
                  ? "✔️ Completed"
                  : "⏳ Incomplete"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
