// class zaposleni{
//     constructor(
//         id_zaposlenog, //id
//         ime,
//         prezime,
//         mail,
//         tip
//     )
// }

const {
    Model
} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Zaposleni extends Model {
        static associate({Rezevacija}) {
            // this.hasMany(Rezevacija, {foreignKey: 'korisnikId'});
        }

    }

    Zaposleni.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prezime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        tip: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize
    });
    return Zaposleni;
};