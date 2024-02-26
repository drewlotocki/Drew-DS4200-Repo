//Define data
let data = [
  { name: 'Rainne'    , rating: 8 },
  { name: 'Buddy'    , rating: 7 },
  { name: 'Paddy'   , rating: 3 },
  { name: 'Sticky', rating: 9 },
  { name: 'Midnight'  , rating: 5 },
  { name: 'Leo'  , rating: 6 }
];

//create SVG

let width=600, height = 400;

let margin = {
  top: 30, 
  bottom: 30,
  left: 30,
  right: 30
};

let svg = d3.select('body')
  .append('svg')  
  .attr('width', width)
  .attr('height', height)
  .style('background', '#e9f7f2');

// Make the y axis 
let yScale = d3.scaleLinear()
  .domain([0, 10])
  .range([height - margin.bottom, margin.top]);  

let yAxis = svg.append('g') 
  .attr('transform', `translate(${margin.left},0)`)
  .call(d3.axisLeft().scale(yScale));

//Make the x axis

let xScale = d3.scaleBand()
  .domain(data.map(d => d.name))
  .range([margin.left, width - margin.right])
  .padding(0.5);

let xAxis = svg.append('g')
  .attr('transform', `translate(0, ${height - margin.bottom})`)
  .call(d3.axisBottom().scale(xScale));

let bar = svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', d => xScale(d.name))
  .attr('y', d => yScale(d.rating))
  .attr('width', d=> xScale.bandwidth())
  .attr('height', d=> height - margin.bottom - yScale(d.rating))

