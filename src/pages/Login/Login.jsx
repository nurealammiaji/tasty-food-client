import { Helmet } from "react-helmet-async";
import loginImage from "../../assets/others/authentication2.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from '../../provider/AuthProvider';
import bg from "../../assets/others/authentication.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiChecksBold, PiFacebookLogoBold, PiGithubLogoBold, PiGoogleLogoBold } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import Swal from "sweetalert2";

const Login = () => {

  const { emailLogin, googleLogin } = useContext(AuthContext);

  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const destination = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const captchaHandler = (event) => {
    event.preventDefault();
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) === true) {
      setDisabled(false);
      toast.success("Captcha Verified !!", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    else {
      setDisabled(true);
      alert("Wrong Captcha Input !!  Please try again ...")
    }
  }

  const loginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    emailLogin(email, password)
      .then(result => {
        console.log(result);
        if (result) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Logged in Successful !",
            showConfirmButton: false,
            timer: 1500
        });
          navigate(destination, { replace: true });
        }
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: `${error.message.slice(9,)}`,
          showConfirmButton: false,
          timer: 1500
      });
      })
  }

  const googleLoginHandler = () => {
    googleLogin()
      .then(result => {
        console.log(result);
        if (result) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Logged in Successful !",
            showConfirmButton: false,
            timer: 1500
        });
          navigate(destination, { replace: true });
        }
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500
      });
      })
  }

  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>Login || Tasty Food</title>
      </Helmet>
      <div>
        <div style={{ background: `url(${bg})` }} className="w-screen min-h-screen border hero">
          <div className="w-10/12 p-10 mx-auto my-auto shadow-2xl hero-content">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="mx-auto my-auto">
                <figure>
                  <img src={loginImage} alt="" />
                </figure>
              </div>
              <div className="mx-auto md:w-10/12">
                <form onSubmit={loginHandler}>
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
                      name="email"
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
                      name="password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Captcha</span>
                    </label>
                    <LoadCanvasTemplate />
                  </div>
                  <div className="mt-2 form-control">
                    <div className="join">
                      <input ref={captchaRef} className="w-full input input-bordered join-item" placeholder="captcha" disabled={!disabled} />
                      {
                        (disabled) ?
                          <button className="btn btn-outline btn-info join-item" onClick={captchaHandler}>Verify</button>
                          :
                          <button className="btn btn-outline btn-success join-item">Verified <PiChecksBold className="text-xl font-semibold" /></button>
                      }
                    </div>
                  </div>
                  <div className="mt-6 form-control">
                    <button className="btn btn-warning" type="submit" disabled={disabled}>Login</button>
                  </div>
                </form>
                <div className="flex items-center justify-center mt-3">
                  <label className="label"><span className="mr-2 text-sm">New here ?</span>
                    <Link to="/register" className="text-sm font-medium text-yellow-600 label-text-alt link link-hover">
                      Create a New Account
                    </Link>
                  </label>
                </div>
                <div className="flex justify-center">
                  <label className="label">
                    <span className="font-medium label-text">Or login with</span>
                  </label>
                </div>
                <div className="flex items-center justify-center mt-3">
                  <button onClick={googleLoginHandler} className="btn btn-outline btn-circle btn-success btn-sm"><PiGoogleLogoBold className="text-2xl" /></button>
                  <button className="mx-5 btn-sm btn btn-outline btn-circle"><PiGithubLogoBold className="text-2xl" /></button>
                  <button className="btn btn-outline btn-circle btn-primary btn-sm"><PiFacebookLogoBold className="text-2xl" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
