import logo from './logo.svg';
import './App.css';
import Heart from './components/heart/heart';
import WordCloud from './components/wordCloud/wordCloud';
import { Button, Input } from 'antd';
import { useEffect, useState } from 'react';

function func(name, age) {
	console.log('hello', name);
	this.name = 'zhao';
}

//防抖
function debounce(fn, delay) {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
}

//节流
function throttle(fn, delay) {
	let timer;
	return function (...args) {
		if (!timer) {
			timer = setTimeout(() => {
				fn.apply(this, args);
				timer = null;
			}, delay);
		}
	};
}

function App() {
	// 使用数组存储数据，每个元素是 {name: string, value: number} 对象
	const [data, setData] = useState([]);
	// 添加输入框的状态
	const [inputValue, setInputValue] = useState('');

	// 处理输入框内容变化
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	// 处理输入框回车事件
	const handleEnter = (e) => {
		const trimmedValue = inputValue.trim();
		if (!trimmedValue) return; // 如果输入为空，不处理

		// 检查输入是否已存在于数据中
		const existingItemIndex = data.findIndex((item) => item.name === trimmedValue);

		if (existingItemIndex !== -1) {
			// 如果已存在，增加权重
			setData((prevData) => {
				const newData = [...prevData];
				newData[existingItemIndex].value += 1;
				return newData;
			});
		} else {
			// 如果不存在，添加新条目
			setData((prevData) => [...prevData, { name: trimmedValue, value: 1 }]);
		}

		// 清空输入框
		setInputValue('');
		console.log('data', data);
	};

	const obj = new func('luo', 18);
	// console.dir(func);
	// console.log('obj', obj, obj.__proto__);
	// console.log(obj.__proto__ === func.prototype);
	// for (var i = 0; i < 10; i++) {
	// 	setTimeout(() => {
	// 		console.log(i);
	// 	});
	// }

	return (
		<div className='App'>
			<div className='flex'>
				<Input 
				type='text' 
				value={inputValue} 
				onChange={handleInputChange} 
				onPressEnter={handleEnter} 
				placeholder='输入一句话后按回车' 
			/>
				{/* <Button onClick={debounce(() => console.log('hello'), 1000)}>点击</Button> */}
			</div>
			<WordCloud data={data}></WordCloud>
			<Heart />
		</div>
	);
}

export default App;
