//let finalScore = function (studentScore, totalPossibleScore) {
 //   let score = (studentScore / totalPossibleScore * 100)
 //   return `Student's score = ${studentScore} Total Possible Score = ${totalPossibleScore} 
 //   Percent = ${score}%`    
//}

//let result = finalScore(16, 20)
//console.log(result)

//let grade = 80
//if (grade >= 90) {
    //console.log('You earned an A. Excellent!')
   // } else if (grade >= 80 ) {
   // console.log('You earned a B. Great job!')
   // } else if (grade >= 70) {
   //     console.log('Your grade is a C. You passed')
   // } else if (grade >= 0) 
   // console.log('Your grade is a D. You may retake this exam')

    //challenge answer

    let gradeCalc = function (score, totalScore) {
        let percent = (score / totalScore) * 100
        let letterGrade = ''
    
        if (percent >= 90) {
            letterGrade = 'A'
        } else if (percent >= 80) {
            letterGrade = 'B'
        } else if (percent >= 70) {
            letterGrade = 'C'
        } else if (percent >= 60) {
            letterGrade = 'D'
        } else {
            letterGrade = 'F'
        }
    
        return `You got a ${letterGrade} (${percent}%)!`
    }
    
    let result = gradeCalc(9, 20)
    console.log(result)



