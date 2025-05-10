function getArrayParams(...arr) {

	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}

		if (arr[i] > max) {
			max = arr[i];
		}

		sum += arr[i];

	}

	const avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {
	difference = Math.max(...arr) - Math.min(...arr);
	if (difference === -Infinity) {
		return 0;
	}
	return difference;

}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];

		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}
	if (countEvenElement === 0) {
		return 0;
	}
	const average = sumEvenElement / countEvenElement;

	return average;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		if (func(...arrOfArr[i]) > maxWorkerResult) {

			maxWorkerResult = func(...arrOfArr[i]);
		}
	}
	return maxWorkerResult;
}