const addInLocalStorage = () => {
  const key = document.getElementById("key");
  const value = document.getElementById("value");

  const keyValue = key.value;
  const inputValue = value.value;

  //   localStorage.setItem(keyValue, inputValue);
  sessionStorage.setItem(keyValue, inputValue);

  key.value = "";
  value.value = "";
};


