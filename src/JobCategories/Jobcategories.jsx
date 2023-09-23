import { useEffect, useState } from "react";
import logo from '../assets/icons/accounts.png'

const Jobcategories = () => {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        fetch('../../public/categories.json')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    return (
        <div className="text-center my-11">
            <h2 className="text-2xl font-bold">Job Category List</h2>
            <p className="text-slate-500 mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-4 gap-3 my-5">
                {
                    category.map((item,idx)=>{
                        return (
                            <div key={idx} className="rounded-md bg-blue-100 p-5 text-start">
                                <img src={logo} />
                                <h3 className="my-3 text-lg font-medium">{item.category_name}</h3>
                                <p className="text-sm text-slate-500">{item.availability}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Jobcategories;