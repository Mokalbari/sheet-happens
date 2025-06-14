import * as enums from "./schema/enums";
import * as relations from "./schema/relations";
import * as tables from "./schema/tables";

export const schema = {
  ...enums,
  ...tables,
  ...relations,
};
