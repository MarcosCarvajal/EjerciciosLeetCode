
function duplicateZeros(arr){
    let res = [];
    arrin=arr.length;
    for (let i=0; i<arr.length; i++){
        if(arr[i]==0){
            arr.splice(i,0,0);
            i=i+1;
            }
    }
    for(j=0;j<arrin;j++){
        res.push(arr[j]);
    }return(res);
}

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));
