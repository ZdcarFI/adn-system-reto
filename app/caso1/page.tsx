'use client';

import {useState, useMemo} from 'react';
import { Search, ChevronLeft, ChevronRight, Package, Eye, Edit, Trash2} from 'lucide-react';
import Link from 'next/link';
import {mockProducts} from '@/data/caso1';
import {formatPrice} from "@/utils";
import {Action, Info, PaginationButton} from "@/components/caso1";

export default function caso1() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const filteredProducts = useMemo(() => {
        return mockProducts.filter(product =>
            product.producto.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.laboratorio.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.cod_dig.includes(searchTerm) ||
            product.categoria.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredProducts, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);


    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8 space-y-8">

                <div>
                    <Link href="/" className="inline-flex items-center text-blue-600 hover:underline">
                        <ChevronLeft className="w-4 h-4 mr-1"/>
                        Volver al inicio
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                        Caso 1:
                    </h1>

                </div>

                <div
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value)
                                    setCurrentPage(1)
                                }}
                                placeholder="Buscar productos..."
                                className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-sm text-gray-700 dark:text-gray-300">Mostrar:</label>
                            <select
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(Number(e.target.value))
                                    setCurrentPage(1)
                                }}
                                className="py-2 px-3 border rounded-lg dark:bg-gray-700 dark:text-white"
                            >
                                {[5, 10, 15, 20].map(n => (
                                    <option key={n} value={n}>{n}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6">
                    {paginatedProducts.map((product) => {
                        return (
                            <div
                                key={product.cod_dig}
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border hover:shadow-md transition"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                            <Package className="w-6 h-6 text-blue-600 dark:text-blue-400"/>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {product.producto}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Código: {product.cod_dig}</p>
                                            <p className="text-lg font-bold text-green-600 dark:text-green-400"> Precio:
                                                {formatPrice(product.precio)}
                                            </p>
                                        </div>

                                    </div>
                                    <div className="flex gap-2">
                                        <Action icon={Eye} color="blue"/>
                                        <Action icon={Edit} color="green"/>
                                        <Action icon={Trash2} color="red"/>
                                    </div>

                                </div>

                                <div
                                    className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-gray-700 dark:text-gray-200">
                                    <Info label="Laboratorio" value={product.laboratorio}/>
                                    <Info label="Categoría" value={product.categoria}/>
                                    <Info label="Stock Actual" value={`${product.stock_actual} unidades`}/>
                                    <Info label="Stock Crítico" value={`${product.stock_minimo} unidades`}/>
                                    <Info label="Vencimiento" value={new Date(product.fecha_vencimiento).toLocaleDateString('es-PE')}/>
                                </div>


                            </div>
                        )
                    })}
                </div>


                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <span className="text-gray-700 dark:text-gray-300">
                          Mostrando {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredProducts.length)} de {filteredProducts.length} registros
                        </span>
                        <div className="flex items-center gap-2">
                            <PaginationButton
                                icon={ChevronLeft}
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            />
                            <span className="text-gray-700 dark:text-gray-300">
                                Página {currentPage} de {totalPages}
                            </span>
                            <PaginationButton
                                icon={ChevronRight}
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

