using Microsoft.EntityFrameworkCore.Migrations;

namespace SmartGrid.Migrations
{
    public partial class migrationUfffffaa : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Devices_Incidents_IncidentId",
                table: "Devices");

            migrationBuilder.DropIndex(
                name: "IX_Devices_IncidentId",
                table: "Devices");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Devices_IncidentId",
                table: "Devices",
                column: "IncidentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Devices_Incidents_IncidentId",
                table: "Devices",
                column: "IncidentId",
                principalTable: "Incidents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
