<script setup>
const props = defineProps(["username", "userInfo"]);
</script>

<template>
	<div class="userbar-container">
		<div class="top-content">
			<n-h2>{{ props.username }}</n-h2>
			<div class="bottom-content">
				<n-h5>{{ props.userInfo.posts }} posts</n-h5>
				<n-h5>{{ props.userInfo.followers }} followers</n-h5>
				<n-h5>{{ props.userInfo.following }} following</n-h5>
			</div>
		</div>
	</div>
</template>

<style scoped>
.userbar-container {
	padding-bottom: 75px;
	width: 100vw;
}
* {
	color: aliceblue;
	margin: 0;
	padding: 0;
}
.top-content {
	margin-left: 20px;
}
.bottom-content {
	display: flex;
	align-items: center;
}
.bottom-content h5 {
	margin-right: 10px;
}
</style>
