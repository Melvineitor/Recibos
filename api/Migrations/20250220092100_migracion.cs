using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class migracion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Recibos",
                columns: table => new
                {
                    CODIGO_EMPLEADO = table.Column<int>(type: "int", nullable: false),
                    NOMBRE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CODIGO_FORMA_PAGO = table.Column<float>(type: "real", nullable: false),
                    FORMADEPAGO = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CODIGO_MEDIO_PAGO_NOMINA = table.Column<float>(type: "real", nullable: false),
                    MEDIODEPAGO = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CODIGO_COMPANIA = table.Column<float>(type: "real", nullable: false),
                    CANTIDAD = table.Column<float>(type: "real", nullable: false),
                    INGRESO = table.Column<float>(type: "real", nullable: false),
                    DEDUCCION = table.Column<float>(type: "real", nullable: false),
                    CODIGO_DEPARTAMENTO = table.Column<float>(type: "real", nullable: false),
                    CODIGO_TURNO = table.Column<float>(type: "real", nullable: false),
                    YEAR = table.Column<float>(type: "real", nullable: false),
                    MONTH = table.Column<float>(type: "real", nullable: false),
                    CLASIFICACION = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CODIGO_TIPO_EMPLEADO = table.Column<float>(type: "real", nullable: false),
                    CEDULA_NUEVA = table.Column<float>(type: "real", nullable: false),
                    SUELDO_BASE = table.Column<float>(type: "real", nullable: false),
                    CODIGO_TIPOS_NOMINA = table.Column<float>(type: "real", nullable: false),
                    FECHA_INICIAL = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FECHA_FINAL = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CODIGO_MES = table.Column<float>(type: "real", nullable: false),
                    FECHA_PAGO = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CONCEPTONOMINA = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DEPARTAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TIPOCONCEPTONOMINA = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CODIGO_PERIODOS_FISCAL = table.Column<float>(type: "real", nullable: false),
                    DESCRIPCION = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ANO = table.Column<float>(type: "real", nullable: false),
                    COMPANIA = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TIPOSNOMINA = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CODIGO_PERIODO_NOMINA = table.Column<float>(type: "real", nullable: false),
                    CODIGO_BANCO = table.Column<float>(type: "real", nullable: false),
                    BANCO = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "RecibosRecientesDTO",
                columns: table => new
                {
                    CODIGO_EMPLEADO = table.Column<int>(type: "int", nullable: false),
                    CODIGO_PERIODO_NOMINA = table.Column<float>(type: "real", nullable: false),
                    FECHA_PAGO = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Usuario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Codigo = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Recibos");

            migrationBuilder.DropTable(
                name: "RecibosRecientesDTO");

            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
