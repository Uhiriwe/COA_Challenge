function arrayWithSum(arr, target) {
    let i = 0;
    let Sum = 0;
    for (let j = 0; j < arr.length; j++) {
        Sum += arr[j];
        while (Sum > target && i <= j) {
            Sum -= arr[i];
            i++;
        }
        if (Sum === target) {
            return true;
        }
    }
    
    return false;
}