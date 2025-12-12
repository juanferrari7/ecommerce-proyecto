import { DataTypes } from "sequelize";

const Product = (sequelize) => {
  return sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "categories",
          key: "id"
        }
    }
    },
    {
      tableName: "products",
      timestamps: true,
      underscored: true,
    }
  );
};

export default Product;