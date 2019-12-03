var fs = require('fs');
var read = require('readline-sync');

class CliniqueManage 
{
    constructor() 
    {
        var content = fs.readFileSync('CliniqueManagementFile.json');
        this.data = JSON.parse(content);
        this.totalDoctor=this.data.Doctor.length;
        console.log("Total doctor in clinique "+this.totalDoctor);
        this.totalPatient=this.data.Patient.length;
        console.log("Total Patient in clinique "+this.totalPatient);
        this.appointment = this.data.CliniqueAppointment.length;
        console.log("Clinique Appointment is "+this.appointment);
    }
    cliniqueInfo() 
    {
        console.log("  Clinique Management ");
        console.log("1. Search Doctor\n2. Search patient\n3. Add doctor\n4. Add patient\n5. Take appointment\n6. Check specialist \n7 Total patient in clinique \n8 Total Doctor in clinique \n9 Total Appointment ");
        var input = read.questionInt("Enter your choice:");
        switch(input)
        {
            case 1 :
                    this.searchDoctor();
                    break;
            case 2 :
                    this.searchPatient();
                    break;
            case 3 :
                    this.addDoctor();
                    break;
            case 4 :
                    this.addPatient();
                    break;
            case 5 :
                    this.takeAppointment();
                    break;
            case 6 :
                    this.specialist();
                    break;
            case 7 :
                    this.totalPatientIs();
                    break;
            case 8 :
                    this.totalDoctorIs();
                    break;
            case 9 :
                    this.totalAppointment();
                    break;
            default :
                    console.log("Enter valid input ");
        }
    
       
    }

    //Add doctor
    addDoctor() 
    {

        var drName = read.question("Enter name of the doctor:");
        var drId = read.question("Enter doctor's id:");
        var speciality = read.question("Enter doctor's speciality:");
        var availability = read.question("Enter availability time of doctor as AM, PM or Both:");

        //push doctor to the json
        this.data.Doctor.push({
            "drName": drName,
            "drId": drId,
            "speciality": speciality,
            "availability": availability,
            "NoOfAppointment": 0
        })
        fs.writeFileSync('CliniqueManagementFile.json', JSON.stringify(this.data));
        this.cliniqueInfo();
    }

    //Add patient
    addPatient() 
    {
        var pName = read.question("Enter name of the patient:");
        var pId = read.question("Enter patient's id:");
        var mobNo = read.question("Enter patient's mobile number:");
        var age = read.question("Enter patient's age:");

        //push patient to the json
        this.data.Patient.push({
            "pName": pName,
            "pId": pId,
            "mobNo": mobNo,
            "age": age
        })
        fs.writeFileSync('CliniqueManagementFile.json', JSON.stringify(this.data));
        this.cliniqueInfo();
    }

    //Take appointment
    takeAppointment() 
    {
        var drName = read.question(" Enter doctor's name : ");
        var pName = read.question(" Enter patients name : ");
        var time = read.question(" Enter appointment time as AM, PM or Both : ");
        let i = -1
        for (let j=0; j<this.totalDoctor; j++) 
        {
            if (this.data.Doctor[j].drName == drName) 
            {
                i = j;
            }
        }
        if (i != -1) 
        {
            if (this.data.Doctor[i].NoOfAppointment < 5) 
            {
                if (this.data.Doctor[i].availability == time) 
                {
                    this.data.CliniqueAppointment.push({
                        "drName": drName,
                        "pName": pName,
                        "time": time
                    })
                    this.data.Doctor[i].NoOfAppointment++;
                    console.log("Appointment booked")
                }
                else 
                {
                    console.log("Doctor isn't available in this time")
                }
            }
            else 
            {
                console.log("Doctor's appointments are full");
            }
        }
        else 
        {
            console.log("Doctor not found")
        }
        fs.writeFileSync('CliniqueManagementFile.json', JSON.stringify(this.data));
        this.cliniqueInfo();
    }

    //Serach the doctor
    searchDoctor() 
    {

        console.log("1. Search by name\n2. Search by Id\n3. Search by speciality\n4. Search by availability\n");
        var ch = read.questionInt("Enter your choice:");
        switch (ch) 
        {
            case  1 :
                var drName = read.question("Enter name of the doctor:");
                for (let i in this.data.Doctor) 
                {
                    if (this.data.Doctor[i].drName == drName) 
                    {
                        console.log(this.data.Doctor[i]);
                    }
                }
                break;
            case  2 :
                var drId = read.question("Enter id of the doctor:");
                for (let i in this.data.Doctor) 
                {
                    if (this.data.Doctor[i].drId == drId) 
                    {
                        console.log(this.data.Doctor[i]);
                    }
                }
                break;
            case  3 :
                var speciality = read.question("Enter speciality of the doctor:");
                for (let i in this.data.Doctor) 
                {
                    if (this.data.Doctor[i].speciality == speciality) 
                    {
                        console.log(this.data.Doctor[i]);
                    }
                }
                break;
            case  4 :
                var availability = read.question("Enter availability of the doctor:");
                for (i in this.data.Doctor) 
                {
                    if (this.data.Doctor[i].availability == availability) 
                    {
                        console.log(this.data.Doctor[i]);
                    }
                }
                break;
            default:
                console.log("Enter valid choice");
        }
        this.cliniqueInfo();
    }

    //Search patient
    searchPatient() 
    {

        console.log("1. Search by name\n2. Search by Id\n3. Search by mobile number\n");
        var ch1 = read.questionInt("Enter your choice:");
        switch (ch1) 
        {
            case  1 :
                var pName = read.question("Enter name of the patient:");
                for (let i=0; i<this.totalPatient; i++) 
                {
                    if (this.data.Patient[i].pName == pName) 
                    {
                        console.log(this.data.Patient[i]);
                    }
                }
                break;
            case  2 :
                var pId = read.question("Enter id of the patient:");
                for (let i in this.data.Patient) 
                {
                    if (this.data.Patient[i].pId == pId) 
                    {
                        console.log(this.data.Patient[i]);
                    }
                }
                break;
            case  3 :
                var mobNo = read.question("Enter mobile no of the patient:");
                for (let i=0; i<this.totalPatient; i++) 
                {
                    if (this.data.Patient[i].mobNo == mobNo) 
                    {
                        console.log(this.data.Patient[i]);
                    }
                }
                break;
            default:
                console.log("Enter valid choice");
        }
        this.cliniqueInfo();
    }

    //search Speciality
    specialist() 
    {

        let speciality = read.question("Enter speciality:");
        for (let key in this.data.doctor) 
        {
            if (this.data.doctor[key].speciality == speciality) 
            {
                console.log("Doctor name:" + this.data.doctor[key].drName);
                console.log("Availability:" + this.data.doctor[key].availability);
            } 
            else 
            {
                console.log("No doctors with this speciality");
            }
        }

        this.cliniqueInfo();
    }
    totalPatientIs()
    {
        console.log("Total patient in clinique ")
        for(let i=0; i<this.totalPatient; i++)
        {
            console.log("Name is :"+this.data.Patient[i].pName);
            console.log("pId : "+this.data.Patient[i].pId);
            console.log("Mobile no : "+this.data.Patient[i].mobNo);
            console.log("Age is : "+this.data.Patient[i].age);
            console.log();
        }
        this.cliniqueInfo();
    }
    totalDoctorIs()
    {
        console.log("Total Doctor in clinique ");
        for(let i=0; i<this.totalDoctor; i++)
        {
            console.log("Dr Name is : "+this.data.Doctor[i].drName);
            console.log("Dr ID is : "+this.data.Doctor[i].drId);
            console.log("Dr speciality : "+this.data.Doctor[i].speciality);
            console.log("Dr Availability is : "+this.data.Doctor[i].availability);
            console.log("Dr NoOfAppointment is : "+this.data.Doctor[i].NoOfAppointment);
            console.log();
        }
        this.cliniqueInfo();
    }
    totalAppointment()
    {
        console.log(" Total appoinetment is ")
        for(let i=0; i<this.appointment; i++)
        {
            console.log("Dr name : "+this.data.CliniqueAppointment[i].drName);
            console.log(" Patient name : "+this.data.CliniqueAppointment[i].pName);
            console.log("Time is : "+this.data.CliniqueAppointment[i].time);
        }
    }
}

var clinic = new CliniqueManage();
clinic.cliniqueInfo();
