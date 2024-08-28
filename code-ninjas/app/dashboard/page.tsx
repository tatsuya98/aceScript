"use client";
import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { UserContext } from "../Context/UserProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SortByOptions from "../components/SortByOptions";
import KataCard from "../components/KataCard";
interface ResultData {
  title: string;
  slug: string;
  status: "completed" | "incomplete";
  attempts: number;
  difficulty: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const [progress, setProgress] = useState<ResultData[]>([]);
  const { user } = useContext(UserContext);
  const router = useRouter();
  const [sortBy, setSortBy] = useState<string>("");
  useEffect(() => {
    if (!user?.isLoggedIn) {
      alert("Please login first");
      router.push("/login");
    }
    if (sortBy.length > 0) {
      fetch("/api/sortKatas", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sort_by: sortBy,
          problems_solved: user?.problems_solved,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setProgress(data.response);
        });
    } else {
      const fetchProgress = async () => {
        const data = await fetch("/api/katas").then((res) => res.json());
        const kataData = data.response;
        setProgress(kataData);
      };
      fetchProgress();
    }
  }, [sortBy]);

  return (
    <div
      className={
        "flex flex-col items-center justify-around bg-[070815] mt-0 m-auto sm:min-w-[600px] lg:min-w-[900px]"
      }
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-[#CBD5E1] ">
        Challenges
      </h1>
      <div className="flex gap-10">
        <SortByOptions setSortBy={setSortBy} />
        <div className="flex flex-col gap-5 mt-10">
          {progress.map((entry) => (
            <KataCard
              key={entry.slug}
              title={entry.title}
              difficulty={entry.difficulty}
              description={entry.description}
              slug={entry.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
