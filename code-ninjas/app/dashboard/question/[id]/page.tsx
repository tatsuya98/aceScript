"use client";
import { useParams } from "next/navigation";
export default function Page() {
  const { id } = useParams();
  console.log();

  return (
    <div>
      <h1>Question</h1>
    </div>
  );
}
