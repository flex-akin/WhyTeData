module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("Blog", {

        Id :{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            
        },
        Topic :{
            type: DataTypes.STRING,
           
        },
        Snippet :{
            type: DataTypes.STRING,
           
        },
        Author :{
            type: DataTypes.STRING,
        },

        MinsRead :{
            type: DataTypes.STRING,
           
        },

        Image :{
            type: DataTypes.STRING,
          
        },
        content :{
            type: DataTypes.STRING,
          
        }


    })
    return Blog
}