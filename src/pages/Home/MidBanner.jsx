import banner from "../../assets/home/chef-service.jpg";

const MidBanner = () => {
    return (
        <div className="text-center ">
            <div className="hero h-[400px] md:h-[700px] w-11/12 mx-auto" style={{ background: `url(${banner}) no-repeat` }}>
                <div>
                    <div className="w-10/12 mx-auto text-black uppercase bg-white md:py-20 md:px-40">
                        <h1 className="text-3xl font-bold md:text-4xl md:mb-5">Tasty Food</h1>
                        <p className="mt-3 text-xs md:text-lg md:mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reiciendis nihil, expedita voluptatum, nemo autem temporibus nulla libero ex, tempora facilis iste illum. Possimus, alias doloribus. Aliquam maxime modi ipsam?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidBanner;