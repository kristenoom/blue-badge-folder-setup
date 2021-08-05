//email store string  null=false
//password store string null=false

module.exports = function (sequelize, DataTypes) {

    const User = sequelize.define('user', {
        // attributes
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
            //unique is an optional property that means all data (in this case all emails) 
            //must be unique and you cannot have any duplicates
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
        // options
        return User;
    
}