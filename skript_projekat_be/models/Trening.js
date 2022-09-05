// class trening{
//     constructor(
//         id_treninga, //id
//         tip,
//         termini,
//         trener,
//         prostorija
//     )
// }


const {
    Model
} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Trening extends Model {
        static associate({Zaposleni, Prostorija}) {
            this.belongsTo(Zaposleni, {foreignKey: 'id'});
            this.belongsTo(Prostorija, {foreignKey: 'id'});
        }

    }

    Trening.init({
        tipan: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        trenerId: {
            type: DataTypes.INTEGER,
        },
        prostorijaId: {
            type: DataTypes.INTEGER,
        }        
    }, {
        sequelize
    });
    return Trening;
};