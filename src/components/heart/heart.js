import './heart.css';
function gridHearts() {
	return Array.from({ length: 6 }).map((_, i) => <div key={i} className={`heartGrid grid${i}`}></div>);
}
function heart() {
	return (
		<>
			<div className='grid'>
				{gridHearts()}
			</div>
		</>
	);
}
export default heart;
