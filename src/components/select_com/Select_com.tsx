import React, {ChangeEvent, useState} from 'react';
import {RangeDirectionType, UnitOfTimeType} from "../main_datepicker/Main_datepicker";

type ComSelectPropsType = {
	listOption: Array<string>
	defaultValue: SelectOptionType
}
type SelectOptionType = RangeDirectionType | UnitOfTimeType

export const SelectCom = (props: ComSelectPropsType) => {
	const [selectOption, setSelectOption] = useState<SelectOptionType>(props.defaultValue)
	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		console.log(e)

	}


	return (
		<div>
			<select onChange={onChangeHandler}>
				{
					props.listOption.map(str => {
						return <option key={str} value={str}>{str}</option>
					})
				}
			</select>
		</div>
	);
};