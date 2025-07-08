import {Product} from "@/types/caso1";
export const mockProducts: Product[] = [
    {
        cod_dig: "7701234567890",
        producto: "PARACETAMOL 500MG X 20 TABLETAS",
        laboratorio: "GENFAR",
        stock_actual: 150,
        stock_minimo: 50,
        precio: 8500,
        categoria: "ANALGESICOS",
        fecha_vencimiento: "2025-12-31"
    },
    {
        cod_dig: "7701234567891",
        producto: "IBUPROFENO 400MG X 10 CAPSULAS",
        laboratorio: "BAYER",
        stock_actual: 30,
        stock_minimo: 40,
        precio: 15200,
        categoria: "ANTIINFLAMATORIOS",
        fecha_vencimiento: "2025-08-15"
    },
    {
        cod_dig: "7701234567892",
        producto: "AMOXICILINA 500MG X 15 CAPSULAS",
        laboratorio: "PFIZER",
        stock_actual: 75,
        stock_minimo: 25,
        precio: 25400,
        categoria: "ANTIBIOTICOS",
        fecha_vencimiento: "2025-10-20"
    },
    {
        cod_dig: "7701234567893",
        producto: "LORATADINA 10MG X 10 TABLETAS",
        laboratorio: "LAFRANCOL",
        stock_actual: 120,
        stock_minimo: 30,
        precio: 12800,
        categoria: "ANTIHISTAMINICOS",
        fecha_vencimiento: "2026-03-10"
    },
    {
        cod_dig: "7701234567894",
        producto: "OMEPRAZOL 20MG X 14 CAPSULAS",
        laboratorio: "TECNOQUIMICAS",
        stock_actual: 20,
        stock_minimo: 35,
        precio: 18900,
        categoria: "GASTROPROTECTORES",
        fecha_vencimiento: "2025-09-05"
    },
    {
        cod_dig: "7701234567895",
        producto: "ACETAMINOFEN 500MG X 50 TABLETAS",
        laboratorio: "MK",
        stock_actual: 200,
        stock_minimo: 60,
        precio: 16500,
        categoria: "ANALGESICOS",
        fecha_vencimiento: "2025-11-30"
    },
    {
        cod_dig: "7701234567896",
        producto: "DICLOFENACO 50MG X 20 TABLETAS",
        laboratorio: "ROCHE",
        stock_actual: 45,
        stock_minimo: 25,
        precio: 22300,
        categoria: "ANTIINFLAMATORIOS",
        fecha_vencimiento: "2025-07-18"
    },
    {
        cod_dig: "7701234567897",
        producto: "CETIRIZINA 10MG X 10 TABLETAS",
        laboratorio: "SANDOZ",
        stock_actual: 85,
        stock_minimo: 40,
        precio: 14700,
        categoria: "ANTIHISTAMINICOS",
        fecha_vencimiento: "2026-01-25"
    },
    {
        cod_dig: "7701234567898",
        producto: "METFORMINA 850MG X 30 TABLETAS",
        laboratorio: "ABBOTT",
        stock_actual: 60,
        stock_minimo: 20,
        precio: 28500,
        categoria: "ANTIDIABETICOS",
        fecha_vencimiento: "2025-06-12"
    },
    {
        cod_dig: "7701234567899",
        producto: "LOSARTAN 50MG X 30 TABLETAS",
        laboratorio: "NOVARTIS",
        stock_actual: 40,
        stock_minimo: 15,
        precio: 31200,
        categoria: "ANTIHIPERTENSIVOS",
        fecha_vencimiento: "2025-08-08"
    }
];

export const colorClasses = {
    blue: {
        text: 'hover:text-blue-600 dark:hover:text-blue-400',
        bg: 'hover:bg-blue-50 dark:hover:bg-blue-900',
    },
    green: {
        text: 'hover:text-green-600 dark:hover:text-green-400',
        bg: 'hover:bg-green-50 dark:hover:bg-green-900',
    },
    red: {
        text: 'hover:text-red-600 dark:hover:text-red-400',
        bg: 'hover:bg-red-50 dark:hover:bg-red-900',
    },
};
