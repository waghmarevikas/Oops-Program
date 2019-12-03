var fs = require('fs');
var read = require('readline-sync');
var utility = require('../InventoryManagerData/Utility')

//Read detail from address book file.


class InventoryDataManager
{
    constructor()
    {
        var content = fs.readFileSync('InventoryManagerFile.json');
        this.data=JSON.parse(content)
        console.log(this.data);
        this.lenghtOfRice = this.data.Rice.length
        this.lenghtOfPulses = this.data.Pulses.length;
        this.lenghtOfWheats = this.data.Wheats.length;
        console.log("Length or Rice "+this.lenghtOfRice);
        console.log("Lenght of Pulses "+this.lenghtOfRice);
        console.log("lenght of wheats "+this.lenghtOfWheats);
        //this.totleLenght = this.data.content.length;
        //console.log("Totle Leght of item "+this.totleLenght);
    }
    productMenu()
    {
        console.log("\n1 For Rice \n2 For Pulses \n3 For Wheats ")
        let input = read.questionInt("Enter your  choice ");
        switch(input)
        {
            case 1:
                this.riceData();
                break;
            case 2:
                this.pulsesData();
                break;
            case 3:
                this.wheatsData();
                break
                default:
                    console.log("Enter valid input ");
        }
    }
    
    riceData()
    {
        console.log("Now you are in Rice Inventory Manager ");
        console.log("\n1 Add inventory data \n2 Delete inventory \n3 Display Inventory Record \n4 Calculate Price ");
        var input = read.questionInt("Enter... what you want ? ");

        switch(input)
        {
            case 1:
                    var name = read.question("Enter  Rice name : ");
                    var weight = read.question("Enter Rice Weight : ");
                    var price = read.question("Enter Price pr Kg : ");
                    
                    console.log("Add record in file ");
                    this.data.Rice.push({
                        name:name,
                        weight:weight,
                        price:price,
                        
                    })
                  
                    fs.writeFileSync('InventoryManagerFile.json',JSON.stringify(this.data));
                    console.log("Data is added ");
                    this.productMenu();
                    break;
            case 2:
                    var deleletItem = read.question("Enter name for deleting purpose ");
                    for(let i=0; i<this.lenghtOfRice; i++)
                    {
                        console.log("Name "+this.data.Rice[i])
                        if(this.data.Rice[i].name == deleletItem)
                        {
                            var index = this.data.Rice.indexOf(this.data.Rice[i]);
                            //Splice vai index
                            this.data.Rice.splice(index,1);
                            fs.writeFileSync('InventoryManagerFile.json',JSON.stringify(this.data));
                            this.productMenu();
                        }
                    }
                    this.productMenu();
                    break;
            case 3:
                
                console.log(" All Rice details : ");
                console.log();
                for(let w=0; w<this.lenghtOfRice; w++)
                {
                    console.log("Rice name : "+this.data.Rice[w].name);
                    console.log("Rice Weight : "+this.data.Rice[w].weight);
                    console.log("Rice Price : "+this.data.Rice[w].price);
                    console.log();
                }
                this.productMenu();
                break;
            case 4:
                    var weight = read.questionInt("How much Kg you require ? ");
                    for(let i=0; i<this.lenghtOfRice; i++)
                    {
                        console.log("Name is "+this.data.Rice[i].name+" Price 1Kg "+this.data.Rice[i].price+" "+" Weight "+weight+"Kg Totle price is "+weight*this.data.Rice[i].price);

                    }
                    this.productMenu();
                    break

        }


    }
    wheatsData()
    {
        console.log("Now you are in Rice Inventory Manager ");
        console.log("\n1 Add inventory data \n2 Delete inventory \n3 Display Inventory Record \n4 Calculate Price ");
        var input = read.questionInt("Enter... what you want ? ");

        switch(input)
        {
        case 1:
                    var name = read.question("Enter  wheats name : ");
                    var weight = read.question("Enter wheats Weight : ");
                    var price = read.question("Enter Price pr Kg : ");
                    
                    console.log("Add record in file ");
                    this.data.Wheats.push({
                        name:name,
                        weight:weight,
                        price:price,
                        
                    })
                  
                    fs.writeFileSync('InventoryManagerFile.json',JSON.stringify(this.data));
                    console.log("Data is added ");
                    this.productMenu();
                    break;
            case 2:
                    var deleletItem = read.question("Enter name for deleting purpose ");
                    for(let i=0; i<this.lenghtOfWheats; i++)
                    {
                        //console.log("Name "+this.data.Wheats[i])
                        if(this.data.Wheats[i].name == deleletItem)
                        {
                            var index = this.data.Wheats.indexOf(this.data.Wheats[i]);
                            //Splice vai index
                            this.data.Wheats.splice(index,1);
                            fs.writeFileSync('InventoryManagerFile.json',JSON.stringify(this.data));
                            this.productMenu();
                        }
                    }
                    this.productMenu();
                    break;
            case 3:
                console.log(" All Wheats details : ");
                console.log();
                for(let w=0; w<this.lenghtOfWheats; w++)
                {
                    console.log("Wheats name : "+this.data.Wheats[w].name);
                    console.log("Wheats Weight : "+this.data.Wheats[w].weight);
                    console.log("Wheats Price : "+this.data.Wheats[w].price);
                    console.log();
                }
                this.productMenu();
                break;
            case 4:
                    var weight = read.questionInt("How much Kg you require ? ");
                    for(let i=0; i<this.lenghtOfWheats; i++)
                    {
                        console.log("Name is "+this.data.Wheats[i].name+" Price 1Kg "+this.data.Wheats[i].price+" "+" Weight "+weight+"Kg Totle price is "+weight*this.data.Wheats[i].price);

                    }
                    this.productMenu();
                    break
        }


    }
    pulsesData()
    {
        console.log("Now you are in Rice Inventory Manager ");
        console.log("\n1 Add inventory data \n2 Delete inventory \n3 Display Inventory Record \n4 Calculate Price ");
        var input = read.questionInt("Enter... what you want ? ");

        switch(input)
        {

        case 1:
                    var name = read.question("Enter  pulses name : ");
                    var weight = read.question("Enter pulses Weight : ");
                    var price = read.question("Enter pulses pr Kg : ");
                    
                    console.log("Add record in file ");
                    this.data.Pulses.push({
                        name:name,
                        weight:weight,
                        price:price,
                        
                    })
                  
                    fs.writeFileSync('InventoryManagerFile.json',JSON.stringify(this.data));
                    console.log("Data is added ");
                    this.productMenu();
                    break;
            case 2:
                    var deleletItem = read.question("Enter name for deleting purpose ");
                    for(let i=0; i<this.lenghtOfPulses; i++)
                    {
                        console.log("Name "+this.data.Pulses[i])
                        if(this.data.Pulses[i].name == deleletItem)
                        {
                            var index = this.data.Pulses.indexOf(this.data.Pulses[i]);
                            //Splice vai index
                            this.data.Pulses.splice(index,1);
                            fs.writeFileSync('InventoryManagerFile.json',JSON.stringify(this.data));
                            this.productMenu();
                        }
                    }
                    this.productMenu();
                    break;
            case 3:
                console.log();
                console.log(" All Pulses details : ");
                console.log();
                for(let w=0; w<this.lenghtOfPulses; w++)
                {
                    console.log("Pulses name : "+this.data.Pulses[w].name);
                    console.log("Pulses Weight : "+this.data.Pulses[w].weight);
                    console.log("Pulsess Price : "+this.data.Pulses[w].price);
                    console.log();
                }
                this.productMenu();
                break;
            case 4:
                    var weight = read.questionInt("How much Kg you require ? ");
                    for(let i=0; i<this.lenghtOfPulses; i++)
                    {
                        console.log("Name is "+this.data.Pulses[i].name+" Price 1Kg "+this.data.Pulses[i].price+" "+" Weight "+weight+"Kg Totle price is "+weight*this.data.Pulses[i].price);

                    }
                    this.productMenu();
                    break

        }
    }
 }
var inventory = new InventoryDataManager();
inventory.productMenu();