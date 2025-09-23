import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: "categories",
      timestamps: true,
      underscored: true,
    }
  );

  return Category;
};
