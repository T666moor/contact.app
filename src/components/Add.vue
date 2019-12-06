<template>
	<div>
		<b-row class="justify-content-center">
			<h1>NEW CONTACT</h1>
		</b-row>
		<b-row class="justify-content-center">
			<div class="form">
				<div>
					<div class="contact-li-title">NAME</div>
					<input v-model="nuName">
				</div>
				<div>
					<div class="contact-li-title">NUMBER</div>
					<input type="number" v-model="nuNumber">
					<button class="plus" @click="addNumber">+</button>
					<div class="i" v-for="(item,index) in nuNumbers" :key="index">
						{{ item }}
						<button class="deleteItem" @click="deleteItem(nuNumbers,index)">X</button>
					</div>
				</div>
				<div>
					<div class="contact-li-title">ADDRESS</div>
					<input v-model="nuAddress">
					<button class="plus" @click="addAddress">+</button>
					<div class="i" v-for="(item,index) in nuAddresss" :key="index">
						{{ item }}
						<button class="deleteItem" @click="deleteItem(nuAddresss,index)">X</button>
					</div>
				</div>
				<div>
					<div class="contact-li-title">EMAIL</div>
					<input v-model="nuEmail">
					<button class="plus" @click="addEmail">+</button>
					<div class="i" v-for="(item,index) in nuEmails" :key="index">
						{{ item }}
						<button class="deleteItem" @click="deleteItem(nuEmails,index)">X</button>
					</div>
				</div>
				<div><button @click="addObj(nuName)">ADD</button></div>
			</div>
		</b-row>
		<b-row class="nuContact justify-content-center">
			<ul id="nuContact">
				<li v-for="(item, index) in nuContact" :key="index">
					New contact added. Name: {{ item }}
				</li>
			</ul>
		</b-row>
	</div>
</template>

<script>
export default {
	name: 'Add',
	props: ['contacts'],
	data() {
		return {
			nuNumbers: [],
			nuAddresss: [],
			nuEmails: [],
			nuContact: []
		}
	},
	methods: {
		addNumber() {
			this.nuNumbers.push(this.nuNumber)
		},
		addAddress() {
			this.nuAddresss.push(this.nuAddress)
		},
		addEmail() {
			this.nuEmails.push(this.nuEmail)
		},
		deleteItem(nuArray,index) {
			nuArray.splice(index, 1)
		},
		addObj(nuName) {
			this.contacts.push({
				name: nuName,
				number: this.nuNumbers,
				address: this.nuAddresss,
				email: this.nuEmails
			})
			this.nuContact.push(nuName)
			document.getElementById('nuContact').style.display = 'block'
		}
	}
}
</script>

<style>
.nuContact {
	padding: 50px 0;
}
#nuContact {
	display: none;
}
@media only screen and (max-width: 576px) {
.form {
	width: 100%;
}
}
</style>