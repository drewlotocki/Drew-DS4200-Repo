// Load the data
const penguins = d3.csv("penguins.csv");

// Once the data is loaded, proceed with plotting
penguins.then(function(data) {
    // Convert string values to numbers
    data.forEach(function(d) {
        d.bill_length_mm = +d.bill_length_mm;
        d.flipper_length_mm = +d.flipper_length_mm;
    });

    // Define the dimensions and margins for the SVG
    let 
        width = 800,
        height = 600;

    let margin = {
        top: 40,
        bottom: 30,
        left: 80,
        right: 80
    };

    // Create the SVG container
    let svg = d3
        .select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#d3d3d3');
            
    // Set up scales for x and y axes
    const colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.species))
        .range(d3.schemeCategory10);
    
    let yScale = d3.scaleLinear()
        .domain([d3.min(data, d => d.flipper_length_mm)-5, d3.max(data, d => d.flipper_length_mm)+5])
        .range([height - margin.bottom, margin.top]);

    let xScale = d3.scaleLinear()
        .domain([d3.min(data, d => d.bill_length_mm) - 5, d3.max(data, d => d.bill_length_mm) + 5])
        .range([margin.left, width - margin.right]);
     
    let yAxis = svg
        .append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft().scale(yScale));

    let xAxis = svg
        .append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom().scale(xScale));

    // Add circles for each data point
    let circle = svg
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', d => xScale(d.bill_length_mm))
        .attr('cy', d => yScale(d.flipper_length_mm))
        .attr('r', 5)
        .attr('fill', d => colorScale(d.species));

    // Add x-axis label
    xAxis
        .append('text')
          .attr('x', width - margin.left)
          .attr('y', -10)
          .style('stroke', 'black')
          .style('font-size', '12px')
          .text('Bill Length (mm)');

    // Add y-axis label
    yAxis
        .append('text')
        .attr('y', 30)
        .attr('x', 40)
        .style('stroke', 'black')
        .style('font-size', '12px') 
        .text('Flipper Length (mm)');

    // Add legend
    const legend = svg.selectAll(".legend")
        .data(colorScale.domain())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => "translate(0," + i * 20 + ")");

    legend.append("circle")
        .attr("cx", width - margin.right -26)
        .attr("cy", 21)
        .attr("r", 5)
        .style("fill", colorScale);
    
    // Append text to legend
    legend.append("text")
        .attr("x", width - margin.right - 18)
        .attr("y", 20)
        .attr("dy", ".35em")
        .style('stroke', 'black')
        .style("text-anchor", "start")
        .text(d => d);

});

penguins.then(function(data) {
    // Convert string values to numbers
    

    // Define the dimensions and margins for the SVG
    

    // Create the SVG container
    

    // Set up scales for x and y axes
    

    // Add scales     
    

    // Add x-axis label
    

    // Add y-axis label
    

    const rollupFunction = function(groupData) {
        const values = groupData.map(d => d.flipper_length_mm).sort(d3.ascending);
        const q1 = d3.quantile(values, 0.25);
        return { q1};
    };

    const quartilesBySpecies = d3.rollup(data, rollupFunction, d => d.species);

    quartilesBySpecies.forEach((quartiles, species) => {
        const x = xScale(species);
        const boxWidth = xScale.bandwidth();

        // Draw vertical lines
        
        // Draw box
        
        // Draw median line
        
        
    });
});