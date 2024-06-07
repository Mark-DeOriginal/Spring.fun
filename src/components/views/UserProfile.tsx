import UserWelcome from "../onboarding/UserWelcome";

export default function UserProfile() {
  const isOnboarded = false;
  return !isOnboarded ? (
    <UserWelcome />
  ) : (
    <>
      <h1>Welcome to your profile</h1>
    </>
  );
}
