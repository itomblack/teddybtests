"use client";

import { useState } from "react";
import { SiteHeader } from "../../components/SiteHeader";
import { Button } from "../../components/Button";
import { ComparisonModal } from "../../components/ComparisonModal";

const watches = [
  {
    brand: "Omega",
    name: "Speedmaster Moonwatch Professional Moonshine\u2122 Gold and Steel 42mm \u2011 Silver on Leather Strap",
    image: "https://www.figma.com/api/mcp/asset/568d234d-6d61-4fb1-9419-c62749bd4609",
    reviewLink: "#",
    specs: {
      "Teddy's Review": "Watch now",
      Price: "$13,100",
      Style: "Chronograph",
      "Case Size": "42 mm",
      Thickness: "13.2 mm",
      "Lug to Lug": "47.5 mm",
      "Lug Width": "20 mm",
      "Water Resistance": "50m",
      "Movement Type": "Hand-winding",
      Crystal: "Scratch-resistant sapphire (AR coated)",
      Reference: "310.23.42.50.02.001",
      "Case Material": "Bi-colour steel & 18K Moonshine\u2122 Gold",
      "Case Back": "Transparent sapphire crystal caseback",
      Bezel: "Asymmetrical black ceramic, tachymeter, Ceragold\u2122",
      "Clasp / Buckle": "Foldover clasp",
      "Attachment Type": "Leather",
      "Dial Color": "Silver",
      Hands: "18K Moonshine\u2122 Gold",
      "Strap / Bracelet": "Brown alligator leather strap",
      Weight: "96 g",
      "Movement Ref": "3861",
      "Power Reserve": "50 Hours",
      Accuracy: "N/A",
      Functions:
        "Manual-winding chronograph, Co-Axial, Master Chronometer, METAS certified, anti-magnetic 15,000 gauss",
      Features:
        "Anti-magnetic, master chronometer certified, silicon balance spring, rhodium finish",
      Jewels: "26 Jewels",
      "Movement Details": "Manual-winding, Co-Axial Master Chronometer",
    },
  },
  {
    brand: "Omega",
    name: 'Speedmaster Moonwatch Professional 18K Moonshine\u2122 Gold "Reverse Panda" 42mm - Black on Bracelet',
    image: "https://www.figma.com/api/mcp/asset/a20c0cf8-899f-41bd-854a-25d8d81b5338",
    specs: {
      Price: "$49,500",
      Style: "Chronograph",
      "Case Size": "42 mm",
      Thickness: "13.63 mm",
      "Lug to Lug": "47.46 mm",
      "Lug Width": "20 mm",
      "Water Resistance": "50m",
      "Movement Type": "Hand-winding",
      Crystal: "Scratch-resistant sapphire (AR coated)",
      Reference: "O31060425001002",
      "Case Material": "Moonshine\u2122 Gold",
      "Case Back": "18K Moonshine\u2122 Gold & sapphire caseback",
      Bezel: "Black ceramic bezel ring",
      "Clasp / Buckle": "Foldover clasp with comfort setting",
      "Attachment Type": "Bracelet",
      "Dial Color": "Black",
      Hands: "18K Moonshine\u2122 Gold",
      "Strap / Bracelet": "Polished & brushed Moonshine\u2122 Gold bracelet",
      Weight: "224 g",
      "Movement Ref": "3861",
      "Power Reserve": "50 Hours",
      Accuracy: "0 to +5 secs/day",
      Functions: "Chronograph, small seconds, tachymeter",
      Features:
        "Anti-magnetic 15,000 gauss, silicon balance spring, rhodium finish",
      Jewels: "N/A",
      "Movement Details":
        "Manual-winding chronograph, Co-Axial Master Chronometer",
    },
  },
  {
    brand: "Omega",
    name: 'SBGA413 "Spring Shunbun" Heritage Spring Drive 40mm - Pink on Bracelet',
    image: "https://www.figma.com/api/mcp/asset/50fed59a-56a9-4050-86b8-ba8d89eaabc3",
    reviewLink: "#",
    specs: {
      "Teddy's Review": "Watch now",
      Price: "$7,200",
      Style: "Everyday",
      "Case Size": "40 mm",
      Thickness: "12.7 mm",
      "Lug to Lug": "47 mm",
      "Lug Width": "21 mm",
      "Water Resistance": "100m",
      "Movement Type": "Spring Drive",
      Crystal: "Box-shape sapphire crystal",
      Reference: "SBGA413",
      "Case Material": "High-intensity titanium",
      "Case Back": "Stainless steel transparent sapphire",
      Bezel: "Bezel-free",
      "Clasp / Buckle": "Three-fold clasp",
      "Attachment Type": "Bracelet",
      "Dial Color": "Pink",
      Hands: "N/A",
      "Strap / Bracelet": "High-intensity titanium bracelet",
      Weight: "N/A",
      "Movement Ref": "9R65",
      "Power Reserve": "72 Hours",
      Accuracy: "\u00b11 sec/day / \u00b115 secs/month",
      Functions: "Time and date",
      Features: "Power reserve indicator",
      Jewels: "30 Jewels",
      "Movement Details": "Spring Drive",
    },
  },
];

const sections = [
  {
    title: "Overview",
    rows: [
      "Teddy's Review",
      "Price",
      "Style",
      "Case Size",
      "Thickness",
      "Lug to Lug",
      "Lug Width",
      "Water Resistance",
      "Movement Type",
      "Crystal",
      "Reference",
    ],
  },
  {
    title: "Case & Exterior",
    rows: [
      "Case Material",
      "Case Back",
      "Bezel",
      "Clasp / Buckle",
      "Attachment Type",
      "Dial Color",
      "Hands",
      "Strap / Bracelet",
      "Weight",
    ],
  },
  {
    title: "Movement",
    rows: [
      "Movement Ref",
      "Power Reserve",
      "Accuracy",
      "Functions",
      "Features",
      "Jewels",
      "Movement Details",
    ],
  },
];

export default function ComparisonModalPage() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <h1 className="t-h1 mb-4">Comparison Modal</h1>
        <p className="t-body-lg mb-8 text-[var(--color-ink-muted)]">
          A slide-up comparison overlay for comparing watch specifications side-by-side.
        </p>
        <Button onClick={() => setOpen(true)}>Open comparison modal</Button>
      </main>

      <ComparisonModal
        open={open}
        onClose={() => setOpen(false)}
        watches={watches}
        sections={sections}
      />
    </>
  );
}
