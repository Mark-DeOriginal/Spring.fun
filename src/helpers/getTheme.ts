export default function getTheme() {
  const defaultTheme = "dark";

  return localStorage.getItem("theme") || defaultTheme;
}
