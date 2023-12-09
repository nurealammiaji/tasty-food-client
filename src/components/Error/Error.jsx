import { Link, useRouteError } from "react-router-dom";
import img404 from "../../assets/404.png";

const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div className="text-center">
            <div>
                <img src={img404} className="mx-auto" alt="Error Image" />
            </div>
            {
                (error?.status === 404) &&
                <div>
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
                    <button className="btn">Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;