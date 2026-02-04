'use client'
import { useState } from 'react';
import { FileText, Brain, CheckCircle, XCircle, ChevronDown, Loader2 } from 'lucide-react';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        Gender: 'Male',
        Married: 'No',
        Dependents: '0',
        Education: 'Graduate',
        Self_Employed: 'No',
        ApplicantIncome: '',
        CoapplicantIncome: '',
        LoanAmount: '',
        Loan_Amount_Term: '360',
        Credit_History: '1.0',
        Property_Area: 'Urban'
    });

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ prediction: number, result: string } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        // Map values to model format
        const payload = {
            Gender: formData.Gender === 'Male' ? 1 : 0,
            Married: formData.Married === 'Yes' ? 1 : 0,
            Dependents: formData.Dependents === '3+' ? 3 : parseInt(formData.Dependents),
            Education: formData.Education === 'Graduate' ? 0 : 1,
            Self_Employed: formData.Self_Employed === 'Yes' ? 1 : 0,
            ApplicantIncome: parseFloat(formData.ApplicantIncome) || 0,
            CoapplicantIncome: parseFloat(formData.CoapplicantIncome) || 0,
            LoanAmount: parseFloat(formData.LoanAmount) || 0,
            Loan_Amount_Term: parseInt(formData.Loan_Amount_Term) || 360,
            Credit_History: formData.Credit_History === '1.0' ? 1 : 0,
            Property_Area: formData.Property_Area === 'Urban' ? 2 : (formData.Property_Area === 'Semiurban' ? 1 : 0)
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error('Prediction request failed');

            const data = await response.json();
            setResult(data);
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex-1 w-full bg-[#f0f4f8] py-16 px-4 md:px-40" id="predict">
            <div className="mx-auto max-w-[960px]">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-black tracking-tight text-[#111418] mb-3">Application Form</h2>
                    <p className="text-[#617589]">Fill in the details below to generate your loan eligibility report.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-[#dbe0e6] overflow-hidden">
                    {/* Form Header */}
                    <div className="bg-primary/5 px-8 py-4 border-b border-[#e5e7eb] flex items-center gap-3">
                        <FileText className="text-primary" size={20} />
                        <h3 className="font-bold text-[#111418]">Applicant Details</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {/* Personal Info Group */}
                        <div className="md:col-span-2 pb-2 border-b border-dashed border-gray-200 mb-2">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Personal Information</p>
                        </div>

                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-[#111418]">Gender</span>
                            <div className="relative">
                                <select
                                    name="Gender"
                                    value={formData.Gender}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-[#dbe0e6] bg-white px-4 py-3 pr-10 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                            </div>
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-[#111418]">Marital Status</span>
                            <div className="relative">
                                <select
                                    name="Married"
                                    value={formData.Married}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-[#dbe0e6] bg-white px-4 py-3 pr-10 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none">
                                    <option value="Yes">Married</option>
                                    <option value="No">Unmarried</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                            </div>
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-[#111418]">Dependents</span>
                            <div className="relative">
                                <select
                                    name="Dependents"
                                    value={formData.Dependents}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-[#dbe0e6] bg-white px-4 py-3 pr-10 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3+">3+</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                            </div>
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-[#111418]">Education</span>
                            <div className="relative">
                                <select
                                    name="Education"
                                    value={formData.Education}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-[#dbe0e6] bg-white px-4 py-3 pr-10 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none">
                                    <option value="Graduate">Graduate</option>
                                    <option value="Not Graduate">Not Graduate</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                            </div>
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-[#111418]">Self Employed</span>
                            <div className="relative">
                                <select
                                    name="Self_Employed"
                                    value={formData.Self_Employed}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-[#dbe0e6] bg-white px-4 py-3 pr-10 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                            </div>
                        </label>

                        <div className="hidden md:block"></div>

                        {/* Financial Info Group */}
                        <div className="md:col-span-2 pb-2 border-b border-dashed border-gray-200 mt-4 mb-2">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Financial Information</p>
                        </div>

                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-[#111418]">Applicant Income ($)</span>
                            <input
                                name="ApplicantIncome"
                                value={formData.ApplicantIncome}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-[#dbe0e6] bg-white px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder:text-gray-400"
                                placeholder="Ex: 5000"
                                type="number"
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-[#111418]">Co-applicant Income ($)</span>
                            <input
                                name="CoapplicantIncome"
                                value={formData.CoapplicantIncome}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-[#dbe0e6] bg-white px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder:text-gray-400"
                                placeholder="Ex: 2000"
                                type="number"
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-[#111418]">Loan Amount ($)</span>
                            <input
                                name="LoanAmount"
                                value={formData.LoanAmount}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-[#dbe0e6] bg-white px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder:text-gray-400"
                                placeholder="Ex: 15000"
                                type="number"
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-[#111418]">Loan Amount Term (Months)</span>
                            <input
                                name="Loan_Amount_Term"
                                value={formData.Loan_Amount_Term}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-[#dbe0e6] bg-white px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder:text-gray-400"
                                placeholder="Ex: 360"
                                type="number"
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-[#111418]">Credit History</span>
                            <div className="relative">
                                <select
                                    name="Credit_History"
                                    value={formData.Credit_History}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-[#dbe0e6] bg-white px-4 py-3 pr-10 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none">
                                    <option value="1.0">1.0 (Good History)</option>
                                    <option value="0.0">0.0 (Bad History)</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                            </div>
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-[#111418]">Property Area</span>
                            <div className="relative">
                                <select
                                    name="Property_Area"
                                    value={formData.Property_Area}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-[#dbe0e6] bg-white px-4 py-3 pr-10 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none">
                                    <option value="Urban">Urban</option>
                                    <option value="Semiurban">Semiurban</option>
                                    <option value="Rural">Rural</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                            </div>
                        </label>

                        {/* Action Button */}
                        <div className="md:col-span-2 mt-6">
                            <button
                                disabled={loading}
                                className="group relative w-full rounded-xl bg-primary py-4 px-6 text-white font-bold text-lg shadow-lg hover:bg-blue-600 hover:shadow-primary/30 transition-all focus:ring-4 focus:ring-primary/20 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                                type="submit"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    {loading ? <Loader2 className="animate-spin" size={24} /> : <Brain size={24} />}
                                    <span>{loading ? 'Processing Analysis...' : 'Predict Loan Status'}</span>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>

                {error && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center font-medium">
                        {error}
                    </div>
                )}

                {/* Result Section */}
                {result && (
                    <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className={`rounded-2xl border-l-[6px] shadow-xl p-8 flex flex-col md:flex-row items-center gap-6 ${result.prediction === 1 ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'
                            }`}>
                            <div className={`size-20 rounded-full flex items-center justify-center shrink-0 ${result.prediction === 1 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                }`}>
                                {result.prediction === 1 ? <CheckCircle size={48} /> : <XCircle size={48} />}
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <h4 className={`text-2xl font-black mb-2 ${result.prediction === 1 ? 'text-green-900' : 'text-red-900'}`}>
                                    Decision: {result.result}
                                </h4>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {result.prediction === 1
                                        ? "Congratulations! Based on our analysis, your loan application is likely to be approved. You meet the primary criteria for this credit profile."
                                        : "Our analysis indicates a high risk for this application profile. We recommend reviewing the financial factors or improving credit history before re-applying."}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Info Text */}
                {!result && !loading && (
                    <div className="mt-8 text-center bg-blue-50/50 p-6 rounded-xl border border-blue-100 italic text-gray-500">
                        <p>Default sample values are provided. Click "Predict Loan Status" to see how the model evaluates this profile.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApplicationForm;
