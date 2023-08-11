import React, { useState } from 'react';
import { auth, googleProvider, facebookProvider, githubLogin, githubProvider } from './Firebase';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      .then((result)=> {
        const user=result;
        console.log('User', user);
      setUser(user);
      })
      // const user = result.user; // Get the user object from the result
      
    } catch (error) {
      console.log(error);
    }
  };
    const facebookLogin = async () => {
      try {
          const result = await signInWithPopup(auth, facebookProvider);
          const user = result.user;
          console.log('User', user);
          setUser(user);
      } catch (error) {
          console.log(error);
      }
  };
  
  const githubLogin = async () => {
    try{
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      console.log('User', user);
      setUser(user) 
    } catch (error){
      console.log(error);
    }
  };
  
 

  console.log(user);

  return (
    <div>
      <div onClick={googleLogin}>
        <button>Google LogIn</button>
      </div>
      <div onClick={facebookLogin}>
        <button>Facebook LogIn</button>
      </div>
      <div onClick={githubLogin}>
        <button>GitHub LogIn</button>
      </div>
      <div>
        <h1>Email</h1>
      </div>
    </div>
  );
};

export default App;
