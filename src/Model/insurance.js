class Insurance {
  //   constructor(name, id, vehicle_number) {
  //     this.name = name;
  //     this.id = id;
  //     this.vehicle_number = vehicle_number;
  //   }
  static create({ name, id, vehicle_number, phone }) {
    if (name == "") {
      return alert("Name cannot be empty");
    } else {
      const regex = new RegExp("^[a-zA-Z]$");
      if (regex.test(name) == false) {
        return alert("Enter valid name");
      }
    }
    if (phone == "") {
      return alert("Name cannot be empty");
    } else {
      const regex = new RegExp("^[1-9]d{9}$");
      if (regex.test(phone) == false) {
        return alert("Enter valid name");
      }
    }
    if (name == "") {
      return alert("Name cannot be empty");
    } else {
      const regex = new RegExp("^[a-zA-Z]$");
      if (regex.test(name) == false) {
        return alert("Enter valid name");
      }
    }
    if (id == "") {
      return alert("Name cannot be empty");
    } else {
      const regex = new RegExp("^[a-zA-Z]$");
      if (regex.test(id) == false) {
        return alert("Enter valid name");
      }
    }
    if (vehicle_number == "") {
      return alert("Name cannot be empty");
    } else {
      const regex = new RegExp("^[a-zA-Z]$");
      if (regex.test(vehicle_number) == false) {
        return alert("Enter valid name");
      }
    }
    new Insurance(name, id, vehicle_number);
    const preview = `Name: ${name}... ID: ${id}... Vehicle Number: ${vehicle_number}`;
    alert(preview);
  }
}
