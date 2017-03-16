var Employee = function(name, level, years) {
	this.name = name;
	this.level = level;
	this.years = years;

	this.getBaseSalary = function() {
		switch(level) {
			case 'Intern':
				return 40000;
			case 'Associate':
				return 60000;
			case 'Manager':
				return 80000;
			case 'Executive':
				return 100000;
			case 'Director':
				return 120000;
		}
	};

	this.getBenefits = function() {
		this.baseSalary = this.getBaseSalary();
		switch(years) {
			case('0-2'):
				return 0;
			case('3-4'):
				return this.baseSalary * 0.2;
			case('5-6'):
				return this.baseSalary * 0.4;
			case('7-8'):
				return this.baseSalary * 0.6;
			case('above 8'):
				return this.baseSalary * 0.8;
		}
		// if (this.years < 3) {
		// 	return 0;
		// }
		// else if (this.years < 5) {
		// 	return this.baseSalary * 0.2;
		// }
		// else if (this.years < 10) {
		// 	return this.baseSalary * 0.3;
		// }
		// else {
		// 	return this.baseSalary * 0.5;
		// }
	};

	this.salary = this.getBaseSalary() + this.getBenefits();

	this.getSalaryReport = function() {
	  return this.name + " earns N" + this.salary.toString() + " monthly. This includes a Basic Salary of N" + this.getBaseSalary().toString() + " and N" + this.getBenefits().toString() + " as benefits.";
	};
	
	this.salaryReport = this.getSalaryReport();
};

// var ray= new Employee("Ray", "manager", 7);
// console.log(ray.salaryReport);


var button= document.getElementById("submit");

function validate(name){
	var clean = true;
  for (var i = 0; i < name.length; i++) {
    if (!Boolean(name[i].match(/[a-zA-Z]|\s|-/g))) {
      clean = false;
    }
	};
	return clean;
};

var properName = function(name) {
	name = name.split(" ");
	proper = [];
	for (var i = 0; i < name.length; i++) {
		var first = name[i][0].toUpperCase();
		proper.push(name[0].toUpperCase() + name.slice(1).toLowerCase());
	}
	return proper.join(" ");
}

function displayDetails(){
  var name = document.getElementById("name").value, 
  years = document.getElementById("years").value,
  level = document.getElementById("cadreSelection").value;    
  // console.log("Clicked");
  // console.log(names, years, level);
  if (!name || !level || !years){
      alert( "you missed filling a detail or some details");
  }else if (!validate(name)){        
      alert( "Please input a proper name");          
  }else{
  	// name = properName(name);
    document.getElementById("report-name").innerHTML= "Name: " + name;
    document.getElementById("report-cadre").innerHTML="Level: " + level;
    document.getElementById("report-years").innerHTML= "Years Of Experience: " + years + " years";
    var person = new Employee(name, level, years);
    document.getElementById("report-summary").innerHTML= "Salary summary: " + person.salaryReport;
    console.log(name);
    document.getElementById("report").style.display="block";
  }
}

button.addEventListener("click", displayDetails, false);