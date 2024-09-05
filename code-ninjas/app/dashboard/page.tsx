"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SortByOptions from "../components/SortByOptions";
import KataCard from "../components/KataCard";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
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
  const [loading, setLoading] = useState<boolean>(false);
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
        try {
          setLoading(true);
          const data = await fetch("/api/katas").then((res) => res.json());
          const kataData = data.response;
          setProgress(kataData);
        } finally {
          setLoading(false);
        }
      };
      fetchProgress();
    }
  }, [sortBy, user?.isLoggedIn, user?.problems_solved, router]);

  if (loading) {
    return (
      <Box sx={{ marginTop: "200px" }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <div
      className={
        "flex flex-col items-center justify-around bg-[070815] mt-0 m-auto sm:min-w-[600px] lg:min-w-[900px]"
      }
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-[#CBD5E1] mt-10">
        Challenges
      </h1>
      <div className="md:flex flex:col gap-10 ml-10 mr-10">
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
