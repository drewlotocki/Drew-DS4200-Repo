let svg = d3.select('#vis')
    .append('svg')
        .attr('width', 600)
        .attr('height', 400)
        .style('background', '#e1f7fa');

svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 300)
    .attr('r', 100)
    .attr('fill', 'yellow');

svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 100)
    .attr('height', 100)
    .attr('fill', 'blue');   

svg.append('line')
    .attr('x1', 150)
    .attr('y1', 150)
    .attr('x2', 200)
    .attr('y2', 200)
    .attr('stroke', 'black')
    .attr('stroke-width', 2)