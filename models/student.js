module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        number: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },{ tableName: 'Student', timestamps: false });

        Student.associate = models => {
        Student.belongsTo(models.ClassGroup, { foreignKey: 'classGroupId', as: 'classGroup' });
    };

    return Student;
};
