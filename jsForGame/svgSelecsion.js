const sizeSetting = localStorage.getItem("sizeSetting");
const colorSetting = localStorage.getItem("colorSetting");
let selectedSvgIcon=[];
let random;
let arrGameDisplay=[];
let chackcarr=[];
let chackiarr=[];


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

        newButton.appendChild(svgImage);
        buttonContainer.appendChild(newButton);
    }
}



selectCard = (c, i) => {
    chackcarr.push(c);
    chackiarr.push(i);
    console.log('Current chackcarr:', chackcarr);
    console.log('Current chackiarr:', chackiarr);

    if (chackiarr.length === 2) {
        // Only remove elements if both IDs are the same, and the class names are different
        if (chackiarr[0] === chackiarr[1] && chackcarr[0] !== chackcarr[1]) {
            let cc = chackiarr[0]; // ID to target
            let bb = chackiarr[1]; // ID to target

            // Select all elements with the same ID
            let elements = document.querySelectorAll(`#${cc}`);
            console.log('Found elements for cc:', elements);

            if (elements.length > 0) {
                elements.forEach(element => {
                    element.remove(); // Remove each matching element
                });
            } else {
                console.log(`No elements found with ID ${cc}`);
            }

            // Repeat for bb
            elements = document.querySelectorAll(`#${bb}`);
            console.log('Found elements for bb:', elements);

            if (elements.length > 0) {
                elements.forEach(element => {
                    element.remove(); // Remove each matching element
                });
            } else {
                console.log(`No elements found with ID ${bb}`);
            }

            // Clear the arrays after handling the pair
            chackcarr = [];
            chackiarr = [];
        }
    }
};

