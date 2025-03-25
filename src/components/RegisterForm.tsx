import { useState } from 'react';

const DEFAULT_FORM_VALUES = {
  name: '',
  email: '',
  password: '',
};

function RegisterForm() {
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
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          Full Name
        </label>
        <div className='mt-1'>
          <input
            id='name'
            name='name'
            type='text'
            autoComplete='name'
            required
            className='block w-full outline-1 rounded p-2'
            placeholder='First Name'
            autoFocus
            value={formData.name}
            onChange={(e) => handleChange('name')(e.target.value)}
          />
        </div>
      </div>
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
        </div>
        <div className='mt-1'>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            required
            placeholder='********'
            minLength={8}
            className='block w-full outline-1 rounded p-2'
            value={formData.password}
            onChange={(e) => handleChange('password')(e.target.value)}
          />
        </div>
      </div>
      <p className='text-xs'>
        By signing up, you agree to our <strong>Terms of Use</strong> and{' '}
        <strong>Privacy policy</strong>.
      </p>
      <div>
        <button
          type='submit'
          className='w-full bg-primary rounded p-2 text-white hover:bg-purple-800 cursor-pointer'
        >
          Create an account
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
