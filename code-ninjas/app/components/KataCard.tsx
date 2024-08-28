import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import Image from "next/image";
import Link from "next/link";

type cardProps = {
  difficulty: string;
  title: string;
  description: string;
  slug: string;
};
export default function KataCard({
  difficulty,
  title,
  description,
  slug,
}: cardProps) {
  const { user } = useContext(UserContext);
  return (
    <div className="flex bg-#070815 border-solid  border-2 border-gray-400 text-white p-10 gap-10 rounded-lg mt-5 m-auto max-w-5xl min-w-[300px]">
      <div className="flex flex-col gap-10 ">
        <Link className="w-fit" href={`/dashboard/${slug}`}>
          <Image
            src="/jsIconSmall.png"
            alt="programming language icon"
            width={35}
            height={35}
          />
        </Link>
        <p className="text-white">{difficulty}</p>
      </div>

      <div className="flex flex-col gap-10 ">
        <Link className="w-fit" href={`/dashboard/${slug}`}>
          <h1 className="text-white font-bold">{title}</h1>
        </Link>
        <p className="text-white">{description}</p>
        <p
          className={` ${
            user?.problems_solved.includes(slug)
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {user?.problems_solved.includes(slug)
            ? "✔️ Completed"
            : "⏳ Incomplete"}
        </p>
      </div>
    </div>
  );
}
