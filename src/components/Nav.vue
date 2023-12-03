<script lang="ts" setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const searchUserName = ref("");

const onSearch = () => {};
</script>

<template>
	<a-layout>
		<a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
			<div class="nav-container">
				<div class="left-content">
					<router-link to="/">Instagram</router-link>

					<a-input-search
						v-model:value="searchUserName"
						placeholder="input search text"
						style="width: 200px"
						@search="onSearch"
					/>
				</div>
				<div class="right-content">
					<AButton type="primary">SingUp</AButton>
					<AButton type="primary">Logout</AButton>
				</div>
			</div>
		</a-layout-header>
	</a-layout>
</template>

<style scoped>
.nav-container {
	display: flex;
	justify-content: space-between;
}

.left-content {
	display: flex;
	align-items: center;
}
.right-content {
	display: flex;
	align-items: center;
}
</style>
