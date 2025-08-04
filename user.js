class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayInfo() {//custom method
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}

const user1 = new User("Jayathu", "shjayathusanka@gmail.com");
user1.displayInfo();
 


// const user1 = new User("JJJ", "JJJ@gmail.com");
// const-cannot be changed
// user1-reference variable point to the object
// new User(...)-create a new object