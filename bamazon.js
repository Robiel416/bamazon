var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
        host: "localhost",    
        port: 3306,
        user: "root",
        password: 'bamazonHW123',
        database: "bamazon_db"
})

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
    makeTable();
})


var makeTable = function(){
    connection.query("SELECT * FROM products", function(err,res){
        for (var i=0; i<res.length; i++){
            console.log(res[i].itemid+" || "+res[i].productname+" || "+res[i].departmentname+" || "+res[i].price+ " || "+res[i].stockquantity+ "\n");
        }
    customerPrompt(res);
    })
}


var customerPrompt = function(res){
    inquirer.prompt([{
        type: 'input',
        name: 'choice',
        message: "What would you like to purchase?"
    }]).then(function(answer){
        var correct = false;
        for(var i=0; i<res.length; i++){
            if(res[i].productname==answer.choice){
                correct=true;
                var product=answer.choice;
                var id=i;
                inquirer.prompt({
                    type:'input',
                    name:"quantity",
                    message:"How many would you like to buy?",
                    validate: function(value){
                        if(isNaN(value)==false){
                            return true;
                        } else {
                            return false;
                        }
                    }
                }).then(function(answer){
                    if((res[id].stockquantity-answer.quantity)>0){
                        connection.query("UPDATE products SET stockquantity='"+(res[id].stockquantity-answer.quantity)+"' WHERE productname='"+product+"'", function(err,res2){
                            console.log("Product purchased. Total Price: " +answer.price*answer.quantity);
                            makeTable();
                        })
                    } else {
                        console.log("Insufficient quantity!");
                        customerPrompt(res);
                    }
                })
            }
        }
        if(i==res.length && correct==false){
            console.log("Sorry, not a valid selection.");
            customerPrompt(res);
    }
    })
}
