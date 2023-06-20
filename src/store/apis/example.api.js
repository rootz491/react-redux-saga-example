// Simulated asynchronous API request
export const fetchExampleData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an API call delay
    setTimeout(() => {
      const data = "Some data from the API";
      resolve(data);
      // Rejecting with an error for testing purposes
      // reject(new Error('Failed to fetch example data'));
    }, 1500);
  });
};
