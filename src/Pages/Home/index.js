import Banner from './Banner';
import FeaturedProduct from './FeaturedProduct';
import MonthlyDeals from './MonthlyDeals';
import RecentNews from './RecentNews';
import ProductList from './ProductList';
import Testimonal from './Testimonal';
import InstagramFeed from './InstagramFeed';
import './homeStyle.scss';

const Home = () => {

    const sumMissingNumbers = (array) => {
        return array.sort().reduce((acc, cur, index, array) => {
            debugger
            if ((cur + 1) !== array[index + 1]) {
            return acc + (cur + 1)
        } else {
            return acc
        }
    }, 0)
    }
    
    let ans = sumMissingNumbers([4, 3, 8, 1, 2]);

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



