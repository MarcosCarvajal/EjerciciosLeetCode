var removeElement = function(nums, val) {
    let a = nums.map(function(k){
       nums[k]!=val?nums[k]:''
    })
    return a
};



console.log(removeElement([3,2,2,3],3))