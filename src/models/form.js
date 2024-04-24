const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("form", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    type: {
        type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Grado', 'Pregrado', 'Maestría']]
    }},
    program: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    equivalency: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, 
        validate: {
          isBoolean: true 
        }
    },
    modality: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['ED', 'EDH']]
    }},
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    whatsapp: {
        type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
    }},
    branch: {
        type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Mar del Plata', 'Santa Teresita', 'Necochea', 'Villa Gesell']]
    }},
    
    
  });
};