// class prostorija{
//     constructor(
//         id_prostorije, //id
//         tip,
//         broj_sale,
//         povrsina,
//         kapacitet
//     )
// }

const {
    Model
} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Prostorija extends Model {
        static associate ({Masaza}) {
            this.hasMany(Masaza,{foreignKey: 'prostorijaId'})
        }

    };
    Prostorija.init({
        tip: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        broj_sale: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        povrsina: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        kapacitet: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize
    });
    return Prostorija;
};