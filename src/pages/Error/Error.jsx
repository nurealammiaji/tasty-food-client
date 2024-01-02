import { Link, useRouteError } from "react-router-dom";
import image from "../../assets/404.gif";
import { PiArrowLeftBold } from "react-icons/pi";
import { Helmet } from "react-helmet-async";

const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div className="w-screen text-center">
            <Helmet>
                <title>Error || Tasty Food</title>
            </Helmet>
            <div>
                <img src={image} className="w-full mx-auto md:w-4/12" alt="Error Image" />
            </div>
            {
                (error?.status === 404) &&
                <div>
                    <br />
                    <div className="flex justify-center [&>*]:text-2xl text-error">
                        <h3>{error.status}</h3>
                        <p className="mx-2 text-black">||</p>
                        <h3>{error.statusText}</h3>
                    </div>
                    <br />
                    <h5 className="text-xl">{error.data}</h5>
                </div>
            }
            <br /><br />
            <div>
                <Link to="/">
                    <button className="btn"><PiArrowLeftBold /> Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;