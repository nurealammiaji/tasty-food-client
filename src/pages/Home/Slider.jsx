import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

const Slider = () => {
    return (
        <div className="text-center">
            <Carousel showArrows={true} autoPlay={true} showStatus={false} infiniteLoop={true} thumbWidth={100} >
                <div>
                    <img src={slide1} />
                </div>
                <div>
                    <img src={slide2} />
                </div>
                <div>
                    <img src={slide3} />
                </div>
                <div>
                    <img src={slide4} />
                </div>
                <div>
                    <img src={slide5} />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;