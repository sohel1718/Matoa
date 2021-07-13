import post1 from '../../../images/InstaFeed/post1.png';
import post2 from '../../../images/InstaFeed/post2.png';
import post3 from '../../../images/InstaFeed/post3.png';
import post4 from '../../../images/InstaFeed/post4.png';
import post5 from '../../../images/InstaFeed/post5.png';
import './instaStyle.scss';

const InstagramFeed = () => {
    return (
        <div className="insta-feed">
            <div className="insta-feed__wrapper">
                <div className="insta-feed__wrapper__title"> 
                    <span>Instagram</span>
                    <hr />
                </div>
                <div className="insta-feed__wrapper__feed">
                    <div className="insta-feed__wrapper__feed__post">
                        <img src={post1} alt="" />
                    </div>
                    <div className="insta-feed__wrapper__feed__post">
                        <img src={post2} alt="" />
                    </div>
                    <div className="insta-feed__wrapper__feed__post">
                        <img src={post3} alt="" />
                    </div>
                    <div className="insta-feed__wrapper__feed__post">
                        <img src={post4} alt="" />
                    </div>
                    <div className="insta-feed__wrapper__feed__post">
                        <img src={post5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstagramFeed