import './style.scss';

const ProductFilter = () => {
    return (
        <div className="filter">
            <div className="filter__wrapper">
                <div className="filter__wrapper__box">
                    <div className="filter__wrapper__box__title">
                        <span>Brand</span>
                        <img src="/images/play.png" alt="" />
                    </div>
                    <div className="filter__wrapper__box__list-wrapper">
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                                <input type="checkbox" />
                                <span>Apple</span>
                            </div> 
                            <span className="filter__wrapper__box__list-wrapper__list__right">(20)</span>
                        </div>
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                                <input type="checkbox" />
                                <span>samsung</span>
                            </div> 
                            <span className="filter__wrapper__box__list-wrapper__list__right">(0)</span>
                        </div>
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                                <input type="checkbox" />
                                <span>honour</span>
                            </div> 
                            <span className="filter__wrapper__box__list-wrapper__list__right">(110)</span>
                        </div>
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                                <input type="checkbox" />
                                <span>redmi</span>
                            </div> 
                            <span className="filter__wrapper__box__list-wrapper__list__right">(10)</span>
                        </div>
                    </div>
                </div>
                <div className="filter__wrapper__box">
                    <div className="filter__wrapper__box__title">
                        <span>Type</span>
                        <img src="/images/play.png" alt="" />
                    </div>
                    <div className="filter__wrapper__box__list-wrapper">
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                                <input type="checkbox" />
                                <span>smart watch</span>
                            </div> 
                            <span className="filter__wrapper__box__list-wrapper__list__right">(20)</span>
                        </div>
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                                <input type="checkbox" />
                                <span>Analog Watch</span>
                            </div> 
                            <span className="filter__wrapper__box__list-wrapper__list__right">(0)</span>
                        </div>
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                                <input type="checkbox" />
                                <span>Automatic Watch</span>
                            </div> 
                            <span className="filter__wrapper__box__list-wrapper__list__right">(110)</span>
                        </div>
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                                <input type="checkbox" />
                                <span>Quartz Watch</span>
                            </div> 
                            <span className="filter__wrapper__box__list-wrapper__list__right">(10)</span>
                        </div>
                    </div>
                </div>
                <div className="filter__wrapper__box">
                    <div className="filter__wrapper__box__title">
                        <span>Size</span>
                        <img src="/images/play.png" alt="" />
                    </div>
                    <div className="filter__wrapper__box__list-wrapper">
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                                <input type="checkbox" />
                                <span>5 inch</span>
                            </div> 
                            <span className="filter__wrapper__box__list-wrapper__list__right">(20)</span>
                        </div>
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                                <input type="checkbox" />
                                <span>7 inch</span>
                            </div> 
                            <span className="filter__wrapper__box__list-wrapper__list__right">(0)</span>
                        </div>
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                                <input type="checkbox" />
                                <span>5.6 inch</span>
                            </div> 
                            <span className="filter__wrapper__box__list-wrapper__list__right">(110)</span>
                        </div>
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                                <input type="checkbox" />
                                <span>6 inch</span>
                            </div> 
                            <span className="filter__wrapper__box__list-wrapper__list__right">(10)</span>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default ProductFilter