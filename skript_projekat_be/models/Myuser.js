'use strict';
const {
    Model
} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Myuser extends Model {
        static associate({Rezevacija}) {
            // this.hasMany(Rezevacija, {foreignKey: 'korisnikId'});
        }

    }

    Myuser.init({
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
        tip_clanarine: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize
    });
    return Myuser;
};