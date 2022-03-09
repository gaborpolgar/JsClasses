class szemely {
    #lastname;
    firstname;
    eletkor;
    hobby;

    constructor(lastname, firstname, eletkor, hobby) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.eletkor = eletkor;
        this.hobby = hobby;
    }

    eletkora() {
        return this.eletkor;
    }

    teljesnev() {
        return this.lastname + " " + this.firstname;
    }
    getHobby() {
        return this.hobby;
    }
    setHobby(hobby) {
        this.hobby = hobby;
    }

}