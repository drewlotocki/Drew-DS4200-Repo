let numbers = [4, 10, 18, 23, 42];
colors = d3.schemeCategory10; // https://github.com/d3/d3-scale-chromatic

svg = d3.select('body')
  .append('svg')
    .attr('width', 500)
    .attr('height', 500);

let circle = svg.selectAll('g')
  .data(numbers) 
  .enter()   
  .append('circle')
  .attr('r', 5)
  .attr('cy', d => 4*d)
  .attr('cx', d => 20+ d*5)
  .attr('fill', (d, i) => colors[i]);

console.log(circle);

svg.selectAll('g')
  .data(numbers)
  .enter()
  .append('text')
  .attr('x', d => 20 + (d*5))
  .attr('y', d => (4*d))
  .text(d => d)
  .style('font-family', 'Arial')
  .style('text-anchor', 'middle'); 
