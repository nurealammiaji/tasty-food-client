

const SectionHeading = ({ subHeading, heading, width }) => {
    return (
        <div className="text-center">
            <h4 className="mb-1 text-sm text-yellow-600">--- {subHeading} ---</h4>
            <h2 className={`py-2 mx-auto text-3xl uppercase border-y-2 ${width}`}>{heading}</h2>
        </div>
    );
};

export default SectionHeading;