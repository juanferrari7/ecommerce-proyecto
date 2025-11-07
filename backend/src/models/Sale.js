import { DataTypes } from "sequelize";

const Sale = (sequelize) => {
  return sequelize.define(
    "Sale",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "sales",
      timestamps: true,
      underscored: true,
    }
  );

};

export default Sale;