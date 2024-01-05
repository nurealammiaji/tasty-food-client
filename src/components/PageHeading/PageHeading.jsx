

const PageHeading = ({ subHeading, heading, background, width }) => {
    return (
        <div className="text-center">
            <div className="hero h-[400px] md:h-[700px] w-screen" style={{ background: `url(${background}) no-repeat fixed`}}>
                <div className="text-center text-neutral-content">
                    <div className={`${width} p-5 mx-auto text-white uppercase bg-black bg-opacity-40`}>
                        <h1 className="text-3xl font-bold md:text-6xl md:mb-5">{heading}</h1>
                        <p className="mt-3 text-xs md:text-lg md:mt-10">{subHeading}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeading;