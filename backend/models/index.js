import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres"
  }
);

const models = {
  Note: sequelize.import("./notes")
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});
const note = (sequelize, DataTypes) => {
  const Note = sequelize.define("note", {
    text: DataTypes.STRING
  });
  return Note;
};

export default note;

export { sequelize };
export default models;
