import { StMoveButton, StProfileEmail, StProfileNickname } from "../styles/MyStyles";
import LoadProfile from "./LoadProfile";

const MyProfile = () => {
  const { nickname, email } = LoadProfile();

  return (
    <>
      <StProfileNickname>{nickname}</StProfileNickname>
      <StProfileEmail>{email}</StProfileEmail>
      <StMoveButton to="/modify">Modify Profile</StMoveButton>
    </>
  );
};

export default MyProfile;
