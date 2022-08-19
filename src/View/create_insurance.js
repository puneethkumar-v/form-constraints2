init.view.createInsurance = {
  setupUI: function () {
    const saveBtn = document.querySelector("#saveBtn");
    saveBtn.addEventListener("click", init.view.createInsurance.handleClick);
  },
  handleClick: function () {
    const name = document.querySelector(".name");
    const id = document.querySelector(".id");
    const vehicle_number = document.querySelector(".vehicle_number");
    const newInsurance = { name, id, vehicle_number };
    Insurance.create(newInsurance);
    form.reset();
  },
};
