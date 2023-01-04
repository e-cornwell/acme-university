
const processScores = (data)=> {
    const result = {};
    data.trim().split('\n').forEach( row => {
        const parts = row.split(',');
      const name = parts[0];
      const scores = parts.slice(1)
      let sum = 0;
      scores.forEach( score => {
          sum = sum + score*1;
      })
      const average = sum / scores.length;
      result[name] = average;
    }) 
    return result;
}  

const hi = ()=> console.log('hello')
module.exports = {
  processScores,
  hi
};