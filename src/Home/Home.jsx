import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Jobcategories from "../JobCategories/Jobcategories";
import MainSection from "../MainSection/MainSection";

const Home = () => {
    return (
        <div>
            <MainSection></MainSection>
            <Jobcategories></Jobcategories>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;