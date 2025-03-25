import { useState } from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_FORM_VALUES = {
  email: '',
  password: '',
};

function SignInForm() {
  const [formData, setFormData] = useState(DEFAULT_FORM_VALUES);

  const handleChange = (name: string) => (value: string) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
    setFormData(DEFAULT_FORM_VALUES);
  };

  return (
    <form className='space-y-6' onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
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
            autoFocus
            value={formData.email}
            onChange={(e) => handleChange('email')(e.target.value)}
          />
        </div>
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700'
          >
            Password
          </label>
          <div className='text-sm'>
            <Link
              to='/forgot-password'
              className='font-medium text-primary hover:text-primary/90'
            >
              Forgot your password?
            </Link>
          </div>
        </div>
        <div className='mt-1'>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            required
            className='block w-full outline-1 rounded p-2'
            value={formData.password}
            onChange={(e) => handleChange('password')(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button
          type='submit'
          className='w-full bg-primary rounded p-2 text-white hover:bg-purple-800 cursor-pointer'
        >
          Sign in
        </button>
      </div>
    </form>
  );
}

export default SignInForm;
