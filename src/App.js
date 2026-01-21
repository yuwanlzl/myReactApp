import logo from './logo.svg';
import './App.css';
import Heart from './components/heart/heart';
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
			<Heart />
		</div>
	);
}

export default App;
