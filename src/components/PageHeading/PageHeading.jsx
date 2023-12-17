

const PageHeading = ({ subHeading, heading, background }) => {
    return (
        <div className="text-center">
            <div className="relative">
                <img src={background} alt="" />
                <div className="absolute top-60 text-white py-20 px-40 right-72 bg-black bg-opacity-40">
                    <h2 className="text-5xl font-bold uppercase">{heading}</h2>
                    <br />
                    <h4 className="font-medium uppercase">{subHeading}</h4>
                </div>
            </div>
        </div>
    );
};

export default PageHeading;