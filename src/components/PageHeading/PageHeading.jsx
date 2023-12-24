

const PageHeading = ({ subHeading, heading, background }) => {
    return (
        <div className="text-center">
            <div className="relative">
                <img src={background} className="w-full" alt="" />
                <div className="absolute px-40 py-20 text-white bg-black top-60 right-64 bg-opacity-40">
                    <h2 className="text-5xl font-bold uppercase">{heading}</h2>
                    <br />
                    <h4 className="font-medium uppercase">{subHeading}</h4>
                </div>
            </div>
        </div>
    );
};

export default PageHeading;