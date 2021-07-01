// import functions and grab DOM elements
import { randomItem, randomNum, compareItems } from './utils.js';
// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const play_btn = document.getElementById('play-btn');
const wins_section = document.getElementById('wins');
const losses_section = document.getElementById('losses');
const draws_section = document.getElementById('draws');
const compare_section = document.getElementById('compare-section');


let wins = 0;
let losses = 0;
let draws = 0; 




play_btn.addEventListener('click', () => {

    const user_selected_item = document.querySelector('input[type=radio]:checked');
    const user_item = user_selected_item.value;


    let comp_item = randomItem(randomNum());
//console.log(comp_item);

    let result = compareItems(user_item, comp_item);


    compare_section.innerText = `You chose ${user_item} and the computer chose ${comp_item}`;


    if (result === 'win'){

        wins++;
        wins_section.innerText = `You won ${wins} times`;

    }
    if (result === 'lose'){

        losses++;
        losses_section.innerText = `You lost ${losses} times`;

    }
    if (result === 'draw'){

        draws++;
        draws_section.innerText = `You had ${draws} draws`;

    }

    console.log(result);








//random item selection function for computer



});