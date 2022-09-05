// class masaza{
//     constructor(
//         id_masaze, //id
//         tip,
//         termini,
//         masazer,
//         prostorija
//     )
// }

'use strict';
const {
    Model
} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Masaza extends Model {
        static associate({Zaposleni, Prostorija}) {
            this.belongsTo(Zaposleni, {foreignKey: 'id'});
            this.belongsTo(Prostorija, {foreignKey: 'id'});
        }
        
    }

    Masaza.init({
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        tip: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        termini: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        masazerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        prostorijaId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Masaza'
    });
    return Masaza;
};