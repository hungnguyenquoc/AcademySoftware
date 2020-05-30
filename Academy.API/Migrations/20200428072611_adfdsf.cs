using Microsoft.EntityFrameworkCore.Migrations;

namespace Academy.API.Migrations
{
    public partial class adfdsf : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Classes_OptionClasses_StudyTimeId",
                table: "Classes");

            migrationBuilder.DropIndex(
                name: "IX_Classes_StudyTimeId",
                table: "Classes");

            migrationBuilder.DropColumn(
                name: "StudyTimeId",
                table: "Classes");

            migrationBuilder.AddColumn<int>(
                name: "ClassId",
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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "StudyTimeId",
                table: "Classes",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Classes_StudyTimeId",
                table: "Classes",
                column: "StudyTimeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Classes_OptionClasses_StudyTimeId",
                table: "Classes",
                column: "StudyTimeId",
                principalTable: "OptionClasses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
