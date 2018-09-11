class Users {
    constructor() {
        this.people = [];
    }

    addPeople(id, name) {
        let person = { id, name };

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

    getPeopleByRoom() {
        // Some code ..
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
    Users
};