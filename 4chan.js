var filmPromise = d3.json("4chan.json")
filmPromise.then(function(posts)
{
    d3.select("h1")
    .text("Select A Film")
    console.log("Posts c1", posts)
   displaydescription(posts)
    
},
function(err)
{
console.log("fail", err)
        d3.select("h1")
    .text("No Films Found")
})

var displaydescription = function(posts)
  {
   console.log("Posts c2", posts)
      
    d3.select("#main")
      .append("div")
      .selectAll("p")
      .data(posts.posts)
      .enter()
      .append("p")
      .attr("class","Posts")
      .attr("id",function(aPosts){return "I" + aPosts.no})
      .text(function(aPosts){return aPosts.com})
  }