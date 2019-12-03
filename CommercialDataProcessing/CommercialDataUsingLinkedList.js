var fs = require('fs');
var read = require('readline-sync');
var utility = require('../../Order and UnOrder LinkedList/Utility')
var list  = new utility.LinkedList();



//Read detail from address book file.


class CommercialData 
{
    constructor()
    {
        var content = fs.readFileSync('CompanyFile.json');
        this.data=JSON.parse(content)
        console.log("Read From File " + this.data.ListOfCompany);
        this.lenghtOfCompany = this.data.ListOfCompany.length;
        
        console.log("Total company are  "+this.lenghtOfCompany);
        
    }
    companyInfo()
    {
        console.log("\n1 Add Company \n2 Remove company \n3 Print List of Company \n4 Write To File ");
        console.log();
        var input = read.questionInt("Enter what you want ? ");
        switch(input)
        {
            case 1:
                this.addCompany();
                this.companyInfo();
                break;
            case 2:
                this.deleteCompany();
                this.companyInfo();
                break;
            case 3:
                this.displayList();
                this.companyInfo();
                break;
            case 4:
                this.writeInFile();
                this.companyInfo();
                break;
            default:
                console.log("Enter valid input . ");
                    
        }

    }
    addCompany()
    {
        console.log("Now addding the new company in linked lis ");
        var name = read.question("Enter company name : ");
        var shareno = read.questionInt("Enter company share number : ");
        var symbol = read.question('Enter company symbol : ');
        var price = read.questionInt("Enter share price : ");
        let newCompany=
           { name:name,
            shareno:shareno,
            symbol:symbol,
            price:price

           }
           //fs.writeFileSync('CompanyFile.json',JSON.stringify(this.data));
           fs.writeFileSync('CompanyFile.json',JSON.stringify(this.data));
           list.addNode(newCompany);

           console.log("Data added ");


    }
    deleteCompany()
    {
        var deleleCom = read.question("Enter Company name for deleting purpose ");
                    for(let i=0; i<this.lenghtOfCompany; i++)
                    {
                        console.log("Name "+this.data.ListOfCompany[i])
                        if(this.data.ListOfCompany[i].name == deleleCom)
                        {
                            var index = this.data.ListOfCompany.indexOf(this.data.ListOfCompany[i]);
                            //Splice vai index
                            this.data.ListOfCompany.splice(index,1);
                            fs.writeFileSync('CompanyFile.json',JSON.stringify(this.data));
                            this.companyInfo();
                        }
                    }

    }
    displayList()
    {
        console.log("Hello")
        var current=list.head;
        while (current !== null)
         {
             console.log("hi")
            console.log("\nName Of the company:" + current.this.data.ListOfCompany.name);
            console.log("Share number  of the company:" + current.this.data.shareno);
            console.log("Symbol of share:" + current.this.data.symbol);
            console.log("Price of share : " + current.this.data.price);
            current = current.next;
        }

    }
    writeInFile()
    {

    }
}
var commercial = new CommercialData();
commercial.companyInfo();