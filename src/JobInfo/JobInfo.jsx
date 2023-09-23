import { useLoaderData, useParams } from "react-router-dom";
import { addToLOcalStorage } from "../localStorage/localstorage";


const JobInfo = () => {
    const info = useLoaderData();
    const {jobId} = useParams()
    // const paramsInt = parseInt(jobId)
    console.log(jobId,info);
    return (
        <div>
            {
                info.map((item,idx)=>item.id === parseInt(jobId) && <div className="flex justify-between  gap-5" key={idx}>
                        <div className="w-[60%] p-1">
                            <p className="mb-2"><span className="text-lg font-semibold">Job description:</span> <span className="text-sm">{item.job_description}</span></p>
                            <p ><span className="text-lg font-semibold">Job Responsibility:</span> <span className="text-sm">{item.job_responsibility}</span></p>
                        </div>
                        <div className="w-[35%] rounded-md  ">
                        <div className=" rounded-md bg-[#cdd9f3] p-3">
                            <h3 className="text-lg font-semibold mb-2">Job Details</h3>
                            <div className="border-b-2 text-black"></div>
                            <p><span className="text-lg font-semibold" >Salary : </span><span className="text-sm">{item.salary}</span></p>
                            <h3 className="text-lg font-semibold my-2 ">Contact Information</h3>
                            <div className="border-b-2 text-black"></div>
                            <p><span className="text-lg font-semibold" >Phone : </span><span className="text-sm">{item.contact_information.phone}</span></p>

                        </div>
                        <div><button onClick={()=>addToLOcalStorage(jobId)} className="p-2 rounded-md my-2 text-white bg-[#9873FF] w-[100%]">Apply Now</button></div>
                        </div>
                </div>
                )
            }
      </div>  
    );
};

export default JobInfo;
