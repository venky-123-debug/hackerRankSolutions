let grades = [73, 67, 38, 33];
const gradingStudents = (grades) => {
  return grades.map((grade) => {
    let roundedGrade =
      grade >= 38 && grade % 5 >= 3 ? grade + 5 - (grade % 5) : grade;
      console.log({grade},grade % 5,grade >= 38 && grade % 5 >= 3);
    console.log({ roundedGrade });
    return roundedGrade;
  });
};

gradingStudents(grades)
