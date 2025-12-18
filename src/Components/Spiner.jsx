import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Spiner = () => {
    return (
        <div className="flex justify-center items-center min-h-96">
            <PacmanLoader color="#7c3aed" size={120} />
        </div>
    );
};

export default Spiner;