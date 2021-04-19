const c = console.log;
c("Objetos Basico!!");

const noti = new Notification("Hey you!!");
c("Notification data", noti.body);

{
  function Person(name, lastName, age, gender, oneHobby) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.oneHobby = oneHobby;
    this.bio = function () {
      return (
        this.name +
        " " +
        this.lastName +
        " is a " +
        this.gender + ' ' + this.age +
        " years old person and likes " +
        this.oneHobby
      );
    };
  }
  const person1 = new Person('Perico', 'Martinez', 45, 'male', 'playing drums');
  c(person1.bio());
}

{
    const person = new Object();
    person.name = 'Yerbita';
    person.sayHi = function(){
        c('Hi, I\'m', this.name);
    }
    person.sayHi();
}

{
    const person = new Object({
        name: 'Jhon',
        age: 40,
        bio: function(){
            c('Hi I\'m', this.name, 'and I\'m', this.age)
        }
    })
    person.bio();

    const person2 = Object.create(person);
    person2.name = 'Toshi';
    person2.bio();
    person.bio();
}


