export const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) localStorage.setItem("theme", "light");
  return theme === "dark" ? true : false;
};

export const setLocalTheme = (theme) => {
  const old = theme ? "dark" : "light";
  localStorage.setItem("theme", old);
};
