import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Email sent to ${email}`);
    setEmail('');
  };
  return (
    <div className='flex h-full w-full items-center justify-center p-2 text-black'>
      <div className='w-full max-w-lg space-y-8 bg-white rounded-xl shadow-lg p-10'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Reset your password</h1>
          <p className='mt-2 text-sm text-gray-600'>
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>

        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className='block text-sm font-medium'>
              Email address
            </label>
            <div className='mt-1'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='block w-full outline-1 rounded p-2'
                placeholder='name@example.com'
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='w-full bg-primary rounded p-2 text-white hover:bg-purple-800 cursor-pointer'
            >
              Send reset link
            </button>
          </div>

          <div className='text-center'>
            <Link
              to='/login'
              className='text-sm font-medium text- hover:text-complimentary'
            >
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
