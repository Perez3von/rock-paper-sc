// import functions and grab DOM elements
import { randomItem, randomNum, compareItems } from './utils.js';
// initialize state

// update DOM to reflect the new state

const play_btn = document.getElementById('play-btn');
const wins_section = document.getElementById('wins');
const losses_section = document.getElementById('losses');
const draws_section = document.getElementById('draws');
const compare_section = document.getElementById('compare-section');
const reset_button = document.getElementById('reset-button');
const reset_counter_section = document.getElementById('reset-counter');

let wins = 0;
let losses = 0;
let draws = 0; 
let reset = 0;

play_btn.addEventListener('click', () => {

    const user_selected_item = document.querySelector('input[type=radio]:checked');
    const user_item = user_selected_item.value;
    const comp_item = randomItem(randomNum());
    const result = compareItems(user_item, comp_item);

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

});

reset_button.addEventListener('click', ()=> {
    // wins, losses, draws = 0; <-----didn't reset them
    wins = 0;
    losses = 0;
    draws = 0;
    wins_section.innerText = '';
    losses_section.innerText = '';
    draws_section.innerText = '';
    reset++;
    reset_counter_section.innerText = `Resets: ${reset}`;
});