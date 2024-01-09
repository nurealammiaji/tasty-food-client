
import FoodCard from '../FoodCard/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './ShopCard.css';

const ShopCards = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>
            <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2">
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
            <br /><br />
            <Swiper pagination={pagination} modules={[Pagination]} slidesPerGroup={2} spaceBetween={30} slidesPerGroupSkip={1} slidesPerView={3}
                className="mySwiper">
                <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2">
                    {
                        items.map(item => <SwiperSlide key={item._id}>
                            <FoodCard item={item}></FoodCard>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default ShopCards;