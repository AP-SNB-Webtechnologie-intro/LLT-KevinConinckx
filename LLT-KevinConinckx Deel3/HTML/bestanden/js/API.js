const options = {
  method: 'GET',
  url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
  params: {
    weight: '150',
    height: '1.83'
  },
  headers: {
    'X-RapidAPI-Key': 'fa69f0fd38msh182c873f16eb663p116646jsna220a54ba6ed',
    'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}