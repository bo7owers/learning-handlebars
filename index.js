
//get the html code from #greet
const source = document.getElementById('greet').innerHTML;

//compile the html code and turn it into a variable
const template = Handlebars.compile(source);

// create object with key that talks to html
const context = {
  greeting: 'Hello World!',
  name: 'René'
}

// compiledHtml variable is a compiled html line of code based on the context object
const compiledHtml = template(context);

// select the id in the html code you want to display the object's text
const fill = document.getElementById('hello');


//replace the innerHTML to the comiledHtml one.
fill.innerHTML = compiledHtml;