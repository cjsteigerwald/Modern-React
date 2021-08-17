import React, { useState } from "react";
// import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
// import Search from "./components/Search";

// const items = [
// 	{
// 		title: "What is React?",
// 		content: "React is a fron end javascript framework",
// 	},
// 	{
// 		title: "Why use React?",
// 		content: "React is a favorite JS Library among engineers",
// 	},
// 	{
// 		title: "How do you use React?",
// 		content: "You use React by creating components",
// 	},
// ];

const options = [
	{
		label: "The Color Red",
		value: "red",
	},
	{
		label: "The Color Green",
		value: "green",
	},
	{
		label: "A Shade of Blue",
		value: "blue",
	},
];

export default () => {
	const [showDropdown, setDropdown] = useState(true);
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
			<button onClick={() => setDropdown(!showDropdown)}>
				Toggle Dropdown
			</button>
			{showDropdown ? (
				<Dropdown
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			) : null}
		</div>
	);
};
