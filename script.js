// AGAC Site Engineer Field Manual - app logic
const tipsData = [
  {
    "id": 1,
    "cat": "EDC",
    "title": "High-Visibility Vest (EN ISO 20471 Class 2/3)",
    "desc": "Check the vest meets the project's required class and retro-reflectance. Use break-away sides in heavy-equipment zones. Replace faded or torn vests."
  },
  {
    "id": 2,
    "cat": "EDC",
    "title": "UV400 Safety Eyewear",
    "desc": "Dubai summer UV index regularly reaches 11+. Use safety glasses rated EN 166 / ANSI Z87.1 with UV400 protection and anti-glare tint for aluminium formwork and white membranes."
  },
  {
    "id": 3,
    "cat": "EDC",
    "title": "Steel-Toe, Steel-Midsole Boots (EN ISO 20345 S3)",
    "desc": "Puncture-resistant midsole is essential on slabs with tie-wire offcuts and protruding rebar. Choose heat-resistant (HRO) soles if working near hot asphalt."
  },
  {
    "id": 4,
    "cat": "EDC",
    "title": "Laser Distance Meter",
    "desc": "Carry a calibrated laser meter for clear spans, soffit heights and quick setting-out checks. Use a target plate in bright sun where the dot is hard to see."
  },
  {
    "id": 5,
    "cat": "EDC",
    "title": "Waterproof Field Notebook & Pencil",
    "desc": "Tablets and phones can overheat and shut down in direct sun. Keep a waterproof pocket logbook and a soft pencil as a backup record."
  },
  {
    "id": 6,
    "cat": "EDC",
    "title": "Vernier Caliper & Coating Thickness Gauge",
    "desc": "Check bar diameters before fixing and confirm epoxy coating thickness on fusion-bonded epoxy-coated (FBEC) bars against the specification."
  },
  {
    "id": 7,
    "cat": "EDC",
    "title": "Infrared Thermometer",
    "desc": "Record fresh concrete temperature on arrival and surface temperatures of formwork and rebar before pouring. Measure against the project's specified limit."
  },
  {
    "id": 8,
    "cat": "EDC",
    "title": "Torque Wrench for Mechanical Couplers",
    "desc": "Spot-check mechanical rebar coupler tightness per manufacturer instructions before inspection. Keep a valid calibration tag on the wrench."
  },
  {
    "id": 9,
    "cat": "EDC",
    "title": "Insulated Hydration Flask & Electrolytes",
    "desc": "Drink small amounts frequently, not only when thirsty. Use oral rehydration salts on high-humidity shifts and know the signs of heat exhaustion."
  },
  {
    "id": 10,
    "cat": "EDC",
    "title": "Crack Width Gauge & Magnifier",
    "desc": "Record crack width and length on hardened slabs with a comparator card. Photograph with a scale and grid reference before the consultant visits."
  },
  {
    "id": 11,
    "cat": "EDC",
    "title": "Engineer Inspection Stamp",
    "desc": "Stamp delivery tickets, pour approvals and work orders with date, time and initials as your record of what was checked."
  },
  {
    "id": 12,
    "cat": "EDC",
    "title": "Pocket Level with Magnetic Base",
    "desc": "Quick plumb checks on column kickers, embedded conduits and steel plates without needing a second person."
  },
  {
    "id": 13,
    "cat": "EDC",
    "title": "Cover Meter / Cover Block Gauge",
    "desc": "Verify spacers give the specified nominal cover. Cover for substructure elements in saline ground is typically larger than for superstructure; follow the drawings."
  },
  {
    "id": 14,
    "cat": "EDC",
    "title": "Rechargeable Inspection Torch",
    "desc": "Needed for basement shafts, anchor heads, manholes and the underside of falsework. Carry spare batteries or a charger."
  },
  {
    "id": 15,
    "cat": "EDC",
    "title": "Handheld Anemometer",
    "desc": "Crane operations must stop at the limit set in the manufacturer's manual and the lift plan (often around 20 m/s in-service). Log wind readings whenever lifting is suspended."
  },
  {
    "id": 16,
    "cat": "EDC",
    "title": "Rebound (Schmidt) Hammer",
    "desc": "Use for comparative uniformity checks across cured bays only. It does not replace cube or core strength results."
  },
  {
    "id": 17,
    "cat": "EDC",
    "title": "Weatherproof A4 Clipboard",
    "desc": "Keeps approved drawings and permits clean and dry in dust storms and sweat. Use a clear cover sleeve."
  },
  {
    "id": 18,
    "cat": "EDC",
    "title": "Wire Gauge & Slump Cone Kit",
    "desc": "Carry the full slump kit (cone, base plate, tamping rod, tape) and a wire gauge to verify tie-wire diameter on delivery."
  },
  {
    "id": 19,
    "cat": "EDC",
    "title": "Tool Lanyards & Fall-Arrest Gear",
    "desc": "Tether tools when working at height and inspect harnesses and lanyards before each use. Tag out any damaged equipment."
  },
  {
    "id": 20,
    "cat": "EDC",
    "title": "Respirator (FFP2 / N95 or higher)",
    "desc": "Use during silica-generating work: scabbling, cutting, grinding, shotcreting. Fit-test the mask and follow the project's RPE procedure."
  },
  {
    "id": 21,
    "cat": "REGULATIONS",
    "title": "Dubai Building Code",
    "desc": "Structural, fire and MEP details must follow the Dubai Building Code and DM circulars in force. Keep the latest revision reference on site."
  },
  {
    "id": 22,
    "cat": "REGULATIONS",
    "title": "DM Inspection Request Workflow",
    "desc": "Raise inspection requests through the Dubai Municipality channel the project uses well before planned casting. Get the consultant's approval first."
  },
  {
    "id": 23,
    "cat": "REGULATIONS",
    "title": "Trakhees EHS Permits (Free Zones)",
    "desc": "In Trakhees-regulated zones (e.g. JAFZA, Dubai Maritime City) check which EHS permits and registrations your works need and display them as required."
  },
  {
    "id": 24,
    "cat": "REGULATIONS",
    "title": "UAE Midday Work Ban",
    "desc": "Outdoor work in direct sun is banned 12:30 PM to 3:00 PM from 15 June to 15 September. Penalties apply per worker, with a cap per establishment. Verify current MOHRE rules."
  },
  {
    "id": 25,
    "cat": "REGULATIONS",
    "title": "DEWA NOC Before Excavation",
    "desc": "Do not start trenching or excavation without the required DEWA NOC and cable/pipe drawings. Hand-dig and use detection near live services."
  },
  {
    "id": 26,
    "cat": "REGULATIONS",
    "title": "Civil Defence Fire-Stopping",
    "desc": "Firestop systems at penetrations through fire-rated elements must be Dubai Civil Defence approved and installed per the approved detail. Photograph before covering."
  },
  {
    "id": 27,
    "cat": "REGULATIONS",
    "title": "RTA Permits for Road Works",
    "desc": "Boom pumps or deliveries affecting public roads need RTA approvals and traffic management (signage, arrow boards, flaggers) before work starts."
  },
  {
    "id": 28,
    "cat": "REGULATIONS",
    "title": "Soil Investigation Records",
    "desc": "Confirm borehole depth and any plate load or bearing checks match the approved geotechnical report and permit conditions before blinding."
  },
  {
    "id": 29,
    "cat": "REGULATIONS",
    "title": "Construction Waste Manifests",
    "desc": "Keep waste transfer tickets from DM-approved waste carriers and disposal sites for all debris leaving the project."
  },
  {
    "id": 30,
    "cat": "REGULATIONS",
    "title": "Third-Party Lifting Gear Certificates",
    "desc": "Cranes, slings, shackles and hoists need valid third-party inspection certificates from an accredited body. Check colour tags and expiry dates on site."
  },
  {
    "id": 31,
    "cat": "REGULATIONS",
    "title": "Excavation and Shoring Monitoring",
    "desc": "Deep excavations next to roads or structures need a monitoring plan (inclinometers, survey points) with readings reported at the frequency the consultant requires."
  },
  {
    "id": 32,
    "cat": "REGULATIONS",
    "title": "Approved Drawing Set On Site",
    "desc": "Keep a stamped, current set of approved drawings in the site office. Withdraw superseded revisions to prevent building from old drawings."
  },
  {
    "id": 33,
    "cat": "REGULATIONS",
    "title": "Dewatering Discharge Approval",
    "desc": "Dewatering discharge needs the authority's approval and water quality checks (turbidity, salinity, pH, hydrocarbons) before it goes to any drain or lagoon."
  },
  {
    "id": 34,
    "cat": "REGULATIONS",
    "title": "Al Sa'fat Green Building Requirements",
    "desc": "Dubai's Al Sa'fat rating system sets requirements for materials, energy and water. Check the project's target tier and gather the evidence early."
  },
  {
    "id": 35,
    "cat": "REGULATIONS",
    "title": "Edge Protection Dimensions",
    "desc": "Typical guard rail setup: top rail about 1.0-1.1 m, mid-rail, and toe board. Cover and mark openings. Follow the project's work-at-height procedure."
  },
  {
    "id": 36,
    "cat": "REGULATIONS",
    "title": "Noise Control",
    "desc": "Noisy work near residential areas is restricted to permitted hours. Check the current DM noise rules and any night-work permit conditions."
  },
  {
    "id": 37,
    "cat": "REGULATIONS",
    "title": "Scaffold Inspection Tags",
    "desc": "Do not allow use of scaffolds without a valid, up-to-date inspection tag signed by a competent scaffold inspector."
  },
  {
    "id": 38,
    "cat": "REGULATIONS",
    "title": "Confined Space Entry Permits",
    "desc": "Wet wells, deep manholes and tanks need a permit, ventilation, atmospheric gas testing (O2, CO, H2S, LEL), a standby attendant and rescue arrangements."
  },
  {
    "id": 39,
    "cat": "REGULATIONS",
    "title": "Worker Welfare & Transport",
    "desc": "Provide air-conditioned transport, shaded and cooled rest areas, and cool drinking water. Check labour accommodation standards."
  },
  {
    "id": 40,
    "cat": "REGULATIONS",
    "title": "Incident Reporting",
    "desc": "Serious injuries, dangerous occurrences and structural failures must be reported to the relevant authorities and the client within the required timeframes. Know your project procedure."
  },
  {
    "id": 41,
    "cat": "CONCRETE",
    "title": "Fresh Concrete Temperature Limit",
    "desc": "Hot-weather specifications typically cap fresh concrete temperature at about 32 C at placing (often lower for mass or marine elements). Use the project specification limit and record every truck."
  },
  {
    "id": 42,
    "cat": "CONCRETE",
    "title": "Chilled Water and Flake Ice",
    "desc": "Confirm the plant uses chilled water and flake ice in the mix to bring concrete temperature down in summer, as the approved hot-weather plan requires."
  },
  {
    "id": 43,
    "cat": "CONCRETE",
    "title": "Slump Loss and Transit Delays",
    "desc": "Plan for traffic delays on major roads. Check slump on arrival. Never allow uncontrolled water addition on site."
  },
  {
    "id": 44,
    "cat": "CONCRETE",
    "title": "Cube Sampling Frequency",
    "desc": "Sample at the frequency in the specification (commonly one set per 50 m3 or per pour, whichever is more onerous). Test at 7 and 28 days as required."
  },
  {
    "id": 45,
    "cat": "CONCRETE",
    "title": "Curing Tank Temperature",
    "desc": "Keep curing tanks at 20 C plus or minus 2 C (or the standard the lab follows) with a logged thermometer. Keep tank water clean."
  },
  {
    "id": 46,
    "cat": "CONCRETE",
    "title": "Curing Duration for Water-Retaining Elements",
    "desc": "Rafts, retaining walls and tanks typically need extended curing (often 7-14 days minimum). Follow the specification and keep surfaces continuously moist."
  },
  {
    "id": 47,
    "cat": "CONCRETE",
    "title": "Curing Compounds",
    "desc": "Where water curing is impractical, use an approved membrane-forming curing compound (e.g. to ASTM C309) applied at the specified coverage rate straight after finishing."
  },
  {
    "id": 48,
    "cat": "CONCRETE",
    "title": "Plastic Shrinkage Cracking",
    "desc": "In hot, dry or windy conditions check the evaporation rate and use sunshades, windbreaks and fog misting. Cover finished surfaces without delay."
  },
  {
    "id": 49,
    "cat": "CONCRETE",
    "title": "Silica Fume Concrete",
    "desc": "Marine and chloride-exposed concrete often includes silica fume for low permeability. Confirm dosage, dispersion and the approved mix design."
  },
  {
    "id": 50,
    "cat": "CONCRETE",
    "title": "GGBS in Substructure Mixes",
    "desc": "High GGBS replacement lowers heat of hydration and improves sulphate and chloride resistance. Expect slower early strength and longer curing needs."
  },
  {
    "id": 51,
    "cat": "CONCRETE",
    "title": "Low Cube Results",
    "desc": "If 28-day results fail, notify the consultant immediately. Investigation (cores, non-destructive testing) must follow the consultant's instructions."
  },
  {
    "id": 52,
    "cat": "CONCRETE",
    "title": "Formwork Striking Times",
    "desc": "Strike times depend on element, span, cement type and temperature. Follow the formwork engineer's and consultant's approved striking schedule."
  },
  {
    "id": 53,
    "cat": "CONCRETE",
    "title": "Avoiding Cold Joints",
    "desc": "Calculate truck intervals and use retarder if needed so successive layers blend while the previous layer is still workable."
  },
  {
    "id": 54,
    "cat": "CONCRETE",
    "title": "Thermocouple Monitoring for Mass Pours",
    "desc": "Install thermocouples in thick elements and log core and surface temperatures. Keep the differential within the limit in the thermal control plan (commonly 20 C)."
  },
  {
    "id": 55,
    "cat": "CONCRETE",
    "title": "Handling Epoxy-Coated Rebar",
    "desc": "Use padded slings and avoid dragging. Repair coating damage with approved repair material per the specification."
  },
  {
    "id": 56,
    "cat": "CONCRETE",
    "title": "Waterstops",
    "desc": "Fix waterstops centrally in joints and protect them from damage and contamination. Keep hydrophilic types dry until concrete is placed."
  },
  {
    "id": 57,
    "cat": "CONCRETE",
    "title": "Bleed Water Management",
    "desc": "Never trowel bleed water back into the surface. Remove it before finishing to avoid a weak, dusty top layer."
  },
  {
    "id": 58,
    "cat": "CONCRETE",
    "title": "Aggregate Shading at Batch Plant",
    "desc": "Confirm aggregates are shaded and sprayed or cooled as per the hot-weather plan to reduce mix temperature."
  },
  {
    "id": 59,
    "cat": "CONCRETE",
    "title": "Construction Joint Preparation",
    "desc": "Remove laitance and roughen joint faces to expose coarse aggregate. Clean and wet (to saturated surface dry) before the next pour."
  },
  {
    "id": 60,
    "cat": "CONCRETE",
    "title": "Self-Compacting Concrete Checks",
    "desc": "For congested zones use SCC. Check slump-flow spread and visual stability on arrival against the approved mix design limits."
  },
  {
    "id": 61,
    "cat": "FOUNDATIONS",
    "title": "Aggressive Ground Conditions",
    "desc": "Coastal and sabkha soils carry high chlorides and sulphates. Follow the approved protection system (suitable concrete mix, waterproofing and cover)."
  },
  {
    "id": 62,
    "cat": "FOUNDATIONS",
    "title": "Wellpoint System Air Leaks",
    "desc": "Inspect couplings and headers daily. Air leaks reduce vacuum and let the water table rebound."
  },
  {
    "id": 63,
    "cat": "FOUNDATIONS",
    "title": "Dewatering Pump Redundancy",
    "desc": "Provide standby pumps and auto-start generators. Power loss can flood excavations and affect neighbouring structures."
  },
  {
    "id": 64,
    "cat": "FOUNDATIONS",
    "title": "Wall Deflection Monitoring",
    "desc": "Read inclinometers on retaining walls at the specified frequency. Stop and notify the engineer if readings reach the alert levels in the monitoring plan."
  },
  {
    "id": 65,
    "cat": "FOUNDATIONS",
    "title": "Ground Anchor Stressing",
    "desc": "Witness stressing and lock-off. Record loads and movements against the approved acceptance criteria. Do not exceed allowable loads."
  },
  {
    "id": 66,
    "cat": "FOUNDATIONS",
    "title": "Blinding Surface Quality",
    "desc": "Finish blinding smooth and level so membranes are not punctured. Remove sharp protrusions before laying waterproofing."
  },
  {
    "id": 67,
    "cat": "FOUNDATIONS",
    "title": "Anti-Termite Treatment",
    "desc": "Apply the approved soil treatment per the label and specification, protect it from rain and disturbance, and keep the application records."
  },
  {
    "id": 68,
    "cat": "FOUNDATIONS",
    "title": "Geotextile Around Drains",
    "desc": "Wrap perimeter drains in non-woven geotextile with proper overlaps to stop fines and blown sand clogging them."
  },
  {
    "id": 69,
    "cat": "FOUNDATIONS",
    "title": "Pile Head Trimming",
    "desc": "Cut piles to cut-off level without damaging the sound concrete below. Clean the exposed starter bars."
  },
  {
    "id": 70,
    "cat": "FOUNDATIONS",
    "title": "Pile Integrity Testing (PIT)",
    "desc": "Low-strain integrity testing helps detect necking and defects. The test percentage is set by the specification and consultant."
  },
  {
    "id": 71,
    "cat": "FOUNDATIONS",
    "title": "Dynamic Pile Load Testing",
    "desc": "High-strain dynamic tests and static load tests confirm capacity. Follow the approved test pile programme and results review process."
  },
  {
    "id": 72,
    "cat": "FOUNDATIONS",
    "title": "Cross-Hole Sonic Logging Tubes",
    "desc": "Keep tubes sealed, water-filled and clear of debris so probes can pass the full depth."
  },
  {
    "id": 73,
    "cat": "FOUNDATIONS",
    "title": "Waterproofing Laps and Testing",
    "desc": "Inspect every lap and detail. Carry out the tests the waterproofing specification requires (e.g. spark, flood or vacuum tests) and record them."
  },
  {
    "id": 74,
    "cat": "FOUNDATIONS",
    "title": "Protection Boards Over Membranes",
    "desc": "Fix protection boards over vertical membranes before backfilling. Backfill with approved material in controlled layers."
  },
  {
    "id": 75,
    "cat": "FOUNDATIONS",
    "title": "Backfill Compaction",
    "desc": "Compact in the maximum layer thickness the specification gives. Carry out density tests at the specified frequency against the required compaction level."
  },
  {
    "id": 76,
    "cat": "FOUNDATIONS",
    "title": "Neighbouring Structure Monitoring",
    "desc": "Install and baseline survey points on adjacent structures before excavation. Read at the agreed frequency during dewatering."
  },
  {
    "id": 77,
    "cat": "FOUNDATIONS",
    "title": "Oil Interceptors on Discharge",
    "desc": "If dewatering water shows sheen or oil odour, route it through an interceptor and test before discharge."
  },
  {
    "id": 78,
    "cat": "FOUNDATIONS",
    "title": "Sump Location in Rafts",
    "desc": "Plan sumps and dewatering points away from critical zones, and plan their sealing before casting."
  },
  {
    "id": 79,
    "cat": "FOUNDATIONS",
    "title": "Anchor Free-Length Sleeves",
    "desc": "Check the sleeve over the free length of anchors so load transfers to the bond zone as designed."
  },
  {
    "id": 80,
    "cat": "FOUNDATIONS",
    "title": "Joints in Long Basement Walls",
    "desc": "Long walls need movement or contraction joints per the design. Install waterstops and filler boards correctly and keep them clean."
  },
  {
    "id": 81,
    "cat": "QAQC",
    "title": "WIR / RFI Lead Times",
    "desc": "Submit work inspection requests in time for the consultant's review. Never pour on a verbal approval."
  },
  {
    "id": 82,
    "cat": "QAQC",
    "title": "Material Inspection Requests (MIR)",
    "desc": "Do not use bulk materials until the MIR is approved by the consultant. Keep the approved submittal on file."
  },
  {
    "id": 83,
    "cat": "QAQC",
    "title": "Bar Bending Schedule Checks",
    "desc": "Cross-check deliveries against the BBS: diameter, shape, length, hooks and bends. Tag and segregate rejected bars."
  },
  {
    "id": 84,
    "cat": "QAQC",
    "title": "Pre-Pour Cleaning",
    "desc": "Leave cleanout openings in deep forms and blow out debris before closing them. Check for standing water."
  },
  {
    "id": 85,
    "cat": "QAQC",
    "title": "Tie-Wire Ends Turned Inward",
    "desc": "Bend tie-wire ends away from the formwork face so they don't sit in the cover zone and cause rust staining or spalling."
  },
  {
    "id": 86,
    "cat": "QAQC",
    "title": "Post-Tension Duct Profiles",
    "desc": "Verify tendon heights at high and low points and support ducts at the specified spacing to prevent movement during the pour."
  },
  {
    "id": 87,
    "cat": "QAQC",
    "title": "Post-Tension Elongation",
    "desc": "Record jacking force and elongation for every tendon. Compare against the calculated values within the tolerance in the specification and report deviations."
  },
  {
    "id": 88,
    "cat": "QAQC",
    "title": "Grouting PT Ducts",
    "desc": "Use approved grout and procedure. Continue until consistent grout flows from vents, and keep grouting records."
  },
  {
    "id": 89,
    "cat": "QAQC",
    "title": "NCR Close-Out",
    "desc": "Document root cause, corrective and preventive actions, with photographic evidence, before asking for closure."
  },
  {
    "id": 90,
    "cat": "QAQC",
    "title": "Embedded Conduit Spacing",
    "desc": "Do not bunch conduits in slabs. Keep spacing and cover as per the structural drawings and consultant direction."
  },
  {
    "id": 91,
    "cat": "QAQC",
    "title": "Anchor Bolt Templates",
    "desc": "Fix bolts with rigid templates. Survey positions and levels before and after the pour."
  },
  {
    "id": 92,
    "cat": "QAQC",
    "title": "Release Agent Application",
    "desc": "Apply release agent in thin even coats using the approved product. Excess causes staining and poor bond for later finishes."
  },
  {
    "id": 93,
    "cat": "QAQC",
    "title": "Honeycombing Repairs",
    "desc": "Do not patch without the consultant's approval of the repair method. Cut back to sound concrete and use the approved repair materials."
  },
  {
    "id": 94,
    "cat": "QAQC",
    "title": "Pull-Off Bond Testing",
    "desc": "Test bond of screeds and coatings with pull-off testers at the specified frequency against the specified minimum."
  },
  {
    "id": 95,
    "cat": "QAQC",
    "title": "Water-Tightness Testing of Tanks",
    "desc": "Fill and hold for the period in the specification, measure level change and correct for evaporation and temperature."
  },
  {
    "id": 96,
    "cat": "QAQC",
    "title": "Equipment Calibration",
    "desc": "Total stations, levels, torque wrenches and gauges need valid calibration certificates from accredited labs. Check dates."
  },
  {
    "id": 97,
    "cat": "QAQC",
    "title": "Column Kicker Tolerances",
    "desc": "Set kickers accurately to the specified tolerance. Errors at the base carry up the whole building."
  },
  {
    "id": 98,
    "cat": "QAQC",
    "title": "Joint Fillers and Sealants",
    "desc": "Use compatible filler, backing rod, primer and sealant per the approved data sheets and joint movement design."
  },
  {
    "id": 99,
    "cat": "QAQC",
    "title": "Structural Steel Weld Testing",
    "desc": "Non-destructive testing of welds (visual, MPI, UT) by qualified inspectors at the frequency in the ITP. Keep reports."
  },
  {
    "id": 100,
    "cat": "QAQC",
    "title": "Snagging and Handover",
    "desc": "Track snags by location with photos, responsible trade and close-out sign-off. Update daily during handover."
  },
  {
    "id": 101,
    "cat": "MANAGEMENT",
    "title": "Daily Site Diary",
    "desc": "Record weather, manpower by trade, equipment, quantities poured, delays, instructions received and visitors every day."
  },
  {
    "id": 102,
    "cat": "MANAGEMENT",
    "title": "Delay and Claim Notices",
    "desc": "Check your contract's notice periods (FIDIC and others specify time limits) and notify promptly with supporting records."
  },
  {
    "id": 103,
    "cat": "MANAGEMENT",
    "title": "Concrete Ticket Reconciliation",
    "desc": "Tally truck tickets against theoretical volume during the pour to detect overruns, losses or formwork movement early."
  },
  {
    "id": 104,
    "cat": "MANAGEMENT",
    "title": "Daywork Records",
    "desc": "Never sign blank daywork sheets. Record hours, names, plant and the reason for the extra work at the time."
  },
  {
    "id": 105,
    "cat": "MANAGEMENT",
    "title": "Plant Breakdown and Standing Logs",
    "desc": "Time-stamp equipment breakdowns and idle time. This protects against disputed invoices and supports claims."
  },
  {
    "id": 106,
    "cat": "MANAGEMENT",
    "title": "Toolbox Talks",
    "desc": "Hold short daily briefings on that day's actual risks (heat, lifting, formwork, traffic). Record attendance."
  },
  {
    "id": 107,
    "cat": "MANAGEMENT",
    "title": "Weekly Coordination Meetings",
    "desc": "Review a 2-4 week lookahead and resolve trade interfaces and sleeve or penetration clashes before the pour."
  },
  {
    "id": 108,
    "cat": "MANAGEMENT",
    "title": "Material Waste Tracking",
    "desc": "Track rebar scrap and formwork re-use against targets. Investigate large variances."
  },
  {
    "id": 109,
    "cat": "MANAGEMENT",
    "title": "Interim Payment Cross-Checks",
    "desc": "Measure completed quantities jointly with the QS and keep records to support valuations."
  },
  {
    "id": 110,
    "cat": "MANAGEMENT",
    "title": "Site Logistics Planning",
    "desc": "Position laydown, fabrication yards and wash bays so deliveries and cranes don't block each other."
  },
  {
    "id": 111,
    "cat": "MANAGEMENT",
    "title": "Photos Before Covering",
    "desc": "Photograph unforeseen services or obstructions, with a scale and location, before they are covered. This supports variation claims."
  },
  {
    "id": 112,
    "cat": "MANAGEMENT",
    "title": "Safety Enforcement",
    "desc": "Enforce PPE and safety rules consistently and record corrective actions with the subcontractor."
  },
  {
    "id": 113,
    "cat": "MANAGEMENT",
    "title": "Generator Fuel Tracking",
    "desc": "Compare diesel deliveries to run hours to spot leaks, inefficiency or losses."
  },
  {
    "id": 114,
    "cat": "MANAGEMENT",
    "title": "Shift Handover Notes",
    "desc": "Give written and verbal handover between day and night teams covering pours, cubes, pumps and curing."
  },
  {
    "id": 115,
    "cat": "MANAGEMENT",
    "title": "As-Built Markups",
    "desc": "Mark actual routes, sleeves and positional changes on a master set as work is installed."
  },
  {
    "id": 116,
    "cat": "MANAGEMENT",
    "title": "Productivity Tracking",
    "desc": "Measure outputs per crew per day to test whether programme durations are realistic."
  },
  {
    "id": 117,
    "cat": "MANAGEMENT",
    "title": "Secure Storage for Sensitive Items",
    "desc": "Store valves, copper, electrical equipment and finishes in secured, ventilated or cooled containers."
  },
  {
    "id": 118,
    "cat": "MANAGEMENT",
    "title": "Crane Time Allocation",
    "desc": "Schedule hook time by trade and hour. Review it daily to reduce waiting."
  },
  {
    "id": 119,
    "cat": "MANAGEMENT",
    "title": "Road Cleanliness and Wheel Washing",
    "desc": "Provide wheel washing at exits and sweep spills. Dirty roads attract authority penalties."
  },
  {
    "id": 120,
    "cat": "MANAGEMENT",
    "title": "Emergency Drills",
    "desc": "Run drills for heat illness, evacuation and rescue at height. Check first-aiders and the emergency contact list."
  }
];

const CATEGORIES = [
  { key: 'ALL', label: 'All' },
  { key: 'EDC', label: 'Gear & EDC' },
  { key: 'REGULATIONS', label: 'Dubai Codes' },
  { key: 'CONCRETE', label: 'Concrete' },
  { key: 'FOUNDATIONS', label: 'Substructure' },
  { key: 'QAQC', label: 'QA/QC & WIR' },
  { key: 'MANAGEMENT', label: 'Management' }
];

const HASH_TO_CAT = { concrete: 'CONCRETE', regulations: 'REGULATIONS', edc: 'EDC', foundations: 'FOUNDATIONS', qaqc: 'QAQC', management: 'MANAGEMENT', all: 'ALL' };

let activeCategory = 'ALL';
let searchQuery = '';
let showOnlyBookmarks = false;
let bookmarkedIds = [];

try { bookmarkedIds = JSON.parse(localStorage.getItem('agac_bookmarks') || '[]'); } catch (e) { bookmarkedIds = []; }

function saveBookmarks() {
  try { localStorage.setItem('agac_bookmarks', JSON.stringify(bookmarkedIds)); } catch (e) {}
  document.getElementById('bookmarkCount').textContent = bookmarkedIds.length;
}

function toggleBookmark(id) {
  bookmarkedIds = bookmarkedIds.includes(id) ? bookmarkedIds.filter(x => x !== id) : bookmarkedIds.concat(id);
  saveBookmarks();
  renderTips();
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function renderPills() {
  const nav = document.getElementById('categoryPills');
  nav.innerHTML = CATEGORIES.map(c => {
    const n = c.key === 'ALL' ? tipsData.length : tipsData.filter(t => t.cat === c.key).length;
    return '<button class="pill' + (c.key === activeCategory ? ' active' : '') + '" data-cat="' + c.key + '">' + c.label + ' (' + n + ')</button>';
  }).join('');
}

function renderTips() {
  const grid = document.getElementById('tipsGrid');
  const empty = document.getElementById('emptyState');
  const q = searchQuery;
  const filtered = tipsData.filter(t =>
    (activeCategory === 'ALL' || t.cat === activeCategory) &&
    (!q || (t.title + ' ' + t.desc + ' ' + t.cat).toLowerCase().includes(q)) &&
    (!showOnlyBookmarks || bookmarkedIds.includes(t.id))
  );
  document.getElementById('shownCount').textContent = filtered.length;
  empty.hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map(t => {
    const on = bookmarkedIds.includes(t.id);
    return '<article class="tip-card">' +
      '<div class="tip-header"><div><span class="tip-badge">' + esc(t.cat) + '</span><span class="tip-num">#' + t.id + '</span></div>' +
      '<button class="btn-star' + (on ? ' starred' : '') + '" data-id="' + t.id + '" aria-label="' + (on ? 'Remove bookmark' : 'Bookmark tip') + '">' + (on ? '\u2605' : '\u2606') + '</button></div>' +
      '<h2 class="tip-title">' + esc(t.title) + '</h2>' +
      '<p class="tip-desc">' + esc(t.desc) + '</p></article>';
  }).join('');
}

function setCategory(cat) {
  activeCategory = cat;
  renderPills();
  renderTips();
}

function applyHash() {
  const h = location.hash.replace('#', '').toLowerCase();
  if (HASH_TO_CAT[h]) setCategory(HASH_TO_CAT[h]);
}

document.getElementById('categoryPills').addEventListener('click', e => {
  const b = e.target.closest('.pill');
  if (b) setCategory(b.dataset.cat);
});
document.getElementById('tipsGrid').addEventListener('click', e => {
  const b = e.target.closest('.btn-star');
  if (b) toggleBookmark(Number(b.dataset.id));
});
document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderTips();
});
document.getElementById('filterBookmarksBtn').addEventListener('click', e => {
  showOnlyBookmarks = !showOnlyBookmarks;
  e.currentTarget.setAttribute('aria-pressed', String(showOnlyBookmarks));
  renderTips();
});
window.addEventListener('hashchange', applyHash);

// PWA install prompt (Chrome/Android; iOS uses Share > Add to Home Screen)
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('installBtn').hidden = false;
});
document.getElementById('installBtn').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById('installBtn').hidden = true;
});
window.addEventListener('appinstalled', () => { document.getElementById('installBtn').hidden = true; });

// Service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('AGAC service worker registered', reg.scope))
      .catch(err => console.error('Service worker failed', err));
  });
}

saveBookmarks();
renderPills();
renderTips();
applyHash();
