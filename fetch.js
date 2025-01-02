const api = "https://api.github.com/users/ritikpal1122";

async function handlePromise() {
    const data = await fetch(api);
    const apiData = await data.json();
    console.table(apiData)

}
handlePromise(); 