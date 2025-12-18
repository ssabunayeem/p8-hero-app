import React from 'react';
import { Link } from 'react-router';

const Chatgpt = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 min-h-[500px]
                bg-gradient-to-r from-violet-500 via-indigo-50 to-purple-500 ">

            <p className="text-5xl font-bold text-purple-600 mb-10">All App uninstalled</p>
            <Link
                to="/"
                className="px-10 py-5 bg-violet-700 font-bold rounded-lg shadow-lg hover:bg-purple-700 text-white transition-all"
            >
                Go Back Home
            </Link>

        </div>
    );
};

export default Chatgpt;