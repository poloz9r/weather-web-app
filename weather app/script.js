const link = "http://api.weatherstack.com/current?access_key=8823bf16244795f65112add4ce002431";

let store = {
    city: "Moscow",
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
};

const fetchData = async () => {
    const result = await fetch('${link}&query=${store.city}');
    const data = await result.json();

    const {
        current: { temperature, humidity, wind},
    } = data
    console.log("data",data);
};
