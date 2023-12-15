// src/utils/localStorage.js
export const setDarkModePreference = (isDarkMode) => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
};

export const getDarkModePreference = () => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
};
