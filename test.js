const subjects = [1, "", "", 4, 6]
for ( i = subjects.length-1; i>=0; i--){
    if (subjects[i] == ''){
        subjects.splice(i,1)
    }
    
}


console.log(subjects)