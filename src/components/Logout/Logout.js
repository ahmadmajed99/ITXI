import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const client_id = `${window.env.CLIENT_ID}`;

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
