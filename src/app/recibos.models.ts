export interface Recibo{
    CODIGO_EMPLEADO: number,
        nombre: string,
        CODIGO_FORMA_PAGO: number,
        formadepago: string,
        CODIGO_MEDIO_PAGO_NOMINA: number,
        mediodepago: string,
        CODIGO_COMPANIA: number,
        cantidad: number,
        ingreso: number,
        deduccion: number,
        CODIGO_DEPARTAMENTO: number,
        CODIGO_TURNO: number,
        year: number,
        month: number,
        clasificacion: string,
        CODIGO_TIPO_EMPLEADO: number,
        cedulA_NUEVA:number,
        sueldO_BASE: number,
        CODIGO_TIPOS_NOMINA: number,
        fechA_INICIAL: number,
        fechA_FINAL: number,
        CODIGO_MES: number,
        fechA_PAGO: number,
        conceptonomina: string,
        departamento: string,
        tipoconceptonomina: string,
        CODIGO_PERIODOS_FISCAL: number,
        descripcion: string,
        ano: number,
        compania: string
        tiposnomina: string,
        CODIGO_PERIODO_NOMINA: number,
        CODIGO_BANCO: number,
        banco: string
}
export interface ReciboRecienteDTO{
    CODIGO_EMPLEADO: number;
    CODIGO_PERIODO_NOMINA: number;
    FECHA_PAGO: number;
}
