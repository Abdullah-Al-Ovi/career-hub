

const AppliedJob = ({displayJob}) => {
    const {id, remote_or_onsite,job_title
        ,company_name} = displayJob
    return (
        <div className="bg-[#9873FF] rounded-md text-white w-[30%] p-2">
            <p>{company_name}</p>
            <p>{job_title}</p>
            <p>{remote_or_onsite}</p>

        </div>
    );
};

export default AppliedJob;