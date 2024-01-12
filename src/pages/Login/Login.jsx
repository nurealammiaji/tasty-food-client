import { Helmet } from "react-helmet-async";
import loginImage from "../../assets/others/authentication2.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from '../../provider/AuthProvider';
import bg from "../../assets/others/authentication.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

  const { emailLogin, emailRegister, googleLogin, loading } = useContext(AuthContext);

  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);

  useEffect(() => {
    loadCaptchaEnginge(6)
  }, [])

  const captchaHandler = (event) => {
    event.preventDefault();
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) === true) {
      setDisabled(false);
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
    })
    .then(error => {
      console.log(error);
    })
  }

  return (
    <div>
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
                  <label className="label mb-2">
                      <span className="label-text">Captcha</span>
                    </label>
                    <LoadCanvasTemplate />
                  </div>
                  <div className="form-control mt-3">
                    <div className="join">
                      <input ref={captchaRef} className="input input-bordered join-item w-full" placeholder="captcha" />
                      <button className="btn btn-outline btn-success join-item" onClick={captchaHandler} disabled={!disabled} >Validate</button>
                    </div>
                  </div>
                  <div className="mt-6 form-control">
                    <button className="btn btn-primary" type="submit" disabled={disabled}>Login</button>
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
