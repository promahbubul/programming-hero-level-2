const nationalUniversity = {
  name: "National University, Bangladesh",
  email: "nu@ac.bd",
  phone: "+90198818281",
  address: "Gazipur, Dhaka, Bangladesh",
};

// #01: Template String
console.log(
  `My college name is ${nationalUniversity.name}. This university location is ${nationalUniversity.address}`
);

// 02: Arrow Function
const university = () => "National University";
const multiplySix = (num) => num * 6;
const addWithThreeNumbers = (num1, num2, num3) => num1 + num2 + num3;
const handleSubmit = () => {
  sum = 10 + 20;
  console.log(sum);
  return sum;
};

// 03: Spreed Operator
const friendList = [29, 30, 28, 41];

const newFriendList = [...friendList]; // spreed operator
newFriendList.push(51);

// 04: Rest Operator
function average(...avg) {
  // rest operator
  sum = 0;
  for (let i = 0; i < avg.length; i++) {
    const element = avg[i];
    sum += element;
  }
  return sum;
}

console.log(`Average: ${average(10, 20, 30)}`);
