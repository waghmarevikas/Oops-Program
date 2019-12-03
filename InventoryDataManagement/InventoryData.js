var fs = require('fs');
var read = require('readline-sync');


//Read detail from address book file.


class InventoryData 
{
    constructor()
    {
        var content = fs.readFileSync('DataManagementFile.json');
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
    itemMenu()
    {
        console.log("\n1 Rice \n2 Pulses \n3 Wheats ");
        var input = read.questionInt("Enter your choice : ");

        if(input === 1)
        {
            var weight = read.questionInt("How much Kg you require ? ");
            for(let i=0; i<this.lenghtOfRice; i++)
            {
                console.log("Name is "+this.data.Rice[i].name+" Price 1Kg "+this.data.Rice[i].price+" "+" Weight "+weight+"Kg Totle price is "+weight*this.data.Rice[i].price);

            }
        }
        else if(input === 2)
        {
            var weight = read.questionInt("How much Kg you require ? ");
            for(let i=0; i<this.lenghtOfPulses; i++)
            {
                console.log("Name is "+this.data.Pulses[i].name+" Price 1Kg "+this.data.Pulses[i].price+" "+" Weight "+weight+"Kg Totle price is "+weight*this.data.Pulses[i].price);

            }
        }
        else if(input === 3)
        {
            var weight = read.questionInt("How much Kg you require ? ");
            for(let i=0; i<this.lenghtOfWheats; i++)
            {
                console.log("Name is "+this.data.Wheats[i].name+" Price 1Kg "+this.data.Wheats[i].price+" "+" Weight "+weight+"Kg Totle price is "+weight*this.data.Wheats[i].price);

            }
        }
        else
        {
            console.log("check menu list. Input is not valid  ");
        }
    }
}
var indata = new InventoryData();
indata.itemMenu();