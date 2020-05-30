using Microsoft.EntityFrameworkCore.Migrations;

namespace Academy.API.Migrations
{
    public partial class fsdfsdfsdfsd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OptionClasses_Classes_ClassId",
                table: "OptionClasses");

            migrationBuilder.RenameColumn(
                name: "ClassId",
                table: "OptionClasses",
                newName: "Class_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_OptionClasses_Classes_Class_Id",
                table: "OptionClasses",
                column: "Class_Id",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OptionClasses_Classes_Class_Id",
                table: "OptionClasses");

            migrationBuilder.RenameColumn(
                name: "Class_Id",
                table: "OptionClasses",
                newName: "ClassId");

            migrationBuilder.AddForeignKey(
                name: "FK_OptionClasses_Classes_ClassId",
                table: "OptionClasses",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
