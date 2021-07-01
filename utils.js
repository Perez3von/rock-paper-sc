export function compareItems(user_item, computer_item){

    let str = '';

    

    if (user_item === computer_item){

        str = 'draw';
    }

    else if (user_item === 'paper' && computer_item === 'rock'){

        str = 'win';


    }

    
    else if (user_item === 'rock' && computer_item === 'scissors'){

        str = 'win';


    }

    
    else if (user_item === 'scissors' && computer_item === 'paper'){

        
        str = 'win';

    }

    else {


        str = 'lose';

    }

    return str;


}



export function randomNum(){


    return Math.floor(Math.random() * 3) + 1;


}


export function randomItem(num){

    let str = '';

    if (num === 1){

        str = 'rock';
    }

    if (num === 2){

        str = 'paper';
    }

    if (num === 3){

        str = 'scissors';
    }

    return str;

}


