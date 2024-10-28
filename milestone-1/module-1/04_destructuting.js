const nameOfDistricts = ["Mymensingh", "Dhaka", "Khulna", "Barishal"];
const districtInformation = {
  name: "Mymensingh",
  division: "Mmensingh",
  email: "mymensingh@gmail.com",
  thana: ["fulbaria", "Trishal", "Tarakandha"],
  pouroshoba: {
    name: "Mymensingh City Corporation",
    email: "mymensingh@city.com",
  },
};

const [mn, dh] = nameOfDistricts;
const { division } = districtInformation;
const [fb] = districtInformation.thana;
const { email } = districtInformation.pouroshoba;

console.log(email);
