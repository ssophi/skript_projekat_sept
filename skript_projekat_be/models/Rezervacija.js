// class rezervacija{
//     constructor(
//         id_rezervacija, //id
//         korisnik,
//         termin
//     )
// }


const {
    Model
} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Rezervacija extends Model {
        static associate({Myuser, Termin}) {
            this.belongsTo(Myuser, {foreignKey: 'id'});
            this.belongsTo(Termin, {foreignKey: 'id'});
        }

    }

    Rezervacija.init({
        korisnikId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        terminId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    }, {
        sequelize
    });
    return Rezervacija;
};