class People {
    constructor() {
        this.people = [];
    }

    addPeople( id, name, room ){
        let person = { id, name, room };

        this.people.push(person);

        return this.people;
    }

    getPerson(id) {
        let person = this.people.filter(person => person.id === id)[0];

        return person;
    }

    getPeople() {
        return this.people;
    }

    getPeopleByRoom( room ) {
        let peopleInRoom = this.people.filter( person => {
            return person.room === room;
        });

        return peopleInRoom;
    }

    deletePerson(id) {
        let personDeleted = this.getPerson(id);

        this.people = this.people.filter(person => {
            return person.id !== id;
        });

        return personDeleted;
    }
}

module.exports = {
    People
};