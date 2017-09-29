import axios from "axios";
import API_KEY from "../API_KEY";

getMemes = () => {
	axios
		.get(
			`https://api.pinterest.com/v1/boards/771804523579678878/pins/?access_token=${API_KEY}&fields=id%2Cimage`
		)
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
};
