(() => {

    // No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

    interface PersonProperties{
        name: string, 
        gender: Gender, 
        birthdate: Date
    }

    class Person {
        public name: string;
        public gender: string;
        public birthdate: Date;
        
        constructor({ name,gender,birthdate}: PersonProperties){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProperties{
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }
    class User extends Person {
        
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({
            email,
            role,
            name,
            gender,
            birthdate}:UserProperties
        ) {
            super( {name, gender, birthdate} );
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProperties{
        workingDirectory: string;
        lastOpenFolder  : string;
        email           : string;
        role            : string;
        name            : string;
        gender          : Gender;
        birthdate       : Date
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
            {workingDirectory,
            lastOpenFolder ,
            email,
            role,
            name,
            gender,
            birthdate}:UserSettingsProperties        
        ) {
            super({email, role, name, gender, birthdate} );
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    // const userSettings = new UserSettings(
    //     '/usr/home',
    //     '/home',
    //     'fernando@google.com',
    //     'Admin',
    //     'Fernando',
    //     'M',
    //     new Date('1985-10-21')
    // );

    // console.log({ userSettings });


})();