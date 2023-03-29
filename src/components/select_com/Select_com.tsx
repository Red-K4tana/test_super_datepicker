import React from 'react';

type ComSelectPropsType = {
	listOption: Array<string>
}

export const SelectCom = (props: ComSelectPropsType) => {



	return (
		<div>
			<select>
				{
					props.listOption.map(str => {
						return <option key={str}>str</option>
					})
				}
			</select>
		</div>
	);
};