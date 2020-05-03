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
				el.appendChild(svg["path"]("M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h6V5H4zm28 0h-6v26h6c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#D52B1E",["d"]: "M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h6V5H4zm28 0h-6v26h6c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M10 5h16v26H10z", {["fill"]: "#EEE",["d"]: "M10 5h16v26H10z",}));el.appendChild(svg["path"]("M18.615 22.113c1.198.139 2.272.264 3.469.401l-.305-1.002c-.049-.176.021-.368.159-.476l3.479-2.834-.72-.339c-.317-.113-.23-.292-.115-.722l.531-1.936-2.021.427c-.197.03-.328-.095-.358-.215l-.261-.911-1.598 1.794c-.227.288-.687.288-.544-.376l.683-3.634-.917.475c-.257.144-.514.168-.657-.089l-1.265-2.366v.059-.059l-1.265 2.366c-.144.257-.401.233-.658.089l-.916-.475.683 3.634c.144.664-.317.664-.544.376l-1.598-1.793-.26.911c-.03.12-.162.245-.359.215l-2.021-.427.531 1.936c.113.43.201.609-.116.722l-.72.339 3.479 2.834c.138.107.208.3.158.476l-.305 1.002 3.47-.401c.106 0 .176.059.175.181l-.214 3.704h.956l-.213-3.704c.002-.123.071-.182.177-.182z", {["fill"]: "#D52B1E",["d"]: "M18.615 22.113c1.198.139 2.272.264 3.469.401l-.305-1.002c-.049-.176.021-.368.159-.476l3.479-2.834-.72-.339c-.317-.113-.23-.292-.115-.722l.531-1.936-2.021.427c-.197.03-.328-.095-.358-.215l-.261-.911-1.598 1.794c-.227.288-.687.288-.544-.376l.683-3.634-.917.475c-.257.144-.514.168-.657-.089l-1.265-2.366v.059-.059l-1.265 2.366c-.144.257-.401.233-.658.089l-.916-.475.683 3.634c.144.664-.317.664-.544.376l-1.598-1.793-.26.911c-.03.12-.162.245-.359.215l-2.021-.427.531 1.936c.113.43.201.609-.116.722l-.72.339 3.479 2.834c.138.107.208.3.158.476l-.305 1.002 3.47-.401c.106 0 .176.059.175.181l-.214 3.704h.956l-.213-3.704c.002-.123.071-.182.177-.182z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};