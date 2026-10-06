CREATE TABLE "SiteEvent" (
  "id" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "path" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "SiteEvent_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "SiteEvent_type_idx" ON "SiteEvent"("type");
CREATE INDEX "SiteEvent_createdAt_idx" ON "SiteEvent"("createdAt");
