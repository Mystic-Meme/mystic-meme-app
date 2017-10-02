import axios from "axios";
import API_KEY from "../API_KEY";

export default function getMemes() {
	return new Promise((resolve, reject) => {
		axios
			.get(
				`https://api.pinterest.com/v1/boards/771804523579678878/pins/?access_token=${API_KEY}&fields=id%2Cimage`
			)
			.then(res => {
				const randomNo = Math.floor(Math.random() * 24);
				const url = res.data.data[randomNo].image.original.url;
				console.log(url);
				resolve(url);
			});
	});
}
