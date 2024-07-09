import MeetingTypeList from '@/components/MeetingTypeList';
import Clock from '@/components/Clock';
import React from 'react';

const Home = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className='flex h-full flex-col justify-between px-5 py-6 max-md:py-8 max-md:px-5 lg:p-11'>
          <h2 className='glassmorphism max-w-[280px] rounded py-2 text-center front-normal text-base'>
            Enjoy The seamless meetings 
          </h2>
          <Clock />
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
