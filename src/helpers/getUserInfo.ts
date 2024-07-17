type UserInfo = {
  walletName: string;
  walletBalance: number;
};

export default function getUserInfo(info: keyof UserInfo) {
  const userInfo: UserInfo = {
    walletName: "Sweo24...kjadsf",
    walletBalance: 0,
  };
  return userInfo[info];
}
