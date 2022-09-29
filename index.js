const studentInfo = require("./information");

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${studentInfo.student.studentName} from ${studentInfo.student.studentCampus}`,
    e : "oO",
    T : "U "
    }));