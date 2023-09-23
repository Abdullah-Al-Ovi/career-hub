import user from '../assets/images/user.png'

const MainSection = () => {
    return (
        <div className="flex justify-between  gap-3 items-center ">
            <div className=' w-[55%]'>
                <h1 className="text-4xl font-bold mb-5">One Step <br></br> Closer To Your <br /> <span className="text-[#9873FF]">Dream Job</span></h1>
                <p className='mb-5 text-xs text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="p-2 rounded-md bg-[#9873FF] text-white"> Get Started</button>
            </div>
            <div className=''>
                <img src={user} />
            </div>
        </div>
    );
};

export default MainSection;