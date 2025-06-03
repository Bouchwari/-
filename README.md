# نظام إدارة المواد والأصول - ثانوية الوحدة الإعدادية

نظام متكامل لإدارة المواد والأصول في المدرسة، مع دعم كامل للغة العربية واللغة الفرنسية والإنجليزية.

## المميزات

- إدارة المخزون وتتبع المواد المدرسية
- توزيع المواد على المدرسين والفصول
- إدارة طلبات المواد الجديدة
- تتبع صيانة المعدات والأجهزة
- لوحة تحكم تفاعلية مع رسوم بيانية
- تعدد اللغات (العربية، الفرنسية، الإنجليزية)
- دعم استخدام التطبيق دون اتصال بالإنترنت (عند استخدام نسخة سطح المكتب)

## متطلبات النظام

### للتشغيل كتطبيق ويب
- Node.js (الإصدار 18 أو أحدث)
- NPM (أحدث إصدار)

### للتشغيل كتطبيق سطح المكتب
- نظام Windows 10/11، macOS، أو Linux

## التثبيت

### تثبيت التطبيق كتطبيق ويب

1. انسخ المستودع:
   ```
   git clone https://github.com/your-username/school-management-system.git
   cd school-management-system
   ```

2. قم بتثبيت الاعتماديات:
   ```
   npm install
   ```

3. قم بتشغيل التطبيق في وضع التطوير:
   ```
   npm run dev
   ```

4. افتح المتصفح على العنوان:
   ```
   http://localhost:5000
   ```

### تثبيت التطبيق كتطبيق سطح المكتب (Windows)

1. قم بتحميل أحدث ملف تثبيت من [صفحة الإصدارات](https://github.com/your-username/school-management-system/releases)
2. قم بتشغيل ملف التثبيت `.exe` واتبع التعليمات
3. بعد التثبيت، يمكنك تشغيل التطبيق من قائمة البدء

## كيفية بناء نسخة سطح المكتب (للمطورين)

### Windows

قم بتشغيل ملف `build-electron.bat` الموجود في المجلد الرئيسي للمشروع.

### Linux/Mac

1. قم بجعل السكريبت قابل للتنفيذ:
   ```
   chmod +x build-electron.sh
   ```

2. قم بتشغيل السكريبت:
   ```
   ./build-electron.sh
   ```

ستجد ملفات التثبيت في مجلد `release`.

## المساهمة في المشروع

نرحب بالمساهمات! يرجى إنشاء fork للمشروع وإرسال طلب سحب (pull request).

## الترخيص

هذا المشروع مرخص بموجب رخصة MIT.
![image](https://github.com/user-attachments/assets/47c895dc-bac8-4e35-baae-2359e0bf66c6)
![image](https://github.com/user-attachments/assets/f84f1446-a31c-4801-a05b-454c08ce19db)
![image](https://github.com/user-attachments/assets/363ad2d6-229c-4d90-bc62-d8c0908c1f2f)
![image](https://github.com/user-attachments/assets/7c1c2cc5-86c7-4480-a9d4-9459a02e6336)
![image](https://github.com/user-attachments/assets/a9074864-a1d2-49bb-8531-7db972572c34)

## This app was made using AI (replit)
##  The prompt I use :
 A beautiful, animated UI (inspired by modern Figma-like transitions and graphs)
* Fast and responsive deployment
* An improved Arabic version (with corrected RTL layout)
* A full module for managing teacher supply distribution (handled manually by you)
* Additional useful features for school asset management in Morocco

I’ll let you know once it’s ready.


# Material and Asset Management UI for Moroccan Public Schools

Our design uses **Lovable.dev**’s component-based approach to build a fast, modular desktop app that is fully multilingual (Arabic–RTL, French, English) and rich with smooth animations. The color scheme (sky blue, olive green, light grey) is chosen for a scholarly feel: e.g. blue is known to boost productivity and cognitive ability, while green is associated with tranquility and creative thinking. We use large, legible Arabic-first fonts (like Noto Kufi/Naskh) and increase font sizes by \~3 pt in Arabic UI for readability.

## Dashboard (Animated Overview)

&#x20;The **Dashboard** shows live KPI tiles (e.g. total inventory, pending requests, remaining budget, maintenance schedule) that animate on load and increment with a subtle counter effect. Animated graphs (bar and line charts) display monthly expenses and maintenance frequency; each chart animates into view to draw focus. These visuals leverage the brain’s ability to process graphics much faster than text, so users grasp trends at a glance. Alerts highlight low-stock items or overdue maintenance with colored badges or flashes (e.g. red alerts on critical tiles). A language switcher in the top corner toggles Arabic/French/English; in Arabic mode the layout is flipped RTL. Transitions (panel slides, fade-ins) and micro-animations (hover effects, button presses) guide the user through the interface. For example, metric tiles animate their values up from zero to indicate loading, and the map/chart areas fade in sequentially to clarify context. This creates an intuitive, lively overview without overwhelming the user.

* **Live Metric Tiles:** Color-coded cards for “Total Inventory,” “Pending Requests,” “Budget Remaining,” etc., each with an icon and animated counter. Tiles pulse or highlight on hover (micro-animation) to show interactivity.
* **Animated Charts:** On load, the bar/line charts for spending and maintenance smoothly animate their data. This reduces cognitive load by revealing one data element at a time. (Graphs appear as bars rising or lines drawing, as recommended to enhance data storytelling.)
* **Alerts & Warnings:** Prominent colored badges indicate critical issues (e.g. “Low Stock” or “Overdue”). These may briefly animate (shake or fade) to draw attention, then settle into the dashboard.
* **Language Switcher:** A toggle in the header lets the user switch among Arabic, French, and English. Switching to Arabic mirrors the layout RTL and swaps to Arabic labels/typography. (We ensure all icons and layouts flip meaningfully.)

## Inventory Management

&#x20;The **Inventory** screen displays all school assets in a clean, paginated table. Each row shows an item image, name, category, location (building/room), condition (جديد – new, متوسط – fair, متهالك – worn), quantity, and last update. Above the table are filters (by department, classroom, condition, etc.) and a search box. When a new item is added or removed, the corresponding row animates: it slides or fades in/out to give visual feedback. Editing or deleting an item opens a modal form with a smooth slide-down animation for context. These micro-animations make changes clear without distracting. The UI uses large Arabic labels (in Noto Kufi/Naskh) with appropriate spacing; because Arabic text often appears smaller, we enlarge font sizes in RTL mode.

* **Animated Rows:** Adding an item causes a new row to slide down into the table; deleting causes it to fade and collapse. This shows state changes clearly (a key principle of meaningful UI animation).
* **Filters & Search:** Dropdown filters and a live search allow narrowing by category, room, or condition. Filter panels slide open/closed.
* **Add/Edit Modals:** Clicking “Add Item” or “Edit” opens a modal form. These panels animate in (e.g. zoom or slide), and input fields highlight on focus. Submitting shows a brief success animation (such as a checkmark toast).
* **Responsive Icons:** Condition/status icons and action buttons (edit/delete) have hover effects (scale or color change) to indicate interactivity.

## Material Requests (Manual Input)

This screen lets the manager enter requests made by teachers. The form fields include **Teacher Name**, **Department/Class**, **Date**, and **Requested Items** (each row: item name, quantity, notes). Dropdowns or autocomplete help select teacher and item names. All labels appear in the chosen language, with Arabic as default (RTL layout). On submitting a request, an animated notification confirms it (e.g. a slide-up toast saying “Request submitted”).
