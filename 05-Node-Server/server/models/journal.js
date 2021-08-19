module.exports = function (sequelize, DataTypes) {

    const Journal = sequelize.define('journal', {
        // attributes
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        entry: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        owner: {
            type: DataTypes.INTEGER
        }
    });
        // options
        return Journal;
    
}