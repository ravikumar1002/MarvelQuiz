var readlineSync = require("readline-sync")
const chalk = require('chalk');
var score = 0
var level = 0


function introSection(intro){
  var username = readlineSync.question(intro).toUpperCase();
 
  console.log(chalk.bold.rgb(51, 189, 78)("Hey welcome " + username ))
  console.log( chalk.bold.rgb(38, 38, 38)("----------------------------------------")) 
  console.log(chalk.bold.rgb(235, 42, 42) ('Are you marvel fan? ')) 
  var isMarvelFan = readlineSync.keyInYN([chalk.dim.white('if Yes type Y & if No type N ')])
   if(isMarvelFan === true){
     console.log('OHH WOW!! than play some quiz question ')
   }else{
     console.log("Don't worry Let's play te quiz it has fun ")
   }
  console.log( chalk.bold.rgb(38, 38, 38)("----------------------------------------"))
  console.log(chalk.italic .rgb(38, 12, 133)("Let's play the game"))
  console.log( chalk.bold.rgb(38, 38, 38)("----------------------------------------"))
}

introSection(chalk.blue("What is your name? "))

var question =['1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?' , '2. What is the name of Thor’s hammer? ', '3. Before becoming Vision, what is the name of Iron Man’s A.I. butler? ', '4. What is the real name of the Black Panther? ', '5. Who is killed by Loki in the Avengers? ', '6. Who is Black Panther’s sister? ', '7. What type of doctor is Stephen Strange?', '8. What landmark does Peter Parker rescue his classmates from in Spider-Man: Homecoming? ', '9. What is the alien race Loki sends to invade Earth in The Avengers?' , '10. What is Captain America’s shield made of?']



var option =  [['2005', '2008', '2010', '2012' ],['Vanir', 'Mjolnir', 'Aesir', 'Norn' ], ['H.O.M.E.R.', 'J.A.R.V.I.S.','A.L.F.R.E.D.',' M.A.R.V.I.N.' ],["T’Challa" , "M’Baku", "N’Jadaka" , "N’Jobu"],['Maria Hill', 'Nick Fury', 'Agent Coulson' ,'Doctor Erik Selvig' ],['Shuri', 'Nakia' ,'Ramonda' ,'Okoye'],['Neurosurgeon','Cardiothoracic Surgeon','Trauma Surgeon', 'Plastic Surgeon'],['Washington Monument', 'Statue of Liberty','Mount Rushmore', 'Golden Gate Bridge'],['The Chitauri', 'The Skrulls', 'The Kree', 'The Flerkens'],['Adamantium','Vibranium', 'Promethium', 'Carbonadium' ] ]

var ansformat =[ chalk.dim.rgb(235, 42, 42) ('Write Option ')]

var answer =  ['2008', 'Mjolnir', 'J.A.R.V.I.S.', "T’Challa",'Agent Coulson', 'Shuri', 'Neurosurgeon', 'Washington Monument','The Chitauri','Vibranium']


function getTheInput(myques, myopt, ansformat, myans){
  console.log(myques)
  var index = readlineSync.keyInSelect(myopt, ansformat)

  if (index === -1 ){
    console.log( chalk.bold.rgb(133, 17, 17)(" Question skipped "))
    console.log( chalk.bold.rgb(133, 17, 17)("------------------------------------------------------------------------------------------------------") )
    return 
  }
  if(myopt[index] === myans){
    console.log("You are correct 😇")
    score++ 
    console.log("1 point increase")
    console.log("                 ")
  console.log( chalk.bold.rgb(164, 212, 140)("---------------------------------------------------------------------------------------------------------") )
  }
  else{
    console.log("you are wrong 😓")
    score--
    console.log("1 point decrease")
    console.log("                 ")
  console.log(chalk.bold.rgb(133, 17, 17)("-----------------------------------------------------------------------------------------------------------") )

    }

  if(score <= 0){
    score = 0
  }

  if(score === 4 ){
      console.log(chalk.bold.rgb(85, 89, 12)('Level up now play second round  round of quiz😃'))
  console.log(chalk.bold.rgb(85, 89, 12)("----------------------------------------------------------------------") )

    }else if(score === 8){
      console.log(chalk.bold.rgb(182, 191, 21)('Level up now play third roundco quiz 😎'))
  console.log(chalk.bold.rgb(182, 191, 21)("-----------------------------------------------------------------------") )

    }else if(score === 10){
      console.log(chalk.bold.rgb(242, 255, 0)('Yay!!  you are true Marvel fan 😉'))
  console.log( chalk.bold.rgb(242, 255, 0)("--------------------------------------") )


    }

}

for(var i = 0; i < answer.length;i++ ){
getTheInput(question[i], option[i], ansformat, answer[i])
}
console.log(" ")
console.log( chalk.bold.rgb(27, 207, 192)("Now your total score is " + score))
console.log(" ")


var highScore = {
   name : "xyz",
   point : 9,
 }
 
if(score > highScore.point){
  highScore.point = score
  console.log(chalk.bold.rgb(165, 27, 207)(`Now your score is new highscore`))
}else{
  console.log( chalk.bold.rgb(133, 17, 17)(`Sorry!, ${chalk.bold.rgb(133, 17, 17)(highScore.name)} has highscore With  ${chalk.bold.rgb(133, 17, 17)(highScore.point)}point . Try again`))
}
console.log(" ")

console.log(chalk.bold.rgb(161, 106, 158)("------------------------------- Quiz answer --------------------------------"))
console.log(" ")

for(var i = 0; i < question.length;i++ ){
console.log(question[i], " :- ", answer[i])
}
