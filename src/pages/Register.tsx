import React from 'react';
import { Link } from 'react-router-dom';
import { AppleIcon, GithubIcon } from '../components/Icons';
import RegisterForm from '../components/RegisterForm';

const Register: React.FC = () => {
  return (
    <>
      <div className='flex h-full w-full items-center justify-center text-black p-2'>
        <div className='w-full max-w-lg space-y-8 bg-white rounded-xl shadow-lg p-10'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
              Let's get started
            </h1>
            <p className='mt-2 text-sm text-gray-600'>
              already have an account{' '}
              <Link
                to='/login'
                className='font-medium text-primary hover:text-primary/90'
              >
                Login
              </Link>
            </p>
          </div>

          <div className='mt-8 space-y-6'>
            <RegisterForm />
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <br className='w-full' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 text-gray-500'>Or continue with</span>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-3 text-center'>
              <a
                className='w-full inline-flex items-center justify-center outline-1 outline-black/10 p-2 rounded'
                href='#google'
              >
                <AppleIcon className='h-5 w-5' />
                <span className='sr-only'>Sign in with Apple</span>
              </a>
              <a
                className='w-full inline-flex items-center justify-center outline-1 outline-black/10 p-2 rounded'
                href='#github'
              >
                <GithubIcon className='h-5 w-5' />
                <span className='sr-only'>Sign in with Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
