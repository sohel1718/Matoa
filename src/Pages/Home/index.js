import Banner from '../../Components/Banner';
import FeaturedProduct from '../../Components/FeaturedProduct';
import MonthlyDeals from '../../Components/MonthlyDeals';
import RecentNews from '../../Components/RecentNews';
import ProductList from '../../Components/ProductList';
import Testimonal from '../../Components/Testimonal';
import InstagramFeed from '../../Components/InstagramFeed';
import './homeStyle.scss';

const Home = () => {
    return (
        <div className="home"> 
            <Banner />
            <FeaturedProduct />
            <MonthlyDeals />
            <RecentNews />
            <ProductList />
            <Testimonal />
            <InstagramFeed />
        </div>
    )    
}

export default Home