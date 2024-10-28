// #01 variables let, const
const fatherName = "Chan Mamud";
let temperatures = 20;
temperatures = 40;

// #02 conditional
if (10 > 20) {
  console.log("Bangladesh ");
} else if (20 > 30) {
  console.log("Pakistan");
} else {
  console.log("india");
}

// #03 array :: index, length push, shift, unshift
const studentList = ["Sorif", "Hasin", "Rashedul"];

console.log(studentList[1]);
studentList[2] = "Kabir";

// #04 Loop: for, while, do...while
for (let i = 0; i < studentList.length; i++) {
  console.log(studentList[i]);
}

while (i < 10) {
  console.log(i);
  i++;
}

// 05 Function:
function summary(name, age) {
  console.log(name, age);
}

summary("mahbubul alam", 30);

// 06 Object:
const userProfile = {
  userName: "Mahbubul Alam",
  address: "Dhaka Kochu khat",
  country: "Bangaldesh",
  isMarried: false,
  email: "mahbubulalam500@gamil.com",
  age: 23,
};

let age;

console.log(userProfile.address); // direct by property
console.log(userProfile["country"]); // access via property name string
console.log(userProfile[age]); // access via property name in a variable
