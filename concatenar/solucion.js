var merge = function(nums1, m, nums2, n) {
    let n1=[];
    let n2=[];
    for(i=0; i<m; i++){
        n1.push(nums1[i]);
    }
    for (j=0; j<n; j++){
        n2.push(nums2[j]);
    }
    
    let n3 = n1.concat(n2);
    nums1 = n3.sort();
    return nums1;
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));