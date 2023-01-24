

const buttons = document.querySelectorAll('.btn');
function handleClick() {
    console.log('click');
}
buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});

/////////////////////////////////////////////////

{
    let buttonCountPlus = document.getElementById("buttonCountPlus");
    let buttonCountMinus = document.getElementById("buttonCountMinus");
    let count = document.getElementById("buttonCountNumber");
    let count2 = document.getElementById("num");
    let number = 1;


    buttonCountPlus.onclick = function () {
        if (number >= -10) {
            number++;
            count.innerHTML = number;
            count2.value = number ;
        }
    };

    buttonCountMinus.onclick = function () {
        if (number >= -10) {
            number--;
            count.innerHTML = number;
            count2.value = number ;
        }
    }
}



/////////////////////////////////////



// const buttonSecond = document.querySelectorAll('.but');
//
//
// function count() {
//     let counter = 0;
//     return function() {
//         return counter+=1;
//     };
// }
//
// for (let button of buttonSecond) {
//     const counter = count();
//     button.addEventListener('click', function() {
//         this.textContent = counter();
//     });
//
// }
/////////////////////////////////////
// {
//     const buttonThird = document.querySelectorAll('.butt');
//
//
//     function count() {
//         let counter = 0;
//         return function () {
//             return counter -= 1;
//         };
//     }
//
//     for (let button of buttonThird) {
//         const counter = count();
//         button.addEventListener('click', function () {
//             this.textContent = counter();
//         });
//     }
// }
/////////////////////////////////////

