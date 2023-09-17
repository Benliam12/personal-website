// components/CustomButton.js
import React from 'react';

const Experience = ({ Company, Content, tags=[], LogoLink, CompanyLink }:any) => {
  return (
  
    <div className="flex flex-col sm:flex-row my-4 mb-4 group relative group">
      <div className="absolute -inset-x-4 -inset-y-2 z-0 rounded-md transition duration-200 motion-reduce:transition-none lg:-inset-x-6 group-hover:bg-slate-800/50 "></div>
      <header className="w-full sm:w-1/3 xl:w-1/4 z-10 mb-2 mt-1 text-xs font-semibold uppercase text-slate-500 flex flex-col">
        
        <div className='flex sm:block justify-center sm:justify-normal'>
            <img className='bg-white object-contain h-24 sm:h-full sm:w-1/2' src={LogoLink} alt="" />        
        </div>

      </header>
      <div className='w-full sm:w-2/3 xl:w-3/4 relative'>
        <a href={CompanyLink} target={CompanyLink != "" ? '_blank' : ''} className='group/link'>
            <h2 className="text-lg m-0 text-slate-100">
            <span className="absolute -inset-x-4 -inset-y-2.5 block rounded"></span>
                <span className='transition duration-150 group-hover/link:text-sky-500'>{Company}</span>
            </h2>
            <p className='text-sm transition duration-150 group-hover/link:text-slate-100'>{Content}</p>
            <ul className='mt-2 flex flex-wrap'>
                {tags.map((tag:any) => (
                <li className='mr-2 mb-2'>
                    <div className="transition duration-150 backdrop:flex items-center rounded-full bg-sky-600/20 group-hover/link:bg-sky-500/20 px-3 py-1 text-xs font-medium leading-5 text-sky-500 ">{tag}</div> 
                </li>
                ))}
            </ul>
        </a>
      </div>
    </div>
  );
};

export default Experience;