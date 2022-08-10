module.exports = (sequelize, DataTypes) => {
    const Register = sequelize.define("Register", {

        Id :{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            
        },
        Title :{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        Date :{
            type: DataTypes.DATE,
            allowNull: false,
            validate:{
                notEmpty: true
            } 
        },
        FullName :{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            } 
        },

        OtherName :{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },

        PersonalPhoneNumber :{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },

        EmailAddress :{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },

        Company :{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },

    })
    return Register
}