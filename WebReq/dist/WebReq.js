import axios, {} from "axios";
const fetchData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("TODO:----", response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Axios Error:: ", error.message);
        }
    }
};
fetchData();
//# sourceMappingURL=WebReq.js.map