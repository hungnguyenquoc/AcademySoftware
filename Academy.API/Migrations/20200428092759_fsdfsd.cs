using Microsoft.EntityFrameworkCore.Migrations;

namespace Academy.API.Migrations
{
    public partial class fsdfsd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OptionClasses_Classes_ClassId",
                table: "OptionClasses");

            migrationBuilder.DropIndex(
                name: "IX_OptionClasses_ClassId",
                table: "OptionClasses");

            migrationBuilder.DropColumn(
                name: "ClassId",
                table: "OptionClasses");

            migrationBuilder.DropColumn(
                name: "StudyTime",
                table: "OptionClasses");

            migrationBuilder.AddColumn<int>(
                name: "OptionClassId",
                table: "Classes",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StudyTime",
                table: "Classes",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Classes_OptionClassId",
                table: "Classes",
                column: "OptionClassId");

            migrationBuilder.AddForeignKey(
                name: "FK_Classes_OptionClasses_OptionClassId",
                table: "Classes",
                column: "OptionClassId",
                principalTable: "OptionClasses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Classes_OptionClasses_OptionClassId",
                table: "Classes");

            migrationBuilder.DropIndex(
                name: "IX_Classes_OptionClassId",
                table: "Classes");

            migrationBuilder.DropColumn(
                name: "OptionClassId",
                table: "Classes");

            migrationBuilder.DropColumn(
                name: "StudyTime",
                table: "Classes");

            migrationBuilder.AddColumn<int>(
                name: "ClassId",
                table: "OptionClasses",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StudyTime",
                table: "OptionClasses",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OptionClasses_ClassId",
                table: "OptionClasses",
                column: "ClassId");

            migrationBuilder.AddForeignKey(
                name: "FK_OptionClasses_Classes_ClassId",
                table: "OptionClasses",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
