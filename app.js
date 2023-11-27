// let home = 0
// let away = 0

let scores = {
    home: 0,
    away: 0
}



// let scores= [{home: 0}, ]

// function shinKick(){
//     console.log('My Shin Dude!')
//     home += 1
//     console.log(home)
//     drawHome()
// }   
// function tripleKick(){
//     console.log('My Shin Dude, that was remarkably harder!')
//     home += 3
//     console.log(home)
//     drawHome()
// }   

function alterScore(teamName, value){
    // debugger
console.log(teamName, value)
let teamScoreToBeAltered = value[teamName]
console.log(teamScoreToBeAltered, 'team to alter')
teamName += value
console.log('home', 'homeScore')
console.log('away', 'awayScore')
drawHome()
}

function drawHome(){
    document.getElementById('homeScore').innerText = scores.home
    document.getElementById('awayScore').innerText = scores.away
}