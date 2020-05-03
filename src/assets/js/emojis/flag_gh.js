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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v5h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#CC212D",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v5h36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M15.423 22h5.185l-2.592-1.884zm3.587-4.941h3.215l-2.601 1.889.991 3.052H36v-8H18.016zm-2.602 1.889l-2.601-1.889h3.215L18.016 14H0v8h15.416z", {["fill"]: "#FBD116",["d"]: "M15.423 22h5.185l-2.592-1.884zm3.587-4.941h3.215l-2.601 1.889.991 3.052H36v-8H18.016zm-2.602 1.889l-2.601-1.889h3.215L18.016 14H0v8h15.416z",}));el.appendChild(svg["path"]("M20.617 22.006L20.608 22h-5.186l-.009.006.003-.006H0v5c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-5H20.615l.002.006z", {["fill"]: "#288541",["d"]: "M20.617 22.006L20.608 22h-5.186l-.009.006.003-.006H0v5c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-5H20.615l.002.006z",}));el.appendChild(svg["path"]("M13.807 17.059l2.601 1.889L15.416 22l-.002.006.009-.006 2.593-1.884L20.608 22l.009.006-.002-.006-.991-3.052 2.601-1.889H19.01L18.016 14l-.994 3.059z", {["d"]: "M13.807 17.059l2.601 1.889L15.416 22l-.002.006.009-.006 2.593-1.884L20.608 22l.009.006-.002-.006-.991-3.052 2.601-1.889H19.01L18.016 14l-.994 3.059z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};