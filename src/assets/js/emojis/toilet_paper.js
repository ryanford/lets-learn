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
				el.appendChild(svg["path"]("M7 0h17v24H7z", {["fill"]: "#E1E8ED",["d"]: "M7 0h17v24H7z",}));el.appendChild(svg["path"]("M7 12h17v12H7z", {["fill"]: "#99AAB5",["d"]: "M7 12h17v12H7z",}));el.appendChild(svg["ellipse"](7, 12, 14, 24, {["rx"]: "7",["cy"]: "12",["ry"]: "12",["fill"]: "#CCD6DD",["cx"]: "7",}));el.appendChild(svg["ellipse"](24, 12, 16, 24, {["rx"]: "8",["cy"]: "12",["ry"]: "12",["fill"]: "#E1E8ED",["cx"]: "24",}));el.appendChild(svg["path"]("M32 12v12c0 9 4 12 4 12H18s-4-3-4-12V11l18 1z", {["fill"]: "#E1E8ED",["d"]: "M32 12v12c0 9 4 12 4 12H18s-4-3-4-12V11l18 1z",}));el.appendChild(svg["path"]("M32 12c0-4.924-1.979-9.15-4.807-11H11.322C13.549 3.284 15 7.316 15 12v14c.429 5.683 2.683 8.3 3.383 9H35.05C33.867 33.496 32 30.151 32 24V12z", {["fill"]: "#F5F8FA",["d"]: "M32 12c0-4.924-1.979-9.15-4.807-11H11.322C13.549 3.284 15 7.316 15 12v14c.429 5.683 2.683 8.3 3.383 9H35.05C33.867 33.496 32 30.151 32 24V12z",}));el.appendChild(svg["ellipse"](6, 12, 6, 10, {["rx"]: "3",["cy"]: "12",["ry"]: "5",["fill"]: "#99AAB5",["cx"]: "6",}));el.appendChild(svg["path"]("M3.25 10.01C3.712 8.24 4.768 7 6 7c1.657 0 3 2.239 3 5 0 .616-.076 1.2-.198 1.745-.649-2.088-2.871-3.642-5.552-3.735z", {["fill"]: "#66757F",["d"]: "M3.25 10.01C3.712 8.24 4.768 7 6 7c1.657 0 3 2.239 3 5 0 .616-.076 1.2-.198 1.745-.649-2.088-2.871-3.642-5.552-3.735z",}));el.appendChild(svg["path"]("M16.5 13H15v-1h1.5c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm3.5 0h-1.5c-.275 0-.5-.225-.5-.5s.225-.5.5-.5H32v1zM16.5 25H15v-1h1.5c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm3.5 0h-1.5c-.275 0-.5-.225-.5-.5s.225-.5.5-.5H32v1z", {["fill"]: "#CCD6DD",["d"]: "M16.5 13H15v-1h1.5c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm3.5 0h-1.5c-.275 0-.5-.225-.5-.5s.225-.5.5-.5H32v1zM16.5 25H15v-1h1.5c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5zm3.5 0h-1.5c-.275 0-.5-.225-.5-.5s.225-.5.5-.5H32v1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};