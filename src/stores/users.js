import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { GoTrueAdminApi } from "@supabase/supabase-js";

export const useUserStore = defineStore("users", () => {
	const user = ref(null);
	const errorMessage = ref("");
	const loading = ref(false);

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const handleSignup = async (credentials) => {
		const { email, password, username } = credentials;
		if (username.length < 4) {
			return (errorMessage.value = "User length is too short");
		}
		if (!validateEmail(email)) {
			return (errorMessage.value = "Email is invalid");
		}

		if (password.length < 6) {
			console.log("password to small");
			return (errorMessage.value = "Password length is to short");
		}

		errorMessage.value = "";
	};

	const handleLogin = () => {};
	const handleLogout = () => {};
	const getUser = () => {};

	return {
		user,
		errorMessage,
		loading,
		handleLogin,
		handleLogout,
		handleSignup,
		getUser,
	};
});
