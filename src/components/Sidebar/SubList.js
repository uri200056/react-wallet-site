import React, { useState } from "react";
import List from "./SubSubList";

function SubList({ items, setCounter2, setCounter3 }) {
	const [isOpen, setisOpen] = useState(
		Array.apply(null, Array(items.length)).map(function (x, i) {
			return true;
		}),
	);

	const icon = { width: "20px", height: "20px" };
	const title = { fontSize: "12px", color: "#4C566C" };
	const desc = { fontSize: "12px", color: "#A7ABB6" };

	return (
		<>
			{items.map((item, idx) => (
				<>
					<div
						className="d-flex justify-content-between align-items-center pl-4 pt-2 pr-4 pb-2"
						style={{ cursor: "pointer" }}
						onClick={() => {
							setisOpen(
								isOpen.map((item, i) =>
									i === idx ? !item : item,
								),
							);
							setCounter2(idx);
						}}
					>
						<div>
							{item.icon ? (
								<img style={icon} src={item.icon} alt="" />
							) : (
								<div style={icon}></div>
							)}
							<span className="ml-3" style={title}>
								{item.title}
							</span>
							<span className="ml-3" style={desc}>
								{item.description}
							</span>
						</div>

						{item.items && (
							<i
								style={
									isOpen[idx]
										? {
												transform: "rotate(180deg)",
												color: "#526DAA",
										  }
										: {
												color: "#526DAA",
										  }
								}
								class="fas fa-caret-down"
							></i>
						)}
					</div>

					{isOpen[idx] && (
						<List
							items={item.items}
							idx={idx}
							length={items.length}
							setCounter3={setCounter3}
						/>
					)}
				</>
			))}
		</>
	);
}

export default SubList;
