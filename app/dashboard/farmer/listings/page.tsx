"use client";
import React from 'react';
import { Package, XCircle } from 'lucide-react';

export default function MyListingsPage() {
    const listings = [
        { id: 1, type: 'Rice Straw', qty: '5 Tons', date: 'Jan 24, 2026', status: 'Active', price: '₹18,000' },
        { id: 2, type: 'Wheat Stubble', qty: '3 Tons', date: 'Jan 20, 2026', status: 'Sold', price: '₹12,500' },
    ];

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-earth-900">My Listings</h1>
                <button className="px-5 py-2 bg-earth-800 text-white rounded-lg font-medium hover:bg-earth-900 transition-colors">
                    + New Listing
                </button>
            </div>

            <div className="space-y-4">
                {listings.map((item) => (
                    <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-earth-100 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-sand-100 rounded-lg text-sand-500">
                                <Package size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-earth-900">{item.type}</h3>
                                <div className="text-sm text-earth-500">Listed on {item.date} • {item.qty}</div>
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="text-xl font-bold text-earth-900">{item.price}</div>
                            <div className={`text-sm font-medium mt-1 inline-flex px-2 py-0.5 rounded-full ${item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-earth-100 text-earth-600'}`}>
                                {item.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
