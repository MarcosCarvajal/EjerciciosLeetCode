var removeElement = function(nums, val) {
    let cont = 0;
    for(i=0;i<nums.length;i++){
        if(nums[i]!=val){
            cont = cont + 1;
        }else if(nums[i]==val) {
            nums[i] = null
        }
    }
    nums.sort()
    return cont
};



console.log(removeElement([3,2,2,3],3))