
var fs = require('fs');
var report = fs.readFileSync('StockFile.json')
this.stockObj = JSON.parse(report);
this.lenghtOfStock = this.stockObj.Stock.length;
var read = require('readline-sync');
module.exports =
{
    stockReport()
    {
        
        //console.log(" Length is "+this.lenghtOfStock)
        

    },
    specificReport()
    {
        console.log('Specific report is : ');
        var specifi = read.question("Enter Spacific name : ");
        for(let i=0; i<lenghtOfStock; i++)
        {
            if(this.stock)
            {

            }
        }


    },
    

}