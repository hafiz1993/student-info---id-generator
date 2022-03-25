const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const address = document.getElementById("address");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const section = document.getElementById("department");
const blood = document.getElementById("blood-group");
const departmentInput1 = document.getElementById("department1");

const departmentInput = document.getElementById("department");
const file = document.getElementById("file");
const partOne = document.getElementById("part-one");
const partTwo = document.getElementById("part-two");
//output
const bloodGroupDisplay = document.getElementById("bloodGroupDisplay");
const sectionDisplay = document.getElementById("sectionDisplay");
const submitBtn = document.getElementById("registration-form");
const classDisplay = document.getElementById("classDisplay");
const nameDisplay = document.getElementById("nameDisplay");
const targetImg = document.getElementById("targetImg");
const qrImg = document.getElementById("qr-img");
submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameOutPut = fname.value;
  const nameupper = nameOutPut.toUpperCase();

  const lnameOutput = lname.value;
  const lnamUpper = lnameOutput.toUpperCase();
  changeBloodGroup();
  changeDepartment();
  changeSection();
  const fullName = nameupper + " " + lnamUpper;
  nameDisplay.innerHTML = fullName;
  function changeBloodGroup() {
    const sectionName = blood.value;
    bloodGroupDisplay.innerHTML = sectionName;
  }

  function changeDepartment() {
    const itemName = departmentInput1.value;
    sectionDisplay.innerHTML = itemName;
  }
  function changeSection() {
    const itemName1 = departmentInput.value;
    classDisplay.innerHTML = itemName1;
  }
  targetImg.style.display = "block";
  // file.addEventListener("change", (event) => {
  //   targetImg.src = URL.createObjectURL(event.target.files[0]);
  // });

  partOne.style.display = "none";
  partTwo.style.display = "block";

  const qrNumber =
    fullName +
    " " +
    departmentInput.value +
    " " +
    departmentInput1.value +
    " " +
    blood.value;

  const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrNumber}`;
  qrImg.src = url;
});
file.addEventListener("change", (event) => {
  targetImg.src = URL.createObjectURL(event.target.files[0]);
});
