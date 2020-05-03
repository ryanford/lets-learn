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
				el.appendChild(svg["path"]("M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z", {["fill"]: "#EEE",["d"]: "M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M36 18V9c0-2.209-1.791-4-4-4H4C1.791 5 0 6.791 0 9v9h36z", {["fill"]: "#ED2939",["d"]: "M36 18V9c0-2.209-1.791-4-4-4H4C1.791 5 0 6.791 0 9v9h36z",}));el.appendChild(svg["path"]("M6 11.5c0-2.585 1.624-4.748 3.81-5.336C9.389 6.061 8.952 6 8.5 6 5.462 6 3 8.462 3 11.5S5.462 17 8.5 17c.452 0 .889-.06 1.31-.164C7.624 16.248 6 14.085 6 11.5z", {["fill"]: "#FFF",["d"]: "M6 11.5c0-2.585 1.624-4.748 3.81-5.336C9.389 6.061 8.952 6 8.5 6 5.462 6 3 8.462 3 11.5S5.462 17 8.5 17c.452 0 .889-.06 1.31-.164C7.624 16.248 6 14.085 6 11.5z",}));el.appendChild(svg["path"]("M12 7l.225.691h.726l-.588.427.225.691L12 8.382l-.588.427.225-.691-.588-.427h.726zm-2 7l.225.691h.726l-.588.427.225.691-.588-.427-.588.427.225-.691-.588-.427h.726zm4 0l.225.691h.726l-.588.427.225.691-.588-.427-.588.427.225-.691-.588-.427h.726zm-5-4l.225.691h.726l-.588.427.225.691L9 11.382l-.588.427.225-.691-.588-.427h.726zm6 0l.225.691h.726l-.588.427.225.691-.588-.427-.588.427.225-.691-.588-.427h.726z", {["d"]: "M12 7l.225.691h.726l-.588.427.225.691L12 8.382l-.588.427.225-.691-.588-.427h.726zm-2 7l.225.691h.726l-.588.427.225.691-.588-.427-.588.427.225-.691-.588-.427h.726zm4 0l.225.691h.726l-.588.427.225.691-.588-.427-.588.427.225-.691-.588-.427h.726zm-5-4l.225.691h.726l-.588.427.225.691L9 11.382l-.588.427.225-.691-.588-.427h.726zm6 0l.225.691h.726l-.588.427.225.691-.588-.427-.588.427.225-.691-.588-.427h.726z",["fill"]: "#EEE",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};