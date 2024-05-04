/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Menu } from 'primereact/menu';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductService } from '../../demo/service/ProductService';
import { LayoutContext } from '../../layout/context/layoutcontext';
import Link from 'next/link';
import { Demo } from '@/types';
import { ChartData, ChartOptions } from 'chart.js';
import { TreeTable, TreeTableSelectionKeysType } from 'primereact/treetable';
import { TreeNode } from 'primereact/treenode';


const lineData: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
};


const facilitiesData = 
    [  
        {
            "key": "0",
            "data":{  
                "name":"Company A",
                "size":"Pressure Relieve Device",
                "risk":"High"
            },
        },
        {  
            "key": "1",
            "data":{  
                "name":"Company B",
                "size":"Tank",
                "risk":"Medium"
            },
        },
        {  
            "key": "2",
            "data": {  
                "name":"Company C",
                "size":"Pipe",
                "risk":"Low"
            },
        },
        {  
            "key": "3",
            "data":{  
                "name":"Company D",
                "size":"Pressure Vessel",
                "risk":"Low"
            },
        },
        {  
            "key": "4",
            "data": {  
                "name":"Company E",
                "size":"Pipe",
                "risk":"High"
            },
        },
    ]


const Dashboard = () => {
    const [products, setProducts] = useState<Demo.Product[]>([]);
    const menu1 = useRef<Menu>(null);
    const menu2 = useRef<Menu>(null);
    const [lineOptions, setLineOptions] = useState<ChartOptions>({});
    const { layoutConfig } = useContext(LayoutContext);
    const [files2, setFiles2] = useState<TreeNode[]>([]);
    const [selectedFileKeys2, setSelectedFileKeys2] = useState<TreeTableSelectionKeysType | null>(null);
    
    useEffect(() => {
        setFiles2(facilitiesData)
    }, []);

    const applyLightTheme = () => {
        const lineOptions: ChartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    const applyDarkTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);

    const formatCurrency = (value: number) => {
        return value?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    return (
        <>
        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Facilities</span>
                            <div className="text-900 font-medium text-xl">152</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-shopping-cart text-blue-500 text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Units</span>
                            <div className="text-900 font-medium text-xl">2.100</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-map-marker text-orange-500 text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Systems</span>
                            <div className="text-900 font-medium text-xl">28441</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-inbox text-cyan-500 text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Equipment</span>
                            <div className="text-900 font-medium text-xl">152</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-comment text-purple-500 text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Component</span>
                            <div className="text-900 font-medium text-xl">15</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-comment text-purple-500 text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid">
            <div className="col-6 lg:col-6 xl:col-6">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Component Before Inspection Risk Matrix</span>
                            <img src={`./demo/images/component before risk matrix.png`} width={"500 px"} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 lg:col-6 xl:col-6">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div className="w-full">
                            <span className="block text-500 font-medium mb-3">Component After Inspection Risk Matrix</span>
                            <div className="flex justify-content-center">
                                <div className="flex align-items-center justify-content-center w-6rem h-6rem bg-primary font-bold border-1 border-600">1</div>
                                <div className="flex align-items-center justify-content-center w-6rem h-6rem bg-primary font-bold border-1 border-600">2</div>
                                <div className="flex align-items-center justify-content-center w-6rem h-6rem bg-primary font-bold border-1 border-600">3</div>
                                <div className="flex align-items-center justify-content-center w-6rem h-6rem bg-primary font-bold border-1 border-600">4</div>
                                <div className="flex align-items-center justify-content-center w-6rem h-6rem bg-primary font-bold border-1 border-600">5</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-12">
            <div className="card">
                <h5>Summary</h5>

                <TreeTable value={files2} selectionMode="checkbox" selectionKeys={selectedFileKeys2} onSelectionChange={(e) => setSelectedFileKeys2(e.value)}>
                    <Column field="name" header="Number" expander />
                    <Column field="size" header="Components" />
                    <Column field="risk" header="Risk" />
                </TreeTable>
            </div>
        </div>

        
    </>
    );
};

export default Dashboard;
