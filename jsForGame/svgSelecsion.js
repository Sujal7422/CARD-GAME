let sizeSetting = localStorage.getItem("sizeSetting");
let colorSetting = localStorage.getItem("colorSetting");
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

async function gameCardRander() {
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

        // ✅ Load and insert inline SVG
        const svgText = await fetch(`${svgFolder}${iconNumber}.svg`).then(res => res.text());
        const svgWrapper = document.createElement('div');
        svgWrapper.innerHTML = svgText;
        const inlineSvg = svgWrapper.querySelector('svg');

        // Optional: ensure the SVG uses currentColor
        inlineSvg.setAttribute('fill', 'currentColor');
        inlineSvg.classList.add('icon-svg'); // Optional CSS class

        newButton.appendChild(inlineSvg);
        buttonContainer.appendChild(newButton);


    }
    if(sizeSetting === 10){
        sizeSetting = 10;
    }
    else if(sizeSetting === 8){
        sizeSetting =8;
    }
    else{sizeSetting = 6;
        console.log(sizeSetting);
    }
    
    
    if(colorSetting === "Keep Changing Colors"){
        keepChangeColor();
    }
    else if(colorSetting === "Change Color"){
        changeColor();
    }
    else{noColor();
        console.log(colorSetting);
    }

}




selectCard = (c, i) => {
    chackcarr.push(c);
    chackiarr.push(i);
    console.log('Current class:', chackcarr);
    console.log('Current id:', chackiarr);

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
            chackcarr = [];
            chackiarr = [];
           
        }
        else if(chackiarr[0] !== chackiarr[1] || chackcarr[0] !== chackcarr[1] || (chackiarr[0] === chackiarr[1] && chackcarr[0] === chackcarr[1])){
            chackcarr = [];
            chackiarr = [];  
            
        };
    }    
};

colorArr=[["rgb(5, 102, 141)"  , "2"  , "128", "144", "rgb(0, 168, 150)"   , "rgb(2, 195, 154)"],
          ["rgb(46, 52, 64)"   , "59" , "66" , "82" , "rgb(67, 76, 94)"    , "rgb(76, 86, 106)"],
          ["rgb(7, 59, 58)"    , "11" , "110", "79" , "rgb(8, 160, 69)"    , "rgb(107, 191, 89)"], 
          ["rgb(35, 12, 51)"   , "89" , "46" , "131", "rgb(153, 132, 212)" , "rgb(202, 168, 245)"],
          ["rgb(70, 63, 58)"   , "138", "129", "124", "rgb(188, 184, 177)" , "rgb(244, 243, 238)"],
          ["rgb(208, 184, 172)", "243", "216", "199", "rgb(239, 229, 220)" , "rgb(251, 254, 251)"],
          ["rgb(3, 4, 94)"     , "0"  , "119", "182", "rgb(0, 180, 216)"   , "rgb(144, 224, 239)"],
          ["rgb(2, 1, 10)"     , "4"  , "5"  , "46" , "rgb(20, 1, 82)"     , "rgb(34, 0, 124)"],
          ["rgb(60, 22, 66)"   , "8"  , "99" , "117", "rgb(29, 211, 176)"  , "rgb(175, 252, 65)"],
          ["rgb(53, 80, 112)"  , "109", "89" , "122", "rgb(181, 101, 118)" , "rgb(229, 107, 111)"],
          ["rgb(54, 5, 104)"   , "91" , "42" , "134", "rgb(119, 133, 172)" , "rgb(154, 198, 197)"],
          ["rgb(78, 20, 140)"  , "97" , "61" , "193", "rgb(133, 138, 227)" , "rgb(151, 223, 252)"],
          ["rgb(79, 0, 11)"    , "114", "0"  , "38" , "rgb(206, 66, 87)"   , "rgb(255, 127, 81)"],
          ["rgb(10, 36, 99)"   , "62" , "146", "204", "rgb(255, 250, 255)" , "rgb(216, 49, 91)"],
          ["rgb(84, 13, 110)"  , "238", "66" , "102", "rgb(255, 210, 63)"  , "rgb(59, 206, 172)"],
          ["rgb(255, 123, 0)"  , "255", "162", "0"  , "rgb(255, 195, 0)"   , "rgb(255, 234, 0)"],
          ["rgb(255, 250, 240)", "154", "80" , "185", "rgb(158, 160, 230)" , "rgb(205, 206, 242)"],
          ["rgb(19, 18, 0)"    , "99" , "212", "113", "rgb(255, 131, 96)"  , "rgb(232, 226, 136)"],
          ["rgb(0, 0, 0)"      , "43" , "38" , "208", "rgb(0, 255, 8)"     , "rgb(255, 255, 255)"],
          ["rgb(61, 54, 60)"   , "122", "0"  , "106", "rgb(141, 68, 172)"  , "rgb(200, 161, 230)"],
          ["rgb(0, 109, 140)"  , "0"  , "242", "235", "rgb(19, 197, 241)"  , "rgb(255, 255, 255)"]   ]


          let v = Math.floor(Math.random() * (colorArr.length));

function keepChangeColor(){
    changeColor();
        setInterval(changeColor, (selectedSvgIcon.length) * 200);

};

async function changeColor() {
    console.log("I am called");

    for (let i = 0; i < selectedSvgIcon.length; i++) {
        const className = `card-${i}`;
        let v = Math.floor(Math.random() * colorArr.length);

        if (v < colorArr.length) {
            const backgroundColor = `${colorArr[v][4]}`;
            const textColor = `${colorArr[v][5]}`;

            const shadow = `
                rgba(${colorArr[v][1]}, ${colorArr[v][2]}, ${colorArr[v][3]}, 0.4) 0px 0px 0px 5px inset,
                rgba(${colorArr[v][1]}, ${colorArr[v][2]}, ${colorArr[v][3]}, 0.3) 0px 0px 0px 10px inset,
                rgba(${colorArr[v][1]}, ${colorArr[v][2]}, ${colorArr[v][3]}, 0.2) 0px 0px 0px 15px inset,
                rgba(${colorArr[v][1]}, ${colorArr[v][2]}, ${colorArr[v][3]}, 0.1) 0px 0px 0px 20px inset,
                rgba(${colorArr[v][1]}, ${colorArr[v][2]}, ${colorArr[v][3]}, 0.05) 0px 0px 0px 25px inset,
                rgba(${colorArr[v][1]}, ${colorArr[v][2]}, ${colorArr[v][3]}, 0.4) 0px 0px 0px 5px,
                rgba(${colorArr[v][1]}, ${colorArr[v][2]}, ${colorArr[v][3]}, 0.3) 0px 0px 0px 10px,
                rgba(${colorArr[v][1]}, ${colorArr[v][2]}, ${colorArr[v][3]}, 0.2) 0px 0px 0px 15px,
                rgba(${colorArr[v][1]}, ${colorArr[v][2]}, ${colorArr[v][3]}, 0.1) 0px 0px 0px 20px,
                rgba(${colorArr[v][1]}, ${colorArr[v][2]}, ${colorArr[v][3]}, 0.05) 0px 0px 0px 25px
            `;

            injectCss(className, `
                background-color: ${backgroundColor} !important;
                color: ${textColor} !important;
                box-shadow: ${shadow} !important;
            `);

            // Optional: add delay between coloring each card
            await delay(200); // 50ms delay
        }
    }
}

// Optional delay helper
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to inject custom CSS for a given class
function injectCss(className, properties) {
    // Create a <style> element
    const styleElement = document.createElement('style');
    console.log(styleElement);
    styleElement.innerHTML = `
        .${className} {
            ${properties}
        }
    `;
    // Append the <style> element to the head of the document
    document.head.appendChild(styleElement);
 
}


function noColor(){
    v = Math.floor(Math.random() * (colorArr.length));
    
    const buttons = document.querySelectorAll("button.svg-size");

    buttons.forEach(btn => {
    
    btn.style.backgroundColor = `${colorArr[v][4]}`;
    btn.style.color = `${colorArr[v][5]}`;
    btn.style.boxShadow = `
    rgba(${colorArr[v][1]},${colorArr[v][2]},${colorArr[v][3]}, 0.4) 0px 0px 0px 5px inset,
    rgba(${colorArr[v][1]},${colorArr[v][2]},${colorArr[v][3]}, 0.3) 0px 0px 0px 10px inset,
    rgba(${colorArr[v][1]},${colorArr[v][2]},${colorArr[v][3]}, 0.2) 0px 0px 0px 15px inset,
    rgba(${colorArr[v][1]},${colorArr[v][2]},${colorArr[v][3]}, 0.1) 0px 0px 0px 20px inset,
    rgba(${colorArr[v][1]},${colorArr[v][2]},${colorArr[v][3]}, 0.05) 0px 0px 0px 25px inset,
    rgba(${colorArr[v][1]},${colorArr[v][2]},${colorArr[v][3]}, 0.4) 0px 0px 0px 5px,
    rgba(${colorArr[v][1]},${colorArr[v][2]},${colorArr[v][3]}, 0.3) 0px 0px 0px 10px,
    rgba(${colorArr[v][1]},${colorArr[v][2]},${colorArr[v][3]}, 0.2) 0px 0px 0px 15px,
    rgba(${colorArr[v][1]},${colorArr[v][2]},${colorArr[v][3]}, 0.1) 0px 0px 0px 20px,
    rgba(${colorArr[v][1]},${colorArr[v][2]},${colorArr[v][3]}, 0.05) 0px 0px 0px 25px
  `;
    })
};
