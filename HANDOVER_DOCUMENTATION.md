# DRIVE SHINE — Complete System Handover & Technical Documentation

**Document Version:** 1.0 (Production Release)  
**Target Client:** Drive Shine Management & Technical Operations  
**Official Client GitHub Organization:** [https://github.com/driveshine](https://github.com/driveshine)  
**PDI Platform URL:** [https://pdi.driveshine.co.in](https://pdi.driveshine.co.in)  
**Public Website URL:** [https://driveshine.co.in](https://driveshine.co.in)  
**Handover Date:** October 2026  

---

## 1. Executive Summary

This document provides the authoritative handover documentation for the complete **Drive Shine** automotive inspection ecosystem. The solution comprises two tightly integrated platforms:

1. **PDI & Vehicle Inspection Platform (`pdidriveshine`)**:
   - Progressive Web App (PWA) for certified field inspectors with an offline-first sync engine.
   - Central Operations Admin & Reception Console for booking coordination, payment verification, and employee settlements.
   - High-performance, serverless Cloudflare Worker API backend, Cloudflare D1 distributed SQLite database, and Cloudflare R2 private media storage.
   - High-fidelity PDF report generation powered by Cloudflare Browser Rendering.

2. **Public Customer Website & Booking CMS (`drive-shine-studio-v2`)**:
   - High-conversion customer portal with dynamic city landing pages.
   - Lead capture and booking pipeline saving directly into the PDI operations database.
   - Instant WhatsApp dispatch and buyer advisory network across Andhra Pradesh, Telangana, and key national metro hubs.

All source code has been committed, tested, tagged, and pushed to the client's official organization at **GitHub ([github.com/driveshine](https://github.com/driveshine))**.

---

## 2. Client GitHub Repositories

| Repository Name | Type / Scope | Branch | Production Deployment Target |
| :--- | :--- | :--- | :--- |
| **`driveshine/pdidriveshine`**<br>[https://github.com/driveshine/pdidriveshine](https://github.com/driveshine/pdidriveshine) | PDI Inspector PWA, Admin Hub, Cloudflare Worker API, D1 Migrations, PDF Engine | `main` | Cloudflare Workers<br>`https://pdi.driveshine.co.in` |
| **`driveshine/drive-shine-studio-v2`**<br>[https://github.com/driveshine/drive-shine-studio-v2](https://github.com/driveshine/drive-shine-studio-v2) | Public Website, City Landing Pages CMS, Customer Booking Engine | `main` | Vercel Edge Network<br>`https://driveshine.co.in` |

### Cloning Repositories
```bash
# Clone the PDI Platform & Admin Hub
git clone https://github.com/driveshine/pdidriveshine.git

# Clone the Public Customer Website
git clone https://github.com/driveshine/drive-shine-studio-v2.git
```

---

## 3. Architecture & Technology Stack

| Layer | Technology | Key Highlights |
| :--- | :--- | :--- |
| **Backend API** | Cloudflare Workers, Hono.js v4, TypeScript | Sub-50ms execution at the edge. Handles auth, validation, RBAC, payment webhooks, and media streaming. |
| **Database** | Cloudflare D1 (Distributed SQLite), Drizzle ORM | Serverless relational database with ACID guarantees, automated hourly snapshots, and 26 sequential migrations. |
| **Object Storage** | Cloudflare R2 | S3-compatible private object storage for customer signatures and inspection photos with zero egress fees. |
| **PDF Generation** | Cloudflare Browser Rendering (Puppeteer) | Serverless headless Chrome generating pixel-perfect customer inspection reports with concurrency leasing locks. |
| **Inspector PWA** | React 19, TypeScript, Vite, IndexedDB, Tailwind CSS | Offline-first sync engine. Inspectors can complete 100% of an inspection in basement parking lots without internet. |
| **Admin Portal** | React 19, Vite, Lucide UI, Tailwind CSS | Unified operations console: Leads & Bookings, Inspector assignment, Report audits, Verify Payments, and Employee Settlements. |
| **Public Website** | Next.js / React, Tailwind CSS, Vercel | Dynamic City CMS pages, buyer advisory, direct lead generation into Cloudflare D1. |

---

## 4. Role-Based Access Control (RBAC)

The platform enforces four security roles across backend endpoints and frontend views:

1. **Super Admin (`MAIN`)**:
   - Chief Operations & Founders. Full access to system settings, city pricing, inspector accounts, finance ledger, report edits, and storage archiving.
2. **Limited Admin (`LIMITED`)**:
   - City Managers. Restricted to assigned leads and same-city inspectors. Cannot view global financial balances or delete storage archives.
3. **Receptionist (`RECEPTIONIST`)**:
   - Front Desk Personnel. Access granted to **Leads & Bookings**, **Website Inquiries**, **Submitted Reports** (read-only audit), **Payment Verification** (review UPI proofs without master finance password), and **Employee Payouts** (view and settle inspector fees). Strictly forbidden from system configuration, city creation, and inspector account deletion.
4. **Inspector (`INSPECTOR`)**:
   - Certified Engineers. Mobile PWA interface only. View assigned jobs, capture pre-inspection customer signature, execute 19-section vehicle audit, upload photos, scan VIN barcodes, collect UPI/Razorpay payments, and submit completed reports.

---

## 5. 19-Section PDI Vehicle Checklist

The inspection engine enforces a comprehensive 19-section audit covering 120+ inspection checkpoints:

1. **Section 01 — Introduction:** Customer phone number, terms agreement.
2. **Section 02 — Inspector Details:** Inspector name, phone, operating city, inspection type (New Car PDI / Used Car).
3. **Section 03 — Vehicle Details:** Car make/model, registration number, odometer, fuel type, transmission, 17-char VIN/chassis with barcode scanner, RC photos.
4. **Section 04 — Engine & Transmission:** Oil condition, coolant, battery health, transmission fluid, rodent damage check, engine bay photos.
5. **Section 05 — AC & Climate Control:** Cooling efficiency, blower speeds, heater core, vent controls, cabin filter condition.
6. **Section 06 — Steering, Suspension & Brakes:** Steering play, power steering fluid, brake pads, shock absorbers, suspension bushes.
7. **Section 07 — Electricals & Interior:** Power windows, central locking, infotainment touchscreen, horn, wipers, airbags condition, seat belts.
8. **Section 08 — Interior / Door Trims:** **Dashboard Photo** (required evidence), door trim condition, dashboard scratches, glove box lock.
9. **Section 09 — Exterior (Front):** Front corner photos, headlights (LHS/RHS), fog lights, aprons, radiator support, windshield.
10. **Section 10 — Exterior (Left Side):** Full left-side photo, fender, front door, rear door, quarter panel, running board, ORVM.
11. **Section 11 — Tyres (Left Side):** LHS front & rear tyre tread depth, brand, manufacturing year/DOT code, alloy/rim condition.
12. **Section 12 — Exterior (Rear):** Full rear photo, tail lamps, boot door, rear bumper, boot floor rust check, spare wheel & toolkit.
13. **Section 13 — Exterior (Right Side):** Full right-side photo, fender, front door, rear door, quarter panel, running board, ORVM.
14. **Section 14 — Tyres (Right Side):** RHS front & rear tyre tread depth, brand, manufacturing year, alloy wheel condition.
15. **Section 15 — Panel Alignment:** Factory gap checks between bonnet, fenders, doors, and dickey; panel gap photo evidence.
16. **Section 16 — Underbody Inspection:** 4-side underbody photos; exhaust line, chamber leak check, structural floor rust identification.
17. **Section 17 — Car Running Condition:** Operational viability test, engine start test, towing recommendation (if required).
18. **Section 18 — Additional Details:** Inspector remarks, custom observations, supplementary photo gallery.
19. **Section 19 — Paint Meter Readings:** **Overall Paint Condition** (Factory Original 90–140 µm, Repainted >180 µm, Filler Work >300 µm), **Repainted Panels** audit checklist, **Paint Meter Photos**, and gauge observations.

---

## 6. Financial & Accounting Workflows

### Customer Collections
- **Token Booking:** Generated as dynamic Razorpay payment links via the Leads CRM.
- **Remaining Balance:** Collected post-inspection via Razorpay QR Code, UPI transaction screenshot, or Cash.
- **Verification Gate:** UPI screenshot proofs are verified in the Reception / Admin portal before reports are unlocked for customers.

### Employee Payouts (Inspector Compensation)
- **Calculation:** `Total Payout = Inspection Charge (₹) + Petrol Reimbursement (₹)`
- **Batch Settlement:** Receptionists and Admins select completed jobs by employee and execute a single consolidated payout (via UPI reference or Cash record).
- **Audit Locking:** Paid jobs cannot be altered or double-paid. All settlement records and actor identities are captured in `audit_logs`.

---

## 7. Environment Variables & Secrets Reference

### Cloudflare Worker (`wrangler.jsonc` & Secrets)
- `DB`: Cloudflare D1 database binding (`drive-shine-inspect`)
- `PHOTOS`: Cloudflare R2 bucket binding (`drive-shine-inspection-photos`)
- `BROWSER`: Cloudflare Browser Rendering binding for serverless PDF generation
- `APP_ORIGIN`: `https://pdi.driveshine.co.in`
- `PBKDF2_ITERATIONS`: `100000`
- `BOOTSTRAP_SECRET`: Setup secret for super admin provisioning (`/api/setup`)
- `RAZORPAY_KEY_ID`: Razorpay key ID for payment link generation
- `RAZORPAY_KEY_SECRET`: Razorpay secret for payment link creation and webhook verification

### Public Website (Vercel)
- `NEXT_PUBLIC_API_URL`: `https://pdi.driveshine.co.in`
- WhatsApp Dispatch: `+91 94946 42244`

---

## 8. Operational Runbook

### PDI Platform & Backend Worker
```bash
# 1. Install dependencies
npm install

# 2. Run full test suite (unit + worker integration tests)
npm test

# 3. Apply remote database migrations to Cloudflare D1
npx wrangler d1 migrations apply DB --remote

# 4. Build frontend PWA and deploy Cloudflare Worker bundle
npm run build
npx wrangler deploy
```

### Public Customer Website
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build and test production bundle
npm run build

# 4. Deploy to Vercel production
vercel --prod
```

### Backups & Disaster Recovery
- **Database Snapshots:** Cloudflare D1 automatically captures hourly point-in-time recovery snapshots.
- **Manual Export:** Export full SQL database at any time via:
  ```bash
  npx wrangler d1 export DB --remote --output=driveshine_backup.sql
  ```
- **Media Preservation:** Images stored in Cloudflare R2 are immutable and retained indefinitely until explicitly archived by Super Admins.

---
*Documentation prepared for Drive Shine Management. Codebases maintained at [https://github.com/driveshine](https://github.com/driveshine).*
