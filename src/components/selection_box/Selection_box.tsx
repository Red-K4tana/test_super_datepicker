import React from 'react';
import {QuickSelect} from "../quick_select/Quick_select";
import {RangeType} from "../main_datepicker/Main_datepicker";
import style from './Selection_box.module.css';

type SelectionBoxPropsType = {
	setRangeHandler: () => void
	setRange: (range: RangeType) => void
	range: RangeType
}

export const SelectionBox = (props: SelectionBoxPropsType) => {


	return (
		<div className={style.selectionBox}>
			<QuickSelect setRangeHandler={props.setRangeHandler} setRange={props.setRange} range={props.range}/>
		</div>
	);
};