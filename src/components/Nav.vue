<script lang="ts" setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import AuthModal from "./AuthModal.vue";

const searchUserName = ref("");
const isAuth = ref(false);
const router = useRouter();

const onSearch = () => {
	if (searchUserName.value) {
		router.push(`/profile/${searchUserName.value}`);
		searchUserName.value = "";
	}
};

const goToUsersProfile = () => {};

const handleLogout = () => {};
</script>

<template>
	<a-layout>
		<a-layout-header>
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
				<div class="right-content" v-if="!isAuth">
					<AuthModal :isLogin="false" />
					<AuthModal :isLogin="true" />
				</div>
				<div class="right-content" v-else>
					<AButton type="primary" @click="goToUsersProfile">Profile</AButton>
					<AButton type="primary" @click="handleLogout">Logout</AButton>
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
.left-content a {
	margin-right: 15px;
}
.right-content {
	display: flex;
	align-items: center;
}
.right-content button {
	margin-left: 10px;
}
</style>
