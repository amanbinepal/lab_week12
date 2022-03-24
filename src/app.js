//part 2

const singleElem = document.querySelector("#side-nav")
console.log(singleElem)

//part 3

const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]
  



function stuAdd() {
    const studentsScholarship = []
    for (const stu of students) {
        let avg = 0
        for (const grade of stu.grades) {
            avg += grade
        }
        avg = avg/stu.grades.length
        if (avg >= 80) {
            studentsScholarship.push({name: stu.name, gradeAvg: avg})
        }
    }
    
    return studentsScholarship
}

console.log(stuAdd())

