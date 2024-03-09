/*  JavaScript Date Objects  */

// In JavaScript, date and time are represented by the Date object. The Date object provides the date and time information and also provides various methods.

// A JavaScript date defines the EcmaScript epoch that represents milliseconds since 1 January 1970 UTC. This date and time is the same as the UNIX epoch (predominant base value for computer-recorded date and time values).

// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

// The epoch, timestamps, and invalid date
// A JavaScript date is fundamentally specified as the time in milliseconds that has elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC (equivalent to the UNIX epoch). This timestamp is timezone-agnostic and uniquely defines an instant in history.

// Note: While the time value at the heart of a Date object is UTC, the basic methods to fetch the date and time or its components all work in the local (i.e. host system) time zone and offset.

// The maximum timestamp representable by a Date object is slightly smaller than the maximum safe integer (Number.MAX_SAFE_INTEGER, which is 9,007,199,254,740,991). A Date object can represent a maximum of ±8,640,000,000,000,000 milliseconds, or ±100,000,000 (one hundred million) days, relative to the epoch. This is the range from April 20, 271821 BC to September 13, 275760 AD. Any attempt to represent a time outside this range results in the Date object holding a timestamp value of NaN, which is an "Invalid Date".

// As a UTC time, it is midnight at the beginning of January 1, 1970, UTC,
// As a local time in New York (UTC-5), it is 19:00:00 on December 31, 1969.


/*

new Date() 
new Date(year,month)
new Date(date string)
new Date(milliseconds)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)

*/


// let Date1 = new Date()
// console.log(Date1)

// let Date2 = new Date("03-17-2002")
// console.log(Date2)

// let Date3 = new Date(2023, 4)
// console.log(Date3)

// let Date4 = new Date(2023, 4, 26)
// console.log(Date4)

// let Date5 = new Date(2023, 4, 26, 16)
// console.log(Date5)

// let Date6 = new Date(2023, 4, 26, 16, 12)
// console.log(Date6)

// let Date7 = new Date(2023, 4, 26, 16, 12, 59)
// console.log(Date7)

// let Date8 = new Date(120000)
// console.log(Date8);


/* javascript ISO standard time */

// { 
//     const dates = new Date(2023, 3, 16, 6, 15, 20)
//     console.log(dates)
//     console.log(dates.toString())
//     console.log(dates.toDateString())
//     console.log(dates.toUTCString())
//     console.log(dates.toISOString())
// }

/* JavaScript Date Formats */

/* ISO Date , Short Date  , Long Date */

// {
//     const dates = new Date("2024")
//     console.log(dates)
// }

/* ShortDate */

{
    // const dates = new Date("03/25/2023")
    // console.log(dates)
}

/* LongDate */

// {
//     const dates = new Date("march 17 2012")
//     console.log(dates)
// } 

// {
//     const dates = new Date("17 march 2023")
//     console.log(dates)
// }

// /*  Date Input - Parsing Dates */

// {
//     let msec = Date.parse("March 17, 2002")
//     console.log(msec)
// }


/* JavaScript Get Date Methods 

getFullYear() Get year as a four digit number (yyyy)
getMonth() Get month as a number (0-11)
getDate() Get day as a number (1-31)
getDay() Get weekday as a number (0-6)
getHours() Get hour (0-23)
getMinutes() Get minute (0-59)
getSeconds() Get second (0-59)
getMilliseconds() Get millisecond (0-999)
getTime() Get time (milliseconds since January 1, 1970)

*/


// let Date9  = new Date()
// console.log(Date9)

// let Date10  = Date9.getFullYear()
// console.log(Date10)

// let Date11 = Date9.getMonth()
// console.log(Date11)

// let Date12 = Date9.getDate()
// console.log(Date12)

// let Date13  = Date9.getDay()
// console.log(Date13)

// let Date14 = Date9.getHours()
// console.log(Date14)

// let Date15 = Date9.getMinutes()
// console.log(Date15)

// let Date16 = Date9.getSeconds()
// console.log(Date16)

// let Date17  = Date9.getMilliseconds()
// console.log(Date17)

// let Date18 = Date9.getTime()
// console.log(Date18)


// /*  JavaScript Set Date Methods 

// setDate() Set the day as a number (1-31)
// setFullYear() Set the year (optionally month and day)
// setHours() Set the hour (0-23)
// setMilliseconds() Set the milliseconds (0-999)
// setMinutes() Set the minutes (0-59)
// setMonth() Set the month (0-11)
// setSeconds() Set the seconds (0-59)
// setTime() Set the time (milliseconds since January 1, 1970)

// */

// let Date19 = new Date()
// console.log(Date19)

// let Date20 = Date19.setFullYear(2020)
// console.log(Date20)
// console.log(Date19)

// let Date21  = Date19.setDate(29)
// console.log(Date21)

// let Date22 = Date19.setHours(45)
// console.log(Date22)

// let Date23  = Date19.setMonth(12)
// console.log(Date23)




