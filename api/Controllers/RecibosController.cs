using api.Models;
using api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using tutorial.Models;

namespace api.Controllers
{
    [Route("api/Recibos")]
    [ApiController]
    public class RecibosController : ControllerBase
    {
        private readonly List<string> _allowedUsers = new()
    {
        @"M3LV1N\\test",
        @"DOMAIN\\user2"
    };

        [HttpGet("access")]
        public IActionResult CheckUserAccess()
        {
            try
            {
                var identity = System.Security.Principal.WindowsIdentity.GetCurrent();
                string username = identity.Name.ToString();

                return Ok(new
                {
                    username
                });
            }
            catch (Exception ex)
            {
                return BadRequest($"Error checking access: {ex.Message}");
            }
        }
        private readonly ApplicationDBContext context;

        public RecibosController(ApplicationDBContext context)
        {
            this.context = context;
        }



        // Método que llama al stored procedure con un parámetro
        [HttpGet]
        public async Task<ActionResult<List<Recibos>>> RecibosEmpleado([FromQuery] string codEmpleado)
        {

            Console.WriteLine($"Valor recibido en codEmpleado: {codEmpleado}");
            try
            {
                var ultRecibo = await context.Recibos
                                           .FromSqlInterpolated($"EXEC UltimoReciboEmpleado @cod_empleado = {codEmpleado}")
                                           .ToListAsync();

                if (ultRecibo == null || ultRecibo.Count == 0)
                {
                    return NotFound(new { Message = $"No se encontraron recibos para el empleado con código {codEmpleado}" });
                }

                return ultRecibo;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(500, new { Message = "Error al ejecutar el procedimiento almacenado", Error = ex.Message });
            }
        }
        [HttpGet("ultimos")]
        public async Task<ActionResult<List<RecibosRecientesDTO>>> ReciboRecientesEmpleado([FromQuery] string codEmpleado)
        {
            try
            {
                var recibosRecientes = await context.RecibosRecientesDTO
                                            .FromSqlInterpolated($"EXEC ReciboRecientesEmpleado @cod_empleado = {codEmpleado}")
                                            .ToListAsync();
                if (recibosRecientes == null || recibosRecientes.Count == 0)
                {
                    return NotFound(new { Message = $"No se encontraron recibos para el empleado {codEmpleado}" });
                }
                return recibosRecientes;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(500, new { Message = "Error al ejecutar el procedimiento almacenado", Error = ex.Message });
            }
        }
        [HttpGet("mostrar-ultimos")]
        public async Task<ActionResult<List<Recibos>>> MostrarReciboRecienteEmpleado([FromQuery] string codEmpleado, DateOnly fechaPago)
        {
            try
            {
                var recibos = await context.Recibos
                                            .FromSqlInterpolated($"EXEC MostrarReciboRecienteEmpleado @cod_empleado = {codEmpleado}, @fechaPago = {fechaPago}")
                                            .ToListAsync();
                if (recibos == null || recibos.Count == 0)
                {
                    return NotFound(new { Message = $"No se encontraron recibos para el empleado {codEmpleado} con fecha {fechaPago}" });
                }
                return recibos;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(500, new { Message = "Error al ejecutar el procedimiento almacenado", Error = ex.Message });
            }
        }

    }
}



