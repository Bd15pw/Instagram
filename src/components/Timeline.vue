<script setup>
import Card from "./Card.vue";

const data = [
	{
		id: 1,
		username: "Tom",
		img: "https://static01.nyt.com/images/2021/02/07/sports/07sb-oldbrady/07sb-oldbrady-superJumbo.jpg?quality=75&auto=webp",
		caption: "",
	},
	{
		id: 2,
		username: "Julian",
		img: "https://cdn.vox-cdn.com/thumbor/Y7_11EGlErX0jtjfKO8aYhXV2aE=/0x0:4051x2696/920x613/filters:focal(1707x442:2355x1090):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69119152/1282370213.0.jpg",
		caption: "I Love Belechick",
	},
];
</script>

<template>
	<Container>
		<div class="timeline-container">
			<Card v-for="post in data" :key="post.id" :post="post" />
		</div>
	</Container>
</template>

<style scoped>
.timeline-container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	padding: 20px 0;
}
</style>
