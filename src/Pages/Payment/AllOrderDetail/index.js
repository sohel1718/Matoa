import './style.scss';

const AllOrderDetail = () => {
    return (
        <div className="all-detail">
            <div className="all-detail__title">
                Order Detail
            </div>
            <div className="all-detail__info">
                <div className="all-detail__info__heading">Order Number</div>
                <div className="all-detail__info__desc">
                    <div className="all-detail__info__desc__number">
                        <span id="orderNum">MTAWEB-3A86D4DB</span>
                        <span id="copy">Copy</span>
                    </div>
                    <div className="all-detail__info__desc__tip">
                        Always remember Order Number for easy tracking
                    </div>
                </div>
            </div>
            <div className="all-detail__info">
                <div className="all-detail__info__heading">Purchase Date</div>
                <div className="all-detail__info__desc">2019-11-07 14:01:48</div>
            </div>
            <div className="all-detail__info">
                <div className="all-detail__info__heading">Items</div>
                <div className="all-detail__info__desc">
                    <div className="all-detail__info__desc__items">
                        <span>Way Kambas Mini Ebony</span>
                        <span id="pInfo"> 2 x IDR 1.024.000</span>
                    </div>
                    <div className="all-detail__info__desc__items">
                        <span>Way Kambas Mini Ebony</span>
                        <span id="pInfo"> 2 x IDR 1.024.000</span>
                    </div>
                </div>
            </div>
            <div className="all-detail__info">
                <div className="all-detail__info__heading">Name</div>
                <div className="all-detail__info__desc">Rasyidin Arsyad Nasution</div>
            </div>
            <div className="all-detail__info">
                <div className="all-detail__info__heading">Phone</div>
                <div className="all-detail__info__desc">+18911188899</div>
            </div>
            <div className="all-detail__info">
                <div className="all-detail__info__heading">Email</div>
                <div className="all-detail__info__desc">rasyid.arsyad@gmail.com</div>
            </div>
            <div className="all-detail__info">
                <div className="all-detail__info__heading">Shipping Address</div>
                <div className="all-detail__info__desc">
                    18 Richardson Drive
                    Fountain Valley, CA 92708
                </div>
            </div>
        </div>
    )
}

export default AllOrderDetail