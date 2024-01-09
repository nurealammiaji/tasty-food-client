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
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='w-11/12 mx-auto text-center'>
            {
                (reviews) ?
                    <Swiper navigation={true} modules={[Navigation]}>
                        {
                            (reviews) &&
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <div className='[&>*]:mt-3 w-10/12 mx-auto'>
                                    <div className='mb-14'>
                                        <Rating style={{ maxWidth: 150, display: "inline-flex" }} value={review.rating} readOnly />
                                    </div>
                                    <div className='mb-14'>
                                        <img src={quote} className='h-[100px] mx-auto' alt="" />
                                    </div>
                                    <p>{review.details}</p>
                                    <h4 className='text-2xl text-yellow-600 uppercase'>{review.name}</h4>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper> :
                    <div className="text-center">
                        <br />
                        <p className="flex items-center justify-center gap-3 font-semibold text-red-600">
                            <span className="loading loading-spinner"></span>
                            Loading ...
                        </p>
                        <br /><br />
                    </div>
            }
        </div>
    );
};

export default Reviews;