import { Enum } from "/enum/meteor/jagi:astronomy";

export const Language = Enum.create({
  name: "Language",
  identifiers: {
    EN: 0,
    FR: 1,
  },
});

export const LANGUAGE = {
  EN: "English",
  FR: "French",
};
