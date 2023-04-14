//Load module node-persist
var storage = require('node-persist');

// Ham khoi tao
storage.initSync({
    dir: 'students'
});

// show all list student 

function getAllStudents() {
    var students = storage.getItemSync('students');
    if (typeof students === "undefined") {
        return [];
    }
    return students;
}

// Find student by id

function getStudent(studentId) {
    var students = getAllStudents();
    var matchedStudent = null;
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            matchedStudent = students[i];
            break;
        }
    }
    return matchedStudent;
}

// Add a student in list 

function addStudent(id, fullname, age) {
    var students = getAllStudents();
    students.push({
        id: id,
        fullname: fullname,
        age: age
    });
    storage.setItemSync('students', students);
}

// Delete a Student

function removeStudent(studentId) {
    var students = getAllStudents();
    for (var i = 0; i < students.length; i++) {
        if (students[i] === studentId) {
            students.splice(i, 1);
        }
    }
    storage.setItemSync('students', students);
}

// Edit infof a student 

function editStudent(studentId, studentName, studentAge) {
    var students = getAllStudents();
    for (var i = 0; i < students.length; i++) {
        students[i].fullname = studentName;
        students[i].age = studentAge;
    }
    storage.setItemSync('students', students);
}

// Show all infor student

function showStudents() {
    var students = getAllStudents();
    students.forEach(function (student) {
        console.log('Student: ' + student.fullname + '. He/she is ' + student.age + ' years old');
    });
}

// Add studnt 
addStudent(1, 'Cuong', 20);
addStudent(2, 'Kinh', 21);
addStudent(3, 'Chinh', 22);
addStudent(4, 'Quyen', 23);

// Hiển thị danh sách sinh viên
showStudents();
storage.clearSync();
