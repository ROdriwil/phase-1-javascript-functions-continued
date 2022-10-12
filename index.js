// code your solution here
function saturdayFun(whatToDo = 'roller-skate'){
return `This Saturday, I want to ${whatToDo}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(string = '*'){
    return function(adjective =  'special'){
        return `You are ${string}${adjective}${string}!`
    }


}
    


