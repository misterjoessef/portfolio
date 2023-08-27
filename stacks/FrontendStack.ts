import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { NextjsSite, use, StackContext } from "sst/constructs";
import { Duration, Stage } from "aws-cdk-lib";

import {
  CachePolicy,
  CacheQueryStringBehavior,
  CacheHeaderBehavior,
  CacheCookieBehavior,
  ResponseHeadersPolicy,
} from "aws-cdk-lib/aws-cloudfront";

export function FrontendStack({ stack, app }: StackContext) {
  const serverCachePolicy = new CachePolicy(stack, "ServerCache", {
    queryStringBehavior: CacheQueryStringBehavior.all(),
    headerBehavior: CacheHeaderBehavior.none(),
    cookieBehavior: CacheCookieBehavior.all(),
    defaultTtl: Duration.days(0),
    maxTtl: Duration.days(365),
    minTtl: Duration.days(0),
    enableAcceptEncodingBrotli: true,
    enableAcceptEncodingGzip: true,
  });

  const site = new NextjsSite(stack, "site", {
    path: "packages/web/portfolio-next-web",
    cdk: {
      server: {
        logRetention: RetentionDays.ONE_MONTH,
      },
      serverCachePolicy,
      responseHeadersPolicy: ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS,
    },
    timeout: "30 seconds",
    memorySize: "2048 MB",
    imageOptimization: {
      memorySize: "2048 MB",
    },
    customDomain:
      stack.stage === "prod"
        ? {
            domainName: "misterjoessef.com",
            domainAlias: "www.misterjoessef.com",
          }
        : undefined,
  });
  // Show the url in the output
  stack.addOutputs({
    SiteUrl: site.url || "http://localhost:3000",
    // DomainURL: auth.domain.DomainURL,
    stage: app.stage,
    xxxxxxxxxxxxxxx: "===========",
  });

  return {
    site,
  };
}
