import { useEffect, useState } from "react";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Menu = () => {

    const [dishes, setDishes] = useState(null);
    const [soups, setSoups] = useState(null);
    const [salads, setSalads] = useState(null);
    const [pizzas, setPizzas] = useState(null);
    const [desserts, setDesserts] = useState(null);
    const [drinks, setDrinks] = useState(null);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setDishes(data))
    }, [])

    useEffect(() => {
        if (dishes) {
            const salad = dishes.filter(dish => dish.category === "salad");
            setSalads(salad);
            const pizza = dishes.filter(dish => dish.category === "pizza");
            setPizzas(pizza);
            const soup = dishes.filter(dish => dish.category === "soup");
            setSoups(soup);
            const dessert = dishes.filter(dish => dish.category === "dessert");
            setDesserts(dessert);
            const drink = dishes.filter(dish => dish.category === "drink");
            setDrinks(drink);
        }
    }, [dishes])

    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero">
                        <img src={slide1} alt="" />
                        <h3 className="text-3xl text-white mt-80 hero-content">Salads</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero">
                        <img src={slide2} alt="" />
                        <h3 className="text-3xl text-white mt-80 hero-content">Pizzas</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero">
                        <img src={slide3} alt="" />
                        <h3 className="text-3xl text-white mt-80 hero-content">Soups</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero">
                        <img src={slide4} alt="" />
                        <h3 className="text-3xl text-white mt-80 hero-content">Desserts</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero">
                        <img src={slide5} alt="" />
                        <h3 className="text-3xl text-white mt-80 hero-content">Drinks</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Menu;