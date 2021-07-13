import Banner from './Banner';
import FeaturedProduct from './FeaturedProduct';
import MonthlyDeals from './MonthlyDeals';
import RecentNews from './RecentNews';
import ProductList from './ProductList';
import Testimonal from './Testimonal';
import InstagramFeed from './InstagramFeed';
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