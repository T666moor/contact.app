<template>
	<div id="app">
		<div class="container">
			<b-row class="justify-content-center text-center">
				<router-link class="router" to="/">CONTACTS</router-link>
				<router-link class="router" to="/add">ADD</router-link>
			</b-row>
			<router-view :contacts="contacts"></router-view>
		</div>
		<div class="container-fluid footer">
			<b-row class="justify-content-center">
				<div class="rights">2019 ALL RIGHTS NOT RESERVED</div>
			</b-row>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			contacts: [
				{
					name: 'John',
					number: [998916549042, 998937215471],
					address: ['New York', 'Los Angeles'],
					email: ['john666@gmail.com', 'johnmf@gmail.com']
				},
				{
					name: 'Alex',
					number: [998916549042, 998937215471, 998937215471],
					address: ['New York', 'Chicago'],
					email: ['alex666@gmail.com', 'alexmf@gmail.com']
				},
				{
					name: 'Jonny',
					number: [998916549042, 998937215471],
					address: ['London'],
					email: ['jonny666@gmail.com', 'jonnymf@gmail.com']
				},
				{
					name: 'Sam',
					number: [998916549042, 998937215471, 998879943217],
					address: ['Berlin', 'Moscow', 'Paris'],
					email: ['sam666@gmail.com', 'sammf@gmail.com']
				}
			]
		}
	}
}
</script>

<style>
body {
	color: #333;
}
.router {
	margin: 25px 5px 0;
	color: #00f;
}
.router:hover {
	color: #66f;
	text-decoration: none;
}
.footer {
	margin-top: 50px;
	background: #ccc;
}
.rights {
	margin: 25px auto;
}
</style>
