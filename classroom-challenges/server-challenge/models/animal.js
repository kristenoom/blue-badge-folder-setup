module.exports = function(sequelize, DataTypes){
  return sequelize.define('animal', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    legNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    predator: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })
}