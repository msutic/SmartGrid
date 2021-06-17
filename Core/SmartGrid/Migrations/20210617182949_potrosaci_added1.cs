using Microsoft.EntityFrameworkCore.Migrations;

namespace SmartGrid.Migrations
{
    public partial class potrosaci_added1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Potrosaci",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Prezime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ulica = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Grad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Broj = table.Column<int>(type: "int", nullable: false),
                    Broj_telefona = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Tip = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Prioritet = table.Column<int>(type: "int", nullable: false),
                    Postanski_broj = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Potrosaci", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Potrosaci");
        }
    }
}
