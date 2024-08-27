import React, { useState, useEffect } from 'react';
import Link from 'next/link'


type UserSolutionsProps = {
  problemsSolved?: Array<{ title: string; status: string }>;  
};

const UserSolutions: React.FC<UserSolutionsProps> = ({ problemsSolved = [] }) => {

  const [localProblemsSolved, setLocalProblemsSolved] = useState(problemsSolved);

  
  useEffect(() => {
    setLocalProblemsSolved(problemsSolved);
  }, [problemsSolved]);

  return (
    <div className="p-12 w-[400px] min-h-[910px] bg-[#BFDBFE1A] rounded-lg">
      <h1 className="text-2xl font-bold mb-5 text-white">Your Accepted Solutions</h1>
      {localProblemsSolved.length > 0 ? (
        localProblemsSolved.map((problem, index) => (
          <p key={index} className="text-xl text-white mb-2">
            <Link href={`/problems/${problem.title}`} className="text-blue-500 underline">
              {problem.title}
            </Link>
            {" "}{problem.status}
          </p>
        ))
      ) : (
        <p className="text-lg text-gray-500">No solutions found.</p>
      )}
    </div>
  );
};

export default UserSolutions;

