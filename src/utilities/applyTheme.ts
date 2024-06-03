export default function applyTheme(theme: string) {
  document.body.className = theme;
  const metaTagThemeColor = document.querySelector('meta[name="theme-color"]');
  const themeColor = theme === "light" ? "#ededf2" : "#342f42";
  if (metaTagThemeColor) {
    metaTagThemeColor.setAttribute("content", themeColor);
  }
}
