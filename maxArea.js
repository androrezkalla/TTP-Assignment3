function maxArea(heights) {
    let maxArea = 0;
    let left = 0;
    let right = heights.length - 1;
    
    while (left < right) {
      const width = right - left;
      const minHeight = Math.min(heights[left], heights[right]);
      const area = width * minHeight;
      maxArea = Math.max(maxArea, area);
  
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }
  
    return maxArea;
  }
  
  module.exports = maxArea;
  