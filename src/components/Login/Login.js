import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const client_id =
  "778513930561-lp2v2hq2taq7m47bcocq6el2pa1jkkcq.apps.googleusercontent.com";

function Login() {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    navigate("authorpage");
    console.log("LOGIN SUCCESS! current user: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILD ! res: ", res);
  };

  return (
    <div className="Login-Container">
      <div className="Login-Logo">
        <img
          src="./images/Author_Logo_Pen_Writing-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="LoginForm">
        <h1>Login</h1>
        <div className="email">
          <input placeholder="Email" />
        </div>
        <div className="password">
          <input placeholder="password" />
        </div>
        <div className="btn-login">
          <button>Login</button>
        </div>

        <div className="googleLogin">
          <h6>Login with Google</h6>
          <GoogleLogin
            clientId={client_id}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
