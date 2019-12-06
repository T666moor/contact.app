<template>
	<div>
		<b-row class="justify-content-center">
			<b-col class="search__box" cols="12" md="10" lg="8" xl="6">
				<h1>CONTACTS</h1>
				<input class="search" type="search" v-model="search">
			</b-col>
		</b-row>

		<b-row class="justify-content-center contact__ul">
			<b-col class="contact__li" cols="12" md="12" lg="10" xl="8" v-for="(contact, index) in filteredList" :key="index">
				<div class="contact-li-name">{{contact.name}}</div>
				<b-row class="justify-content-between">
					<div class="contact-li-title">Number</div>
					<div class="contact-li-item" v-for="number in contact.number" :key="number">+{{ number }}</div>
				</b-row>
				<b-row class="justify-content-between">
					<div class="contact-li-title">Address</div>
					<div class="contact-li-item" v-for="address in contact.address" :key="address">{{ address }}</div>
				</b-row>
				<b-row class="justify-content-between">
					<div class="contact-li-title">Email</div>
					<div class="contact-li-item" v-for="email in contact.email" :key="email">{{ email }}</div>
				</b-row>
				<b-row class="justify-content-end">
					<button @click="modalShow(index)">EDIT</button>
					<button @click="deleteObj(index)">DELETE</button>
				</b-row>

				<b-row :id="index" class="modal__background justify-content-center" align-v="center">
					<div class="contact__modal">
						<div>
							<div class="contact-li-title">NAME</div>
							<input v-model="nuName" :placeholder="contact.name">
						</div>
						<div>
							<div class="contact-li-title">NUMBER</div>
							<input type="number" v-model="nuNumber" :placeholder="contact.number">
							<button class="plus" @click="addNumber">+</button>
							<div class="i" v-for="(item,index) in nuNumbers" :key="index">
								{{ item }}
								<button class="deleteItem" @click="deleteItem(nuNumbers,index)">X</button>
							</div>
						</div>
						<div>
							<div class="contact-li-title">ADDRESS</div>
							<input v-model="nuAddress" :placeholder="contact.address">
							<button class="plus" @click="addAddress">+</button>
							<div class="i" v-for="(item,index) in nuAddresss" :key="index">
								{{ item }}
								<button class="deleteItem" @click="deleteItem(nuAddresss,index)">X</button>
							</div>
						</div>
						<div>
							<div class="contact-li-title">EMAIL</div>
							<input v-model="nuEmail" :placeholder="contact.email">
							<button class="plus" @click="addEmail">+</button>
							<div class="i" v-for="(item,index) in nuEmails" :key="index">
								{{ item }}
								<button class="deleteItem" @click="deleteItem(nuEmails,index)">X</button>
							</div>
						</div>
						<button @click="saveObj(contact,nuName,index)">SAVE</button>
						<button @click="modalHide(index)">CLOSE</button>
					</div>
				</b-row>
			</b-col>
		</b-row>	
	</div>
</template>

<script>
export default {
	name: 'Contact',
	data() {
		return {
			search: '',
			nuName: '',
			nuNumbers: [],
			nuAddresss: [],
			nuEmails: []
		}
	},
	props: ['contacts'],
	methods: {
		deleteObj(index) {
			this.contacts.splice(index, 1);
		},
		modalShow(index) {
			document.getElementById(index).style.display = "flex"
		},
		modalHide(index) {
			document.getElementById(index).style.display = "none"
		},
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
		saveObj(contact,nuName,index) {
			if (nuName.length > 0) {
				contact.name = nuName
			}
			if (this.nuNumbers.length > 0) {
				contact.number = this.nuNumbers
			}
			if (this.nuAddresss.length > 0) {
				contact.address = this.nuAddresss
			}
			if (this.nuEmails.length > 0) {
				contact.email = this.nuEmails
			}
			document.getElementById(index).style.display = "none"
		}
	},
	computed: {
		filteredList() {
			return this.contacts.filter(contact => {
				return contact.name.toLowerCase().includes(this.search.toLowerCase())
			})
		}
	}
}
</script>

<style>
.search__box {
	text-align: center;
}
h1 {
	margin: 25px 0 0 0;
}
.search {
	width: 95%;
	margin: 25px auto 30px;
	padding: 5px 15px;
	border: 2px solid #999;
	border-radius: 15px;
}
.contact__ul {
	margin: 25px auto;
}
.contact__li {
	margin: 15px auto;
	padding: 15px;
	border-bottom: 2px solid #999;
}
.contact-li-name {
	margin: 15px;
	font-size: 30px;
	font-weight: 700;
}
.contact-li-title {
	margin: 5px 10px;
	font-family: impact;
}
.contact-li-item {
	margin: 5px 10px;
}
.modal__background {
	display: none;
	z-index: 666;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	margin: 0;
}
.contact__modal {
	background: #fff;
	padding: 25px;
	margin: auto;
	border-radius: 25px;
}
button {
	margin: 10px;
	padding: 7px 17px;
	color: #fff;
	background: #00f;
	border: 0;
	border-radius: 10px;
	outline: none;
	transition: 0.3s;
}
button:hover {
	background: #009;
}
.plus {
	margin-top: 0;
}
.i {
	margin-left: 25px;
}
input {
	width: 400px;
	margin: 0 10px 10px;
	padding: 5px 15px;
	border: 2px solid #999;
	border-radius: 10px;
	outline: none;
	transition: 0.3s;
}
input:focus {
	border: 2px solid #00f;
}
.deleteItem {
	margin: 1px;
	padding: 2px 10px;
	color: #fff;
	background: #f00;
	border: 0;
	border-radius: 5px;
	transition: 0.3s;
}
.deleteItem:hover {
	background: #900;
}

@media only screen and (max-width: 576px) {
.contact__modal {
	padding: 10px;
	width: 100%;
}
input {
	width: 75%;
}
}
</style>