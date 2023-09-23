import { useLoaderData } from "react-router-dom";
import { getFromLocalStorage } from "../localStorage/localstorage";
import { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {
    const [appJobs,setAppJob] = useState([]) 
    const [displayJobs,setDisplayJobs] = useState([])
    const jobs = useLoaderData()
    
    
  useEffect(()=>{
    const appliedJobIdsStr = getFromLocalStorage()
    const appliedJobIds = appliedJobIdsStr.map(each=>parseInt(each))
    const appliedJob = jobs.filter(job=>appliedJobIds.includes(job.id))
    setAppJob(appliedJob)
    setDisplayJobs(appliedJob)
    
  },[])

  const handleAll=()=>{
    setDisplayJobs(appJobs)
  }
  const handleRemote=()=>{
    const remoteJobs = appJobs.filter(appJob=>appJob.remote_or_onsite === 'Remote')
    setDisplayJobs(remoteJobs)
  }
  const handleOnsite=()=>{
    const onsiteJobs = appJobs.filter(appJob=>appJob.remote_or_onsite === 'Onsite')
    setDisplayJobs(onsiteJobs)
  }

    
    return (

       <div>
            <details className="dropdown mb-32">
  <summary className="m-1 btn">Filter</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button onClick={handleAll}>All</button></li>
    <li><button onClick={handleRemote}>Remote</button></li>
    <li><button onClick={handleOnsite}>Onsite</button></li>
  </ul>
</details>
        <div className="flex gap-3 flex-col">
           {
            displayJobs.map(displayJob=><AppliedJob key={displayJob.id} displayJob={displayJob}></AppliedJob>)
           }
        </div>
       </div>
    );
};

export default AppliedJobs;