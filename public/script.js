document.getElementById("userForm").addEventListener("submit", e => {
  e.preventDefault();

  const user = {
    name: fname.value,
    email: email.value,
    age: age.value
  };

  fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(() => alert("User saved successfully"));
});
