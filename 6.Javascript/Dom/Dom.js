// Document Object Model in JavaScript

// What is Document Object Model (DOM)
// The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.

// The DOM represents an HTML document as a tree of nodes. The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.

// Note that the DOM is cross-platform and language-independent ways of manipulating HTML and XML documents.

// A document as a hierarchy of nodes
// The DOM represents an HTML document as a hierarchy of nodes. Consider the following HTML document:

// <html>
//     <head>
//         <title>JavaScript DOM</title>
//     </head>
//     <body>
//         <p>Hello DOM!</p>
//     </body>
// </html>

// In this DOM tree, the document is the root node. The root node has one child node which is the <html> element. The <html> element is called the document element.

// Each document can have only one document element. In an HTML document, the document element is the <html> element. Each markup can be represented by a node in the tree.

// Selecting elements

// getElementById() – select an element by id.
// getElementsByTagName()  – select elements by a tag name.
// getElementsByClassName() – select elements by one or more class names.
// querySelector()  – select elements by CSS selectors.


// JavaScript getElementById

// {
//   document.getElementById('para1').innerHTML="Hello DOM !"
// //   document.getElementById('box-1').innerHTML="This is Div Tag"
// //   const model = document.getElementsByClassName('box');
// //   console.log(model);
//   const element = document.getElementsByTagName('h1');
//   function addText(){
//     for(let i = 0; i < element.length; i++ ){
//         element[i].innerHTML = "Hello World!"
//         element[i].style.color = "orange"
//         element[i].style.background = "green"
//     }
//   }
//   addText();
// }

{
    // const NewElement = document.createElement("marquee");
    // NewElement.textContent = "This is Marquee Tag"
    // NewElement.classList = "box"
    // document.body.appendChild(NewElement)
}

// querySelector()

// {
// //    document.querySelector('.box').style.color="green";
//    document.querySelectorAll('.box').style.color="green";
// }

// querySelectorAll

{
    // const elements = document.querySelectorAll("#sun p");
    // console.log(elements);

    // function changeColorss() {
    //   for (let i = 0; i < elements.length; i++) {
    //     elements[i].style.color = "red";
    //   }
    // }
}


//javascript has attribute

{
    const element = document.querySelector("p");
    function check() {
      if (element.hasAttribute("id")) {
        alert("Yes 'id' attribute exist!");
      }
      else {
        alert("No 'id' attribute doesn't exist!");
      }
    }
}


//javascript get attribute

{    
    const Newelement  = document.querySelector('input')
    function check(){
        const AttriName = Newelement.getAttribute('value')
        console.log(AttriName);
    }
}

// javascript set attribute

{
    const element = document.getElementById("demo");

    function checkAttr() {
      alert(element.hasAttribute("name"));
    }
    function addAttr() {
      element.setAttribute("type","text");
    }
}

// javascript remove attribute

{
    const element = document.getElementById("demo");
    function checkAttr(){
       alert(element.hasAttribute('class'))
    }
    function remove() {
      element.removeAttribute("class");
      element.removeAttribute("name");
      element.removeAttribute("id");
    }
    function addAttr(){
       console.log(element.getAttribute("class"))
    } 
}


/* Html Object Accessible */

/*

document.body
document.documentElement
document.forms
document.images
document.links
document.scripts
document.title

*/

{
    document.onload

    function Function1(){
        const NewElement = document.createElement('marquee');
        NewElement.textContent="This Is Marquee Tag";
        document.body.appendChild(NewElement);

        document.querySelector('body').style.background = "orange"
    }
}

{
    document.getElementById("demo").innerHTML = document.body.innerHTML;
}

{
    document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
}

{
    document.getElementById('demo').innerHTML = document.anchors.length
}
{
    document.getElementById("demo2").innerHTML =
"Number of anchors are: " + document.anchors.length;


/*

Description
The anchors property is deprecated. Do NOT use it.

The anchors property only returns those <a> elements with a name attribute.

The name attribute of the <a> element is not supported in HTML5.

*/

}

{
    document.getElementById("demo1").innerHTML = "Number of forms tag: " + document.forms.length;
}

{
    document.getElementById("demo1").innerHTML = "Number of forms tag: " + document.head;
}

{
    document.getElementById("demo2").innerHTML = "Number of images tag: " + document.images.length;
}

{
    document.getElementById("demo3").innerHTML = "Number of links tag: " + document.links.length;
}

{
    document.getElementById("demo4").innerHTML = "Number of scripts: " + document.scripts.length;
}

{
    document.getElementById("title").innerHTML = "The title of this document is: " + document.title;
}

{
    window.onload = () => {
        // create a couple of elements in an otherwise empty HTML page
        const heading = document.createElement("h1");
        const headingText = document.createTextNode("Big Head!");
        heading.appendChild(headingText);
        document.body.appendChild(heading);
      };
}













/*  JavaScript HTML DOM Events */

// function message(){
//     alert("Yes, I Am Heading Tag")
// }

// function dateshow(){
//     document.getElementById("date").innerHTML = Date();
// }

// function uppercase(){
//     const change = document.getElementById("emails"); 
//     change.value = change.value.toUpperCase();
// }
// function red(one){
//     one.style.color= "red";
// }
// {
//     function Down(obj) {
//         obj.style.backgroundColor = "#1ec5e5";
//         obj.innerHTML = "Release Me";
//       }
      
//       function Up(obj) {
//         obj.style.backgroundColor="#D94A38";
//         obj.innerHTML="Thank You";
//       }
// }

/* JavaScript addEventListener() */

// {
//     const x = document.getElementById("clickIt");
//         const y = document.getElementById("hoverPara");
          
//         x.addEventListener("click", RespondClick);
//         y.addEventListener("mouseover", RespondMouseOver);
//         y.addEventListener("mouseout", RespondMouseOut);
          
//         function RespondMouseOver() {
//             document.getElementById("effect").innerHTML +=
//                        "MouseOver Event" + "<br>";
//         }
          
//         function RespondMouseOut() {
//             document.getElementById("effect").innerHTML +=
//                       "MouseOut Event" + "<br>";
//         }
          
//         function RespondClick() {
//             document.getElementById("effect").innerHTML +=
//                       "Click Event" + "<br>";
//         }
//     }