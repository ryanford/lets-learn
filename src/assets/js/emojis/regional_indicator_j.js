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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M23.102 22.799c0 5.209-3.318 6.573-6.139 6.573-2.14 0-5.705-.837-5.705-3.534 0-.838.713-1.892 1.736-1.892 1.24 0 2.325 1.147 3.721 1.147 1.736 0 1.736-1.613 1.736-2.605V9.156c0-1.55.993-2.418 2.325-2.418 1.334 0 2.326.868 2.326 2.418v13.643z", {["fill"]: "#FFF",["d"]: "M23.102 22.799c0 5.209-3.318 6.573-6.139 6.573-2.14 0-5.705-.837-5.705-3.534 0-.838.713-1.892 1.736-1.892 1.24 0 2.325 1.147 3.721 1.147 1.736 0 1.736-1.613 1.736-2.605V9.156c0-1.55.993-2.418 2.325-2.418 1.334 0 2.326.868 2.326 2.418v13.643z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};