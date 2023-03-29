import React from 'react';
import {SelectCom} from "../select_com/Select_com";
import {InputNumCom} from "../input_num_com/InputNumCom";
import {Button} from "../Button/Button";
import {RangeType} from "../main_datepicker/Main_datepicker";


type QuickSelectPropsType = {
	setRangeHandler: () => void
	setRange: (range: RangeType) => void
	range: RangeType
}

//селектор выбора диапазона
export const QuickSelect = (props: QuickSelectPropsType) => {
	const rangeDirection: Array<string> = ['last', 'next']
	const unitOfTime: Array<string> = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years']

	return (
		<div>
			<SelectCom listOption={rangeDirection} defaultValue={props.range.direction}/>
			<InputNumCom />
			<SelectCom listOption={unitOfTime} defaultValue={props.range.unitOfTime}/>
			<Button name={'Apply'} callback={props.setRangeHandler} />
		</div>
	);
};