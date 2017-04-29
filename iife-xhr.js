//var output = document.getElementById("output");
function showCarnivores (carnivores) {
	carnivores = carnivores.join(", ");
	//computers are smart. apparently don't need to have get element by id for it to work
	output.innerHTML += `<p>Carnivores: ${carnivores}</p>`;
}

function showHerbivores (herbivores) {
	herbivores = herbivores.join(", ")
	output.innerHTML += `<p>Herbivores: ${herbivores}</p>`;
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);