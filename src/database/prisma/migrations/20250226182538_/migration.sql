-- CreateTable
CREATE TABLE "User" (
    "idUser" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "Group" (
    "idGroup" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userUpdatedAt" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userCreatedAt" INTEGER NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("idGroup")
);

-- CreateTable
CREATE TABLE "UserGroup" (
    "idGroup" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,

    CONSTRAINT "UserGroup_pkey" PRIMARY KEY ("idUser","idGroup")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Group_name_key" ON "Group"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Group_userUpdatedAt_key" ON "Group"("userUpdatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Group_userCreatedAt_key" ON "Group"("userCreatedAt");

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_userCreatedAt_fkey" FOREIGN KEY ("userCreatedAt") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_userUpdatedAt_fkey" FOREIGN KEY ("userUpdatedAt") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroup" ADD CONSTRAINT "UserGroup_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroup" ADD CONSTRAINT "UserGroup_idGroup_fkey" FOREIGN KEY ("idGroup") REFERENCES "Group"("idGroup") ON DELETE RESTRICT ON UPDATE CASCADE;
