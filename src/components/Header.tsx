import React from 'react';
import email from '../assets/email.png'
import phone from '../assets/phone-call.png'
import pin from '../assets/location.png'
import git from '../assets/gitlogo2.png'
const Header: React.FC = (): JSX.Element => {
  return (
    <div className="max-w-4xl mx-auto  overflow-hidden bg-gray-800 text-white antialiased p-6 ">
      <div className='text-3xl font-bold'>Adarsh Mishra</div>
      <div className=''><img src={email} alt="email icon" className='w-3' />iamadarsh1994@gmail.com</div>
      <div><img src={phone} alt="phone icon" className='w-3' />9598221994</div>
      //<div><img src={pin} alt="location icon" className='w-3'/>4/144, Lalita Park, Laxmi Nagar, Delhi, 110092</div>
      <div><img src={git} alt="git icon" className='w-3'/>
        <a href="https://github.com/iamadarsh1994" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </div>
  );
};

export default Header;
