"use client";
import React from 'react';
import { User, MapPin, Phone, Mail, Save } from 'lucide-react';

export default function ProfilePage() {
    return (
        <div className="max-w-3xl mx-auto py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-earth-900">Profile Settings</h1>
                <p className="text-earth-600">Manage your account information and farm details.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-earth-100 overflow-hidden">
                <div className="p-8 border-b border-earth-100 flex items-center gap-6">
                    <div className="w-24 h-24 bg-earth-200 rounded-full flex items-center justify-center text-earth-500 text-4xl font-bold">
                        KS
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-earth-900">Kartik Singh</h2>
                        <p className="text-earth-500">Farmer • Punjab, India</p>
                    </div>
                </div>

                <form className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-earth-700 mb-1">Full Name</label>
                            <div className="relative">
                                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-earth-400" />
                                <input type="text" defaultValue="Kartik Singh" className="w-full pl-10 p-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-earth-500 outline-none" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-earth-700 mb-1">Phone Number</label>
                            <div className="relative">
                                <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-earth-400" />
                                <input type="tel" defaultValue="+91 98765 43210" className="w-full pl-10 p-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-earth-500 outline-none" />
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-earth-700 mb-1">Farm Address</label>
                            <div className="relative">
                                <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-earth-400" />
                                <input type="text" defaultValue="Village Pind, Near Highway 4, Bhatinda" className="w-full pl-10 p-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-earth-500 outline-none" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button className="px-6 py-3 bg-earth-800 text-white rounded-xl font-semibold hover:bg-earth-900 transition-colors flex items-center gap-2">
                            <Save size={18} /> Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
