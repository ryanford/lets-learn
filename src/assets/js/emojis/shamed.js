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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18", {["fill"]: "#FFCC4D",["d"]: "M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18",}));el.appendChild(svg["path"]("M28.457 17.797c-.06-.135-1.499-3.297-4.457-3.297-2.957 0-4.397 3.162-4.457 3.297-.092.207-.032.449.145.591.175.142.426.147.61.014.012-.009 1.262-.902 3.702-.902 2.426 0 3.674.881 3.702.901.088.066.194.099.298.099.11 0 .221-.037.312-.109.177-.142.238-.386.145-.594zm-11 0c-.06-.135-1.499-3.297-4.457-3.297-2.957 0-4.397 3.162-4.457 3.297-.092.207-.032.449.144.591.176.142.427.147.61.014.013-.009 1.262-.902 3.703-.902 2.426 0 3.674.881 3.702.901.089.066.194.099.298.099.11 0 .221-.037.312-.109.178-.142.237-.386.145-.594zM13 28s1-4 5-4 5 4 5 4-1-1-5-1-5 1-5 1z", {["fill"]: "#664500",["d"]: "M28.457 17.797c-.06-.135-1.499-3.297-4.457-3.297-2.957 0-4.397 3.162-4.457 3.297-.092.207-.032.449.145.591.175.142.426.147.61.014.012-.009 1.262-.902 3.702-.902 2.426 0 3.674.881 3.702.901.088.066.194.099.298.099.11 0 .221-.037.312-.109.177-.142.238-.386.145-.594zm-11 0c-.06-.135-1.499-3.297-4.457-3.297-2.957 0-4.397 3.162-4.457 3.297-.092.207-.032.449.144.591.176.142.427.147.61.014.013-.009 1.262-.902 3.703-.902 2.426 0 3.674.881 3.702.901.089.066.194.099.298.099.11 0 .221-.037.312-.109.178-.142.237-.386.145-.594zM13 28s1-4 5-4 5 4 5 4-1-1-5-1-5 1-5 1z",}));el.appendChild(svg["path"]("M11 11c0 2.762-2.238 5-5 5-2.761 0-5-2.238-5-5S5 1 6 1s5 7.238 5 10z", {["fill"]: "#5DADEC",["d"]: "M11 11c0 2.762-2.238 5-5 5-2.761 0-5-2.238-5-5S5 1 6 1s5 7.238 5 10z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};