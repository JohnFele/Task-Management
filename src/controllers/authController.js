const User = require('../models/userModel');

//handle errors
const handleErrors = (err) => {
    // console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    if(err.code === 11000){
        errors.email = 'That email is already registered';
        return errors;
    }

    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

module.exports.signup = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }
}

// module.exports.login = async (req, res) => {
//     const { email, password } = req.params;

//     try {
//         const user = await User.create({ email, password });
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

// module.exports.logout = async (req, res) => {
//     const { email, password } = req.params;

//     try {
//         const user = await User.create({ email, password });
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }