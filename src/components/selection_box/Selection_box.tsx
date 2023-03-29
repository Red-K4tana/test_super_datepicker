import React from 'react';
import {QuickSelect} from "../quick_select/Quick_select";
import {RangeType} from "../main_datepicker/Main_datepicker";


type SelectionBoxPropsType = {
	setRangeHandler: () => void
	setRange: (range: RangeType) => void
	range: RangeType
}

export const SelectionBox = (props: SelectionBoxPropsType) => {


	return (
		<div>
			<QuickSelect setRangeHandler={props.setRangeHandler} setRange={props.setRange} range={props.range}/>
		</div>
	);
};