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
				el.appendChild(svg["path"]("M1.24 15.018c.24.239 1.438.957 1.677 1.675.24.717.72 5.307 2.158 6.504 1.483 1.232 7.077.773 8.148.24 2.397-1.195 2.691-5.055 3.115-6.745.239-.957 1.677-.957 1.677-.957s1.438 0 1.678.956c.424 1.691.72 5.562 3.115 6.755 1.072.535 6.666.994 8.151-.238 1.436-1.197 1.915-5.799 2.155-6.517.238-.717 1.438-1.435 1.677-1.674.241-.239.241-1.196 0-1.436-.479-.478-6.134-.904-12.223-.239-1.215.133-1.677.478-4.554.478-2.875 0-3.339-.346-4.553-.478-6.085-.664-11.741-.238-12.221.24-.239.239-.239 1.197 0 1.436z", {["fill-rule"]: "evenodd",["clip-rule"]: "evenodd",["fill"]: "#31373D",["d"]: "M1.24 15.018c.24.239 1.438.957 1.677 1.675.24.717.72 5.307 2.158 6.504 1.483 1.232 7.077.773 8.148.24 2.397-1.195 2.691-5.055 3.115-6.745.239-.957 1.677-.957 1.677-.957s1.438 0 1.678.956c.424 1.691.72 5.562 3.115 6.755 1.072.535 6.666.994 8.151-.238 1.436-1.197 1.915-5.799 2.155-6.517.238-.717 1.438-1.435 1.677-1.674.241-.239.241-1.196 0-1.436-.479-.478-6.134-.904-12.223-.239-1.215.133-1.677.478-4.554.478-2.875 0-3.339-.346-4.553-.478-6.085-.664-11.741-.238-12.221.24-.239.239-.239 1.197 0 1.436z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};