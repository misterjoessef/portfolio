import { SSTConfig } from "sst";
import { Main } from "./stacks/Main";

export default {
  config(_input) {
    return {
      name: "MJPortfolio",
      region: "us-west-2",
    };
  },
  stacks(app) {
    app.stack(Main);
  },
} satisfies SSTConfig;
