# MaintenancePro

### A Computerized Maintenance Management System (CMMS) built by Hafiz Toyyib.


A real production app for a real client to test upon. More features will be added as production continues and feedbacks are received from clients.

This is an app for property managers, maintenance managers, facility managers/coordinators, small-medium size property owners and so on. This app lets you manage your on-going maintenance/operations going on in your facility and keep track of all work-orders. It let's you assign work to a specific technician, see their progress, communicate with them with our in-app chat feature, send email to technican with details of workorder,see annual reports filtered by year, filter workorders by date,title or name, create and filter inventory, view graphs showing all aspects of your maintenance operations, print pdf and so on.

### Features

- Admin view (Full control and access )
- Technician view (Only workorders assigned and chat feature)
- Login via 3rd party authentication (Auth0).
- Create workorder and once submitted, technican gets an email with description and title of the workorder.
- Filter workorder with ease.
- Create inventory based on category.
- Filter inventory with ease.
- View Today as glance that shows all pending/ongoing workorders , and graphical representation of progress made by all technicians
- Chat with technician anytime you want in real time!
- Summary feature give more detailed over view of your entire year. Different tabs give you a graph of monthly workorders and time taken to complete. Summary also gives your details about technicians and their stats.
- Summary for any given year can be chosen from a drop down list.
- Print the PDF of summary page with our print summary feature.
- Add and review assets of the building
- Asset review helps to forecast future upcoming expenses and make budgetary plans accordingly.

### Quick Overview of Tech/Stack

This is a full-stack application completely built from scratch by Ujjawal, as a final project for our graduation from Full-stack WebDev Bootcamp. As part of my internship project in Eni Ghana Exploration and Production, i reached out to him and i modified the code to suit my REST API and made some changes as well such as 
When a workorder reached deadline, it should prompt the technician and the Planner, also for the technician to also raise a workorder notification instead of it being restricted to the Planner.

This repo is the Front-end app repo.

Back-end is supplied by Computerised Maintenance Management System backend in my account. 

### Highlights

| !["Admin Dashboard"](https://github.com/hafizthesakora/Computerised-Maintenece-Management-System-CMMS-Frontend/blob/main/docs/admin.gif?raw=true) |
| :-------------------------------------------------------------------------------------------------------: |
|                                             _Admin Dashboard_                                             |

| !["Technician Dashboard"](https://github.com/hafizthesakora/Computerised-Maintenece-Management-System-CMMS-Frontend/blob/main/docs/technician.gif?raw=true) |
| :-----------------------------------------------------------------------------------------------------------------: |
|                                               _Technician Dashboard_                                                |

| !["Email sent to Technician on workorder submission"](https://github.com/hafizthesakora/Computerised-Maintenece-Management-System-CMMS-Frontend/blob/main/docs/tech_email.png?raw=true) |
| :---------------------------------------------------------------------------------------------------------------------------------------------: |
|                                               _Email sent to Technician on workorder submission_                                                |

| !["Database"](https://github.com/hafizthesakora/Computerised-Maintenece-Management-System-CMMS-Frontend/blob/main/docs/db_Structure.png?raw=true) |
| :-------------------------------------------------------------------------------------------------------: |
|                                     _Non-Relational MongoDB Database_                                     |

### Testing

- ESlint (Static)
- Manual Testing

### Dependencies / Platforms used

FrontEnd

- Auth0
- mailgun
- Bulma
- jspdf
- html-to-image
- recharts
- sockets.io

BackEnd

- MongoDb
- Express
- Morgan
- Nodemon
- passport-jwt
- dotenv
