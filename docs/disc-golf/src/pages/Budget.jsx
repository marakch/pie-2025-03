function Budget() {
  const boughtItems = [
    {
      component: "Wooden Brush for Cleaning",
      quantity: 1,
      unitCost: 9.99,
      totalCost: 9.99,
      notes: "Standard cleaning brush"
    },
    {
      component: "24 V DC Planet Gear Motor with Controller",
      quantity: 1,
      unitCost: 44.99,
      totalCost: 44.99,
      notes: "Central Motor (Core System)"
    },
    {
      component: "8mm 5A 6 wire Slip Ring",
      quantity: 1,
      unitCost: 68.57,
      totalCost: 68.57,
      notes: "For power transmission to rotating chuck"
    },
    {
      component: "Electronic Gas Valve",
      quantity: 1,
      unitCost: 15.99,
      totalCost: 15.99,
      notes: "1/4\" NPT Solenoid Valve"
    },
    {
      component: "Pneumatic Tubing",
      quantity: 1,
      unitCost: 15.99,
      totalCost: 15.99,
      notes: "1/4\" OD PU Air Hose Kit"
    },
    {
      component: "Pneumatic System Pressure Sensor",
      quantity: 1,
      unitCost: 15.79,
      totalCost: 15.79,
      notes: "0-150 PSI Sensor"
    },
    {
      component: "Pressure Sensor Push to Connect Fitting",
      quantity: 1,
      unitCost: 3.96,
      totalCost: 3.96,
      notes: "1/4\" Tube OD x 1/4\" NPT Female"
    },
    {
      component: "22 Pin - 22 Pin Ribbon Cable",
      quantity: 1,
      unitCost: 6.69,
      totalCost: 6.69,
      notes: "For Pi Camera connection"
    },
    {
      component: "Rotary Encoder",
      quantity: 1,
      unitCost: 8.99,
      totalCost: 8.99,
      notes: "Speed sensor module"
    },
    {
      component: "22 Gauge Mild Steel Sheet Metal",
      quantity: 1,
      unitCost: 136.00,
      totalCost: 136.00,
      notes: "Enclosure material"
    },
    {
      component: "4 ft by 8 ft 3/16 Euca Board",
      quantity: 1,
      unitCost: 22.00,
      totalCost: 22.00,
      notes: "Enclosure/structural panels"
    },
    {
      component: "6 Way Fuse Box with Fuses",
      quantity: 1,
      unitCost: 9.99,
      totalCost: 9.99,
      notes: "Power distribution safety"
    },
    {
      component: "2 pack of 8mm by 150 mm Linear Motion Rods",
      quantity: 1,
      unitCost: 6.59,
      totalCost: 6.59,
      notes: "Linear guide rails"
    },
    {
      component: "Arducam for Raspberry Pi Camera Module 3 Wide",
      quantity: 1,
      unitCost: 36.00,
      totalCost: 36.00,
      notes: "120° IMX708 with M12 Lens"
    }
  ]

  const scavengedItems = [
    { component: "Inland 1.75mm PLA 1 kg", quantity: 1, unitCost: 14.99, totalCost: 14.99, notes: "3D printing filament" },
    { component: "M3 Heat Set Inserts", quantity: 3, unitCost: 0.03, totalCost: 0.10, notes: "For secure threading" },
    { component: "10 mm M3 Socket Head Screws", quantity: 3, unitCost: 0.11, totalCost: 0.33, notes: "Mounting hardware" },
    { component: "3 mm 18 by 24 MDF Draft Board", quantity: 1, unitCost: 4.45, totalCost: 4.45, notes: "Structural material" },
    { component: "Cabinet Grade Plywood", quantity: 1, unitCost: 15.00, totalCost: 15.00, notes: "Partial sheet used" },
    { component: "2x4 Lumber", quantity: 1, unitCost: 0.75, totalCost: 0.75, notes: "Framing material" },
    { component: "22 Gauge Solid Core Wire", quantity: 1, unitCost: 9.57, totalCost: 9.57, notes: "Electrical wiring" },
    { component: "Lever Nut Wago Connectors", quantity: 2, unitCost: 0.75, totalCost: 1.50, notes: "Wire connections" },
    { component: "Perforated PCB Prototyping Board", quantity: 1, unitCost: 4.00, totalCost: 4.00, notes: "Electronics mounting" },
    { component: "Raspberry Pi 4 Model B 4 GB RAM", quantity: 1, unitCost: 55.00, totalCost: 55.00, notes: "Main controller" },
    { component: "Emergency Stop Button", quantity: 1, unitCost: 3.56, totalCost: 3.56, notes: "Safety system" },
    { component: "16mm Round Momentary Switch", quantity: 2, unitCost: 0.70, totalCost: 1.40, notes: "User interface" },
    { component: "Screws", quantity: 1, unitCost: 5.00, totalCost: 5.00, notes: "Assorted hardware" },
    { component: "Fasteners", quantity: 1, unitCost: 10.00, totalCost: 10.00, notes: "Mounting hardware" },
    { component: "Screen", quantity: 1, unitCost: 5.50, totalCost: 5.50, notes: "Display interface" },
    { component: "DC Motor (chuck)", quantity: 1, unitCost: 7.00, totalCost: 7.00, notes: "Disc rotation" },
    { component: "Servo Motor (brush)", quantity: 1, unitCost: 4.00, totalCost: 4.00, notes: "Brush positioning" },
    { component: "Wires/Wire Connectors", quantity: 1, unitCost: 0.00, totalCost: 0.00, notes: "Electrical connections" }
  ]

  const totalBought = boughtItems.reduce((sum, item) => sum + item.totalCost, 0)
  const totalScavenged = scavengedItems.reduce((sum, item) => sum + item.totalCost, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center mb-16">
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase animate-fade-in-up" style={{ animationDelay: '0s' }}>Project Economics</div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Bill of Materials (BOM)
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
        <p className="text-stone-600 text-lg mb-12 text-center max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Detailed breakdown of all components used in the Disc Golf Disc Cleaner.
        </p>
      </div>

      {/* Bought Items Table */}
      <div className="text-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
         <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Purchased Materials
        </h2>
      </div>

      <div className="overflow-hidden shadow-lg rounded-lg border border-stone-200 animate-fade-in-up mb-16" style={{ animationDelay: '0.5s' }}>
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-stone-200">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Component
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Qty
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Unit Cost
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Total Cost
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-stone-200">
              {boughtItems.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9F8F4]'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-stone-900">
                    {item.component}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600 text-center">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600 text-right">
                    ${item.unitCost.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900 text-right">
                    ${item.totalCost.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-500 italic">
                    {item.notes}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-stone-50 border-t border-stone-200">
              <tr>
                <td colSpan="3" className="px-6 py-4 text-base font-bold text-stone-900 text-right">
                  Total Purchased Cost:
                </td>
                <td className="px-6 py-4 text-base font-bold text-nobel-gold text-right">
                  ${totalBought.toFixed(2)}
                </td>
                <td className="px-6 py-4"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Scavenged Items Table */}
      <div className="text-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
         <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Scavenged & Found Materials
        </h2>
      </div>

      <div className="overflow-hidden shadow-lg rounded-lg border border-stone-200 animate-fade-in-up mb-8" style={{ animationDelay: '0.7s' }}>
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-stone-200">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Qty
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Est. Unit Value
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Est. Total Value
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Note
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-stone-200">
              {scavengedItems.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9F8F4]'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-stone-900">
                    {item.component}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600 text-center">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600 text-right">
                     {item.unitCost === 0 ? "Negligible" : `$${item.unitCost.toFixed(2)}`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900 text-right">
                    {item.totalCost === 0 ? "Negligible" : `$${item.totalCost.toFixed(2)}`}
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-500 italic">
                    {item.notes}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-stone-50 border-t border-stone-200">
              <tr>
                <td colSpan="3" className="px-6 py-4 text-base font-bold text-stone-900 text-right">
                  Total Scavenged/Found Value:
                </td>
                <td className="px-6 py-4 text-base font-bold text-nobel-gold text-right">
                  ${totalScavenged.toFixed(2)}
                </td>
                <td className="px-6 py-4"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Budget Notes */}
      <div className="mt-8 bg-[#F5F4F0] rounded-lg p-8 border-l-4 border-nobel-gold animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <h2 className="font-serif text-xl font-bold text-stone-900 mb-4">
          Budget Notes
        </h2>
        <ul className="list-disc list-inside text-stone-600 space-y-2">
          <li><strong>Purchased Materials:</strong> Items specifically bought for this project using the allocated budget.</li>
          <li><strong>Scavenged & Found Materials:</strong> Items recovered from other devices, waste streams, or obtained from existing stock. Costs are estimated for replication purposes.</li>
          <li>Total Estimated Value (Purchased + Scavenged/Found): <strong className="text-stone-800">${(totalBought + totalScavenged).toFixed(2)}</strong></li>
        </ul>
      </div>
    </div>
  )
}

export default Budget
