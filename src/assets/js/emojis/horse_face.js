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
				el.appendChild(svg["path"]("M23.283 23.275s1.374 1.635 2.733 10.047c.143.883.201 1.775.217 2.678H36V7.448C31.613 3.975 25.601 3.259 18.322 5.69c0 0-5.408-3-6.147-3.739-.719-.72-1.857-1.556-1.235.35.364 1.112.764 2.373 2.358 4.862-3.436 2.036-4.513 4.68-8.558 13.341C1.652 27.12.08 29.269.937 31.797c1.13 3.337 5.316 5.595 8.844 3.021 1.919-1.4 2.246-3.913 6.225-6.223 3.653-.065 7.277-1.604 7.277-5.32z", {["fill"]: "#C1694F",["d"]: "M23.283 23.275s1.374 1.635 2.733 10.047c.143.883.201 1.775.217 2.678H36V7.448C31.613 3.975 25.601 3.259 18.322 5.69c0 0-5.408-3-6.147-3.739-.719-.72-1.857-1.556-1.235.35.364 1.112.764 2.373 2.358 4.862-3.436 2.036-4.513 4.68-8.558 13.341C1.652 27.12.08 29.269.937 31.797c1.13 3.337 5.316 5.595 8.844 3.021 1.919-1.4 2.246-3.913 6.225-6.223 3.653-.065 7.277-1.604 7.277-5.32z",}));el.appendChild(svg["path"]("M36 6.012C27.665.301 14.354 1.473 15.909 6.19 25.51 4.328 31.77 7.731 36 13.358V6.012z", {["fill"]: "#292F33",["d"]: "M36 6.012C27.665.301 14.354 1.473 15.909 6.19 25.51 4.328 31.77 7.731 36 13.358V6.012z",}));el.appendChild(svg["path"]("M19.663 5.763c-2.878.233-7.157 1.595-9.296 3.967 0 0-.129-5.147 3.566-5.614 6.172-.779 5.809.363 5.809.363l-.079 1.284z", {["fill"]: "#292F33",["d"]: "M19.663 5.763c-2.878.233-7.157 1.595-9.296 3.967 0 0-.129-5.147 3.566-5.614 6.172-.779 5.809.363 5.809.363l-.079 1.284z",}));el.appendChild(svg["path"]("M16.357 1.056c.558 1.155 4.006 1.79 5.056 6.029 1.051 4.24-3.134 2.951-4.356.855-1.361-2.334-1.828-4.162-1.867-5.679-.021-.801.039-3.538 1.167-1.205z", {["fill"]: "#C1694F",["d"]: "M16.357 1.056c.558 1.155 4.006 1.79 5.056 6.029 1.051 4.24-3.134 2.951-4.356.855-1.361-2.334-1.828-4.162-1.867-5.679-.021-.801.039-3.538 1.167-1.205z",}));el.appendChild(svg["path"]("M16.596 2.838c1.103.968 2.448 2.472 2.65 3.955.202 1.483-1.125.988-1.736-.372-.612-1.359-.753-2.779-1.134-3.233-.38-.454.22-.35.22-.35z", {["fill"]: "#662113",["d"]: "M16.596 2.838c1.103.968 2.448 2.472 2.65 3.955.202 1.483-1.125.988-1.736-.372-.612-1.359-.753-2.779-1.134-3.233-.38-.454.22-.35.22-.35z",}));el.appendChild(svg["path"]("M16.94 15.525c0 .687-.557 1.244-1.245 1.244-.687 0-1.244-.557-1.244-1.244 0-.688.557-1.245 1.244-1.245.688.001 1.245.558 1.245 1.245z", {["fill"]: "#292F33",["d"]: "M16.94 15.525c0 .687-.557 1.244-1.245 1.244-.687 0-1.244-.557-1.244-1.244 0-.688.557-1.245 1.244-1.245.688.001 1.245.558 1.245 1.245z",}));el.appendChild(svg["path"]("M4.222 29.917c0 .881-.532 1.594-1.187 1.594s-1.187-.713-1.187-1.594c0-.882.532-1.596 1.187-1.596s1.187.714 1.187 1.596z", {["fill"]: "#662113",["d"]: "M4.222 29.917c0 .881-.532 1.594-1.187 1.594s-1.187-.713-1.187-1.594c0-.882.532-1.596 1.187-1.596s1.187.714 1.187 1.596z",}));el.appendChild(svg["path"]("M10.354 9.924c-.033-.017-.075-.014-.111-.024-1.543 2.033-2.92 5.102-5.49 10.604-1.356 2.903-2.42 4.946-3.116 6.538 1.628.226 3.285-1.442 3.945-3.271.673-1.866 3.215-5.652 4.927-7.778 1.712-2.127 1.561-5.144-.155-6.069z", {["fill"]: "#D99E82",["d"]: "M10.354 9.924c-.033-.017-.075-.014-.111-.024-1.543 2.033-2.92 5.102-5.49 10.604-1.356 2.903-2.42 4.946-3.116 6.538 1.628.226 3.285-1.442 3.945-3.271.673-1.866 3.215-5.652 4.927-7.778 1.712-2.127 1.561-5.144-.155-6.069z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};