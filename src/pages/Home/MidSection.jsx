import sectionBG from "../../assets/home/featured.jpg";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const MidSection = () => {
    return (
        <div className="text-center ">
            <div className="w-11/12 mx-auto hero" style={{ background: `url(${sectionBG}) center fixed no-repeat` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="text-white">
                    <SectionHeading subHeading={"Check it out"} heading={"From Our Menu"}></SectionHeading>
                    <br /><br />
                    <div className="items-center justify-center flex-none gap-5 md:flex">
                        <div>
                            <img src={sectionBG} className="w-full mx-auto md:w-10/12" alt="" />
                        </div>
                        <div className="text-center md:text-left [&>*]:mt-3 mt-5 md:mt-0">
                            <h4>December 31, 2023</h4>
                            <h4 className="uppercase">Where Can I Get Some ?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe necessitatibus placeat, ducimus unde voluptatum est provident eveniet distinctio consequatur commodi reprehenderit voluptates et voluptas delectus ullam repellat, suscipit assumenda similique!</p>
                            <div className="text-center md:text-left">
                                <button className="p-3 uppercase border-b-2 border-white rounded-lg hover:text-white hover:bg-slate-800">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidSection;