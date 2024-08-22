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
    <div style={{
      padding: '50px',
      width: '400px',
    
      minHeight: '860px',
      backgroundColor: '#BFDBFE1A',
      borderRadius: '10px',
     
    
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: 'white', }}>Your Accepted Solutions</h1>
      {localProblemsSolved.length > 0 ? (
        localProblemsSolved.map((problem, index) => (
          <p key={index} style={{ fontSize: '1.5rem', color: 'white', paddingBottom: '10px' }}>
            <Link href={`/problems/${problem.slug}`}
              style={{ color: '#007BFF', textDecoration: 'underline', cursor: 'pointer' }}>
                {problem.title}
             
            </Link>   {problem.difficulty}
          </p>
        ))
      ) : (
        <p style={{ fontSize: '1.2rem', color: 'gray' }}>No solutions found.</p>
      )}
    </div>
  );
};

export default UserSolutions;

