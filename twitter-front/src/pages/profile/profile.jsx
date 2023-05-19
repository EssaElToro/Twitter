import "./profile.scss";
import "./userPhoto.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_content">
        <h1>Profile</h1>
        <img src="./userPhoto.jpg   " alt="userPhoto" />
        <h1>Profile Picture</h1>
        <h1>
          Username:
          <br></br>
          KontoTV
        </h1>
      </div>
    </div>
  );
};
export default Profile;
