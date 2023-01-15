
const masToObj = (mas) => {
	return mas.map((item) => {
		const [name, salary, pets] = item.split(', ')
		return {
			name: name.split(': ')[1],
			salary: salary.split(': ')[1].slice(0, -1),
			currency: salary.split(': ')[1].slice(-1),
			pets: pets.split(': ')[1],
			blackList: false,
			blackList_by_salary: false,
			blackList_by_pets: false,
		}
	});
};

export default masToObj;
