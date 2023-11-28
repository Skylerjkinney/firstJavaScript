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
let teamScoreToBeAltered =  scores[teamName]
console.log(teamScoreToBeAltered, teamName)
teamScoreToBeAltered += value
scores[teamName] = teamScoreToBeAltered
console.log('home', scores.home)
console.log('away', scores.away)

drawHome()
}

function drawHome(){
    document.getElementById('homeScore').innerText = scores.home
    document.getElementById('awayScore').innerText = scores.away
}