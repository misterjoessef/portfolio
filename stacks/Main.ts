import { use, StackContext } from "sst/constructs";
import { FrontendStack } from "./FrontendStack";

export function Main({ stack, app }: StackContext) {
  app.stack(FrontendStack);

  if (app.stage !== "prod") {
    app.setDefaultRemovalPolicy("destroy");
  }

  return { app };
}
