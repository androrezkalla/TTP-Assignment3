function twoSum(nums, target) {
    if (nums.length < 2){
        return null;
    }

    const map = {}

    for (let i = 0; i < nums.length; i++) {
      let comp = target - nums[i];
  
      if (comp in map) {
        return [map[comp], i];
      }
  
      map[nums[i]] = i;
    }
    return null;
  }
  
  module.exports = twoSum;