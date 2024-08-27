(() => {

    //sin aplicar principio de responsabilidad unica
    type Gender = 'M'|'F';

    class Person{
        // this way to use the class is some long an difficult
        // public name: string;
        // public gender: Gender;
        // public birthdate: Date;

        // constructor( name:string, gender: Gender, birthdate:Date){
        //     this.name= name;
        //     this.gender = gender;
        //     this.birthdate = birthdate;
        // }
        // this way is easy to read and short 
        constructor(
            public name:string,
            public gender:Gender,
            public birthdate:Date
        ){}


    }

    class User extends Person{
        public lastAccess:Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender:Gender,
            birthdate:Date,
        ){
            super( name,gender,birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User{
        constructor(
            public workingDirectory: string,
            public lasOpenFolder: string,
            email:string,
            role:string,
            name:string,
            gender:Gender,
            birthdate:Date
        ){
            super(email,role,name,gender,birthdate);
        }

    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'ernesto@gmail.com',
        'admin',
        'ernesto',
        'M',
        new Date('2000-11-27')
    );
    console.log({userSettings});


    
})();