let btn = document.getElementById('btn');
let output = document.getElementById('output');

const url = "https://jsonplaceholder.typicode.com/posts/1";

async function getData(callback){
	const res = await fetch(url);
	const data = await res.json();
	callback(data);
}

function displayData(data){
	output.textContent = data.title;
}


btn.addEventListener('click', () => {
	getData(displayData);
});