import React, {useState} from 'react';
import {SelectionBox} from "../selection_box/Selection_box";

export type RangeDirectionType = 'last' | 'next';
export type UnitOfTimeType = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';



export const MainDatepicker = () => {
	const [rangeDirection, setRangeDirection] = useState<RangeDirectionType>('last')
	const [unitOfTime, setUnitOfTime] = useState<UnitOfTimeType>('minutes')

	const setRangeHandler = () => {
		//назначить диапазон с учетом даты
		//скрыть SelectionBox
		//вывести диапазон в RangeDisplay
	}

	return (
		<div>
			<SelectionBox />
		</div>
	);
};