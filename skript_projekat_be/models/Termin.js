// class Termin{
//     constructor(
//         id_termina, //id
//         dan,
//         sati_od,
//         sati_do,
//         trening,
//         masaza
//     )
// }


const {
    Model
} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Termin extends Model {
        static associate({Trening, Masaza}) {
            this.belongsTo(Masaza, {foreignKey: 'id'});
            this.belongsTo(Trening, {foreignKey: 'id'});
        }

    }

    Termin.init({
        dan: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sati_od: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sati_do: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        treningId: {
            type: DataTypes.INTEGER,
        },
        masazaId: {
            type: DataTypes.INTEGER,
        },
        slobodna: {
            type: DataTypes.INTEGER,
        }
        
    }, {
        sequelize
    });
    return Termin;
};