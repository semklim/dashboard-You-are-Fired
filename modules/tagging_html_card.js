
function taggingCard (obj){
	const allUsers = document.querySelectorAll('.userData');
	for (let i = 0; i < obj.length; i += 1) {
		const user = obj[i];
		const el = allUsers[i];
		const name = el.querySelector('.userName');
		if (user.blackList === true) {
			name.classList.add('fieldsOfData');
			el.classList.add('inBlackList');
		}
		if (user.blackList_by_salary === true) {
			name.classList.remove('fieldsOfData');
			const salary = el.querySelector('.userSalary');
			salary.classList.add('fieldsOfData');
			el.classList.add('inBlackList');
		}
		if (user.blackList_by_pets === true) {
			name.classList.remove('fieldsOfData');
			const pets = el.querySelector('.userPets');
			pets.classList.add('fieldsOfData');
			el.classList.add('inBlackList');
		}
	}
}


export default taggingCard;