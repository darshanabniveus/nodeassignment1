function displayMessage() {
    return new Promise((resolve, reject) => {
      let condition = true;
      setTimeout(() => {
        if (condition) {
          resolve("Message displayed");
        } else {
          reject("Error in displaying");
        }
      }, 2000);
    });
  }
  
  async function showMessage() {
    try {
      const message = await displayMessage();
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  }
  
  showMessage();
  