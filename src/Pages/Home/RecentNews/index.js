import news from '../../../images/news.png';
import './newsStyle.scss';

const RecentNews = () => {
    return (
        <div className="news">
            <div className="news__wrapper">
                <div className="news__wrapper__title">
                    <span>Recent News</span>
                    <hr />
                </div>
                <div className="news__wrapper__box">
                    <div className="news__wrapper__box__left">
                        <div className="news__wrapper__box__left__sub-title">
                            Where To Travel
                        </div>  
                        <div className="news__wrapper__box__left__title">
                            Matoa Where To Travel? Yogyakarta
                        </div>
                        <div className="news__wrapper__box__left__btn">
                            <button>Discover</button>
                        </div>
                    </div>
                    <div className="news__wrapper__box__right">
                        <div className="news__wrapper__box__right__bottom" />
                        <div className="news__wrapper__box__right__overlay" />
                        <div className="news__wrapper__box__right__top">
                            <img src={news} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentNews;