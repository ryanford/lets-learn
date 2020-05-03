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
				el.appendChild(svg["path"]("M2 6C0 6 0 8 0 8v20s0 2 2 2h32c2 0 2-2 2-2V8s0-2-2-2H2z", {["fill"]: "#A7D28B",["d"]: "M2 6C0 6 0 8 0 8v20s0 2 2 2h32c2 0 2-2 2-2V8s0-2-2-2H2z",}));el.appendChild(svg["path"]("M13 6h10v24.062H13z", {["fill"]: "#9AAAB4",["d"]: "M13 6h10v24.062H13z",}));el.appendChild(svg["path"]("M11 20.031c0-2.979-5.493-2.785-5.493-4.584 0-.871.833-1.296 1.799-1.296 1.625 0 1.914 1.044 2.65 1.044.521 0 .772-.328.772-.696 0-.856-1.296-1.502-2.539-1.726v-.825c0-.515-.417-.932-.932-.932s-.932.417-.932.932v.853c-1.354.31-2.521 1.25-2.521 2.781 0 2.862 5.493 2.746 5.493 4.758 0 .695-.754 1.391-1.992 1.391-1.857 0-2.476-1.257-3.229-1.257-.368 0-.696.309-.696.775 0 .741 1.24 1.631 2.947 1.881l-.001.004v.934c0 .514.418.932.933.932s.932-.418.932-.932v-.934c0-.01-.005-.019-.006-.028C9.719 22.819 11 21.82 11 20.031z", {["fill"]: "#67757F",["d"]: "M11 20.031c0-2.979-5.493-2.785-5.493-4.584 0-.871.833-1.296 1.799-1.296 1.625 0 1.914 1.044 2.65 1.044.521 0 .772-.328.772-.696 0-.856-1.296-1.502-2.539-1.726v-.825c0-.515-.417-.932-.932-.932s-.932.417-.932.932v.853c-1.354.31-2.521 1.25-2.521 2.781 0 2.862 5.493 2.746 5.493 4.758 0 .695-.754 1.391-1.992 1.391-1.857 0-2.476-1.257-3.229-1.257-.368 0-.696.309-.696.775 0 .741 1.24 1.631 2.947 1.881l-.001.004v.934c0 .514.418.932.933.932s.932-.418.932-.932v-.934c0-.01-.005-.019-.006-.028C9.719 22.819 11 21.82 11 20.031z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};