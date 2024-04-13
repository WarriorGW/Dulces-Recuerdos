import React from "react";

function LoadingTable(props) {
	const { numRows, numCells } = props;

	const generateCells = () => {
		const cells = [];
		for (let i = 0; i < numCells; i++) {
			cells.push(
				<td key={i}>
					<p className="placeholder col-10"></p>
				</td>
			);
		}
		return cells;
	};

	const generateRows = () => {
		const rows = [];
		for (let i = 0; i < numRows; i++) {
			rows.push(
				<tr key={i} className="placeholder-glow">
					{generateCells()}
				</tr>
			);
		}
		return rows;
	};
	return generateRows();
}

export default LoadingTable;
