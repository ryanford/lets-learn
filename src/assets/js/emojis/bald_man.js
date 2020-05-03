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
				el.appendChild(svg["path"]("M29.5 16C28.406 8.311 23.392 4.875 18 4.875S7.594 8.311 6.5 16C5.119 16 4 17.791 4 20c0 2.107 1.021 3.815 2.314 3.97C7.537 30.619 12.299 35 18 35c5.7 0 10.463-4.381 11.685-11.03C30.979 23.815 32 22.107 32 20c0-2.209-1.119-4-2.5-4z", {["fill"]: "#FFDC5D",["d"]: "M29.5 16C28.406 8.311 23.392 4.875 18 4.875S7.594 8.311 6.5 16C5.119 16 4 17.791 4 20c0 2.107 1.021 3.815 2.314 3.97C7.537 30.619 12.299 35 18 35c5.7 0 10.463-4.381 11.685-11.03C30.979 23.815 32 22.107 32 20c0-2.209-1.119-4-2.5-4z",}));el.appendChild(svg["path"]("M18 31c-4.201 0-5.491-1.077-5.707-1.293-.391-.391-.391-1.023 0-1.414.378-.379.984-.39 1.376-.036.08.058 1.1.743 4.331.743 3.355 0 4.326-.739 4.336-.747.39-.389 1.001-.37 1.393.021.391.391.369 1.043-.021 1.434C23.491 29.923 22.201 31 18 31zm1-5h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z", {["fill"]: "#C1694F",["d"]: "M18 31c-4.201 0-5.491-1.077-5.707-1.293-.391-.391-.391-1.023 0-1.414.378-.379.984-.39 1.376-.036.08.058 1.1.743 4.331.743 3.355 0 4.326-.739 4.336-.747.39-.389 1.001-.37 1.393.021.391.391.369 1.043-.021 1.434C23.491 29.923 22.201 31 18 31zm1-5h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z",}));el.appendChild(svg["path"]("M13 21c-.552 0-1-.447-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .553-.448 1-1 1zm10 0c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .553-.447 1-1 1z", {["fill"]: "#662113",["d"]: "M13 21c-.552 0-1-.447-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .553-.448 1-1 1zm10 0c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .553-.447 1-1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};