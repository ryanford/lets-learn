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
				el.appendChild(svg["ellipse"](21.249, 5.018, 1.888, 3.13, {["rx"]: ".944",["fill"]: "#2B7BB9",["cy"]: "5.018",["ry"]: "1.565",["cx"]: "21.249",["transform"]: "rotate(-87.495 21.25 5.018)",}));el.appendChild(svg["path"]("M29.831 27.74s3.523 1.385 5.185.088c.125-1.17-3.311-2.035-3.311-2.035l-1.874 1.947zM7.527 25.549S2.271 33.375.77 32.031c0 0-.425-1.397 1.23-4.218 1.656-2.822 5.527-2.264 5.527-2.264z", {["fill"]: "#292F33",["d"]: "M29.831 27.74s3.523 1.385 5.185.088c.125-1.17-3.311-2.035-3.311-2.035l-1.874 1.947zM7.527 25.549S2.271 33.375.77 32.031c0 0-.425-1.397 1.23-4.218 1.656-2.822 5.527-2.264 5.527-2.264z",}));el.appendChild(svg["path"]("M19.766 4.82s-8.537.43-13.735 16.348c7.494 0 16.785.555 16.785.555s7.799 3.982 8.889 4.469c1.089.487 3.311 1.637 3.311 1.637s1.089-5.531.305-9.69S30.79 4.997 19.766 4.82z", {["fill"]: "#1C6399",["d"]: "M19.766 4.82s-8.537.43-13.735 16.348c7.494 0 16.785.555 16.785.555s7.799 3.982 8.889 4.469c1.089.487 3.311 1.637 3.311 1.637s1.089-5.531.305-9.69S30.79 4.997 19.766 4.82z",}));el.appendChild(svg["path"]("M3.354 25.167C1.521 28.209.138 30.988.77 32.031c0 0-.203-.761.775-1.633.892-.795 2.805-1.522 6.461-1.522 5.534 0 13.006 4.498 16.119 5.562 2.375.812 2.875.188 4.188-1.25 1.4-1.534 3.716-6.904 3.716-6.904s-7.47-4.107-11.871-5.726-5.358-1.427-6.752-1.401c-3.056.057-5.314.671-7.375 2.011 0 0-1.494 2.036-2.677 3.999z", {["fill"]: "#1C6399",["d"]: "M3.354 25.167C1.521 28.209.138 30.988.77 32.031c0 0-.203-.761.775-1.633.892-.795 2.805-1.522 6.461-1.522 5.534 0 13.006 4.498 16.119 5.562 2.375.812 2.875.188 4.188-1.25 1.4-1.534 3.716-6.904 3.716-6.904s-7.47-4.107-11.871-5.726-5.358-1.427-6.752-1.401c-3.056.057-5.314.671-7.375 2.011 0 0-1.494 2.036-2.677 3.999z",}));el.appendChild(svg["path"]("M30.588 11.339c-.61-3.443-4.011-5.076-4.011-5.076-1.895-.883-4.158-1.448-6.864-1.491 0 0-12.192-.105-13.681 16.395 0 0 2.541-1.115 7.92-.793 7.299.438 14.414 4.117 15.986 4.812.83-2.779 1.367-9.798.65-13.847z", {["fill"]: "#50A5E6",["d"]: "M30.588 11.339c-.61-3.443-4.011-5.076-4.011-5.076-1.895-.883-4.158-1.448-6.864-1.491 0 0-12.192-.105-13.681 16.395 0 0 2.541-1.115 7.92-.793 7.299.438 14.414 4.117 15.986 4.812.83-2.779 1.367-9.798.65-13.847z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};