import React, {useState} from 'react';
import {SelectionBox} from "../selection_box/Selection_box";

export type RangeDirectionType = 'last' | 'next';
export type UnitOfTimeType = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';
export type RangeType = {
	direction: RangeDirectionType
	unitOfTime: UnitOfTimeType
	number: string
};


export const MainDatepicker = () => {
	const [range, setRange] = useState<RangeType>({
		direction: 'last',
		unitOfTime: 'minutes',
		number: '1',
	})

	const setRangeHandler = () => {
		//назначить диапазон с учетом даты
		//скрыть SelectionBox
		//вывести диапазон в RangeDisplay
	}

	return (
		<div>
			<SelectionBox setRangeHandler={setRangeHandler} setRange={setRange} range={range}/>
		</div>
	);
};