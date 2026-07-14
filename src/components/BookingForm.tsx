import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Calendar, Phone, MessageSquare, AlertCircle, Clock, Scissors, Crown, ChevronDown } from "lucide-react";
import { SERVICES_DATA } from "../data/services";
import { PACKAGES_DATA } from "../data/packages";
import { BookingFormInput } from "../types";

interface BookingFormProps {
  selectedPackageFromParent?: string;
  onClearSelectedPackage?: () => void;
}

export default function BookingForm({ selectedPackageFromParent, onClearSelectedPackage }: BookingFormProps) {
  const initialFormState: BookingFormInput = {
    name: "",
    phone: "",
    email: "",
    service: "none",
    package: "none",
    date: "",
    time: "",
    message: "",
    useWhatsApp: true
  };

  const [form, setForm] = useState<BookingFormInput>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormInput, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [bookingRefNum, setBookingRefNum] = useState("");

  // Sync chosen package if selected from parent Packages component
  useEffect(() => {
    if (selectedPackageFromParent) {
      setForm((prev) => ({ ...prev, package: selectedPackageFromParent }));
      if (onClearSelectedPackage) onClearSelectedPackage();
    }
  }, [selectedPackageFromParent, onClearSelectedPackage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    // Clear error
    if (errors[name as keyof BookingFormInput]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof BookingFormInput, string>> = {};

    if (!form.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else {
      // Validate Pakistani phone numbers (e.g. 03xxxxxxxxx or +923xxxxxxxxx)
      const phoneRegex = /^((\+92)|(0092)|(92)|(0))?3[0-9]{9}$/;
      if (!phoneRegex.test(form.phone.replace(/[\s-]/g, ""))) {
        newErrors.phone = "Please provide a valid Pakistani mobile number (e.g., 0300-0000000)";
      }
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Please provide a valid email address";
      }
    }

    if (form.service === "none" && form.package === "none") {
      newErrors.service = "Please select either a specific Service or a Package";
      newErrors.package = "Please select either a specific Service or a Package";
    }

    if (!form.date) {
      newErrors.date = "Please select your preferred date";
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Date cannot be in the past";
      }
    }

    if (!form.time) {
      newErrors.time = "Please select your preferred timing";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury API response with a loader
    setTimeout(() => {
      const refCode = "JAY-" + Math.floor(100000 + Math.random() * 900000);
      setBookingRefNum(refCode);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Trigger WhatsApp redirection if enabled
      if (form.useWhatsApp) {
        const selectedServiceName = form.service !== "none" 
          ? SERVICES_DATA.find((s) => s.id === form.service)?.name 
          : "None";
        const selectedPkgName = form.package !== "none" ? form.package : "None";

        const textMessage = 
`👑 *JAYNAAN BEAUTY SALON RAWALPINDI RESERVATION* 👑
Reference: *${refCode}*

*Guest Name:* ${form.name}
*Phone:* ${form.phone}
*Email:* ${form.email}
*Chosen Service:* ${selectedServiceName}
*Chosen Package:* ${selectedPkgName}
*Preferred Date:* ${form.date}
*Preferred Time:* ${form.time}
*Special Instructions:* ${form.message || "None"}

_Please confirm my luxury VIP booking slot._`;

        const encodedMsg = encodeURIComponent(textMessage);
        window.open(`https://wa.me/923000000000?text=${encodedMsg}`, "_blank");
      }
    }, 1800);
  };

  return (
    <section id="booking" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Abstract Background Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold font-semibold block mb-3">
            Concierge Desk
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white mb-4">
            Request an <span className="font-serif italic text-gold">Appointment</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans tracking-wide leading-relaxed font-light max-w-xl mx-auto">
            Experience premium, tailored attention. Fill out our reservation form below and our salon concierge will confirm your slot within minutes.
          </p>
        </div>

        {/* Outer frame */}
        <div className="relative rounded-sm p-8 sm:p-12 border border-white/5 bg-gradient-to-b from-[#141414]/90 to-[#0A0A0A]/90 shadow-2xl shadow-black/80">
          
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form
                key="booking-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {/* Inputs Row 1: Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarmad Ali"
                      className={`w-full bg-black border ${
                        errors.name ? "border-red-500" : "border-white/5 focus:border-gold"
                      } rounded-sm px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. 03000000000"
                      className={`w-full bg-black border ${
                        errors.phone ? "border-red-500" : "border-white/5 focus:border-gold"
                      } rounded-sm px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email and WhatsApp checkbox */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. sarmad@example.com"
                      className={`w-full bg-black border ${
                        errors.email ? "border-red-500" : "border-white/5 focus:border-gold"
                      } rounded-sm px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Date selection */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className={`w-full bg-black border ${
                          errors.date ? "border-red-500" : "border-white/5 focus:border-gold"
                        } rounded-sm px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors [color-scheme:dark]`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Select Service & Package */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
                      Select Service (Optional)
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full appearance-none bg-black border border-white/5 focus:border-gold rounded-sm px-4 py-3.5 text-sm text-white focus:outline-none pr-10"
                      >
                        <option value="none">-- Select Service --</option>
                        {SERVICES_DATA.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name} ({service.price})
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
                      Select Special Package (Optional)
                    </label>
                    <div className="relative">
                      <select
                        name="package"
                        value={form.package}
                        onChange={handleChange}
                        className="w-full appearance-none bg-black border border-white/5 focus:border-gold rounded-sm px-4 py-3.5 text-sm text-white focus:outline-none pr-10"
                      >
                        <option value="none">-- Select Package --</option>
                        {PACKAGES_DATA.map((pkg) => (
                          <option key={pkg.name} value={pkg.name}>
                            {pkg.name} ({pkg.price})
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Form fields: Time & WhatsApp Checkbox */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
                      Preferred Time Slot *
                    </label>
                    <div className="relative">
                      <select
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className={`w-full appearance-none bg-black border ${
                          errors.time ? "border-red-500" : "border-white/5 focus:border-gold"
                        } rounded-sm px-4 py-3.5 text-sm text-white focus:outline-none pr-10`}
                      >
                        <option value="">-- Choose Timing --</option>
                        <option value="10:00 AM">10:00 AM (Opening)</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:30 PM">02:30 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:30 PM">05:30 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                        <option value="08:30 PM">08:30 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                        <option value="11:00 PM">11:00 PM (Last slot)</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                    </div>
                    {errors.time && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.time}
                      </p>
                    )}
                  </div>

                  {/* Toggle routing style */}
                  <div className="pt-6">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="useWhatsApp"
                          checked={form.useWhatsApp}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`w-10 h-5 rounded-full transition-colors ${
                          form.useWhatsApp ? "bg-emerald-500" : "bg-zinc-800"
                        }`} />
                        <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                          form.useWhatsApp ? "translate-x-5" : "translate-x-0"
                        }`} />
                      </div>
                      <span className="text-xs text-zinc-300 font-sans tracking-wide group-hover:text-white transition-colors select-none">
                        Send Booking details via WhatsApp to 0300-0000000
                      </span>
                    </label>
                  </div>
                </div>

                {/* Message input */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
                    Special Requests / Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Provide any details regarding hair dye selections, special skin sensitivities, or wedding plans..."
                    className="w-full bg-black border border-white/5 focus:border-gold rounded-sm px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-hover text-black font-sans text-xs sm:text-sm font-bold tracking-[0.25em] py-4 rounded-sm shadow-xl shadow-gold/10 transition-all duration-300 uppercase flex items-center justify-center gap-3.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Securing Slot...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-4.5 h-4.5 text-black stroke-[3px]" />
                        <span>Confirm Luxury Booking Slot</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              // Golden success slip layout
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-8 max-w-md mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-gold border border-gold-hover flex items-center justify-center mx-auto shadow-lg shadow-gold/20 text-black animate-bounce">
                  <Check className="w-8 h-8 stroke-[3px]" />
                </div>

                <div className="space-y-3">
                  <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
                    Slot Reserved Successfully
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-sans font-light text-white tracking-wide">
                    Your luxury experience awaits
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    An confirmation code has been drafted. Please present this reference code at our Rawalpindi Branch reception desk.
                  </p>
                </div>

                {/* Slip card details */}
                <div className="p-6 rounded-sm border border-gold/30 bg-black/80 text-left space-y-4 font-mono text-xs">
                  <div className="flex justify-between border-b border-zinc-900 pb-3">
                    <span className="text-zinc-500 uppercase tracking-widest">Reference Code</span>
                    <span className="text-gold font-bold">{bookingRefNum}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-3">
                    <span className="text-zinc-500 uppercase tracking-widest">Client Name</span>
                    <span className="text-white font-medium">{form.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-3">
                    <span className="text-zinc-500 uppercase tracking-widest">Scheduled Date</span>
                    <span className="text-white font-medium">{form.date}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-3">
                    <span className="text-zinc-500 uppercase tracking-widest">Selected Time</span>
                    <span className="text-white font-medium">{form.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 uppercase tracking-widest">Status</span>
                    <span className="text-emerald-400 uppercase tracking-widest font-semibold animate-pulse">● Awaiting Arrival</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setForm(initialFormState);
                      setSubmitSuccess(false);
                    }}
                    className="text-xs text-zinc-400 hover:text-gold transition-colors uppercase font-mono tracking-widest"
                  >
                    Reserve another slot
                  </button>
                  {form.useWhatsApp && (
                    <p className="text-[10px] text-zinc-500 font-light">
                      *Redirected to WhatsApp. If the conversation did not launch automatically, send reference code to 0300-0000000.
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
