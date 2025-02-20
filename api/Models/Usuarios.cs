using Microsoft.EntityFrameworkCore;

namespace tutorial.Models
{
    [Keyless]
    public class Usuarios
    {
        public required string Usuario { get; set; }
        public required int Codigo { get; set; }
    }
}
