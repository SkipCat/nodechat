<template>
	<section>
		<h2>Connection</h2>
		<form action="#" @submit.prevent="login">
			<label for="pseudo">Pseudo:</label>
			<input type="text" id="pseudo" placeholder="John Doe" v-model.trim="pseudo">
			<input type="submit" value="LOGIN">
		</form>
	</section>
</template>

<script>
	export default {
		name: 'LoginPage',
		data () {
			return {
				pseudo: this.$store.state.user.pseudo,
			}
		},
		methods: {
			login() {
				this.$store.commit('setPseudo', this.pseudo)
				this.$router.push('/chat')
			}
		}
	}
</script>

<style>
</style>
