var readline = require("readline-sync");
// var data;
// var next;
var fs = require("fs");

//************************ Create class Node *******************************************
//@param data take from user

class Node 
{
    
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }

}

//********************************Create LinkedList main Class **********************************

class LinkedList 
    {
        constructor(data)
        {
            this.data=data;
            this.next=null;
            this.head=null;
        }

//********************************* AddNode in LinkedList *************************************
//@param data take from user

        addNode(data)
        { 
            var first = new Node(data);
            
            var current=this.head;
            if(this.head==null)
            {
               return this.head=first;
            }
            else{
                while(current.next){
                    current = current.next;
                }
                current.next=first;
             return first=current;
            }
        }

//************************************** To ckeck List is Empty Or Not*******************************

        isEmpty()
        {
             if(this.head === null)
            {
                return true;
            }
            else
            {
                return false;
            }
            return this.head===null;
        }

//****************************************Calculate Size Of LinkedList *******************************

        size()
        {
            var current=this.head;
            var count=0;
            while(current!=null)
            {
                count++;
                current=current.next;
            }

           
            return count;
        }
        
//************************************** Add Fist In LinkedList*****************************
//@param data take from user

        addFirst(data)
        {
            var firstNode = new Node(data);
            firstNode.next=this.head;
            this.head = firstNode;
        }

//***********************************Add Lst in Linkedlist******************************
//@param data take from user

        addLast(value)
        {
            var lastNode = {data:value, next:null};
            if(this.isEmpty())
            {
                return  this.head=lastNode;
            }
            var current = this.head;
            while(current.next!=null)
            {
                current = current.next;
            }
                return current.next=lastNode;
        }
        
//****************************************Display LinkedList ********************************
//@param data take from user

        displayList()
        {
           
            var curr = this.head;
            var str = " ";
            while(curr)
            {
                str += curr.data+"-->";
                curr=curr.next;
            }

                return (str);
        } 
        displayListFile()
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

//************************************** Delete First in LinkedList*******************************

        deleteFirst()
        {
            this.head = this.head.next;
            return this.head;
        }

//************************************ Delete last Element **************************************

        deleteLast()
        {
            var lastNode = this.head;
            let previous;
            while(lastNode.next != null)
            {
                previous = lastNode;
                lastNode = lastNode.next;
            }
            previous.next=null;
        }

//********************************** Add At Specific Possition in LinkedList************************
//@param data and pos take from user

        addAtPossition(data, pos)
        {
            var newNode = new Node(data);
            var current,previous;
            current = this.current;
            if(pos==0)
            {
                newNode.next = this.head;
                this.head = newNode;
            }
            var count=0;
            current = this.head;
            while(count < pos-1)
            {
                count++;
                previous=current;
                current = current.next;

            }
            previous.next=newNode;
            newNode.next=current;

        } 

//*******************************************Delete Element in Specific possition *********************
//@param data take from user

        deletePossition(pos)
        {
            var possition = this.head;
            var previous;
            var count=0;
            while(count<pos)
            {
                count++;
                previous = possition;
                possition = possition.next;
            }
            previous.next = possition.next;
        }

        deleteNode(data)
        {
            var temp = this.head;
            var previous = null;

            if(temp.data == data)
            {
                this.head = temp.next;
                return temp.data;
            }
            while(temp!=null && temp.data!=data)
            {
                previous = temp;
                temp = temp.next;
            }
            previous.next=temp.next;

            return temp.data;
        }

//**************************************** Search Element in LinkedList *******************************
//@param kay take from user
        search(key)
        {
            var current = this.head;
            while(current!=null)
            {
                if(current.data == key)
                {
                    return current.data;
                }
                current = current.next;
            }
            return false;
        }

//**************************************** Arrange element in Ascending order using Bubble sort*****
//@param arr take from FileInput

   fileSort(arr)
    {
        //var arr = [20,40,2,50,17,39,50];
        var temp=0;
        for(var i=0; i<arr.length; i++)
        {
            console.log("Array is: "+arr[i]);
        }

        for(var i=0; i<arr.length-1; i++)
        {
            for(var j=0; j<arr.length-1-i; j++)
            {
                if(arr[j]>arr[j+1])
                {
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }

        console.log("After Sort :"+arr);
    }


    }
    
    module.exports =
    {
        LinkedList,

        input()
        {
            var read = require('readline-sync');
            return read;
        },
        readFile(fileName)
        {
            
            var fileObject = fs.readFileSync(fileName,'utf8');
            var fileArray = fileObject.trim().split(' ');
            return fileArray;
        },
        writeFile(fileName,data)
        {
            var fs = require('fs');
            fs.appendFileSync(fileName,data,'utf8');
        },

    }