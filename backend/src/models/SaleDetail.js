import { DataTypes } from "sequelize";

const SaleDetail = (sequelize) => {
  return sequelize.define(
    "SaleDetail",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      tableName: "sale_details",
      timestamps: false,
      underscored: true,
    }
  );

};

export default SaleDetail;