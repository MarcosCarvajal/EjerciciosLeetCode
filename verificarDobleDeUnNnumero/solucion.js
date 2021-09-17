function checkIfExist(arr){
    let a;
    let i = 0;
    for(i=0;i<arr.length;){
        for(j=0;j<arr.length;j++){
            if(i!=j){
                if(arr[i]*2==arr[j]||arr[i]==0&&arr[j]==0){
                    
                    return true
                }
            }
        }
        i = i+1
    }
    return false;
}

console.log(checkIfExist([-16,-13,8]))
console.log(checkIfExist([-10,12,-20,-8,15]))
console.log(checkIfExist([-2,0,10,-19,4,6,-8]))