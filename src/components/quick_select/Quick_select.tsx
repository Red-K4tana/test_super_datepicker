import React from 'react';
import {SelectCom} from "../select_com/Select_com";
import {InputNumCom} from "../input_num_com/InputNumCom";
import {Button} from "../Button/Button";




//селектор выбора диапазона
export const QuickSelect = () => {
	const rangeDirection: Array<string> = ['last', 'next']
	const unitOfTime: Array<string> = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years']

	return (
		<div>
			<SelectCom list={rangeDirection}/>
			<InputNumCom />
			<SelectCom list={unitOfTime}/>
			<Button name={'Apply'} callback={} />
		</div>
	);
};