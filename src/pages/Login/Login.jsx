import { Helmet } from "react-helmet-async";
import loginImage from "../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from '../../provider/AuthProvider';
import bg from "../../assets/others/authentication.png";

const Login = () => {

  const { emailLogin, emailRegister, googleLogin, loading } = useContext(AuthContext);

  console.log(emailLogin, emailRegister, googleLogin, loading);

  return (
    <div>
      <Helmet>
        <title>Login || Tasty Food</title>
      </Helmet>
      <div>
        <div style={{ background: `url(${bg})`}} className="w-screen min-h-screen border hero">
          <div className="w-10/12 p-10 mx-auto my-auto shadow-2xl hero-content">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="mx-auto my-auto">
                <figure>
                  <img src={loginImage} alt="" />
                </figure>
              </div>
              <div className="mx-auto md:w-10/12">
                <form>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold">Login</h3>
                  </div>
                  <br />
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Captcha</span>
                    </label>
                    <input
                      type="text"
                      placeholder="captcha"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Type Captcha</span>
                    </label>
                    <input
                      type="text"
                      placeholder="captcha"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="mt-6 form-control">
                    <button className="btn btn-primary">Login</button>
                  </div>
                  <div className="flex justify-between">
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Need Account?
                      </a>
                    </label>
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
