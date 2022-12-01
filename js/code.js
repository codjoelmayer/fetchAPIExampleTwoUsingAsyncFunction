// Using asynchronous function
// Return your results
async function fetchData() {
   let collect = await fetch('../data/data.json');
   let results = await collect.json();
   return results.results;
}
// Display your data
async function display() {
    let data = await fetchData();
    console.log(data);
}
display();