async function fetchWithTimeout(url, ms) {
    const fetchPromise = fetch(url);

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request Timed Out"));
        }, ms);
    });

    return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 5000)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.message));