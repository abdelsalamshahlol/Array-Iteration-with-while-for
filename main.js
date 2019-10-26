// Basic Requirments


// A - 1

function sum(nums){
  var result = 0 ;
	for (var i = 0; i < nums.length ; i++) {
	result = result +	nums[i];

	}
	return result;
}

function sum2(nums){
	var result = 0;
	var i = 0;
	while( i < nums.length){
		result = result + nums[i];
		i++;
	}
	return result;
}

//A -2

function max(nums){
 var largst= nums[0];

 for(var i = 0; i< nums.length ; i ++){
 	if(nums[i] > largst){
 		largst = nums[i]; 
 	}
 }
 return largst;
}

function max2(nums){
	var largst= nums[0];
	var i = 0;
	while(i < nums.length){
		if(nums[i] > largst){
		largst = nums[i];
	}
	    i++;
	}
	return largst;
} 

//A -3

// It returns an array of elements depending on the parameter passed to split

function longestWord(str) {
    var strArr = str.split(' ');
    var indexOfLongest = strArr;
    var longest = strArr[0];

    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i].length > longest.length) {
            longest = strArr[i];
        }
    }

    return longest;
}


//A - 4

function remove(nums, element){

var result = [];
for(var i = 0; i< nums.length; i++){
	if(nums[i] !== element){
     result.push(nums[i]);
	}
}
return result;
}

function remove2(nums,element){
var result = [];
var i = 0;
while( i < nums.length){
		if(nums[i] !== element){
    		 result.push(nums[i]);
		}
	i++;
	}  
	return result;
}

//A-5

function evens(array){
	var result = [];
	for (var i = 0;i< array.length ; i++) {
		if(array[i] % 2 === 0 ){
			result.push(array[i])
		}
	}
	  return result;
}

function evens2(array){
	var result = [];
	var i = 0;
	while(i<array.length){
		if(array[i] % 2 === 0 ){
			result.push(array[i])
		}
		i++;
	}
	  return result;
}

// More Practice

//A - 1

function average(array){
	var result = 0;
	for(var i = 0; i<array.length; i++){
		result += array[i];
	}
	return result/array.length;
}

//A - 2

function min(nums){
 var smallest = nums[0];
 for(var i = 0; i< nums.length ; i ++){
 	if(nums[i] < smallest ){
 		smallest  = nums[i]; 
 	}
 }
 return smallest ;
}


// A - 3

function shortestWord(str) {
	var words = str.split(' ');
	var shortest = words[0];

	for(var i = 0; i < words.length; i++){
		shortest = words[i].length < shortest.length ? words[i] : shortest;
	}

	return shortest;
}

// A - 4

function countChar(str, char) {
	var count = 0;

	for(var i = 0; i < str.length; i++){
		if(str[i] === char){
			count++;
		}
	}

	return count;
}

// A - 5

function evenLengthWords(arr) {
	var evenLengthWords = [];

	for(var word of arr){
		word.length % 2 === 0 ? evenLengthWords.push(word): '';
	}

	return evenLengthWords;
}

// Advanced

// A - 1

// Without Join()

function reverseStr(str) {
	var result = '';

	for(var i = str.length-1; i >= 0; i--){
		result += str[i];
	}

	return result;
}

// A - 2

function keeps(arr, f) {
	var result = [];

	for(var i in arr){
		if(f(arr[i], i)){
			result.push(arr[i]);
		}
	}

	return result;
}