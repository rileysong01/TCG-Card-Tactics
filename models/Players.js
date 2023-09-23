const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Players extends Model {}

Players.init(
  {
    id: {
      type: DataTypes.INTEGER, //why not INTEGER??
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deckID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      /* references: {
        model: 'decks',
        key: 'id',
      }, */
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'players',
  }
);

module.exports = Players;
