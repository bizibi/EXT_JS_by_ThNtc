function Student(fullName) {
  let name = fullName.split(" ");
  let wholesomeStudent = true;

  if (name.length < 3) {
    throw new Error("Неверный формат имени");
  }

  [this.lastName, this.firstName, this.middleName] = name;
  this.fullName = () => {
    return fullName;
  };

  this.lastNameIn = () => {
    return "${this.lastName} ${this.firstName[0]} ${this.middleName[0]}";
  };
  this.setWholesome = (wholesome) => {
    if (typeof wholesomeStudent !== "boolean") {
      throw new Error("Формат состояния здоровья студента задан неверно");
    }
    wholesomeStudent = wholesome;
  };
  this.getWholesome = () => {
    return wholesomeStudent;
  };
}
