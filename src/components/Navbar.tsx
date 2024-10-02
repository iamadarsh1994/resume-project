import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar: React.FC = (): JSX.Element => {
    return (
        <div className='max-w-4xl mx-auto overflow-hidden bg-slate-700 text-white flex justify-evenly items-center antialiased p-1 font-mono'>
            {/* Wrap Home and Blog in Link components */}
            <Link to="/" className='hover:text-yellow-400 hover:subpixel-antialiased'>
                Home
            </Link>
            <Link to="/blog" className='hover:subpixel-antialiased hover:text-yellow-400'>
                Blog
            </Link>
        </div>
    )
}

export default Navbar;
