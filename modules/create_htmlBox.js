
class HTML_Card {
	constructor() {
		this.main;
		this.el_ul;
		this.createElement();
	}
	createLi (txtSpan1 = '', txtSpan2 = '', className = '') {
		const el_li = document.createElement('li');
		const span1 = document.createElement('span');
		const span2 = document.createElement('span');
		el_li.classList.add('list');
		el_li.classList.add(className);
		span1.classList.add('no_grow');
		span2.classList.add('grow');
		span1.textContent = txtSpan1;
		span2.textContent = txtSpan2;
		el_li.append(span1, span2);
		return el_li;
	}

	createElement () {
		const main = document.createElement('div');
		const el_ul = document.createElement('ul');
		main.classList.add('userData');
		el_ul.classList.add('data');
		main.append(el_ul);
		this.main = main;
		this.el_ul = el_ul;
	}
}

function createCard(array){
	const wrapper = document.createElement('div');
	wrapper.classList.add('wrapper');
	for (const user of array) {
		const worker = new HTML_Card();
		worker.el_ul.append(
			worker.createLi('Name:', user.name, 'userName'),
			worker.createLi('Salary:', user.salary + user.currency, 'userSalary'),
			worker.createLi('Pets:', user.pets, 'userPets')
		);
		wrapper.append(worker.main);
		document.body.append(wrapper);
	}
}

export default createCard;