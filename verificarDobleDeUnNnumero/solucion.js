var checkIfExist = function(arr) {
    if(!arr.length) return 0
    arr.sort(function(a,b){return a -b})
    let a;
    for(j=1;j<arr.length;j++){
        for(i=0;i<arr.length;i++){
            if(arr[i]<arr[j]){
                if(arr[j]/arr[i]==2){
                    a = true
                    return a
                }else {
                    a = false
                }
            }
        }
    } return a
};

console.log(checkIfExist([9,2,5,3,2]))