var url = "https://reqres.in/api/users";

// // ini menggunakan fetch
// fetch(url + "/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data.data))
//   .catch((error) => console.log("Error: " + error));

// // fetch method post
// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Wakhid",
//     job: "Pedagang",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

// // error in fetch
// fetch(url + "/x")
//   .then((response) => console.log(response))
//   .catch((error) => console.log("Error: " + error));

// // ini menggunakan axios
// axios
//   .get(url + "/1")
//   .then((data) => console.log(data.data))
//   .catch((error) => console.log("error: " + error));

// // axios method post
// axios
//   .post(url, {
//     name: "Dwi",
//     job: "Karyawan Swasta",
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

// // error in axios
// axios
//   .get(url + "/x")
//   .then((response) => console.log(response))
//   .catch((error) => console.log("Error: " + error));
