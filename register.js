const axios = require("axios");

const registerCompany = async () => {
  try {
    const response = await axios.post("http://20.244.56.144/test/register", {
      companyName: "gomart",
      ownerName: "Ayushman raghav",
      rollNo: "220c2030116",
      ownerEmail: "ayushman.raghav.22cse@bmu.edu.in",
      accessCode: "PRoJlR"
    });

    console.log("✅ Registration Success:", response.data);
  } catch (error) {
    console.error("❌ Registration Failed:", error.response?.data || error);
  }
};

// Run the function
registerCompany();
