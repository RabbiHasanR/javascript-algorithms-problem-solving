// Problem Inventory Update:
// Compare and update the inventory stored in 
// a 2D array against a second 2D array of a fresh
// delivery.Update the current existing inventory item 
// quantities(in arr1).If an item cannot be found, add the 
// new item and quantity into the inventory array.
// The returned inventory array should be in alphabetical order by item.

//example inventory 
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], 
// [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], 
// [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], 
// [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

// Solution:

function updateInventory(arr1, arr2) {
    let getIndex = (items, item) => {
        let index = items.findIndex((x) => x[1] === item[1]);
        return index;
    }
    arr2.forEach(item=> {
        let index = getIndex(arr1, item);
        // console.log('item and index:', item, index)
        if(index >=0){
            arr1[index][0] += item[0]
        } else{
            arr1.push(item)
        }
    });
    arr1.sort((item1, item2)=>{
        if(item1[1] > item2[1]) return 1;
        if(item1[1] < item2[1]) return -1;
        return 0;
    })
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));