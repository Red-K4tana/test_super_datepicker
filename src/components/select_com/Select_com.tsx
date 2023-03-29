import React from 'react';

type ComSelectPropsType = {
	list: Array<string>
}

export const SelectCom = (props: ComSelectPropsType) => {



	return (
		<div>
			<select>
				{
					props.list.map(str => {
						return <option>str</option>
					})
				}
			</select>
		</div>
	);
};