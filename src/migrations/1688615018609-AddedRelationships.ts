import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedRelationships1688615018609 implements MigrationInterface {
    name = 'AddedRelationships1688615018609'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" ADD "userIdId" integer`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_39a75f0ad7d19e3f1238d6a4e9a" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_39a75f0ad7d19e3f1238d6a4e9a"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "userIdId"`);
    }

}
