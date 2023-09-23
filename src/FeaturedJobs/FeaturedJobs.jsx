import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([])
    const [datalength,setDataLength] = useState(4)
    useEffect(()=>{
        fetch('../../public/jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

    return (
        <div className="text-center my-11">
            <h2 className="text-2xl font-bold">Featured Jobs</h2>
            <p className="text-slate-500 mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-3 my-5">
                {
                    jobs.slice(0,datalength).map((job,idx)=><FeaturedJob key={idx} job={job} ></FeaturedJob>)
                }
            </div>
            <button onClick={()=>setDataLength(jobs.length)} className={`p-2 rounded-md my-2 text-white bg-[#9873FF] ${datalength === jobs.length && 'hidden'}`}>Show All Jobs</button>
        </div>
    );
};

export default FeaturedJobs;
