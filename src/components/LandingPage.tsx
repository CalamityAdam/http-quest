import React from 'react';
import { useAuth } from '../hooks/useAuth';

const LandingPage: React.FC = () => {
  const { signInWithGoogle, signInWithGitHub } = useAuth();

  return (
    <div className='min-h-screen bg-gray-100'>
      <div
        className='relative h-screen bg-cover bg-center'
        style={{
          backgroundImage: 'url(/images/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg)',
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 opacity-75'></div>
        <div className='relative z-10 flex flex-col items-center justify-center h-full text-white'>
          <h1 className='text-4xl md:text-6xl font-bold'>HttpQuest</h1>
          <p className='text-xl md:text-2xl mt-4'>
            On-demand tech help for your pressing needs
          </p>
          <div className='mt-8'>
            <button
              onClick={signInWithGoogle}
              className='bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg mr-4 hover:bg-gray-100'
            >
              Sign up with Google
            </button>
            <button
              onClick={signInWithGitHub}
              className='bg-white text-green-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100'
            >
              Sign up with GitHub
            </button>
          </div>
        </div>
      </div>
      {/* Additional sections and CTAs go here */}
    </div>
  );
};

export default LandingPage;
