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
				el.appendChild(svg["path"]("M7.317 11c-5.723 9.083.958 18 .958 18s2.874-.442 6.875-5.2c4-4.758-7.833-12.8-7.833-12.8zm21.342 0c5.723 9.083-.958 18-.958 18s-2.874-.442-6.875-5.2C16.825 19.042 28.659 11 28.659 11z", {["fill"]: "#662113",["d"]: "M7.317 11c-5.723 9.083.958 18 .958 18s2.874-.442 6.875-5.2c4-4.758-7.833-12.8-7.833-12.8zm21.342 0c5.723 9.083-.958 18-.958 18s-2.874-.442-6.875-5.2C16.825 19.042 28.659 11 28.659 11z",}));el.appendChild(svg["path"]("M15.203 31.557c-.123-.229-.317-.384-.531-.496-2.032-2.172-.589-4.717-.589-4.717 0-.703 1.271-2.544 0-2.544l-1.272 1.272c-1.272 1.271-1.272 5.089-1.272 5.089H8.995c-.703 0-1.272.568-1.272 1.272 0 .701.569 1.271 1.272 1.271h1.408l-.282.153c-.618.334-.848 1.105-.514 1.726.334.616 1.106.848 1.724.514l3.357-1.816c.619-.334.846-1.105.515-1.724zm5.596 0c.123-.229.317-.384.53-.496 2.033-2.172.589-4.717.589-4.717 0-.703-1.271-2.544 0-2.544l1.272 1.272c1.273 1.271 1.273 5.089 1.273 5.089h2.544c.704 0 1.271.568 1.271 1.272 0 .701-.566 1.271-1.271 1.271h-1.408l.281.153c.62.334.848 1.105.515 1.726-.336.616-1.105.848-1.726.514l-3.356-1.816c-.619-.334-.847-1.105-.514-1.724z", {["fill"]: "#FFAC33",["d"]: "M15.203 31.557c-.123-.229-.317-.384-.531-.496-2.032-2.172-.589-4.717-.589-4.717 0-.703 1.271-2.544 0-2.544l-1.272 1.272c-1.272 1.271-1.272 5.089-1.272 5.089H8.995c-.703 0-1.272.568-1.272 1.272 0 .701.569 1.271 1.272 1.271h1.408l-.282.153c-.618.334-.848 1.105-.514 1.726.334.616 1.106.848 1.724.514l3.357-1.816c.619-.334.846-1.105.515-1.724zm5.596 0c.123-.229.317-.384.53-.496 2.033-2.172.589-4.717.589-4.717 0-.703-1.271-2.544 0-2.544l1.272 1.272c1.273 1.271 1.273 5.089 1.273 5.089h2.544c.704 0 1.271.568 1.271 1.272 0 .701-.566 1.271-1.271 1.271h-1.408l.281.153c.62.334.848 1.105.515 1.726-.336.616-1.105.848-1.726.514l-3.356-1.816c-.619-.334-.847-1.105-.514-1.724z",}));el.appendChild(svg["path"]("M28.278 11.292c2.891-6.092 0-10.542 0-10.542s-5.781.959-6.744 2.875c-1.219 2.424 6.744 7.667 6.744 7.667z", {["fill"]: "#662113",["d"]: "M28.278 11.292c2.891-6.092 0-10.542 0-10.542s-5.781.959-6.744 2.875c-1.219 2.424 6.744 7.667 6.744 7.667z",}));el.appendChild(svg["path"]("M29.562 12.738c0 10.297-3.152 20.595-11.562 20.595-8.409 0-11.563-10.298-11.563-20.595C6.437 2.44 11.614 2.083 18 2.083c6.387 0 11.562.357 11.562 10.655z", {["fill"]: "#662113",["d"]: "M29.562 12.738c0 10.297-3.152 20.595-11.562 20.595-8.409 0-11.563-10.298-11.563-20.595C6.437 2.44 11.614 2.083 18 2.083c6.387 0 11.562.357 11.562 10.655z",}));el.appendChild(svg["path"]("M27.666 17.738c0 10.297-7.774 14.595-9.666 14.595s-9.666-4.298-9.666-14.595c0-10.298 19.332-10.298 19.332 0z", {["fill"]: "#C1694F",["d"]: "M27.666 17.738c0 10.297-7.774 14.595-9.666 14.595s-9.666-4.298-9.666-14.595c0-10.298 19.332-10.298 19.332 0z",}));el.appendChild(svg["path"]("M7.722 11.292C4.831 5.2 7.722.75 7.722.75s5.782.959 6.746 2.875c1.218 2.424-6.746 7.667-6.746 7.667z", {["fill"]: "#662113",["d"]: "M7.722 11.292C4.831 5.2 7.722.75 7.722.75s5.782.959 6.746 2.875c1.218 2.424-6.746 7.667-6.746 7.667z",}));el.appendChild(svg["path"]("M14.929 4.373C10.702 2.789 7.722.75 7.722.75s-2.076 3.221-.928 7.926c.446 2.137 1.94 4.195 3.904 4.662 2.637.627 7.302-.049 7.302-3.963 0-2.695-1.074-4.252-3.071-5.002zm6.142 0C25.298 2.789 28.277.75 28.277.75s2.076 3.221.928 7.926c-.445 2.137-1.939 4.195-3.902 4.662-2.638.627-7.303-.049-7.303-3.963 0-2.695 1.074-4.252 3.071-5.002z", {["fill"]: "#C1694F",["d"]: "M14.929 4.373C10.702 2.789 7.722.75 7.722.75s-2.076 3.221-.928 7.926c.446 2.137 1.94 4.195 3.904 4.662 2.637.627 7.302-.049 7.302-3.963 0-2.695-1.074-4.252-3.071-5.002zm6.142 0C25.298 2.789 28.277.75 28.277.75s2.076 3.221.928 7.926c-.445 2.137-1.939 4.195-3.902 4.662-2.638.627-7.303-.049-7.303-3.963 0-2.695 1.074-4.252 3.071-5.002z",}));el.appendChild(svg["path"]("M16.083 8.417c0 2.117-1.716 3.833-3.833 3.833s-3.833-1.716-3.833-3.833 1.717-3.833 3.833-3.833c2.117-.001 3.833 1.716 3.833 3.833zm11.5 0c0 2.117-1.716 3.833-3.833 3.833s-3.833-1.716-3.833-3.833 1.716-3.833 3.833-3.833 3.833 1.716 3.833 3.833z", {["fill"]: "#FFD983",["d"]: "M16.083 8.417c0 2.117-1.716 3.833-3.833 3.833s-3.833-1.716-3.833-3.833 1.717-3.833 3.833-3.833c2.117-.001 3.833 1.716 3.833 3.833zm11.5 0c0 2.117-1.716 3.833-3.833 3.833s-3.833-1.716-3.833-3.833 1.716-3.833 3.833-3.833 3.833 1.716 3.833 3.833z",}));el.appendChild(svg["path"]("M14.167 8.417c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.058.858-1.917 1.917-1.917s1.917.858 1.917 1.917zm11.5 0c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.058.858-1.917 1.917-1.917s1.917.858 1.917 1.917z", {["fill"]: "#292F33",["d"]: "M14.167 8.417c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.058.858-1.917 1.917-1.917s1.917.858 1.917 1.917zm11.5 0c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.058.858-1.917 1.917-1.917s1.917.858 1.917 1.917z",}));el.appendChild(svg["path"]("M20.875 12.729c0 2.382-2.875 3.354-2.875 3.354s-2.875-.973-2.875-3.354S18 9.375 18 9.375s2.875.972 2.875 3.354z", {["fill"]: "#FFCC4D",["d"]: "M20.875 12.729c0 2.382-2.875 3.354-2.875 3.354s-2.875-.973-2.875-3.354S18 9.375 18 9.375s2.875.972 2.875 3.354z",}));el.appendChild(svg["path"]("M20.875 12.729c0 2.382-2.875 3.354-2.875 3.354s-2.875-.973-2.875-3.354C16.323 13.927 18 14.167 18 14.167s1.677-.24 2.875-1.438z", {["fill"]: "#F4900C",["d"]: "M20.875 12.729c0 2.382-2.875 3.354-2.875 3.354s-2.875-.973-2.875-3.354C16.323 13.927 18 14.167 18 14.167s1.677-.24 2.875-1.438z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};