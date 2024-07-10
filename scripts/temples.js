const year = document.querySelector('#currentyear');

const today = new Date();

year.innerHTML =
	currentyear.innerHTML = `@<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.lastModified;

document.getElementById(
	'lastModified'
).textContent = `Last Modification: ${lastModified}`;



