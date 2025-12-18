import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import { AppStoreButton } from 'react-mobile-app-button';
import { NavLink } from 'react-router';
import hero from '../assets/hero.png'


const Banner = () => {
    return (
        <div className='my-15'>


            <div className='flex flex-col justify-center items-center gap-10'>



                <div className='text-5xl font-bold text-center'>
                    <h1>We Build </h1>
                    <h1> <span className='text-violet-600'>Productive</span> Apps</h1>
                </div>

                <p className='md:w-1/2 text-center' >At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='space-x-5 my-5'>

                    <NavLink to='https://play.google.com/store/apps'
                        className='btn btn-outline   btn-primary text-lg font-bold py-6  '>
                        <FaGooglePlay className='text-3xl' />
                        Google Play
                    </NavLink>

                    <NavLink to='https://www.apple.com/app-store/'
                        className='btn btn-outline btn-primary text-lg font-bold py-6  '>
                        <FaAppStoreIos className='text-3xl' />
                        App Store
                    </NavLink>

                </div>

                <div>
                    <img src={hero} alt="" />
                </div>



            </div>



            <div className='bg-amber-500 min-h-60 py-30 bg-linear-160  from-indigo-700 via-purple-500 to-purple-400 text-white'>

                <div className='text-5xl font-bold text-center'>
                    <h1>Trusted by Millions, Built for You</h1>
                </div>

                <div className='flex gap-5 justify-center mt-10'>
                    <div className="stats ">
                        <div className="stat text-center w-60">
                            <div className="">Total Downloads</div>
                            <div className="stat-value text-5xl">29.6K</div>
                            <div className="">21% more than last month</div>
                        </div>
                    </div>
                    <div className="stats ">
                        <div className="stat text-center w-60">
                            <div className="">Total Reviews</div>
                            <div className="stat-value text-5xl">906K</div>
                            <div className="">21% more than last month</div>
                        </div>
                    </div>
                    <div className="stats ">
                        <div className="stat text-center w-60">
                            <div className="">TActive App</div>
                            <div className="stat-value text-5xl">132+</div>
                            <div className="">21% more than last month</div>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default Banner;