@echo off
title Configuring Prisma...


echo Formating schema.prisma file...
npx prisma format
cls

echo Removing unwanted folders...
rmdir ./generated
rmdir ./prisma/migrations
cls

echo Generating Prisma...
npx prisma generate
cls


echo Migrating db...
npx prisma migrate --name init
cls

echo Openning Prisma Studio...
npx prisma Studio
cls

echo Waiting for prisma Studio to be closed...
echo Job ended...

pause
exit