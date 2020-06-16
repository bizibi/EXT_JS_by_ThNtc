function Group(number) {
  this.number = number;

  this.addStudent = (student) => {
    this.students.push(student);
  };

  this.away = () => {
    return this.students.filter((s) => !s.wholesomeStudent());
  };

  this.students = [];
}
