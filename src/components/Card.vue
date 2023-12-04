<script setup>
import { defineProps } from "vue";

const props = defineProps(["post"]);
</script>

<template>
	<n-card :title="post.username">
		<template #cover>
			<img :src="post.img" />
		</template>
		{{ post.caption }}
	</n-card>
</template>

<style scoped>
.n-card {
	max-width: 300px;
	margin-bottom: 15px;
}
</style>
