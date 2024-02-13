// functions to interact with the User: alert , prompt and confirm.

/*

1. alert() - shows a message.

2. prompt() - shows a message, input text. it returns the text on ok or,  if cancel button or Esc is clicked, Null.

3. confirm() - shows a message, confirm with "ok" or "cancel". it returns true for OK and false for cancel/Esc.

*/

{
    alert("Hello Aniruddh");
    window.alert("this is javascript");
}

{
    let  Ani;
    Ani = false ;

    alert(Ani ? "Nagative User" : "Positive User");
}

const Message = prompt();
document.write(Message);

let message= confirm("this is javascript?");
document.write(message);