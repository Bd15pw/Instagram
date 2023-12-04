<script setup>
import { ref, reactive, defineProps } from "vue";

const props = defineProps(["isLogin"]);
const title = props.isLogin ? "Login" : "Signup";
const userCredentials = reactive({
	email: "",
	password: "",
	username: "",
});
const open = ref(false);

const showModal = () => {
	open.value = true;
};

const handleOk = (e) => {
	open.value = false;
};
</script>

<template>
	<div>
		<a-button type="primary" @click="showModal" class="btn">{{
			title
		}}</a-button>
		<a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
			<div class="input-container">
				<a-input
					class="input"
					placeholder="User Name"
					v-model:value="userCredentials.username"
				/>
				<a-input
					v-if="!isLogin"
					class="input"
					placeholder="Email"
					v-model:value="userCredentials.email"
				/>
				<a-input
					class="input"
					placeholder="Password"
					type="password"
					v-model:value="userCredentials.password"
				/>
			</div>
		</a-modal>
	</div>
</template>

<style scoped>
.input {
	margin: 10px auto;
}
.btn {
	margin-right: 10px;
}
</style>
