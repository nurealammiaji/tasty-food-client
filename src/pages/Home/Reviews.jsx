import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import quote from "../../assets/icon/quote.png";

const Reviews = () => {

    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='w-11/12 mx-auto text-center'>
            <Swiper navigation={true} modules={[Navigation]}>
                {
                    (reviews) &&
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='[&>*]:mt-3 w-10/12 mx-auto'>
                            <p className='mb-14'>
                                <Rating style={{ maxWidth: 150, display: "inline-flex" }} value={review.rating} readOnly />
                            </p>
                            <div className='mb-14'>
                                <img src={quote} className='h-[100px] mx-auto' alt="" />
                            </div>
                            <p>{review.details}</p>
                            <h4 className='text-2xl text-yellow-600 uppercase'>{review.name}</h4>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;