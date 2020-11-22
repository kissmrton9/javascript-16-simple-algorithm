'use strict';
//Tömb legkisebb eleme
{
    const numericArray1 = [1,2,4,5,87,43,12];
    let smallest = numericArray1[0];
    for (let i=0; i<numericArray1.length; i++){
        if (numericArray1[i]<smallest){
            smallest=numericArray1[i];
        }
    }
console.log('The smallest element:', smallest)
}
//Tömb legnagyobb eleme
{
    const numericArray2 = [1,2,4,5,87,43,12];
    let biggest = numericArray2[0];
    for (let i=0; i<numericArray2.length; i++){
        if (numericArray2[i]>biggest){
            biggest=numericArray2[i];
        }
    }
    console.log('The biggest element:', biggest)
}
//Tömb elemeinek átlaga
{
    const numericArray3 =[1,2,4,5,87,43,12];
    let sum = 0;
    const len = numericArray3.length;
    if (len>0){
        for (let i=0; i<len; i++){
            sum = sum + numericArray3[i];
        }
        console.log('The average is:', sum/len);
    }
}
//Tömb elemeinek összege
{
    const numericArray4 =[1,2,4,5,87,43,12];
    let sum = 0;
    for (let i=0; i<numericArray4.length; i++){
        sum += numericArray4[i];
    }

    console.log('The sum is:', sum)
}
//Tömb páros elemeinek a száma
{
    const numericArray5 = [1,2,4,5,87,43,12];
    let evenNumbers = 0;
    for (let i=0; i<numericArray5.length; i++){
        if (numericArray5[i]%2 === 0){
            evenNumbers ++;
        }
    }
    console.log('Even numbers:', evenNumbers)
}
//Tömb második legkisebb eleme

function bubbleSortUp(arr){
    let swapped;
    do {
        swapped = false;
        for (let i=0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

function getNthMinElement(arr, nth) {
    const sortedArr = bubbleSortUp(arr);
    return sortedArr[nth - 1];
}

const numericArray6 = [1,2,4,5,87,43,12];
console.log('The second smallest element:',getNthMinElement(numericArray6, 2));

//Tömb harmadik legnagyobb eleme

function bubbleSortDown(arr){
    let swapped;
    do {
        swapped = false;
        for (let i=0; i < arr.length - 1; i += 1) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

function getNthMaxElement (arr, nth) {
    const sortedArr = bubbleSortDown(arr);
    return sortedArr[nth - 1];
}

const numericArray7 = [1,2,4,5,87,43,12];
console.log('The third biggest element:',getNthMaxElement(numericArray7, 3));

//A tömb tartalmazza-e a 23-at - lineáris keresés

const numericArray8 = [1,2,4,5,87,43,12];
let contains = false;
for (let i=0; i<numericArray8.length && contains === false; i++){
    if (numericArray8[i] === 23){
        contains = true;
    }
}
console.log('This array contains 23:', contains);

function linearSearch(arr, search) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === search) {
            return true;
        }
    }
    return false;
}

const numericArray8b = [1,2,4,5,87,43,12];
console.log('This array contains 23:', linearSearch(numericArray8b, 23));

//A tömb tartalmazza-e a 23-at - logaritmikus keresés

function binarySearch(arr, search) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === search) {
            return true;
        }
        else if (arr[mid] < search)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return false;
}

const numericArray9 = [1,2,4,5,87,43,12];
console.log('This array contains 23:', binarySearch(numericArray9, 23));

//A tömb hányszor tartalmazza a 23-as számot

const numericArray10 = [1,2,4,5,87,43,12];
let db = 0;
for ( let i=0; i < numericArray10.length; i++) {
    if (numericArray10[i] == 23){
        db ++;
    }
}
console.log('How many times contains the 23:', db);

//Javított buborékos rendezés lebegőpontos számokra - növekvő

function bubbleSortImpUp(arr){
    let swapped;
    let lastSwapped = arr.length - 1;
    do {
        swapped = 0;
        for (let i=0; i < lastSwapped; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = i + 1;
            }
        }
        lastSwapped = swapped;
    } while (swapped);
    return arr;
}

const numericArray11 = [25.1,387.55,1234.13,34.87,521.2,634.32,11.22];

console.log('The ordered array: ', bubbleSortImpUp(numericArray11));

//Javított buborékos elrendezés csökkenő sorrend
function bubbleSortImpDown(arr){
    let swapped;
    let lastSwapped=arr.length-1; 
    do {
        swapped = 0;
        for (let i=0; i < lastSwapped; i += 1) {
            if (typeof(arr[i+1]) == 'number' && (! isNaN(arr[i+1])) && (typeof(arr[i]) != 'number' || (typeof(arr[i]) == 'number' && isNaN(arr[i])) || arr[i] < arr[i + 1]))
//            if (typeof(arr[i+1]) == "number" && (typeof(arr[i]) != "number" || arr[i] < arr[i + 1]))
               {
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
                swapped = i + 1;
            }
        }
        lastSwapped = swapped;
    } while (swapped)
    return arr;
}


const numericArray12 = [25,387.55,'hello',1234,false,34.87,NaN,521.2,634.32,11.22,'bello',true,];
//const numericArray12a = [25,387.55,'hello',1234,false,34.87,521.2,634.32,11.22,'bello',true,];

console.log('The ordered array:',bubbleSortImpDown(numericArray12));
//console.log("The ordered array:",bubbleSortImp3(numericArray12a));

//Rendezett tömbbe való elembeszúrás

function bubbleSortGrowing(arr){
    let swapped;
    let lastSwapped=arr.length-1;
    do {
        swapped = 0;
        for (let i=0; i < lastSwapped; i += 1) {
            if (typeof(arr[i+1]) == 'number' && (! isNaN(arr[i+1])) && (typeof(arr[i]) != 'number' || (typeof(arr[i]) == 'number' && isNaN(arr[i])) || arr[i] > arr[i + 1]))
            {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = i + 1;
            }
        }
        lastSwapped = swapped;
    } while (swapped)
    return arr;
}

function custom13(arr){
    let inputNumber = NaN;
    while (inputNumber!=inputNumber) {
        inputNumber=parseInt(prompt('Adj meg egy egész számot:'));
    }
    arr.push(inputNumber);
    const sortedArray = bubbleSortGrowing(arr);
    return sortedArray;
}
const numericArray13 = [1,2,4,5,87,43,12];

console.log('The ordered array13:',custom13(bubbleSortGrowing(numericArray13)));


// Egész számok és stringek felváltott sorrendben való rendezése
const numericArray14 = [25,'helo',387,1234,'belo',234533,'szia','mia'];

function customSort(arr) {
    const numbers = [];
    const strings = [];
    const sortedArray = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i]=== 'number') {
            numbers.push(arr[i]);
        } else {
          strings.push(arr[i]);
        }
    }

    for (let i = 0; i < numbers.length; i += 1) {
        sortedArray.push(numbers[i]);
        sortedArray.push(strings[i]);
    }
    return sortedArray;
}

const result = customSort(numericArray14);
console.log('The ordered array:', result);

//v2
function getPrimitiveElementsByType(arr, type){
    const typedArray= [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === type) {
            typedArray.push(arr[i]);
        }
    }
    return typedArray;
}

function mixArrays(arr1, arr2) {
    const mixedArray= [];
    for (let i=0; i < arr1.length; i += 1){
        mixedArray.push(arr1[i]);
        mixedArray.push(arr2[i]);
    }
    return mixedArray;
}
const numbers = getPrimitiveElementsByType (numericArray14, 'number');
const strings = getPrimitiveElementsByType (numericArray14, 'string');
console.log('The ordered array:', mixArrays(numbers, strings));

//Páros és páratlan számok szétválogatása két tömbbe

const numericArray15= [1,2,4,5,87,43,12];
    
const evenNumbers15 = [];
const oddNumbers15 = [];

    for (let i = 0; i < numericArray15.length; i += 1) {
        if (numericArray15[i] % 2 == 0) {
            evenNumbers15.push(numericArray15[i]);
        } else {
          oddNumbers15.push(numericArray15[i]);
        }
    }

console.log('The even numbers array:', evenNumbers15);
console.log('The odd numbers array:', oddNumbers15);

//Két tömb metszete, uniója, különbsége,descartes szorzata

const numericArray16a = [25,387,1234,34,521,634,11,22133,13,89];
const numericArray16b = [13,89,78,1,15,4,18,12,26,24];
//unió
function arrayUnion (a,b) {
    const array = b;
    for (let i = 0; i < a.length; i += 1) {
        if (linearSearch(b, a[i])==='nem') {
            array.push(a[i]);
        }
    }
    return array;
}

console.log('The union:', arrayUnion(numericArray16a, numericArray16b));

//metszet
const numericArray17a = [25,387,1234,34,521,634,11,22133,13,89];
const numericArray17b = [13,89,78,1,15,4,18,12,26,24];

function arrayIntersection (a,b) {
    const array = [];
    for (let i = 0; i < a.length; i += 1 ) {
        if (linearSearch(b, a[i])==='igen') {
            array.push (a[i]);
        }
    }
    return array;
}

console.log('The intersection:', arrayIntersection(numericArray17a, numericArray17b));

//különbség
const numericArray18a = [25,387,1234,34,521,634,11,22133,13,89];
const numericArray18b = [13,89,78,1,15,4,18,12,26,24];

function arrayDifference (a,b) {
    const array18 = [];
    for (let i = 0; i < a.length; i += 1) {
        if (linearSearch (b, a[i])==='nem') {
            array18.push (a[i]);
        }
    }
    return array18;
}

console.log('The difference:', arrayDifference (numericArray18a, numericArray18b)); 

//descartes szorzat

const numericArray19a = [25,387,1234];
const numericArray19b= [13,89,78];

function arrayDescartes (a,b) {
    const array19 = [];
    for (let i = 0; i < a.length; i +=1) {
        for (let j=0; j < b.length; j +=1) {
            array19.push([a[i], b[j]]);
        }
    }
    return array19;
}

console.log ('Descartes product:', arrayDescartes (numericArray19a,numericArray19b));
