
function getUser(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
	.then((res) => { return res.json() })
	.then((data) => {
		data.forEach((user) =>{

			res +=
			`<table border="1" cellspacing="0">
			<tr>
			<th width="30%">ID</th> <td><input size="40%" id="id" value="${user.id}"></td>
			</tr>
			<tr>
			<th>Имя</th> <td><input size="40%" id="name" value="${user.name}"></td>
			</tr>
			<tr>
			<th>Логин</th> <td><input size="40%" id="username" value="${user.username}"></td>
			</tr>
			<tr>
			<th>Email</th> <td><input size="40%" id="email" value="${user.email}"></td>
			</tr>
			<tr>
			<th>Адрес</th> <td><input size="40%" id="address" value="${user.address.street}"></td>
			</tr>
			<tr>
			<th>Квартира</th> <td><input size="40%" id="suite" value="${user.address.suite}"></td>
			</tr>
			<tr>
			<th>Город</th> <td><input size="40%" id="city" value="${user.address.city}"></td>
			</tr>
			<tr>
			<th>Индекс</th> <td><input size="40%" id="zipcode" value="${user.address.zipcode}"></td>
			</tr>
			<tr>
			<th>Телефон</th> <td><input size="40%" id="phone" value="${user.phone}"></td>
			</tr>
			<tr>
			<th>Вебсайт</th> <td><input size="40%" id="website" value="${user.website}"></td>
			</tr>
			<tr>
			<th>Работа</th> <td><input size="40%" id="company_name" value="${user.company.name}"></td>
			</tr>
			</table>`;

			
		})
	})
}