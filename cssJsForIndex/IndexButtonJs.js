// Function for changing size
setSize = (newSize) => {
    console.log(newSize);
    localStorage.setItem("sizeSetting", newSize);
};

// Function for changing color setting
color = (changingColorSetting) => {
    console.log(colorSetting);
    localStorage.setItem("colorSetting", changingColorSetting);
};
