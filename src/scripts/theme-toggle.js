// Return the current theme
function getCurrentTheme() {
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

// Update <html> attribute with the current theme
function updateThemeOnHtml(currentTheme) {
  document.querySelector("html").setAttribute("data-theme", currentTheme);
}

// Update the theme on the button
function updateThemeOnButton(button, currentTheme) {
  const cta = currentTheme === "dark" ? "Change to light theme" : "Change to dark theme";
  button.setAttribute("aria-label", cta);

  button.setAttribute("data-theme-value", currentTheme);
}

/**
* On page load:
*/

// 1. Get the current theme
let currentTheme = getCurrentTheme();

// 2. Update the <html> element
updateThemeOnHtml(currentTheme);

// 3. Update the <button>
const themeButton = document.querySelector("[data-theme-toggle]");
updateThemeOnButton(themeButton, currentTheme);

// 4. Add event listener to the button
themeButton.addEventListener("click", () => {
  // check the current theme and set the opposite
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  // update theme attribute on HTML to switch theme in CSS
  updateThemeOnHtml(newTheme);

  // update the button text
  updateThemeOnButton(themeButton, newTheme);

  // update in local storage
  localStorage.setItem("theme", newTheme);

  // update the currentThemeSetting in memory
  currentTheme = newTheme;
});