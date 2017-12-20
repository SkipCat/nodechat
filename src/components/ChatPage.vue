<template>
	<section>
		<button @click="logout">LOGOUT</button>

		<h2>Send a message</h2>
		<form action="#" @submit.prevent="send">
			<label for="message">Message:</label>
			<input type="text" id="message" placeholder="Your message" autofocus v-model.trim="message">
			<input type="submit" value="SEND">
		</form>

		<h2>Messages list</h2>
		<ul>
			<li v-for="(message, index) of lastMessages" :key="index">
				<strong>{{ message.author }}</strong> wrote: {{ message.text }}
			</li>
		</ul>
	</section>
</template>

<script>
	import io from 'socket.io-client'

	export default {
		name: 'ChatPage',
		data () {
			return {
				socket: null,
				messages: [],
				message: null,
				pseudo: this.$store.state.user.pseudo
			}
		},
		computed: {
			pseudo() {
				return this.$store.state.user.pseudo
			},
			lastMessages() {
				return this.messages.slice(-10)
			}
		},
		methods: {
			send() {
				if (!this.message) return

				const newMessage = {
					author: this.$store.state.user.pseudo,
					text: this.message
				}

				// Send to server to dispatch to other clients
				this.socket.emit('message', newMessage)

				// Stock of my own message in array
				this.messages.push(newMessage)

				this.message = null
			},
			logout() {
				this.$router.push('/')
			}
		},
		created() {
			this.socket = io('//localhost:50437')

			// When I receive a message from the server
			this.socket.on('message', message => {
				this.messages.push(message)
			})
		}
	}
</script>

<style>

</style>


