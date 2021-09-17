function masMenos(n){
    let k=0;
    let j=0;
    let l=0;
    let r=0;
    let arr = [];
    for(i=0;i<n.length;i++){
        if(n[i]>0){
            k = k+1 ;
        }else if(n[i]==0){
            j = j+1;
        }else if(n[i]<0){
            l = l+1;
        }
    }
    r = k+j+l;
    k = k/r;
    j = j/r;
    l = l/r;
    arr.push(k);
    arr.push(j);
    arr.push(l);
    
    return arr;
}
console.log(masMenos([1, 2, 0, -1]));