var removeDuplicates = function(nums) {
    if(!nums.length) return 0; 
    let i = 0;
    for(j=1;j<nums.length;j++){
        if(nums[i]!=nums[j]){
            i++
            nums[i]=nums[j]
        }
    }
    i = i+ 1;
    for(k=i;k<nums.length;k++){
        nums[k]=null
    }
    
    return i;
};


console.log(removeDuplicates([1,1,2,2,3,3,5,6]))