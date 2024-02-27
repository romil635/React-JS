/* E-Mail */

// {
//   const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/;

//   console.log(email.test(prompt("Enter The Mail: ")));
// }

/* Number */

{
  const regex2 = /(\d{3})\D(\d{3})(\d{2})(\d{2})/g;
  const result3 = regex2.exec('My phone number is: 123 1231212.');
  console.log(result3);
 
}



// {
//   const regex2 = /(\d{2})\D(\d{2})(\d{2})(\d{2})(\d{2})/g;
//   const result3 = regex2.exec('My phone number is: 12 12121212.');
//   console.log(result3);
// }

// {
//   const regex2 = /(\d{4})\D(\d{4})(\d{2})/g;
//   const result3 = regex2.exec('My phone number is: 1234 123412.');
//   console.log(result3);
// }

// {
//   const regex2 = /(\d{2})\D(\d{2})-(\d{2})-(\d{2})-(\d{2})/g;
//   const result3 = regex2.exec('My phone number is: 12-12-12-12-12.');
//   console.log(result3);
// }

// {
//   const regex2 = /(\d{3})\D(\d{3})-(\d{2})-(\d{2})/g;
//   const result3 = regex2.exec('My phone number is: 123-123-12-12.');
//   console.log(result3);
// }

// {
//   const regex2 = /(\d{4})\D(\d{4})-(\d{2})/g;
//   const result3 = regex2.exec('My phone number is: 1234-1234-12.');
//   console.log(result3);
// }