import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsLatterBox from "../components/NewsLatterBox";
import OurPolicy from "../components/OurPolicy";

function Home() {
    return (
        <div>
            {/* Hero section */}
            <Hero />
            {/* Latest collection section */}
            <LatestCollection />
            {/* Best seller section */}
            <BestSeller />
            {/* Our policy section */}
            <OurPolicy />
            {/* Newsletter subscription box */}
            <NewsLatterBox />
        </div>
    );
}

export default Home;
