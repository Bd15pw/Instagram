<script setup>
import { ref } from "vue";
import UserBar from "./UserBar.vue";

const loading = ref(false);
</script>

<template>
	<div class="profile-container" v-if="!loading">
		<UserBar
			username="BD15PW"
			:userInfo="{
				posts: 4,
				followers: 151,
				following: 15,
			}"
		/>
		<ImageGallery :posts="posts" />
	</div>
	<div class="spinner" v-else>
		<ASpin />
	</div>
</template>

<style scoped>
.profile-container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	padding: 20px 0;
}
.spinner {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 85vh;
}
</style>
