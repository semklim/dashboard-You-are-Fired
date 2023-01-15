
// вибрать рандомных людей в зависимости от рандомного числа из массива obj и изменяем их свойство blackList на true
function blackList(masObj) {
    //рандомим число от 0 до 3
    const random = Math.floor(Math.random() * 4)
    // console.log(random) // количество людей которые попадут в черный список
    for (let i = 0; i < random; i++) {
        const random2 = Math.floor(Math.random() * masObj.length)
        masObj[random2].blackList = true
    }
    return masObj
}


// вибрать людей у кого зарплата в £ или € и изменяем их свойство blackList на true 
function blackListSalary(masObj) {
    const reg = /€|£/
    for (let i = 0; i < masObj.length; i++) {
        if (reg.test(masObj[i].currency)) {
            masObj[i].blackList_by_salary = true;

        }
    }
    return masObj
}

// вибрать людей у кого питомец hamster и изменяем их свойство blackList на true c 

function blackListPets(masObj) {
    const reg = /hamster/
    for (let i = 0; i < masObj.length; i++) {
        if (reg.test(masObj[i].pets)) {
            masObj[i].blackList_by_pets = true;
        }
    }
    return masObj
}
export {
	blackList,
	blackListSalary,
	blackListPets,
}