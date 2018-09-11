let rolesAllowed = {
    values: ['ROLE_ADMIN', 'ROLE_USER'],
    message: '{VALUE} is not a role allowed'
};

module.exports = {
    name: {
        type: String,
        required: [true, 'The name is necesary']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'The email is necessary']
    },
    password: {
        type: String,
        required: [true, 'The password is necessary']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'ROLE_USER',
        enum: rolesAllowed
    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
};