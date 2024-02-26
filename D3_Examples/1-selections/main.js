// select, selectAll

pointer = d3.select('.sex');
pointer1 = d3.select('.sex').node();

d3.select('.breed').text('Unknown');
d3.select('tr:nth-child(3) .breed').text('Domestic Longhair');

d3.selectAll('.rate').text('5'); 

d3.selectAll('tr:nth-child(6)').remove();

d3.select('tr:nth-child(3) .breed')
    .html('<strong>maybe</strong>')
    .append('span')
    .html('Domestic Longhair');

d3.select('tr:nth-child(2) .breed')
    .html('<strong>maybe</strong>')
    .insert('span', ':first-child')
    .html('Domestic Shorthair');  

d3.select('h1')
    .style('color', 'red');

d3.selectAll('tr')
    .insert('td', ':first-child')
    .append('input')
    .attr('type', 'checkbox')
    .property('checked', 'true');
