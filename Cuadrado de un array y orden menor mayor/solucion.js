var findNumbers = function(nums) {
    let array=[];
    let resultado;
    let i;
        for (i=0; i<nums.length;i++){
           resultado = nums[i]*nums[i];
            array.push(resultado);      
        }
       array.sort((a, b)=>{
           if(a<b){
               return -1;
           }
           else if(a>b){
               return 1;
           }
           else{
               return 0;
           }
       })
       return array;
    };
    console.log(findNumbers([-4,-1,0,3,10,6,8,9]));

    