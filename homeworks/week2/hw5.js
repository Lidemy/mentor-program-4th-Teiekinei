function join(arr, concatStr) {
	if (arr.length === 0) { // special case
    	return '';
  	}
	var result = ''
	for (i=0; i<arr.length; i++){
		result += arr[i] + concatStr
	}
	return result
}

function repeat(str, times) {
	var result = ''
	for (i=1; i<=times; i++){
		result += str
	}
	return result
}

console.log(join(['a','b','c'], '!'));
console.log(repeat('a', 5));