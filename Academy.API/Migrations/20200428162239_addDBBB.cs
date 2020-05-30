using Microsoft.EntityFrameworkCore.Migrations;

namespace Academy.API.Migrations
{
    public partial class addDBBB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OptionClasses_Classes_ClassId",
                table: "OptionClasses");

            migrationBuilder.AlterColumn<int>(
                name: "ClassId",
                table: "OptionClasses",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_OptionClasses_Classes_ClassId",
                table: "OptionClasses",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OptionClasses_Classes_ClassId",
                table: "OptionClasses");

            migrationBuilder.AlterColumn<int>(
                name: "ClassId",
                table: "OptionClasses",
                nullable: true,
                oldClrType: typeof(int));

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
