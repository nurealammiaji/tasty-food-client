

const SectionHeading = ({ subHeading, heading }) => {
    return (
        <div className="text-center">
            <h4 className="mb-1 text-sm text-yellow-600">--- {subHeading} ---</h4>
            <h2 className="w-8/12 py-2 mx-auto text-3xl uppercase md:w-4/12 border-y-2">{heading}</h2>
        </div>
    );
};

export default SectionHeading;