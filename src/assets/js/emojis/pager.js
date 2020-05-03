import { h } from "/assets/js/vendor/hyperapp.js";
import rough from "/assets/js/vendor/rough.js";
import uuid from "/assets/js/vendor/uuid.js";

export default (props = {}) => {
	let proto;
	const new_props = {
		...props,
		key: props.key || uuid(),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "-1 -1 37 37",
		width: (props.size || 1) * 16,
		height: (props.size || 1) * 16,
		oncreate: el => {
			const svg = rough.svg(el, {
				options: props.options || {
					roughness: 0.1,
					strokeWidth: 0.2,
					fillStyle: "solid",
				}
			});

			if (proto) {
				el.parentNode.replaceChild(proto.cloneNode(true), el);
			} else {
				el.appendChild(svg["path"]("M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z", {["fill"]: "#31373D",["d"]: "M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M34 21c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2V9c0-1.104.896-2 2-2h28c1.104 0 2 .896 2 2v12z", {["fill"]: "#C6E5B3",["d"]: "M34 21c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2V9c0-1.104.896-2 2-2h28c1.104 0 2 .896 2 2v12z",}));el.appendChild(svg["path"]("M14 27c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2s.896-2 2-2h8c1.104 0 2 .896 2 2zm14 0c0 1.104-.896 2-2 2h-8c-1.104 0-2-.896-2-2s.896-2 2-2h8c1.104 0 2 .896 2 2z", {["fill"]: "#66757F",["d"]: "M14 27c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2s.896-2 2-2h8c1.104 0 2 .896 2 2zm14 0c0 1.104-.896 2-2 2h-8c-1.104 0-2-.896-2-2s.896-2 2-2h8c1.104 0 2 .896 2 2z",}));el.appendChild(svg["circle"](32, 27, 4, {["cy"]: "27",["r"]: "2",["fill"]: "#DD2E44",["cx"]: "32",}));el.appendChild(svg["path"]("M24.616 16.138c-.291 0-.416-.196-.416-.351 0-.131.048-.202.083-.262l1.332-2.414c.131-.238.297-.345.606-.345.345 0 .684.22.684.761v1.826h.101c.232 0 .416.155.416.393 0 .238-.184.392-.416.392h-.101v.506c0 .315-.125.464-.428.464s-.428-.149-.428-.464v-.506h-1.433zm1.433-2.444h-.012l-.803 1.659h.815v-1.659zm-5.744 1.171c0-.961.372-2.17 1.563-2.17 1.192 0 1.563 1.209 1.563 2.17s-.372 2.171-1.563 2.171c-1.191 0-1.563-1.209-1.563-2.171zm2.206 0c0-.448-.041-1.368-.643-1.368s-.643.92-.643 1.368c0 .419.041 1.368.643 1.368.602.001.643-.949.643-1.368zm-5.781 1.201c-.291 0-.416-.196-.416-.351 0-.131.048-.202.083-.262l1.332-2.414c.131-.238.297-.345.606-.345.345 0 .684.22.684.761v1.826h.101c.232 0 .416.155.416.393 0 .238-.184.392-.416.392h-.101v.506c0 .315-.125.464-.428.464s-.428-.149-.428-.464v-.506H16.73zm1.433-2.444h-.012l-.803 1.659h.815v-1.659zm-5.744 1.315c0-.961.372-2.17 1.563-2.17 1.192 0 1.563 1.209 1.563 2.17s-.372 2.171-1.563 2.171c-1.191-.001-1.563-1.21-1.563-2.171zm2.206 0c0-.448-.041-1.368-.643-1.368s-.643.92-.643 1.368c0 .419.041 1.368.643 1.368s.643-.95.643-1.368zm-5.781 1.201c-.291 0-.416-.196-.416-.351 0-.131.048-.202.083-.262l1.332-2.414c.131-.238.297-.345.606-.345.345 0 .684.22.684.761v1.826h.101c.232 0 .416.155.416.393 0 .238-.184.392-.416.392h-.101v.506c0 .315-.125.464-.428.464s-.428-.149-.428-.464v-.506H8.844zm1.433-2.444h-.012l-.803 1.659h.815v-1.659z", {["d"]: "M24.616 16.138c-.291 0-.416-.196-.416-.351 0-.131.048-.202.083-.262l1.332-2.414c.131-.238.297-.345.606-.345.345 0 .684.22.684.761v1.826h.101c.232 0 .416.155.416.393 0 .238-.184.392-.416.392h-.101v.506c0 .315-.125.464-.428.464s-.428-.149-.428-.464v-.506h-1.433zm1.433-2.444h-.012l-.803 1.659h.815v-1.659zm-5.744 1.171c0-.961.372-2.17 1.563-2.17 1.192 0 1.563 1.209 1.563 2.17s-.372 2.171-1.563 2.171c-1.191 0-1.563-1.209-1.563-2.171zm2.206 0c0-.448-.041-1.368-.643-1.368s-.643.92-.643 1.368c0 .419.041 1.368.643 1.368.602.001.643-.949.643-1.368zm-5.781 1.201c-.291 0-.416-.196-.416-.351 0-.131.048-.202.083-.262l1.332-2.414c.131-.238.297-.345.606-.345.345 0 .684.22.684.761v1.826h.101c.232 0 .416.155.416.393 0 .238-.184.392-.416.392h-.101v.506c0 .315-.125.464-.428.464s-.428-.149-.428-.464v-.506H16.73zm1.433-2.444h-.012l-.803 1.659h.815v-1.659zm-5.744 1.315c0-.961.372-2.17 1.563-2.17 1.192 0 1.563 1.209 1.563 2.17s-.372 2.171-1.563 2.171c-1.191-.001-1.563-1.21-1.563-2.171zm2.206 0c0-.448-.041-1.368-.643-1.368s-.643.92-.643 1.368c0 .419.041 1.368.643 1.368s.643-.95.643-1.368zm-5.781 1.201c-.291 0-.416-.196-.416-.351 0-.131.048-.202.083-.262l1.332-2.414c.131-.238.297-.345.606-.345.345 0 .684.22.684.761v1.826h.101c.232 0 .416.155.416.393 0 .238-.184.392-.416.392h-.101v.506c0 .315-.125.464-.428.464s-.428-.149-.428-.464v-.506H8.844zm1.433-2.444h-.012l-.803 1.659h.815v-1.659z",["fill"]: "#77B255",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};