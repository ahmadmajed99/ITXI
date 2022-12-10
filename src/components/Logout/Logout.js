import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const client_id =
  "778513930561-lp2v2hq2taq7m47bcocq6el2pa1jkkcq.apps.googleusercontent.com";

function Logout() {
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate("/");
    console.log("Logout successufll !");
  };

  return (
    <div>
      <GoogleLogout
        className="logout-button"
        clientId={client_id}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
