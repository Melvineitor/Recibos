using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    [Keyless]
public class Recibos
{
    public int CODIGO_EMPLEADO { get; set; }
    public string NOMBRE { get; set; } = "";
    public float CODIGO_FORMA_PAGO { get; set; }
    public string FORMADEPAGO { get; set; } = "";
    public float CODIGO_MEDIO_PAGO_NOMINA { get; set; }
    public string MEDIODEPAGO { get; set; } = "";
    public float CODIGO_COMPANIA { get; set; }
    public float CANTIDAD { get; set; }
    public float INGRESO { get; set; }
    public float DEDUCCION { get; set; }
    public float CODIGO_DEPARTAMENTO { get; set; }
    public float CODIGO_TURNO { get; set; }
    public float YEAR { get; set; }
    public float MONTH { get; set; }
    public string CLASIFICACION { get; set; } = "";
    public float CODIGO_TIPO_EMPLEADO { get; set; }
    public float CEDULA_NUEVA { get; set; }
    public float SUELDO_BASE { get; set; }
    public float CODIGO_TIPOS_NOMINA { get; set; }
    public DateTime FECHA_INICIAL { get; set; }
    public DateTime FECHA_FINAL { get; set; }
    public float CODIGO_MES { get; set; }
    public DateTime FECHA_PAGO { get; set; }
    public string CONCEPTONOMINA { get; set; } = "";
    public string DEPARTAMENTO { get; set; } = "";
    public string TIPOCONCEPTONOMINA { get; set; } = "";
    public float CODIGO_PERIODOS_FISCAL { get; set; }
    public string DESCRIPCION { get; set; } = "";
    public float ANO { get; set; }
    public string COMPANIA { get; set; } = "";
    public string TIPOSNOMINA { get; set; } = "";
    public float CODIGO_PERIODO_NOMINA { get; set; }
    public float CODIGO_BANCO { get; set; }
    public string BANCO { get; set; } = "";
}
}