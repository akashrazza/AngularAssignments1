import { Component } from '@angular/core';
import { RESTService } from './rest.service';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-Assignment';
  iNumber = 500;
  iString = "test";
  iObject = {uid:"raja",pass:"admin"};
  policy = {policyNo:23, policyHoldersName:"raja", AmountOnMaturity:10000, Nominee:"test", Monthly_EMI : 10000, duration:"5yrs"};
  image_link = './assets/test1.png';
  data_binding = '';
  is_disable = false;
  enable_button(){
    this.is_disable = true;
  }
  disable_button(){
    this.is_disable = false;
  }

  verify_email(data:string){
    alert(`provide email is verified ${data}`);
  }

  verify_phone(data:string){
    if(data.length!==10){
      alert("number must be 10 digit");
    }
  }
  uid='';
  pass=''
  validate_user(){
    if(this.uid=='raja' && this.pass=='admin'){
      alert("validate user");
    }
    else{
      alert("Invalid User");
    }
  }
  parent_name="Parent Name";
  // parent_object = 

  bdiv_color=true;
  Change_backgroundColorQ6(){
    this.bdiv_color=!this.bdiv_color;
  }

  Q7textcolor = 'green';

  Q8textcolor='green';
  Q8textsize = '30';
  Q8textbackgroundcolor='red';
  Q8textalign='end';
  Q8textweight='30';

  Q9username='';
  Q9password='';

  bQ10bkc=false;
  bQ10c=false

  Q10event(){
    this.bQ10bkc=!this.bQ10bkc;
    this.bQ10c = !this.bQ10c;
  }

  obj= [{uid:101,name:"test"},
  {uid:102,name:"test2"},
  {uid:103,name:"test3"},
  {uid:104,name:"test4"},
  {uid:105,name:"test5"},
  {uid:106,name:"test6"},
  {uid:107,name:"test7"}]


  obj14 = [
    {EmpId:1, Name:'test1', dept:'finance', designation:'ceo', Location:'india'},
    {EmpId:2, Name:'test2', dept:'finance', designation:'ceo', Location:'india'},
    {EmpId:3, Name:'test3', dept:'dev', designation:'developer', Location:'india'},
    {EmpId:4, Name:'test4', dept:'finance', designation:'ceo', Location:'us'},
    {EmpId:5, Name:'test5', dept:'finance', designation:'president', Location:'india'},
    {EmpId:6, Name:'test6', dept:'dev', designation:'ceo', Location:'india'},
    {EmpId:7, Name:'test7', dept:'finance', designation:'developer', Location:'canada'},
  ]
  blastlogin = true;
  changeblastlogin(){
    this.blastlogin=!this.blastlogin;
  }
  Q71textcolor='green';
  Q71textsize=30;

  D3Q1str = 'test';
  D3Q2str = 'test';
  D3Q3int = 0;

  D3Q4date = Date.now();
  D3Q1date_obj = new Date();
  D3Q1date_str = new Date().toString();

  D3Q5date = Date.now();

  D3Q6obj = {empid:101,name:'test',salary:1000}

  D3Q7insurance = {policyNo:102, policyHoldersName:'raja', AmountOnMaturity:1000, Nominee_Name:'raja', Monthly_EMI_to_be_paid:100, duration_of_the_policy:'2 year'}
  D3Q7student = {student_id:101, name:'raja', stream:'Maths', location:'Bihar', final_marks:100}

  D3Q6number = 23.43542523

  ipercent = .212121;

  strslicedata = "my name is charan";

  Q12strslicedata = "Munnar";
  starting_index = 1;
  end_index = -1;

  itemp = 0;
  itempfaren  = 0;

  strcustomuppercase = "my name is charan";

  nameString = ''

  users= [
    {
      firstName:'Jhon',
      lastName:'Doe',
      dept:'Dev',
      salary : 1000,
      doj: new Date('2015-12-11')
    },
    {
      firstName:'Amy',
      lastName:'Watson',
      dept:'HR',
      salary : 3000,
      doj: new Date('1915-01-22')
    },
    {
      firstName:'Shristi',
      lastName:'Sharma',
      dept:'IT',
      salary : 2422,
      doj: new Date('2010-02-07')
    },
  ]

  Adduser(){
    this.users.push({
      firstName:'Alia',
      lastName:'Bhatt',
      dept:'IT',
      salary : 2422000,
      doj: new Date('2015-09-13')
    })
    // this.users=this.users;
  }
  Reset(){
    this.nameString='';
  }


  pure_data = 2;
  Impure_data = 1;

  constructor(private restservice  : RESTService){}
  header = ['id','First Name','Last Name','Email','City']
  ngOnInit(){ this.read_data()}
  user_array : User[] = []
  read_data (){
    this.restservice.getdata().subscribe(
      (data:any)=>{this.user_array=data},
      (error:any)=>{console.log(error)}
    )
  }
  adddata(){
    var userobj = new User(11,'ets','kumar','test@tes.com','siwan');
    this.restservice.adddata(userobj).subscribe(
      (data)=>{this.read_data();},
      (error)=>{console.log(error)}
    )
  }
  id_user = ''
  delete(){
    this.restservice.deletdata(this.id_user).subscribe(
      (data)=>{this.read_data()},
      (error)=>{console.log(error)}
    )
  }
}



