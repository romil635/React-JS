{
    const list = [{
        Mobile:{
            Mobile1:{
                Model: "oppo",
                Price: "30000",
            },
            Mobile2:{
                Model: "Iphone",
                Price: "14000",
            },
            Mobile3:{
                Model: "Samsung",
                Price: "10000",
            },
            Mobile4:{
                Model: "Pixel",
                Price: "80000",
            },
            Mobile5:{
                Model: " one push",
                Price: "40000",
            }
        },
        Tour:{
            Tour1:{
                Name: "kedarnatha",
                Price: "20000",
            },
            Tour2:{
                Name: "rameshwaram",
                Price: "23000",
            },
            Tour3:{
                Name: "somnath",
                Price: "7000",
            },
            Tour4:{
                Name: "dwarka",
                Price: "8000",
            },
            Tour5:{
                Name: "girnar",
                Price: "5000",
            }
        },
        frutas:{
            frutas1:{
                Name: "apple",
                Price: "70",
            },
            frutas2:{
                Name: "grapes",
                Price: "80",
            },
            frutas3:{
                Name: "cherry",
                Price: "120",
            },
            frutas4:{
                Name: "ciwi",
                Price: "150",
            },
            frutas5:{
                Name: "pineapple",
                Price: "60",
            }
        },
        company :{
            company1:{
                Name: "Lenovo",
                Price: "45000",
            },
            company2:{
                Name: "Hp",
                since: "75000",
            },
            company3:{
                Name: "Macbook",
                since: "80900",
            },
            company4:{
                Name: "Dell",
                since: "65000",
            },
            company5:{
                Name: "Asus",
                since: "70000",
            }
        },
       Car:{
            Car1:{
                Model: "Chevelle",
                Price: "$140000",
            },
            Car2:{
                Model: "Mustang",
                Price: "$391450",
            },
            Car3:{
                Model:  "Shelby",
                Price: "$328900",
            },
            Car4:{
                Model: "Blazer",
                Price: "$109945",
            },
            Car5:{
                Model: "Corvette",
                Price: "$119500",
            }
        }
    }]

    const input = prompt("Enter This Name Mobile, Tour,frutas,company ,car For Full List: ");
    
    if(input == "Mobile"){
        console.log("Mobile",list[0]["Mobile"]);
    }
    else if(input == "Tour"){
        console.log("Tour",list[0]["Tour"]);

    }
    else if(input == "Treak"){
        console.log("Treak",list[0]["frutas"]);

    }
    else if(input == "Bike"){
        console.log("Bike:",list[0]["company"]);

    }
    else if(input == "Car"){
        console.log("Car:" ,list[0][""]);
    }
    else{
        console.log("Please! Refresh The Page and Enter Valid Input For Result.");
    }

}