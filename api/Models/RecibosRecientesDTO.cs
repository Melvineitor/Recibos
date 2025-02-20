using Microsoft.EntityFrameworkCore;

namespace tutorial.Models
{
    [Keyless]
    public class RecibosRecientesDTO
    {
        //DTO = Modelo Reducido
        public int CODIGO_EMPLEADO { get; set; }
        public float CODIGO_PERIODO_NOMINA { get; set; }
        public DateTime FECHA_PAGO { get; set; }
    }
}
