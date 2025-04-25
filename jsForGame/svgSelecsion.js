const sizeSetting = localStorage.getItem("sizeSetting");
const colorSetting = localStorage.getItem("colorSetting");
let selectedSvgIcon=[];
let random;
let arrGameDisplay=[];


function setSvmIconArr(sizeSetting){

    const gameStartButton = document.querySelector('.gameStartPoint');
    gameStartButton.remove();

    let numberOfSvgIcon=(sizeSetting  *  sizeSetting)  /  2;

    while(selectedSvgIcon.length !== numberOfSvgIcon){

        random = Math.floor(Math.random() * 50) + 1; 

        if( ! selectedSvgIcon.includes(random)){
            selectedSvgIcon.push(random)
        };

};
    const duplicatedArr = [...selectedSvgIcon];

    const combinedArr = [...selectedSvgIcon, ...duplicatedArr];

    const shuffledArr = combinedArr.sort(() => Math.random() - 0.5);

    selectedSvgIcon =[...shuffledArr]

    console.log(selectedSvgIcon);

    gameCardRander(selectedSvgIcon.length);

};







function gameCardRander() {
    const buttonContainer = document.querySelector('section');
    buttonContainer.innerHTML = ""; // Clear old buttons

    const svgFolder = 'allGameData/svgFile/';
    const numberOfButtons = selectedSvgIcon.length;

    for (let i = 0; i < numberOfButtons; i++) {
        const newButton = document.createElement('button');

        const className = `card-${i}`;
        const iconNumber = selectedSvgIcon[i];
        const idName = `id${iconNumber}`;

        newButton.classList.add(className);
        newButton.classList.add('svg-size'); // Shared class for uniform size
        newButton.id = idName;

        newButton.setAttribute('onclick', `selectCard('${className}', '${idName}')`);

        const svgImage = document.createElement('img');
        svgImage.src = `${svgFolder}${iconNumber}.svg`;
        svgImage.alt = `SVG ${iconNumber}`;

        // Wait for the SVG to load, then adjust its size
        svgImage.onload = () => {
            const svgWidth = svgImage.naturalWidth;  // Get the SVG's natural width
            const svgHeight = svgImage.naturalHeight; // Get the SVG's natural height

            // Calculate the scaling ratio to fit the button
            let scalingFactor = Math.min(100 / svgWidth, 100 / svgHeight); // Keep ratio, max 100px

            // Set the size dynamically
            svgImage.style.width = `${scalingFactor * svgWidth}px`;
            svgImage.style.height = `${scalingFactor * svgHeight}px`;
        };

        newButton.appendChild(svgImage);
        buttonContainer.appendChild(newButton);
    }
}






