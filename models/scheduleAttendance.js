module.exports = (sequelize, DataTypes) => {
    const ScheduleAttendance = sequelize.define('ScheduleAttendance', {
        isAttending: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    },{ tableName: 'ScheduleAttendance', timestamps: false });

        ScheduleAttendance.associate = models => {
        ScheduleAttendance.belongsTo(models.Student, { foreignKey: 'studentId', as: 'student' });
    };

    return ScheduleAttendance;
};
