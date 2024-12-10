module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        classGroupId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        studentNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true // Validate email format
            }
        }
    }, {
        tableName: 'Student',
        timestamps: false // Disable createdAt and updatedAt timestamps
    });

    Student.associate = models => {
        Student.belongsTo(models.ClassGroup, {
            foreignKey: 'classGroupId',
            as: 'classGroup'
        });
    };

    return Student;
};
