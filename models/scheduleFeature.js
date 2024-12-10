module.exports = (sequelize, DataTypes) => {
    const ScheduleFeature = sequelize.define('ScheduleFeature', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        scheduleId: { type: DataTypes.INTEGER, allowNull: false, unique: false },
        featureId: { type: DataTypes.INTEGER, allowNull: false, unique: false},
        featureType: { 
            type: DataTypes.ENUM('requested', 'real'), 
            allowNull: false 
        }
    }, { 
        tableName: 'ScheduleFeature', 
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['scheduleId', 'featureId', 'featureType'] 
            }
        ]
    });

    ScheduleFeature.associate = models => {
        ScheduleFeature.belongsTo(models.Schedule, { foreignKey: 'scheduleId', as: 'schedule' });
        ScheduleFeature.belongsTo(models.Feature, { foreignKey: 'featureId', as: 'feature' });
    };

    return ScheduleFeature;
};
