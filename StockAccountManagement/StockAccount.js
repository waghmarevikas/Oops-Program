var read = require('readline-sync');
var fs = require('fs');
var utility = require('../StockAccountManagement/Utility');
var totalStock;
class StockManager
{
    constructor()
    {
        var stockfile = fs.readFileSync('StockFile.json');
        this.data = JSON.parse(stockfile);
        console.log("Data is "+this.data.Stock);
         this.lenghtOfStock = this.data.Stock.length;
        console.log("Lenght is : " + this.lenghtOfStock);
        
    }
    stockMenu()
    {
        console.log("\n1 Stock Report \n2 Information of spacific Stock \n3 Stock Total ");
        var input = read.questionInt("Enter your choice : ")
        console.log();
        
        switch(input)
        {
            case 1:
                    console.log("Stock Report is : ")
        
                    for(let i=0; i<this.lenghtOfStock; i++)
                    {
                        console.log("Stock name : "+this.data.Stock[i].name);
                        console.log("Stock Number : "+this.data.Stock[i].number);
                        console.log("Stock Price : "+this.data.Stock[i].price);
                        console.log();
                        
                    }
                     this.stockMenu();
                     break;
            case 2:
                    console.log("Specific Report is : ");
                    var specific = read.question("Enter specific name/number/price ");
                    for(let i=0; i<this.lenghtOfStock; i++)
                    {
                        
                        if(this.data.Stock[i].name == specific)
                        {
                            console.log("Specific is : ");
                            console.log(specific);
                        }
                        if(this.data.Stock[i].number == specific)
                        {
                            console.log("Specific is : ");
                            console.log(specific);
                        }
                        if(this.data.Stock[i].price == specific)
                        {
                            console.log("Specific is : ");
                            console.log(specific);
                        }
                    }
                    this.stockMenu();
                    break;
                case 3:
                    console.log("Total Value of Stock ")
                    var totalvalue=0;
                    for(let i=0; i<this.lenghtOfStock; i++)
                    {
                        if(this.data.Stock[i].price)
                        {
                            totalvalue = totalvalue+this.data.Stock[i].price;
                        }
                    }
                    console.log("Value is : "+totalvalue);

                
        }

    }
}
var inventory = new StockManager();
inventory.stockMenu();