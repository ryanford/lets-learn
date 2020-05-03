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
				el.appendChild(svg["path"]("M19.78 21.345l-6.341-6.342-.389 4.38 2.35 2.351z", {["d"]: "M19.78 21.345l-6.341-6.342-.389 4.38 2.35 2.351z",["fill"]: "#66757F",}));el.appendChild(svg["path"]("M15.4 22.233c-.132 0-.259-.053-.354-.146l-2.351-2.351c-.104-.104-.158-.25-.145-.397l.389-4.38c.017-.193.145-.359.327-.425.182-.067.388-.021.524.116l6.341 6.342c.138.138.183.342.116.524s-.232.31-.426.327l-4.379.389-.042.001zm-1.832-3.039l2.021 2.021 3.081-.273-4.828-4.828-.274 3.08z", {["d"]: "M15.4 22.233c-.132 0-.259-.053-.354-.146l-2.351-2.351c-.104-.104-.158-.25-.145-.397l.389-4.38c.017-.193.145-.359.327-.425.182-.067.388-.021.524.116l6.341 6.342c.138.138.183.342.116.524s-.232.31-.426.327l-4.379.389-.042.001zm-1.832-3.039l2.021 2.021 3.081-.273-4.828-4.828-.274 3.08z",["fill"]: "#66757F",}));el.appendChild(svg["path"]("M31 32h-3c0-3.314-2.63-6-5.875-6-3.244 0-5.875 2.686-5.875 6H8.73c0-1.104-.895-2-2-2-1.104 0-2 .896-2 2-1.104 0-2 .896-2 2s.896 2 2 2H31c1.104 0 2-.896 2-2s-.896-2-2-2z", {["fill"]: "#8899A6",["d"]: "M31 32h-3c0-3.314-2.63-6-5.875-6-3.244 0-5.875 2.686-5.875 6H8.73c0-1.104-.895-2-2-2-1.104 0-2 .896-2 2-1.104 0-2 .896-2 2s.896 2 2 2H31c1.104 0 2-.896 2-2s-.896-2-2-2z",}));el.appendChild(svg["path"]("M20 10v4c3.866 0 7 3.134 7 7s-3.134 7-7 7h-8.485c2.018 2.443 5.069 4 8.485 4 6.075 0 11-4.925 11-11s-4.925-11-11-11z", {["fill"]: "#8899A6",["d"]: "M20 10v4c3.866 0 7 3.134 7 7s-3.134 7-7 7h-8.485c2.018 2.443 5.069 4 8.485 4 6.075 0 11-4.925 11-11s-4.925-11-11-11z",}));el.appendChild(svg["path"]("M16.414 30.414c-.781.781-2.047.781-2.828 0l-9.899-9.9c-.781-.781-.781-2.047 0-2.828.781-.781 2.047-.781 2.829 0l9.899 9.9c.78.781.78 2.047-.001 2.828zm-7.225-1.786c.547-.077 1.052.304 1.129.851.077.547-.305 1.053-.851 1.129l-5.942.834c-.547.077-1.052-.305-1.129-.851-.077-.547.305-1.053.852-1.13l5.941-.833z", {["fill"]: "#67757F",["d"]: "M16.414 30.414c-.781.781-2.047.781-2.828 0l-9.899-9.9c-.781-.781-.781-2.047 0-2.828.781-.781 2.047-.781 2.829 0l9.899 9.9c.78.781.78 2.047-.001 2.828zm-7.225-1.786c.547-.077 1.052.304 1.129.851.077.547-.305 1.053-.851 1.129l-5.942.834c-.547.077-1.052-.305-1.129-.851-.077-.547.305-1.053.852-1.13l5.941-.833z",}));el.appendChild(svg["path"]("M27.341 2.98l4.461 4.461-3.806 3.807-4.461-4.461z", {["fill"]: "#66757F",["d"]: "M27.341 2.98l4.461 4.461-3.806 3.807-4.461-4.461z",}));el.appendChild(svg["path"]("M34.037 7.083c-.827.827-2.17.827-2.997 0l-3.339-3.34c-.827-.826-.827-2.169 0-2.996.827-.826 2.17-.826 2.995 0l3.342 3.34c.826.827.826 2.168-.001 2.996zm-14.56 15.026l-6.802-6.803c-.389-.389-.389-1.025 0-1.414l9.858-9.858c.389-.389 1.025-.389 1.414 0l6.801 6.803c.389.389.389 1.025 0 1.414l-9.858 9.858c-.388.389-1.024.389-1.413 0z", {["fill"]: "#AAB8C2",["d"]: "M34.037 7.083c-.827.827-2.17.827-2.997 0l-3.339-3.34c-.827-.826-.827-2.169 0-2.996.827-.826 2.17-.826 2.995 0l3.342 3.34c.826.827.826 2.168-.001 2.996zm-14.56 15.026l-6.802-6.803c-.389-.389-.389-1.025 0-1.414l9.858-9.858c.389-.389 1.025-.389 1.414 0l6.801 6.803c.389.389.389 1.025 0 1.414l-9.858 9.858c-.388.389-1.024.389-1.413 0z",}));el.appendChild(svg["path"]("M13.766 12.8l1.638-1.637 8.216 8.216-1.638 1.637z", {["fill"]: "#E1E8ED",["d"]: "M13.766 12.8l1.638-1.637 8.216 8.216-1.638 1.637z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};