import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import { UserContext } from '../Context/UserProvider'; 


type UserSolutionsProps = {
  problemsSolved?: Array<{ title: string; status: string }>;  
};

const UserSolutions: React.FC<UserSolutionsProps> = ({ problemsSolved = [] }) => {

  const [localProblemsSolved, setLocalProblemsSolved] = useState(problemsSolved);
  const { user, setUser } = useContext(UserContext);
  
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
       user?.problems_solved.map((problem, index) => (
          <p key={index} style={{ fontSize: '1.5rem', color: 'white', paddingBottom: '10px' }}>
           {`${index+1}. `}
            <Link href={`/dashboard/${problem}`}
              style={{ color: '#007BFF', textDecoration: 'underline', cursor: 'pointer' }}>
                {problem}
             
            </Link>  
          </p>
        ))
      ) : (
        <p style={{ fontSize: '1.2rem', color: 'gray' }}>No solutions found.</p>
      )}
    </div>
  );
};

export default UserSolutions;

