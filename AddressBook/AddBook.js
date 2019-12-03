var fs = require('fs');
var read = require('readline-sync');


//Read detail from address book file.


class AddRecordInFile 
{
    constructor()
    {
        var content = fs.readFileSync('AddressBookFile.json');
        this.data=JSON.parse(content)
        console.log(this.data);
        this.lenghtOfJSON = this.data.Peoples.length
        console.log('address book length',this.lenghtOfJSON);
    }
    menu()
    { 

        console.log(" 1. Add a person  \n2. Remove person  \n3. Edit person's info  \n4. Sort by lastName   \n5. Sort by zipCode  \n6. Display Record ");
        var input = read.questionInt("Enter what you want for operation : ");
        console.log("Now you are doing "+input+" operation");
        switch(input)
        {
            
            case 1:
                this.addNewPerson();
                break;
            case 2:
                this.deletePerson();
                break;
            case 3:
                this.editRecord();
                break;
            case 4:
                this.sortByLasName();
                break;
            case 5:
                this.sortByZipCode();
                break;
            case 6:
                this.displayRecord();
                break;
            default:
                console.log("Enter your choice");
                
                break;
        }
    }
    addNewPerson()
    {
       //var length=this.data.Peoples.length
        //console.log("mj:"+length);
        
        var _name = read.question("Enter person First name : ");
        var _last = read.question("Enter last name of person : ");
        var _city = read.question("Enter city of person : ");
        var _mob = read.questionInt("Enter mobile number of person : ");
        let temp =_mob;
        var count=0;
        while(temp!=0)
        {
            temp=parseInt(temp/10);
            count++;
        }
        if(count==10)
        {

        }
        else
        {
            console.log("Moblie number must  10 digit ");
            var _mob = read.questionInt("ReEnter mobile number of person : ");
        }
        var _zip = read.questionInt("Enter zip Code of person : ");

        //console.log(this.data.Peoples[0]);
        
        console.log("Add record in file ");
        this.data.Peoples.push({
            name:_name,
            lastname:_last,
            city:_city,
            MobNo:_mob,
            ZipCode:_zip
        })
      
        fs.writeFileSync('AddressBookFile.json',JSON.stringify(this.data));
        this.menu();
    }
    deletePerson()
    {
        var name = read.question("Enter name for deleting : ");
       
        for(var i=0; i<this.lenghtOfJSON; i++)
        {
            
            console.log("Start "+this.data.Peoples[i].name);
            
            if(this.data.Peoples[i].name == name)
            { 
                console.log('Name is '+this.data.Peoples[i].name);
                var index = this.data.Peoples.indexOf(this.data.Peoples[i]);
            
                this.data.Peoples.splice(index,1);
                fs.writeFileSync('AddressBookFile.json',JSON.stringify(this.data));
                 console.log("Now Person "+this.data.Peoples);
                this.menu();
            }
        }
        

    }
    editRecord()
    {
        var index;
        console.log("1. Edit Nmae \n2. Edit city \n3. Edit zip code \n");
        var choice = read.questionInt("Enter your choice:");
        switch (choice) {
            case 1:
                    var name = read.question("Enter old Name :");
                    
                        for (let i=0; i<this.lenghtOfJSON; i++) 
                        {
                            
                            if (this.data.Peoples[i].name == name) 
                            { 
                                console.log(this.data.Peoples[i]);
                                console.log("Name is found ")
                                index = i;
                                break;
                            }
                        }
                        var newname = read.question("Enter new name ");
                        console.log("Your new name "+ newname);
                        this.data.Peoples[i].name = newname;
                        fs.writeFileSync('AddressBookFile.json', JSON.stringify(this.data));
                        break;
            case 2:
                    var city = read.question("Enter old city name ");
                        for (let i=0; i<this.lenghtOfJSON; i++) 
                        {
                             if (this.data.Peoples[i].city == city) 
                            {
                                console.log(this.data.Peoples[i].city);
                                console.log("City is founded ");
                                index=i;
                                break;
                            }
                         }
                         var newcity = read.question("Enter new city ");
                        console.log("Your new city "+newcity);
                        this.data.Peoples[index].city=newcity;
                        fs.writeFileSync('AddressBookFile.json', JSON.stringify(this.data));
                         break;
            case 3:
                    var ZipCode = read.questionInt("Enter new zipCode:");
                        for (let i=0; i<this.lenghtOfJSON; i++) 
                        {
                            if (this.data.Peoples[i].ZipCode == ZipCode) 
                            {
                                console.log(this.data.Peoples[i].ZipCode);
                                console.log("ZipCode found ");
                                
                                break;
                            }
                         }
                         var newZipCode = read.question("Enter new name ");
                        console.log("Your new ZipCode "+newZipCode);
                        this.data.Peoples[index].ZipCode=newZipCode;
                        fs.writeFileSync('AddressBookFile.json', JSON.stringify(this.data));
                         break;
            default:
                console.log("Enter valid choice");
        }
        fs.writeFileSync('AddressBookFile.json', JSON.stringify(this.data));
        this.menu();
    }
    sortByLasName()
    {
        for (let i = 0; i < this.lenghtOfJSON; i++)
         {
            for (let j = 0; j < this.lenghtOfJSON - 1; j++)
             {

                //sorting function to arrange by lastname
                
                if (this.data.Peoples[j].lastname.localeCompare(this.data.Peoples[j + 1].lastname) == 1)
                 {
                    let temp = this.data.Peoples[j];
                    this.data.Peoples[j] = this.data.Peoples[j + 1];
                    this.data.Peoples[j + 1] = temp;
                }
            }
        }
        //console.log(this.data);
        fs.writeFileSync('AddressBookFile.json', JSON.stringify(this.data));
        this.menu();

    }
    sortByZipCode()
    {
        for (let i = 0; i < this.lenghtOfJSON; i++) {
            for (let j = 0; j < this.lenghtOfJSON - 1; j++) {

                //sorting function to arrange by lastname
                
                if ((this.data.Peoples[j].ZipCode)>(this.data.Peoples[j + 1].ZipCode)) {
                    let temp = this.data.Peoples[j];
                    this.data.Peoples[j] = this.data.Peoples[j + 1];
                    this.data.Peoples[j + 1] = temp;
                }
            }
        }
        //console.log(this.data);
        fs.writeFileSync('AddressBookFile.json', JSON.stringify(this.data));
        this.menu();

    }
    displayRecord()
    {
         //display 
    console.log("Display record from address book ");
    
        for(let i=0;i<this.lenghtOfJSON;i++)
        {
            if(i==this.lenghtOfJSON)
            {
                break;
            }
            console.log("\nFirst Name : "+this.data.Peoples[i].name);
            console.log("Last Name : "+this.data.Peoples[i].lastname);
            console.log("City of person : "+this.data.Peoples[i].city);
            console.log("Mobile No : "+this.data.Peoples[i].MobNo);
            console.log("ZipCode : "+this.data.Peoples[i].ZipCode);
            
            
        }
        
        this.menu();
    }
   
  

}
var recordObj = new AddRecordInFile();
recordObj.menu();
recordObj.addNewPerson();
recordObj.deletePerson();
recordObj.displayRecord();
recordObj.sortByLasName();
recordObj.sortByZipCode();