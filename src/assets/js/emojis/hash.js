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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M13.785 16.194h-2.667c-1.024 0-1.488-.744-1.488-1.488s.465-1.488 1.488-1.488h3.101l.682-4.992c.155-1.116.62-1.488 1.55-1.488.744 0 1.426.496 1.426 1.24 0 .465 0 .248-.062.744l-.62 4.496h2.976l.683-4.992c.155-1.116.62-1.488 1.55-1.488.744 0 1.427.496 1.427 1.24 0 .465 0 .248-.062.744l-.621 4.496h2.667c1.023 0 1.487.744 1.487 1.488s-.465 1.488-1.487 1.488h-3.101l-.496 3.535h2.666c1.023 0 1.488.744 1.488 1.488s-.465 1.488-1.488 1.488h-3.1l-.683 4.991c-.155 1.117-.62 1.488-1.55 1.488-.745 0-1.427-.496-1.427-1.24 0-.465 0-.248.062-.744l.62-4.495h-2.977l-.682 4.991c-.155 1.117-.62 1.488-1.55 1.488-.744 0-1.426-.496-1.426-1.24 0-.465 0-.248.062-.744l.62-4.495h-2.666c-1.023 0-1.488-.744-1.488-1.488s.465-1.488 1.488-1.488h3.101l.497-3.535zm2.511 3.535h2.946l.496-3.535h-2.946l-.496 3.535z", {["fill"]: "#FFF",["d"]: "M13.785 16.194h-2.667c-1.024 0-1.488-.744-1.488-1.488s.465-1.488 1.488-1.488h3.101l.682-4.992c.155-1.116.62-1.488 1.55-1.488.744 0 1.426.496 1.426 1.24 0 .465 0 .248-.062.744l-.62 4.496h2.976l.683-4.992c.155-1.116.62-1.488 1.55-1.488.744 0 1.427.496 1.427 1.24 0 .465 0 .248-.062.744l-.621 4.496h2.667c1.023 0 1.487.744 1.487 1.488s-.465 1.488-1.487 1.488h-3.101l-.496 3.535h2.666c1.023 0 1.488.744 1.488 1.488s-.465 1.488-1.488 1.488h-3.1l-.683 4.991c-.155 1.117-.62 1.488-1.55 1.488-.745 0-1.427-.496-1.427-1.24 0-.465 0-.248.062-.744l.62-4.495h-2.977l-.682 4.991c-.155 1.117-.62 1.488-1.55 1.488-.744 0-1.426-.496-1.426-1.24 0-.465 0-.248.062-.744l.62-4.495h-2.666c-1.023 0-1.488-.744-1.488-1.488s.465-1.488 1.488-1.488h3.101l.497-3.535zm2.511 3.535h2.946l.496-3.535h-2.946l-.496 3.535z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};