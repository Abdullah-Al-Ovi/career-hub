

const FeaturedJob = ({job}) => {
    const {id,job_title,company_name}= job
    
    return (
        <div className=" bg-[#FFF] text-start border-[2px] rounded-md p-3">
           <div>
            <img src ="https://i.ibb.co/PzrbTxh/google-1-1-1.png" />
            </div> 
            <h1 className="text-xl font-semibold">{job_title}</h1>
            <p>{company_name}</p>
            <button className="p-2 rounded-md my-2 text-white bg-[#9873FF]">View Details</button>

        </div>
    );
};

export default FeaturedJob;
