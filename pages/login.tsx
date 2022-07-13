import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Inputs {
  email: string;
  password: string;
}

const login = () => {
  const [login, setLogin] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
      <Head>
        <title>Netflix Clone - Login</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Image
        src='/netflixLoginBg.jpg'
        layout='fill'
        className='-z-10 !hidden opcaity-60 sm:!inline'
        objectFit='cover'
      />

      <img
        src='/netflixLogo.svg'
        className='absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6'
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:px-14 md:max-w-md'
      >
        <h1 className='text-4xl font-semibold'>Sign In</h1>

        <div className='space-y-4'>
          <label className='inline-block w-full'>
            <input
              type='email'
              placeholder='Email'
              className='input'
              {...register('email')}
            />
          </label>
          <label className='inline-block w-full'>
            <input
              type='password'
              placeholder='Password'
              className='input'
              {...register('password')}
            />
          </label>
        </div>

        <button
          type='submit'
          className='w-full rounded bg-[#e50914] py-3 font-semibold'
        >
          Sign In
        </button>

        <div className='text-[gray]'>
          New to Netflix?
          <button className='text-white hover:underline ml-2'>
            Sign Up Now!
          </button>
        </div>
      </form>
    </div>
  );
};

export default login;
