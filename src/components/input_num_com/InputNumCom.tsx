import React, {ChangeEvent, useState} from 'react';
import style from '../quick_select/Quick_select.module.css';

type InputNumComPropsType = {
	defaultValue: string
}

export const InputNumCom = (props: InputNumComPropsType) => {
	const [inputValue, setInputValue] = useState<string>(props.defaultValue)

	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value)
	}

	return (
		<div>
			<input className={style.quickSelect__inputNumCom}
			       type={"number"}
			       min={'1'}
			       value={inputValue}
			       onChange={inputChangeHandler}
			/>
		</div>
	);
};