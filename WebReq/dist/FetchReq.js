const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/9");
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
    }
};
fetchData();
export {};
//# sourceMappingURL=FetchReq.js.map