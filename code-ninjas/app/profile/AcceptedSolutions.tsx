import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { UserContext } from "../Context/UserProvider";

type UserSolutionsProps = {
  problemsSolved?: string[];
};

const UserSolutions: React.FC<UserSolutionsProps> = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="p-12 w-[400px] h-[770px] bg-[#BFDBFE1A] rounded-lg border border-white">
      <h1 className="text-2xl font-bold mb-5 text-white">Challenges solved</h1>
      {user?.problems_solved.length > 0 ? (
        user?.problems_solved.map((problem, index) => (
          <p key={index} className="text-xl text-white mb-2">
            <Link href={`/dashboard/${problem}`} className="text-green-500">
              {problem
                .replace("-", " ")
                .replace(problem.charAt(0), problem.charAt(0).toUpperCase())}
            </Link>
          </p>
        ))
      ) : (
        <p className="text-lg text-gray-500">No solutions found.</p>
      )}
    </div>
  );
};

export default UserSolutions;
