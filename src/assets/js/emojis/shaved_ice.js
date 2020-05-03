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
				el.appendChild(svg["path"]("M16.769 22H3.806s2.248 7.146 5.784 10.584c2.408 2.34 6.458 2.521 7.899 2.521 2.88 0 6.55-.192 8.958-2.534C30.645 28.493 32.612 22 32.612 22H16.769z", {["fill"]: "#55ACEE",["d"]: "M16.769 22H3.806s2.248 7.146 5.784 10.584c2.408 2.34 6.458 2.521 7.899 2.521 2.88 0 6.55-.192 8.958-2.534C30.645 28.493 32.612 22 32.612 22H16.769z",}));el.appendChild(svg["path"]("M31.091 25.783c.623-1.304 1.048-2.413 1.287-3.088-.135-.24-.336-.472-.588-.695H4.628c-.251.223-.452.454-.587.694.237.672.652 1.776 1.213 3.041 2.087 1.507 6.422 2.715 12.956 2.715 6.462 0 10.768-1.183 12.881-2.667z", {["fill"]: "#3B88C3",["d"]: "M31.091 25.783c.623-1.304 1.048-2.413 1.287-3.088-.135-.24-.336-.472-.588-.695H4.628c-.251.223-.452.454-.587.694.237.672.652 1.776 1.213 3.041 2.087 1.507 6.422 2.715 12.956 2.715 6.462 0 10.768-1.183 12.881-2.667z",}));el.appendChild(svg["path"]("M2 17v4.453c0 2.318 7.251 4.198 16 4.198 8.751 0 16-1.88 16-4.198V17H2z", {["fill"]: "#55ACEE",["d"]: "M2 17v4.453c0 2.318 7.251 4.198 16 4.198 8.751 0 16-1.88 16-4.198V17H2z",}));el.appendChild(svg["path"]("M3.857 19.283c.901.331 6.693 2.383 13.999 2.383 8.226 0 14.254-1.788 15.634-2.779 1.38-.993 1.328-9.595-4.955-12.91C23.17 3.146 23.02.366 17.907.366 10.243.367-3.296 16.652 3.857 19.283z", {["fill"]: "#F9D2DC",["d"]: "M3.857 19.283c.901.331 6.693 2.383 13.999 2.383 8.226 0 14.254-1.788 15.634-2.779 1.38-.993 1.328-9.595-4.955-12.91C23.17 3.146 23.02.366 17.907.366 10.243.367-3.296 16.652 3.857 19.283z",}));el.appendChild(svg["path"]("M11.848 11.769c2.91 3.9 9.483 1.756 12.293-.975 2.289-2.226 5.179-1.633 8.452-.784-.892-1.583-2.2-3.041-4.069-4.027C23.161 3.154 23.011.375 17.9.375 13.851.375 8.163 4.923 4.754 9.6c1.894-.617 4.802-.902 7.094 2.169z", {["fill"]: "#F98097",["d"]: "M11.848 11.769c2.91 3.9 9.483 1.756 12.293-.975 2.289-2.226 5.179-1.633 8.452-.784-.892-1.583-2.2-3.041-4.069-4.027C23.161 3.154 23.011.375 17.9.375 13.851.375 8.163 4.923 4.754 9.6c1.894-.617 4.802-.902 7.094 2.169z",}));el.appendChild(svg["circle"](12, 7, 2, {["cy"]: "7",["r"]: "1",["fill"]: "#EA596E",["cx"]: "12",}));el.appendChild(svg["circle"](18, 10, 2, {["cy"]: "10",["r"]: "1",["fill"]: "#EA596E",["cx"]: "18",}));el.appendChild(svg["circle"](22, 5, 2, {["cy"]: "5",["r"]: "1",["fill"]: "#EA596E",["cx"]: "22",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};