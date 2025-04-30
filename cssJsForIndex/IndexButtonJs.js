// Function for changing size
setSize = (newSize) => {

    localStorage.setItem("sizeSetting", newSize);   
};

// Function for changing color setting
color = (changingColorSetting) => {

    localStorage.setItem("colorSetting", changingColorSetting);
};
