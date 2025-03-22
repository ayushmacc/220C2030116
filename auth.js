const axios = require('axios');

const data = {
    companyName: "goMart",
    clientID: "3b07c458-e82c-447f-a9ef-466f75c7a6dd",
    clientSecret: "fLFJTvPtCrDkJqvm",
    ownerName: "Ayushman raghav",
    ownerEmail: "ayushman.raghav.22cse@bmu.edu.in",
    rollNo: "220c2030116"
};

axios.post('http://20.244.56.144/test/auth', data)
    .then(response => {
        console.log("Authorization Token:", response.data);
    })
    .catch(error => {
        console.error("Error fetching token:", error.response ? error.response.data : error.message);
    });
