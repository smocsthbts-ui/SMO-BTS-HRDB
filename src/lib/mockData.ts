import { User, Department, Employee, ShiftCode, ShiftPlanEntry, TimeAttendancePunch, OTRecord, AllowanceRecord } from '../types';

export const INITIAL_DEPARTMENTS: Department[] = [
  {
    "id": "dept-1",
    "code": "GM",
    "name": "General Management",
    "costCenter": "C93056",
    "division": "MO CS BTS"
  },
  {
    "id": "dept-2",
    "code": "BES/PSY",
    "name": "Building Electrical Services / Power Supply",
    "costCenter": "C93051",
    "division": "MO CS BTS"
  },
  {
    "id": "dept-3",
    "code": "TRW/TRL",
    "name": "Trackwork & Telecom Line",
    "costCenter": "C93052",
    "division": "MO CS BTS"
  },
  {
    "id": "dept-4",
    "code": "TRW/TRD",
    "name": "Trackwork & Depot",
    "costCenter": "C93053",
    "division": "MO CS BTS"
  },
  {
    "id": "dept-5",
    "code": "ADM",
    "name": "Administration",
    "costCenter": "C93054",
    "division": "MO CS BTS"
  },
  {
    "id": "dept-6",
    "code": "MLR",
    "name": "Mainline Rollingstock",
    "costCenter": "C93055",
    "division": "MO CS BTS"
  }
];

export const INITIAL_USERS: User[] = [
  {
    "id": "usr-admin",
    "email": "admin@siemens.com",
    "name": "System Administrator",
    "role": "admin",
    "departmentCode": "GM",
    "isActive": true,
    "createdAt": "2026-01-01"
  },
  {
    "id": "usr-gm",
    "email": "gm.supervisor@siemens.com",
    "name": "GM Supervisor",
    "role": "user",
    "departmentCode": "GM",
    "isActive": true,
    "createdAt": "2026-01-05"
  },
  {
    "id": "usr-bes",
    "email": "bes.lead@siemens.com",
    "name": "BES Team Leader",
    "role": "user",
    "departmentCode": "BES/PSY",
    "isActive": true,
    "createdAt": "2026-01-07"
  },
  {
    "id": "usr-pending",
    "email": "new.staff@siemens.com",
    "name": "New Staff (Waiting Approval)",
    "role": "user",
    "departmentCode": "TRW/TRL",
    "isActive": false,
    "createdAt": "2026-05-01"
  }
];

export const INITIAL_EMPLOYEES: Employee[] = [
  {
    "id": "emp-0950",
    "empNo": "0950",
    "gid": "Z00430UZ",
    "firstName": "Napassawan",
    "lastName": "Ngamsomsong",
    "departmentCode": "GM",
    "division": "MO CS BTS",
    "functionTitle": "Safety Professional",
    "costCenter": "C93056",
    "isShiftWorker": false,
    "isActive": true
  },
  {
    "id": "emp-0406",
    "empNo": "0406",
    "gid": "Z0406UZ",
    "firstName": "Nontapun",
    "lastName": "Morlek",
    "departmentCode": "GM",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-0469",
    "empNo": "0469",
    "gid": "Z0469UZ",
    "firstName": "Poramat",
    "lastName": "Kingthongsuk",
    "departmentCode": "GM",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-0261",
    "empNo": "0261",
    "gid": "Z0261UZ",
    "firstName": "Danai",
    "lastName": "Tammachat",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-0149",
    "empNo": "0149",
    "gid": "Z0149UZ",
    "firstName": "Pettanom",
    "lastName": "Patatayung",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-0173",
    "empNo": "0173",
    "gid": "Z0173UZ",
    "firstName": "Pittaya",
    "lastName": "Kanka",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-1403",
    "empNo": "1403",
    "gid": "Z1403UZ",
    "firstName": "Kaun",
    "lastName": "Tepakum",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-0224",
    "empNo": "0224",
    "gid": "Z0224UZ",
    "firstName": "Natthawut",
    "lastName": "Phuttharaksa",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-1219",
    "empNo": "1219",
    "gid": "Z1219UZ",
    "firstName": "Anuchit",
    "lastName": "Manora",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-0179",
    "empNo": "0179",
    "gid": "Z0179UZ",
    "firstName": "Asanee",
    "lastName": "Prakunhungsit",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-1432",
    "empNo": "1432",
    "gid": "Z1432UZ",
    "firstName": "Jirayu",
    "lastName": "Thapthim",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-0058",
    "empNo": "0058",
    "gid": "Z0058UZ",
    "firstName": "Santipap",
    "lastName": "Thanavanichkul",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-1467",
    "empNo": "1467",
    "gid": "Z1467UZ",
    "firstName": "Treouma",
    "lastName": "Khonghoyrob",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-0195",
    "empNo": "0195",
    "gid": "Z0195UZ",
    "firstName": "Narisorn",
    "lastName": "Lue-Am-Rung",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-1447",
    "empNo": "1447",
    "gid": "Z1447UZ",
    "firstName": "Jitti",
    "lastName": "Rodyan",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-1449",
    "empNo": "1449",
    "gid": "Z1449UZ",
    "firstName": "Panuwat",
    "lastName": "Wangnaewklang",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-0232",
    "empNo": "0232",
    "gid": "Z0232UZ",
    "firstName": "Nareuponn",
    "lastName": "Sirivanasandha",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-1364",
    "empNo": "1364",
    "gid": "Z1364UZ",
    "firstName": "Salisa",
    "lastName": "Sammakarawa",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-0057",
    "empNo": "0057",
    "gid": "Z0057UZ",
    "firstName": "Sumoltha",
    "lastName": "Kongkamnan",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-1459",
    "empNo": "1459",
    "gid": "Z1459UZ",
    "firstName": "Natta",
    "lastName": "Piyamath",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-1460",
    "empNo": "1460",
    "gid": "Z1460UZ",
    "firstName": "Wantanee",
    "lastName": "Saengyunont",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-0200",
    "empNo": "0200",
    "gid": "Z0200UZ",
    "firstName": "Tummanoon",
    "lastName": "Tungariya",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-1417",
    "empNo": "1417",
    "gid": "Z1417UZ",
    "firstName": "Thanaporn",
    "lastName": "Lorsirinun",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-1359",
    "empNo": "1359",
    "gid": "Z1359UZ",
    "firstName": "Bowonlux",
    "lastName": "Sukpasert",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-1398",
    "empNo": "1398",
    "gid": "Z1398UZ",
    "firstName": "Nopparat",
    "lastName": "Chaiau",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-2530",
    "empNo": "2530",
    "gid": "Z2530UZ",
    "firstName": "Thanapat",
    "lastName": "Saksiribhakorn",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  },
  {
    "id": "emp-1485",
    "empNo": "1485",
    "gid": "Z1485UZ",
    "firstName": "Khaing",
    "lastName": "Sabai Maung",
    "departmentCode": "BES/PSY",
    "division": "MO CS BTS",
    "functionTitle": "Specialist",
    "costCenter": "C93056",
    "isShiftWorker": true,
    "isActive": true
  }
];

export const INITIAL_SHIFT_CODES: ShiftCode[] = [
  {
    "id": "sc-1",
    "departmentCode": "ADM",
    "shiftCode": "D",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-2",
    "departmentCode": "TRW/TRL",
    "shiftCode": "A",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-3",
    "departmentCode": "MLR",
    "shiftCode": "D2",
    "startTime": "09:00",
    "endTime": "18:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-4",
    "departmentCode": "GM",
    "shiftCode": "D2",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-5",
    "departmentCode": "ADM",
    "shiftCode": "D-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-6",
    "departmentCode": "ADM",
    "shiftCode": "D-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-7",
    "departmentCode": "ADM",
    "shiftCode": "D-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-8",
    "departmentCode": "ADM",
    "shiftCode": "D-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-9",
    "departmentCode": "ADM",
    "shiftCode": "D-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-10",
    "departmentCode": "ADM",
    "shiftCode": "T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-11",
    "departmentCode": "ADM",
    "shiftCode": "T-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-12",
    "departmentCode": "ADM",
    "shiftCode": "T-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-13",
    "departmentCode": "ADM",
    "shiftCode": "T-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-14",
    "departmentCode": "ADM",
    "shiftCode": "T-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-15",
    "departmentCode": "ADM",
    "shiftCode": "T-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-16",
    "departmentCode": "ADM",
    "shiftCode": "D2",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-17",
    "departmentCode": "ADM",
    "shiftCode": "D1-ET",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-18",
    "departmentCode": "ADM",
    "shiftCode": "D1-T",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-19",
    "departmentCode": "ADM",
    "shiftCode": "D1-T1",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-20",
    "departmentCode": "ADM",
    "shiftCode": "D1-T2",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-21",
    "departmentCode": "ADM",
    "shiftCode": "D1-T3",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-22",
    "departmentCode": "BES/PSY",
    "shiftCode": "E",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-23",
    "departmentCode": "BES/PSY",
    "shiftCode": "E-X",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-24",
    "departmentCode": "BES/PSY",
    "shiftCode": "E-ET",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-25",
    "departmentCode": "BES/PSY",
    "shiftCode": "E-T",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-26",
    "departmentCode": "BES/PSY",
    "shiftCode": "E-T1",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-27",
    "departmentCode": "BES/PSY",
    "shiftCode": "E-T2",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-28",
    "departmentCode": "BES/PSY",
    "shiftCode": "E-T3",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-29",
    "departmentCode": "BES/PSY",
    "shiftCode": "E0",
    "startTime": "06:30",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-30",
    "departmentCode": "BES/PSY",
    "shiftCode": "E0-X",
    "startTime": "06:30",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-31",
    "departmentCode": "BES/PSY",
    "shiftCode": "E0-ET",
    "startTime": "06:30",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-32",
    "departmentCode": "BES/PSY",
    "shiftCode": "E0-T",
    "startTime": "06:30",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-33",
    "departmentCode": "BES/PSY",
    "shiftCode": "E0-T1",
    "startTime": "06:30",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-34",
    "departmentCode": "BES/PSY",
    "shiftCode": "E0-T2",
    "startTime": "06:30",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-35",
    "departmentCode": "BES/PSY",
    "shiftCode": "E0-T3",
    "startTime": "06:30",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-36",
    "departmentCode": "BES/PSY",
    "shiftCode": "D",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-37",
    "departmentCode": "BES/PSY",
    "shiftCode": "D-X",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-38",
    "departmentCode": "BES/PSY",
    "shiftCode": "D-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-39",
    "departmentCode": "BES/PSY",
    "shiftCode": "D-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-40",
    "departmentCode": "BES/PSY",
    "shiftCode": "D-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-41",
    "departmentCode": "BES/PSY",
    "shiftCode": "D-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-42",
    "departmentCode": "BES/PSY",
    "shiftCode": "D-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-43",
    "departmentCode": "BES/PSY",
    "shiftCode": "D1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-44",
    "departmentCode": "BES/PSY",
    "shiftCode": "D1-X",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-45",
    "departmentCode": "BES/PSY",
    "shiftCode": "D1-ET",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-46",
    "departmentCode": "BES/PSY",
    "shiftCode": "D1-T",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-47",
    "departmentCode": "BES/PSY",
    "shiftCode": "D1-T1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-48",
    "departmentCode": "BES/PSY",
    "shiftCode": "D1-T2",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-49",
    "departmentCode": "BES/PSY",
    "shiftCode": "D1-T3",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-50",
    "departmentCode": "BES/PSY",
    "shiftCode": "T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-51",
    "departmentCode": "BES/PSY",
    "shiftCode": "T-X",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-52",
    "departmentCode": "BES/PSY",
    "shiftCode": "T-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-53",
    "departmentCode": "BES/PSY",
    "shiftCode": "T-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-54",
    "departmentCode": "BES/PSY",
    "shiftCode": "T-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-55",
    "departmentCode": "BES/PSY",
    "shiftCode": "T-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-56",
    "departmentCode": "BES/PSY",
    "shiftCode": "T-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-57",
    "departmentCode": "BES/PSY",
    "shiftCode": "D2",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-58",
    "departmentCode": "BES/PSY",
    "shiftCode": "D2-X",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-59",
    "departmentCode": "BES/PSY",
    "shiftCode": "D2-ET",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-60",
    "departmentCode": "BES/PSY",
    "shiftCode": "D2-T",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-61",
    "departmentCode": "BES/PSY",
    "shiftCode": "D2-T1",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-62",
    "departmentCode": "BES/PSY",
    "shiftCode": "D2-T2",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-63",
    "departmentCode": "BES/PSY",
    "shiftCode": "D2-T3",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-64",
    "departmentCode": "BES/PSY",
    "shiftCode": "A",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-65",
    "departmentCode": "BES/PSY",
    "shiftCode": "A-X",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-66",
    "departmentCode": "BES/PSY",
    "shiftCode": "A-ET",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-67",
    "departmentCode": "BES/PSY",
    "shiftCode": "A-T",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-68",
    "departmentCode": "BES/PSY",
    "shiftCode": "A-T1",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-69",
    "departmentCode": "BES/PSY",
    "shiftCode": "A-T2",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-70",
    "departmentCode": "BES/PSY",
    "shiftCode": "A-T3",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-71",
    "departmentCode": "BES/PSY",
    "shiftCode": "A2",
    "startTime": "11:30",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-72",
    "departmentCode": "BES/PSY",
    "shiftCode": "A2-X",
    "startTime": "11:30",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-73",
    "departmentCode": "BES/PSY",
    "shiftCode": "A2-ET",
    "startTime": "11:30",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-74",
    "departmentCode": "BES/PSY",
    "shiftCode": "A2-T",
    "startTime": "11:30",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-75",
    "departmentCode": "BES/PSY",
    "shiftCode": "A2-T1",
    "startTime": "11:30",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-76",
    "departmentCode": "BES/PSY",
    "shiftCode": "A2-T2",
    "startTime": "11:30",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-77",
    "departmentCode": "BES/PSY",
    "shiftCode": "A2-T3",
    "startTime": "11:30",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-78",
    "departmentCode": "BES/PSY",
    "shiftCode": "A0",
    "startTime": "12:00",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-79",
    "departmentCode": "BES/PSY",
    "shiftCode": "A0-X",
    "startTime": "12:00",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-80",
    "departmentCode": "BES/PSY",
    "shiftCode": "A0-ET",
    "startTime": "12:00",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-81",
    "departmentCode": "BES/PSY",
    "shiftCode": "A0-T",
    "startTime": "12:00",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-82",
    "departmentCode": "BES/PSY",
    "shiftCode": "A0-T1",
    "startTime": "12:00",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-83",
    "departmentCode": "BES/PSY",
    "shiftCode": "A0-T2",
    "startTime": "12:00",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-84",
    "departmentCode": "BES/PSY",
    "shiftCode": "A0-T3",
    "startTime": "12:00",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-85",
    "departmentCode": "BES/PSY",
    "shiftCode": "A1",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-86",
    "departmentCode": "BES/PSY",
    "shiftCode": "A1-X",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-87",
    "departmentCode": "BES/PSY",
    "shiftCode": "A1-ET",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-88",
    "departmentCode": "BES/PSY",
    "shiftCode": "A1-T",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-89",
    "departmentCode": "BES/PSY",
    "shiftCode": "A1-T1",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-90",
    "departmentCode": "BES/PSY",
    "shiftCode": "A1-T2",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-91",
    "departmentCode": "BES/PSY",
    "shiftCode": "A1-T3",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-92",
    "departmentCode": "BES/PSY",
    "shiftCode": "N",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-93",
    "departmentCode": "BES/PSY",
    "shiftCode": "N-X",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-94",
    "departmentCode": "BES/PSY",
    "shiftCode": "N-ET",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-95",
    "departmentCode": "BES/PSY",
    "shiftCode": "N-T",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-96",
    "departmentCode": "BES/PSY",
    "shiftCode": "N-T1",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-97",
    "departmentCode": "BES/PSY",
    "shiftCode": "N-T2",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-98",
    "departmentCode": "BES/PSY",
    "shiftCode": "N-T3",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-99",
    "departmentCode": "BES/PSY",
    "shiftCode": "N0",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-100",
    "departmentCode": "BES/PSY",
    "shiftCode": "N0-X",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-101",
    "departmentCode": "BES/PSY",
    "shiftCode": "N0-ET",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-102",
    "departmentCode": "BES/PSY",
    "shiftCode": "N0-T",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-103",
    "departmentCode": "BES/PSY",
    "shiftCode": "N0-T1",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-104",
    "departmentCode": "BES/PSY",
    "shiftCode": "N0-T2",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-105",
    "departmentCode": "BES/PSY",
    "shiftCode": "N0-T3",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-106",
    "departmentCode": "BES/PSY",
    "shiftCode": "N1",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-107",
    "departmentCode": "BES/PSY",
    "shiftCode": "N1-X",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-108",
    "departmentCode": "BES/PSY",
    "shiftCode": "N1-ET",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-109",
    "departmentCode": "BES/PSY",
    "shiftCode": "N1-T",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-110",
    "departmentCode": "BES/PSY",
    "shiftCode": "N1-T1",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-111",
    "departmentCode": "BES/PSY",
    "shiftCode": "N1-T2",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-112",
    "departmentCode": "BES/PSY",
    "shiftCode": "N1-T3",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-113",
    "departmentCode": "BES/PSY2",
    "shiftCode": "E",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-114",
    "departmentCode": "BES/PSY2",
    "shiftCode": "E-ET",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-115",
    "departmentCode": "BES/PSY2",
    "shiftCode": "E-T",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-116",
    "departmentCode": "BES/PSY2",
    "shiftCode": "E-T1",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-117",
    "departmentCode": "BES/PSY2",
    "shiftCode": "E-T2",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-118",
    "departmentCode": "BES/PSY2",
    "shiftCode": "E-T3",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-119",
    "departmentCode": "BES/PSY2",
    "shiftCode": "E0",
    "startTime": "06:30",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-120",
    "departmentCode": "BES/PSY2",
    "shiftCode": "E0-ET",
    "startTime": "06:30",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-121",
    "departmentCode": "BES/PSY2",
    "shiftCode": "E0-T",
    "startTime": "06:30",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-122",
    "departmentCode": "BES/PSY2",
    "shiftCode": "E0-T1",
    "startTime": "06:30",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-123",
    "departmentCode": "BES/PSY2",
    "shiftCode": "E0-T2",
    "startTime": "06:30",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-124",
    "departmentCode": "BES/PSY2",
    "shiftCode": "E0-T3",
    "startTime": "06:30",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-125",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-126",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-127",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-128",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-129",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-130",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-131",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-132",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D1-ET",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-133",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D1-T",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-134",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D1-T1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-135",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D1-T2",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-136",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D1-T3",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-137",
    "departmentCode": "BES/PSY2",
    "shiftCode": "T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-138",
    "departmentCode": "BES/PSY2",
    "shiftCode": "T-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-139",
    "departmentCode": "BES/PSY2",
    "shiftCode": "T-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-140",
    "departmentCode": "BES/PSY2",
    "shiftCode": "T-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-141",
    "departmentCode": "BES/PSY2",
    "shiftCode": "T-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-142",
    "departmentCode": "BES/PSY2",
    "shiftCode": "T-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-143",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D2",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-144",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D2-ET",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-145",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D2-T",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-146",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D2-T1",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-147",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D2-T2",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-148",
    "departmentCode": "BES/PSY2",
    "shiftCode": "D2-T3",
    "startTime": "08:30",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-149",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A1",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-150",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A1-ET",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-151",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A1-T",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-152",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A1-T1",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-153",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A1-T2",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-154",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A1-T3",
    "startTime": "11:00",
    "endTime": "20:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-155",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-156",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A-ET",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-157",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A-T",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-158",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A-T1",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-159",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A-T2",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-160",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A-T3",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-161",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A0",
    "startTime": "12:00",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-162",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A0-ET",
    "startTime": "12:00",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-163",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A0-T",
    "startTime": "12:00",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-164",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A0-T1",
    "startTime": "12:00",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-165",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A0-T2",
    "startTime": "12:00",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-166",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A0-T3",
    "startTime": "12:00",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-167",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A2",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-168",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A2-ET",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-169",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A2-T",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-170",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A2-T1",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-171",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A2-T2",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-172",
    "departmentCode": "BES/PSY2",
    "shiftCode": "A2-T3",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-173",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-174",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N-ET",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-175",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N-T",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-176",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N-T1",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-177",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N-T2",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-178",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N-T3",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-179",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N0",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-180",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N0-ET",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-181",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N0-T",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-182",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N0-T1",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-183",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N0-T2",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-184",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N0-T3",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-185",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N1",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-186",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N1-ET",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-187",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N1-T",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-188",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N1-T1",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-189",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N1-T2",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-190",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N1-T3",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-191",
    "departmentCode": "CMM",
    "shiftCode": "D",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-192",
    "departmentCode": "CMM",
    "shiftCode": "D-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-193",
    "departmentCode": "CMM",
    "shiftCode": "D-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-194",
    "departmentCode": "CMM",
    "shiftCode": "D-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-195",
    "departmentCode": "CMM",
    "shiftCode": "D-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-196",
    "departmentCode": "CMM",
    "shiftCode": "T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-197",
    "departmentCode": "CMM",
    "shiftCode": "T-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-198",
    "departmentCode": "CMM",
    "shiftCode": "T-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-199",
    "departmentCode": "CMM",
    "shiftCode": "T-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-200",
    "departmentCode": "CMM",
    "shiftCode": "T-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-201",
    "departmentCode": "GM",
    "shiftCode": "D",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-202",
    "departmentCode": "GM",
    "shiftCode": "D-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-203",
    "departmentCode": "GM",
    "shiftCode": "D-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-204",
    "departmentCode": "GM",
    "shiftCode": "D-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-205",
    "departmentCode": "GM",
    "shiftCode": "D-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-206",
    "departmentCode": "GM",
    "shiftCode": "T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-207",
    "departmentCode": "GM",
    "shiftCode": "T-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-208",
    "departmentCode": "GM",
    "shiftCode": "T-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-209",
    "departmentCode": "GM",
    "shiftCode": "T-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-210",
    "departmentCode": "GM",
    "shiftCode": "T-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-211",
    "departmentCode": "GM",
    "shiftCode": "D1",
    "startTime": "09:00",
    "endTime": "18:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-212",
    "departmentCode": "GM",
    "shiftCode": "D1-T",
    "startTime": "09:00",
    "endTime": "18:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-213",
    "departmentCode": "GM",
    "shiftCode": "D1-T1",
    "startTime": "09:00",
    "endTime": "18:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-214",
    "departmentCode": "GM",
    "shiftCode": "D1-T2",
    "startTime": "09:00",
    "endTime": "18:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-215",
    "departmentCode": "GM",
    "shiftCode": "D1-T3",
    "startTime": "09:00",
    "endTime": "18:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-216",
    "departmentCode": "GM",
    "shiftCode": "N",
    "startTime": "22:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-217",
    "departmentCode": "GM",
    "shiftCode": "N-T",
    "startTime": "22:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-218",
    "departmentCode": "GM",
    "shiftCode": "N-T1",
    "startTime": "22:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-219",
    "departmentCode": "GM",
    "shiftCode": "N-T2",
    "startTime": "22:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-220",
    "departmentCode": "GM",
    "shiftCode": "N-T3",
    "startTime": "22:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-221",
    "departmentCode": "MCC",
    "shiftCode": "E",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-222",
    "departmentCode": "MCC",
    "shiftCode": "E-T",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-223",
    "departmentCode": "MCC",
    "shiftCode": "E-T1",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-224",
    "departmentCode": "MCC",
    "shiftCode": "E-T2",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-225",
    "departmentCode": "MCC",
    "shiftCode": "E-T3",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-226",
    "departmentCode": "MCC",
    "shiftCode": "E0",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-227",
    "departmentCode": "MCC",
    "shiftCode": "E0-T",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-228",
    "departmentCode": "MCC",
    "shiftCode": "E0-T1",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-229",
    "departmentCode": "MCC",
    "shiftCode": "E0-T2",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-230",
    "departmentCode": "MCC",
    "shiftCode": "E0-T3",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-231",
    "departmentCode": "MCC",
    "shiftCode": "D",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-232",
    "departmentCode": "MCC",
    "shiftCode": "D-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-233",
    "departmentCode": "MCC",
    "shiftCode": "D-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-234",
    "departmentCode": "MCC",
    "shiftCode": "D-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-235",
    "departmentCode": "MCC",
    "shiftCode": "D-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-236",
    "departmentCode": "MCC",
    "shiftCode": "D1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-237",
    "departmentCode": "MCC",
    "shiftCode": "D1-T",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-238",
    "departmentCode": "MCC",
    "shiftCode": "D1-T1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-239",
    "departmentCode": "MCC",
    "shiftCode": "D1-T2",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-240",
    "departmentCode": "MCC",
    "shiftCode": "D1-T3",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-241",
    "departmentCode": "MCC",
    "shiftCode": "T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-242",
    "departmentCode": "MCC",
    "shiftCode": "T-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-243",
    "departmentCode": "MCC",
    "shiftCode": "T-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-244",
    "departmentCode": "MCC",
    "shiftCode": "T-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-245",
    "departmentCode": "MCC",
    "shiftCode": "T-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-246",
    "departmentCode": "MCC",
    "shiftCode": "A0",
    "startTime": "12:00",
    "endTime": "21:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-247",
    "departmentCode": "MCC",
    "shiftCode": "A0-T",
    "startTime": "12:00",
    "endTime": "21:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-248",
    "departmentCode": "MCC",
    "shiftCode": "A0-T1",
    "startTime": "12:00",
    "endTime": "21:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-249",
    "departmentCode": "MCC",
    "shiftCode": "A0-T2",
    "startTime": "12:00",
    "endTime": "21:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-250",
    "departmentCode": "MCC",
    "shiftCode": "A0-T3",
    "startTime": "12:00",
    "endTime": "21:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-251",
    "departmentCode": "MCC",
    "shiftCode": "A1",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-252",
    "departmentCode": "MCC",
    "shiftCode": "A1-T",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-253",
    "departmentCode": "MCC",
    "shiftCode": "A1-T1",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-254",
    "departmentCode": "MCC",
    "shiftCode": "A1-T2",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-255",
    "departmentCode": "MCC",
    "shiftCode": "A1-T3",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-256",
    "departmentCode": "MCC",
    "shiftCode": "A",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-257",
    "departmentCode": "MCC",
    "shiftCode": "A-T",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-258",
    "departmentCode": "MCC",
    "shiftCode": "A-T1",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-259",
    "departmentCode": "MCC",
    "shiftCode": "A-T2",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-260",
    "departmentCode": "MCC",
    "shiftCode": "A-T3",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-261",
    "departmentCode": "MCC",
    "shiftCode": "N0",
    "startTime": "20:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-262",
    "departmentCode": "MCC",
    "shiftCode": "N0-T",
    "startTime": "20:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-263",
    "departmentCode": "MCC",
    "shiftCode": "N0-T1",
    "startTime": "20:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-264",
    "departmentCode": "MCC",
    "shiftCode": "N0-T2",
    "startTime": "20:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-265",
    "departmentCode": "MCC",
    "shiftCode": "N0-T3",
    "startTime": "20:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-266",
    "departmentCode": "MCC",
    "shiftCode": "N",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-267",
    "departmentCode": "MCC",
    "shiftCode": "N-T",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-268",
    "departmentCode": "MCC",
    "shiftCode": "N-T1",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-269",
    "departmentCode": "MCC",
    "shiftCode": "N-T2",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-270",
    "departmentCode": "MCC",
    "shiftCode": "N-T3",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-271",
    "departmentCode": "OVH",
    "shiftCode": "E",
    "startTime": "07:00",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-272",
    "departmentCode": "OVH",
    "shiftCode": "E-ET",
    "startTime": "07:00",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-273",
    "departmentCode": "OVH",
    "shiftCode": "E-T",
    "startTime": "07:00",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-274",
    "departmentCode": "OVH",
    "shiftCode": "E-T1",
    "startTime": "07:00",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-275",
    "departmentCode": "OVH",
    "shiftCode": "E-T2",
    "startTime": "07:00",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-276",
    "departmentCode": "OVH",
    "shiftCode": "E-T3",
    "startTime": "07:00",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-277",
    "departmentCode": "OVH",
    "shiftCode": "E1",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-278",
    "departmentCode": "OVH",
    "shiftCode": "E1-ET",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-279",
    "departmentCode": "OVH",
    "shiftCode": "E1-T",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-280",
    "departmentCode": "OVH",
    "shiftCode": "E1-T1",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-281",
    "departmentCode": "OVH",
    "shiftCode": "E1-T2",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-282",
    "departmentCode": "OVH",
    "shiftCode": "E1-T3",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-283",
    "departmentCode": "OVH",
    "shiftCode": "D",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-284",
    "departmentCode": "OVH",
    "shiftCode": "D-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-285",
    "departmentCode": "OVH",
    "shiftCode": "D-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-286",
    "departmentCode": "OVH",
    "shiftCode": "D-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-287",
    "departmentCode": "OVH",
    "shiftCode": "D-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-288",
    "departmentCode": "OVH",
    "shiftCode": "D-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-289",
    "departmentCode": "OVH",
    "shiftCode": "D1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-290",
    "departmentCode": "OVH",
    "shiftCode": "D1-ET",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-291",
    "departmentCode": "OVH",
    "shiftCode": "D1-T",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-292",
    "departmentCode": "OVH",
    "shiftCode": "D1-T1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-293",
    "departmentCode": "OVH",
    "shiftCode": "D1-T2",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-294",
    "departmentCode": "OVH",
    "shiftCode": "D1-T3",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-295",
    "departmentCode": "OVH",
    "shiftCode": "D2",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-296",
    "departmentCode": "OVH",
    "shiftCode": "D2-ET",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-297",
    "departmentCode": "OVH",
    "shiftCode": "D2-T",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-298",
    "departmentCode": "OVH",
    "shiftCode": "D2-T1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-299",
    "departmentCode": "OVH",
    "shiftCode": "D2-T2",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-300",
    "departmentCode": "OVH",
    "shiftCode": "D2-T3",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-301",
    "departmentCode": "OVH",
    "shiftCode": "T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-302",
    "departmentCode": "OVH",
    "shiftCode": "T-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-303",
    "departmentCode": "OVH",
    "shiftCode": "T-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-304",
    "departmentCode": "OVH",
    "shiftCode": "T-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-305",
    "departmentCode": "OVH",
    "shiftCode": "T-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-306",
    "departmentCode": "OVH",
    "shiftCode": "T-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-307",
    "departmentCode": "OVH",
    "shiftCode": "A",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-308",
    "departmentCode": "OVH",
    "shiftCode": "A-ET",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-309",
    "departmentCode": "OVH",
    "shiftCode": "A-T",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-310",
    "departmentCode": "OVH",
    "shiftCode": "A-T1",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-311",
    "departmentCode": "OVH",
    "shiftCode": "A-T2",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-312",
    "departmentCode": "OVH",
    "shiftCode": "A-T3",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-313",
    "departmentCode": "OVH",
    "shiftCode": "A0",
    "startTime": "13:00",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-314",
    "departmentCode": "OVH",
    "shiftCode": "A0-ET",
    "startTime": "13:00",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-315",
    "departmentCode": "OVH",
    "shiftCode": "A0-T",
    "startTime": "13:00",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-316",
    "departmentCode": "OVH",
    "shiftCode": "A0-T1",
    "startTime": "13:00",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-317",
    "departmentCode": "OVH",
    "shiftCode": "A0-T2",
    "startTime": "13:00",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-318",
    "departmentCode": "OVH",
    "shiftCode": "A0-T3",
    "startTime": "13:00",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-319",
    "departmentCode": "OVH",
    "shiftCode": "A1",
    "startTime": "16:00",
    "endTime": "01:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-320",
    "departmentCode": "OVH",
    "shiftCode": "A1-ET",
    "startTime": "16:00",
    "endTime": "01:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-321",
    "departmentCode": "OVH",
    "shiftCode": "A1-T",
    "startTime": "16:00",
    "endTime": "01:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-322",
    "departmentCode": "OVH",
    "shiftCode": "A1-T1",
    "startTime": "16:00",
    "endTime": "01:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-323",
    "departmentCode": "OVH",
    "shiftCode": "A1-T2",
    "startTime": "16:00",
    "endTime": "01:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-324",
    "departmentCode": "OVH",
    "shiftCode": "A1-T3",
    "startTime": "16:00",
    "endTime": "01:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-325",
    "departmentCode": "OVH",
    "shiftCode": "A2",
    "startTime": "16:00",
    "endTime": "01:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-326",
    "departmentCode": "OVH",
    "shiftCode": "A2-ET",
    "startTime": "16:00",
    "endTime": "01:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-327",
    "departmentCode": "OVH",
    "shiftCode": "A2-T",
    "startTime": "16:00",
    "endTime": "01:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-328",
    "departmentCode": "OVH",
    "shiftCode": "A2-T1",
    "startTime": "16:00",
    "endTime": "01:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-329",
    "departmentCode": "OVH",
    "shiftCode": "A2-T2",
    "startTime": "16:00",
    "endTime": "01:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-330",
    "departmentCode": "OVH",
    "shiftCode": "A2-T3",
    "startTime": "16:00",
    "endTime": "01:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-331",
    "departmentCode": "OVH",
    "shiftCode": "A3",
    "startTime": "18:00",
    "endTime": "03:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-332",
    "departmentCode": "OVH",
    "shiftCode": "A3-ET",
    "startTime": "18:00",
    "endTime": "03:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-333",
    "departmentCode": "OVH",
    "shiftCode": "A3-T",
    "startTime": "18:00",
    "endTime": "03:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-334",
    "departmentCode": "OVH",
    "shiftCode": "A3-T1",
    "startTime": "18:00",
    "endTime": "03:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-335",
    "departmentCode": "OVH",
    "shiftCode": "A3-T2",
    "startTime": "18:00",
    "endTime": "03:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-336",
    "departmentCode": "OVH",
    "shiftCode": "A3-T3",
    "startTime": "18:00",
    "endTime": "03:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-337",
    "departmentCode": "OVH",
    "shiftCode": "N",
    "startTime": "20:00",
    "endTime": "05:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-338",
    "departmentCode": "OVH",
    "shiftCode": "N-ET",
    "startTime": "20:00",
    "endTime": "05:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-339",
    "departmentCode": "OVH",
    "shiftCode": "N-T",
    "startTime": "20:00",
    "endTime": "05:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-340",
    "departmentCode": "OVH",
    "shiftCode": "N-T1",
    "startTime": "20:00",
    "endTime": "05:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-341",
    "departmentCode": "OVH",
    "shiftCode": "N-T2",
    "startTime": "20:00",
    "endTime": "05:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-342",
    "departmentCode": "OVH",
    "shiftCode": "N-T3",
    "startTime": "20:00",
    "endTime": "05:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-343",
    "departmentCode": "OVH",
    "shiftCode": "N1",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-344",
    "departmentCode": "OVH",
    "shiftCode": "N1-ET",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-345",
    "departmentCode": "OVH",
    "shiftCode": "N1-T",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-346",
    "departmentCode": "OVH",
    "shiftCode": "N1-T1",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-347",
    "departmentCode": "OVH",
    "shiftCode": "N1-T2",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-348",
    "departmentCode": "OVH",
    "shiftCode": "N1-T3",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-349",
    "departmentCode": "OVH",
    "shiftCode": "N2",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-350",
    "departmentCode": "OVH",
    "shiftCode": "N2-ET",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-351",
    "departmentCode": "OVH",
    "shiftCode": "N2-T",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-352",
    "departmentCode": "OVH",
    "shiftCode": "N2-T1",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-353",
    "departmentCode": "OVH",
    "shiftCode": "N2-T2",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-354",
    "departmentCode": "OVH",
    "shiftCode": "N2-T3",
    "startTime": "21:00",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-355",
    "departmentCode": "OVH",
    "shiftCode": "N3",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-356",
    "departmentCode": "OVH",
    "shiftCode": "N3-ET",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-357",
    "departmentCode": "OVH",
    "shiftCode": "N3-T",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-358",
    "departmentCode": "OVH",
    "shiftCode": "N3-T1",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-359",
    "departmentCode": "OVH",
    "shiftCode": "N3-T2",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-360",
    "departmentCode": "OVH",
    "shiftCode": "N3-T3",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-361",
    "departmentCode": "RST",
    "shiftCode": "E",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-362",
    "departmentCode": "RST",
    "shiftCode": "E-ET",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-363",
    "departmentCode": "RST",
    "shiftCode": "E-T",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-364",
    "departmentCode": "RST",
    "shiftCode": "E-T1",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-365",
    "departmentCode": "RST",
    "shiftCode": "E-T2",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-366",
    "departmentCode": "RST",
    "shiftCode": "E-T3",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-367",
    "departmentCode": "RST",
    "shiftCode": "E1",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-368",
    "departmentCode": "RST",
    "shiftCode": "E1-ET",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-369",
    "departmentCode": "RST",
    "shiftCode": "E1-T",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-370",
    "departmentCode": "RST",
    "shiftCode": "E1-T1",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-371",
    "departmentCode": "RST",
    "shiftCode": "E1-T2",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-372",
    "departmentCode": "RST",
    "shiftCode": "E1-T3",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-373",
    "departmentCode": "RST",
    "shiftCode": "D",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-374",
    "departmentCode": "RST",
    "shiftCode": "D-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-375",
    "departmentCode": "RST",
    "shiftCode": "D-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-376",
    "departmentCode": "RST",
    "shiftCode": "D-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-377",
    "departmentCode": "RST",
    "shiftCode": "D-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-378",
    "departmentCode": "RST",
    "shiftCode": "D-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-379",
    "departmentCode": "RST",
    "shiftCode": "D1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-380",
    "departmentCode": "RST",
    "shiftCode": "D1-ET",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-381",
    "departmentCode": "RST",
    "shiftCode": "D1-T",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-382",
    "departmentCode": "RST",
    "shiftCode": "D1-T1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-383",
    "departmentCode": "RST",
    "shiftCode": "D1-T2",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-384",
    "departmentCode": "RST",
    "shiftCode": "D1-T3",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-385",
    "departmentCode": "RST",
    "shiftCode": "T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-386",
    "departmentCode": "RST",
    "shiftCode": "T-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-387",
    "departmentCode": "RST",
    "shiftCode": "T-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-388",
    "departmentCode": "RST",
    "shiftCode": "T-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-389",
    "departmentCode": "RST",
    "shiftCode": "T-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-390",
    "departmentCode": "RST",
    "shiftCode": "T-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-391",
    "departmentCode": "RST",
    "shiftCode": "D2",
    "startTime": "09:00",
    "endTime": "18:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-392",
    "departmentCode": "RST",
    "shiftCode": "D2-ET",
    "startTime": "09:00",
    "endTime": "18:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-393",
    "departmentCode": "RST",
    "shiftCode": "D2-T",
    "startTime": "09:00",
    "endTime": "18:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-394",
    "departmentCode": "RST",
    "shiftCode": "D2-T1",
    "startTime": "09:00",
    "endTime": "18:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-395",
    "departmentCode": "RST",
    "shiftCode": "D2-T2",
    "startTime": "09:00",
    "endTime": "18:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-396",
    "departmentCode": "RST",
    "shiftCode": "D2-T3",
    "startTime": "09:00",
    "endTime": "18:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-397",
    "departmentCode": "RST",
    "shiftCode": "A1",
    "startTime": "12:00",
    "endTime": "21:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-398",
    "departmentCode": "RST",
    "shiftCode": "A1-ET",
    "startTime": "12:00",
    "endTime": "21:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-399",
    "departmentCode": "RST",
    "shiftCode": "A1-T",
    "startTime": "12:00",
    "endTime": "21:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-400",
    "departmentCode": "RST",
    "shiftCode": "A1-T1",
    "startTime": "12:00",
    "endTime": "21:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-401",
    "departmentCode": "RST",
    "shiftCode": "A1-T2",
    "startTime": "12:00",
    "endTime": "21:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-402",
    "departmentCode": "RST",
    "shiftCode": "A1-T3",
    "startTime": "12:00",
    "endTime": "21:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-403",
    "departmentCode": "RST",
    "shiftCode": "A",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-404",
    "departmentCode": "RST",
    "shiftCode": "A-ET",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-405",
    "departmentCode": "RST",
    "shiftCode": "A-T",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-406",
    "departmentCode": "RST",
    "shiftCode": "A-T1",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-407",
    "departmentCode": "RST",
    "shiftCode": "A-T2",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-408",
    "departmentCode": "RST",
    "shiftCode": "A-T3",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-409",
    "departmentCode": "RST",
    "shiftCode": "N",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-410",
    "departmentCode": "RST",
    "shiftCode": "N-ET",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-411",
    "departmentCode": "RST",
    "shiftCode": "N-T",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-412",
    "departmentCode": "RST",
    "shiftCode": "N-T1",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-413",
    "departmentCode": "RST",
    "shiftCode": "N-T2",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-414",
    "departmentCode": "RST",
    "shiftCode": "N-T3",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-415",
    "departmentCode": "RST2",
    "shiftCode": "E",
    "startTime": "06:30",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-416",
    "departmentCode": "RST2",
    "shiftCode": "E-ET",
    "startTime": "06:30",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-417",
    "departmentCode": "RST2",
    "shiftCode": "E-T",
    "startTime": "06:30",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-418",
    "departmentCode": "RST2",
    "shiftCode": "E-T1",
    "startTime": "06:30",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-419",
    "departmentCode": "RST2",
    "shiftCode": "E-T2",
    "startTime": "06:30",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-420",
    "departmentCode": "RST2",
    "shiftCode": "E-T3",
    "startTime": "06:30",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-421",
    "departmentCode": "RST2",
    "shiftCode": "E1",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-422",
    "departmentCode": "RST2",
    "shiftCode": "E1-ET",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-423",
    "departmentCode": "RST2",
    "shiftCode": "E1-T",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-424",
    "departmentCode": "RST2",
    "shiftCode": "E1-T1",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-425",
    "departmentCode": "RST2",
    "shiftCode": "E1-T2",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-426",
    "departmentCode": "RST2",
    "shiftCode": "E1-T3",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-427",
    "departmentCode": "RST2",
    "shiftCode": "D",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-428",
    "departmentCode": "RST2",
    "shiftCode": "D-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-429",
    "departmentCode": "RST2",
    "shiftCode": "D-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-430",
    "departmentCode": "RST2",
    "shiftCode": "D-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-431",
    "departmentCode": "RST2",
    "shiftCode": "D-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-432",
    "departmentCode": "RST2",
    "shiftCode": "D-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-433",
    "departmentCode": "RST2",
    "shiftCode": "D1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-434",
    "departmentCode": "RST2",
    "shiftCode": "D1-ET",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-435",
    "departmentCode": "RST2",
    "shiftCode": "D1-T",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-436",
    "departmentCode": "RST2",
    "shiftCode": "D1-T1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-437",
    "departmentCode": "RST2",
    "shiftCode": "D1-T2",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-438",
    "departmentCode": "RST2",
    "shiftCode": "D1-T3",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-439",
    "departmentCode": "RST2",
    "shiftCode": "T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-440",
    "departmentCode": "RST2",
    "shiftCode": "T-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-441",
    "departmentCode": "RST2",
    "shiftCode": "T-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-442",
    "departmentCode": "RST2",
    "shiftCode": "T-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-443",
    "departmentCode": "RST2",
    "shiftCode": "T-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-444",
    "departmentCode": "RST2",
    "shiftCode": "T-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-445",
    "departmentCode": "RST2",
    "shiftCode": "A3",
    "startTime": "09:30",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-446",
    "departmentCode": "RST2",
    "shiftCode": "A3-ET",
    "startTime": "09:30",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-447",
    "departmentCode": "RST2",
    "shiftCode": "A3-T",
    "startTime": "09:30",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-448",
    "departmentCode": "RST2",
    "shiftCode": "A3-T1",
    "startTime": "09:30",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-449",
    "departmentCode": "RST2",
    "shiftCode": "A3-T2",
    "startTime": "09:30",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-450",
    "departmentCode": "RST2",
    "shiftCode": "A3-T3",
    "startTime": "09:30",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-451",
    "departmentCode": "RST2",
    "shiftCode": "A2",
    "startTime": "10:30",
    "endTime": "20:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-452",
    "departmentCode": "RST2",
    "shiftCode": "A2-ET",
    "startTime": "10:30",
    "endTime": "20:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-453",
    "departmentCode": "RST2",
    "shiftCode": "A2-T",
    "startTime": "10:30",
    "endTime": "20:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-454",
    "departmentCode": "RST2",
    "shiftCode": "A2-T1",
    "startTime": "10:30",
    "endTime": "20:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-455",
    "departmentCode": "RST2",
    "shiftCode": "A2-T2",
    "startTime": "10:30",
    "endTime": "20:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-456",
    "departmentCode": "RST2",
    "shiftCode": "A2-T3",
    "startTime": "10:30",
    "endTime": "20:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-457",
    "departmentCode": "RST2",
    "shiftCode": "A1",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-458",
    "departmentCode": "RST2",
    "shiftCode": "A1-ET",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-459",
    "departmentCode": "RST2",
    "shiftCode": "A1-T",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-460",
    "departmentCode": "RST2",
    "shiftCode": "A1-T1",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-461",
    "departmentCode": "RST2",
    "shiftCode": "A1-T2",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-462",
    "departmentCode": "RST2",
    "shiftCode": "A1-T3",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-463",
    "departmentCode": "RST2",
    "shiftCode": "A4",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-464",
    "departmentCode": "RST2",
    "shiftCode": "A4-ET",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-465",
    "departmentCode": "RST2",
    "shiftCode": "A4-T",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-466",
    "departmentCode": "RST2",
    "shiftCode": "A4-T1",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-467",
    "departmentCode": "RST2",
    "shiftCode": "A4-T2",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-468",
    "departmentCode": "RST2",
    "shiftCode": "A4-T3",
    "startTime": "12:30",
    "endTime": "22:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-469",
    "departmentCode": "RST2",
    "shiftCode": "A",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-470",
    "departmentCode": "RST2",
    "shiftCode": "A-ET",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-471",
    "departmentCode": "RST2",
    "shiftCode": "A-T",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-472",
    "departmentCode": "RST2",
    "shiftCode": "A-T1",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-473",
    "departmentCode": "RST2",
    "shiftCode": "A-T2",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-474",
    "departmentCode": "RST2",
    "shiftCode": "A-T3",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-475",
    "departmentCode": "RST2",
    "shiftCode": "N2",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-476",
    "departmentCode": "RST2",
    "shiftCode": "N2-ET",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-477",
    "departmentCode": "RST2",
    "shiftCode": "N2-T",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-478",
    "departmentCode": "RST2",
    "shiftCode": "N2-T1",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-479",
    "departmentCode": "RST2",
    "shiftCode": "N2-T2",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-480",
    "departmentCode": "RST2",
    "shiftCode": "N2-T3",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-481",
    "departmentCode": "RST2",
    "shiftCode": "N1",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-482",
    "departmentCode": "RST2",
    "shiftCode": "N1-ET",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-483",
    "departmentCode": "RST2",
    "shiftCode": "N1-T",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-484",
    "departmentCode": "RST2",
    "shiftCode": "N1-T1",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-485",
    "departmentCode": "RST2",
    "shiftCode": "N1-T2",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-486",
    "departmentCode": "RST2",
    "shiftCode": "N1-T3",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-487",
    "departmentCode": "RST2",
    "shiftCode": "N",
    "startTime": "22:00",
    "endTime": "07:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-488",
    "departmentCode": "RST2",
    "shiftCode": "N-ET",
    "startTime": "22:00",
    "endTime": "07:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-489",
    "departmentCode": "RST2",
    "shiftCode": "N-T",
    "startTime": "22:00",
    "endTime": "07:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-490",
    "departmentCode": "RST2",
    "shiftCode": "N-T1",
    "startTime": "22:00",
    "endTime": "07:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-491",
    "departmentCode": "RST2",
    "shiftCode": "N-T2",
    "startTime": "22:00",
    "endTime": "07:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-492",
    "departmentCode": "RST2",
    "shiftCode": "N-T3",
    "startTime": "22:00",
    "endTime": "07:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-493",
    "departmentCode": "SAF",
    "shiftCode": "D",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-494",
    "departmentCode": "SAF",
    "shiftCode": "D-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-495",
    "departmentCode": "SAF",
    "shiftCode": "D-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-496",
    "departmentCode": "SAF",
    "shiftCode": "D-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-497",
    "departmentCode": "SAF",
    "shiftCode": "D-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-498",
    "departmentCode": "SAF",
    "shiftCode": "T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-499",
    "departmentCode": "SAF",
    "shiftCode": "T-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-500",
    "departmentCode": "SAF",
    "shiftCode": "T-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-501",
    "departmentCode": "SAF",
    "shiftCode": "T-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-502",
    "departmentCode": "SAF",
    "shiftCode": "T-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-503",
    "departmentCode": "STR",
    "shiftCode": "E",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-504",
    "departmentCode": "STR",
    "shiftCode": "E-T",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-505",
    "departmentCode": "STR",
    "shiftCode": "E-T1",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-506",
    "departmentCode": "STR",
    "shiftCode": "E-T2",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-507",
    "departmentCode": "STR",
    "shiftCode": "E-T3",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-508",
    "departmentCode": "STR",
    "shiftCode": "D2",
    "startTime": "07:00",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-509",
    "departmentCode": "STR",
    "shiftCode": "D2-T",
    "startTime": "07:00",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-510",
    "departmentCode": "STR",
    "shiftCode": "D2-T1",
    "startTime": "07:00",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-511",
    "departmentCode": "STR",
    "shiftCode": "D2-T2",
    "startTime": "07:00",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-512",
    "departmentCode": "STR",
    "shiftCode": "D2-T3",
    "startTime": "07:00",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-513",
    "departmentCode": "STR",
    "shiftCode": "E1",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-514",
    "departmentCode": "STR",
    "shiftCode": "E1-T",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-515",
    "departmentCode": "STR",
    "shiftCode": "E1-T1",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-516",
    "departmentCode": "STR",
    "shiftCode": "E1-T2",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-517",
    "departmentCode": "STR",
    "shiftCode": "E1-T3",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-518",
    "departmentCode": "STR",
    "shiftCode": "E2",
    "startTime": "07:30",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-519",
    "departmentCode": "STR",
    "shiftCode": "E2-T",
    "startTime": "07:30",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-520",
    "departmentCode": "STR",
    "shiftCode": "E2-T1",
    "startTime": "07:30",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-521",
    "departmentCode": "STR",
    "shiftCode": "E2-T2",
    "startTime": "07:30",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-522",
    "departmentCode": "STR",
    "shiftCode": "E2-T3",
    "startTime": "07:30",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-523",
    "departmentCode": "STR",
    "shiftCode": "D",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-524",
    "departmentCode": "STR",
    "shiftCode": "D-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-525",
    "departmentCode": "STR",
    "shiftCode": "D-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-526",
    "departmentCode": "STR",
    "shiftCode": "D-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-527",
    "departmentCode": "STR",
    "shiftCode": "D-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-528",
    "departmentCode": "STR",
    "shiftCode": "T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-529",
    "departmentCode": "STR",
    "shiftCode": "T-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-530",
    "departmentCode": "STR",
    "shiftCode": "T-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-531",
    "departmentCode": "STR",
    "shiftCode": "T-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-532",
    "departmentCode": "STR",
    "shiftCode": "T-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-533",
    "departmentCode": "STR",
    "shiftCode": "A",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-534",
    "departmentCode": "STR",
    "shiftCode": "A-T",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-535",
    "departmentCode": "STR",
    "shiftCode": "A-T1",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-536",
    "departmentCode": "STR",
    "shiftCode": "A-T2",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-537",
    "departmentCode": "STR",
    "shiftCode": "A-T3",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-538",
    "departmentCode": "STR",
    "shiftCode": "A0",
    "startTime": "13:30",
    "endTime": "23:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-539",
    "departmentCode": "STR",
    "shiftCode": "A0-T",
    "startTime": "13:30",
    "endTime": "23:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-540",
    "departmentCode": "STR",
    "shiftCode": "A0-T1",
    "startTime": "13:30",
    "endTime": "23:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-541",
    "departmentCode": "STR",
    "shiftCode": "A0-T2",
    "startTime": "13:30",
    "endTime": "23:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-542",
    "departmentCode": "STR",
    "shiftCode": "A0-T3",
    "startTime": "13:30",
    "endTime": "23:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-543",
    "departmentCode": "STR",
    "shiftCode": "N",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-544",
    "departmentCode": "STR",
    "shiftCode": "N-T",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-545",
    "departmentCode": "STR",
    "shiftCode": "N-T1",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-546",
    "departmentCode": "STR",
    "shiftCode": "N-T2",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-547",
    "departmentCode": "STR",
    "shiftCode": "N-T3",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-548",
    "departmentCode": "STR",
    "shiftCode": "N0",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-549",
    "departmentCode": "STR",
    "shiftCode": "N0-T",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-550",
    "departmentCode": "STR",
    "shiftCode": "N0-T1",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-551",
    "departmentCode": "STR",
    "shiftCode": "N0-T2",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-552",
    "departmentCode": "STR",
    "shiftCode": "N0-T3",
    "startTime": "21:30",
    "endTime": "07:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-553",
    "departmentCode": "TEL",
    "shiftCode": "E",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-554",
    "departmentCode": "TEL",
    "shiftCode": "E-X",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-555",
    "departmentCode": "TEL",
    "shiftCode": "E-ET",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-556",
    "departmentCode": "TEL",
    "shiftCode": "E-T",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-557",
    "departmentCode": "TEL",
    "shiftCode": "E-T1",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-558",
    "departmentCode": "TEL",
    "shiftCode": "E-T2",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-559",
    "departmentCode": "TEL",
    "shiftCode": "E-T3",
    "startTime": "06:00",
    "endTime": "15:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-560",
    "departmentCode": "TEL",
    "shiftCode": "D",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-561",
    "departmentCode": "TEL",
    "shiftCode": "D-X",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-562",
    "departmentCode": "TEL",
    "shiftCode": "D-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-563",
    "departmentCode": "TEL",
    "shiftCode": "D-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-564",
    "departmentCode": "TEL",
    "shiftCode": "D-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-565",
    "departmentCode": "TEL",
    "shiftCode": "D-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-566",
    "departmentCode": "TEL",
    "shiftCode": "D-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-567",
    "departmentCode": "TEL",
    "shiftCode": "D1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-568",
    "departmentCode": "TEL",
    "shiftCode": "D1-X",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-569",
    "departmentCode": "TEL",
    "shiftCode": "D1-ET",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-570",
    "departmentCode": "TEL",
    "shiftCode": "D1-T",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-571",
    "departmentCode": "TEL",
    "shiftCode": "D1-T1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-572",
    "departmentCode": "TEL",
    "shiftCode": "D1-T2",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-573",
    "departmentCode": "TEL",
    "shiftCode": "D1-T3",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-574",
    "departmentCode": "TEL",
    "shiftCode": "T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-575",
    "departmentCode": "TEL",
    "shiftCode": "T-X",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-576",
    "departmentCode": "TEL",
    "shiftCode": "T-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-577",
    "departmentCode": "TEL",
    "shiftCode": "T-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-578",
    "departmentCode": "TEL",
    "shiftCode": "T-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-579",
    "departmentCode": "TEL",
    "shiftCode": "T-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-580",
    "departmentCode": "TEL",
    "shiftCode": "T-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-581",
    "departmentCode": "TEL",
    "shiftCode": "A",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-582",
    "departmentCode": "TEL",
    "shiftCode": "A-X",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-583",
    "departmentCode": "TEL",
    "shiftCode": "A-ET",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-584",
    "departmentCode": "TEL",
    "shiftCode": "A-T",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-585",
    "departmentCode": "TEL",
    "shiftCode": "A-T1",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-586",
    "departmentCode": "TEL",
    "shiftCode": "A-T2",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-587",
    "departmentCode": "TEL",
    "shiftCode": "A-T3",
    "startTime": "11:30",
    "endTime": "21:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-588",
    "departmentCode": "TEL",
    "shiftCode": "N",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-589",
    "departmentCode": "TEL",
    "shiftCode": "N-X",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-590",
    "departmentCode": "TEL",
    "shiftCode": "N-ET",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-591",
    "departmentCode": "TEL",
    "shiftCode": "N-T",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-592",
    "departmentCode": "TEL",
    "shiftCode": "N-T1",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-593",
    "departmentCode": "TEL",
    "shiftCode": "N-T2",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-594",
    "departmentCode": "TEL",
    "shiftCode": "N-T3",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-595",
    "departmentCode": "TRW/TRL",
    "shiftCode": "E",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-596",
    "departmentCode": "TRW/TRL",
    "shiftCode": "E-X",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-597",
    "departmentCode": "TRW/TRL",
    "shiftCode": "E-ET",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-598",
    "departmentCode": "TRW/TRL",
    "shiftCode": "N",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-599",
    "departmentCode": "TRW/TRL",
    "shiftCode": "N-X",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-600",
    "departmentCode": "TRW/TRL",
    "shiftCode": "N-ET",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-601",
    "departmentCode": "TRW/TRL",
    "shiftCode": "T",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-602",
    "departmentCode": "TRW/TRL",
    "shiftCode": "T-X",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-603",
    "departmentCode": "TRW/TRL",
    "shiftCode": "T-ET",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-604",
    "departmentCode": "WSH",
    "shiftCode": "E",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-605",
    "departmentCode": "WSH",
    "shiftCode": "E-X",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-606",
    "departmentCode": "WSH",
    "shiftCode": "E-ET",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-607",
    "departmentCode": "WSH",
    "shiftCode": "E-T",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-608",
    "departmentCode": "WSH",
    "shiftCode": "E-T1",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-609",
    "departmentCode": "WSH",
    "shiftCode": "E-T2",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-610",
    "departmentCode": "WSH",
    "shiftCode": "E-T3",
    "startTime": "06:30",
    "endTime": "16:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-611",
    "departmentCode": "WSH",
    "shiftCode": "D2",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-612",
    "departmentCode": "WSH",
    "shiftCode": "D2-X",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-613",
    "departmentCode": "WSH",
    "shiftCode": "D2-ET",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-614",
    "departmentCode": "WSH",
    "shiftCode": "D2-T",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-615",
    "departmentCode": "WSH",
    "shiftCode": "D2-T1",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-616",
    "departmentCode": "WSH",
    "shiftCode": "D2-T2",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-617",
    "departmentCode": "WSH",
    "shiftCode": "D2-T3",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-618",
    "departmentCode": "WSH",
    "shiftCode": "E1",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-619",
    "departmentCode": "WSH",
    "shiftCode": "E1-X",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-620",
    "departmentCode": "WSH",
    "shiftCode": "E1-ET",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-621",
    "departmentCode": "WSH",
    "shiftCode": "E1-T",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-622",
    "departmentCode": "WSH",
    "shiftCode": "E1-T1",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-623",
    "departmentCode": "WSH",
    "shiftCode": "E1-T2",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-624",
    "departmentCode": "WSH",
    "shiftCode": "E1-T3",
    "startTime": "07:00",
    "endTime": "16:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-625",
    "departmentCode": "WSH",
    "shiftCode": "T",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-626",
    "departmentCode": "WSH",
    "shiftCode": "T-X",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-627",
    "departmentCode": "WSH",
    "shiftCode": "T-ET",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-628",
    "departmentCode": "WSH",
    "shiftCode": "T-T",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-629",
    "departmentCode": "WSH",
    "shiftCode": "T-T1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-630",
    "departmentCode": "WSH",
    "shiftCode": "T-T2",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-631",
    "departmentCode": "WSH",
    "shiftCode": "T-T3",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-632",
    "departmentCode": "WSH",
    "shiftCode": "D",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-633",
    "departmentCode": "WSH",
    "shiftCode": "D-X",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-634",
    "departmentCode": "WSH",
    "shiftCode": "D-ET",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-635",
    "departmentCode": "WSH",
    "shiftCode": "D-T",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-636",
    "departmentCode": "WSH",
    "shiftCode": "D-T1",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-637",
    "departmentCode": "WSH",
    "shiftCode": "D-T2",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-638",
    "departmentCode": "WSH",
    "shiftCode": "D-T3",
    "startTime": "08:00",
    "endTime": "17:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-639",
    "departmentCode": "WSH",
    "shiftCode": "D1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-640",
    "departmentCode": "WSH",
    "shiftCode": "D1-X",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-641",
    "departmentCode": "WSH",
    "shiftCode": "D1-ET",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-642",
    "departmentCode": "WSH",
    "shiftCode": "D1-T",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-643",
    "departmentCode": "WSH",
    "shiftCode": "D1-T1",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-644",
    "departmentCode": "WSH",
    "shiftCode": "D1-T2",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-645",
    "departmentCode": "WSH",
    "shiftCode": "D1-T3",
    "startTime": "08:00",
    "endTime": "17:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-646",
    "departmentCode": "WSH",
    "shiftCode": "A",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-647",
    "departmentCode": "WSH",
    "shiftCode": "A-X",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-648",
    "departmentCode": "WSH",
    "shiftCode": "A-ET",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-649",
    "departmentCode": "WSH",
    "shiftCode": "A-T",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-650",
    "departmentCode": "WSH",
    "shiftCode": "A-T1",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-651",
    "departmentCode": "WSH",
    "shiftCode": "A-T2",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-652",
    "departmentCode": "WSH",
    "shiftCode": "A-T3",
    "startTime": "13:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-653",
    "departmentCode": "WSH",
    "shiftCode": "N0",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-654",
    "departmentCode": "WSH",
    "shiftCode": "N0-X",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-655",
    "departmentCode": "WSH",
    "shiftCode": "N0-ET",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-656",
    "departmentCode": "WSH",
    "shiftCode": "N0-T",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-657",
    "departmentCode": "WSH",
    "shiftCode": "N0-T1",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-658",
    "departmentCode": "WSH",
    "shiftCode": "N0-T2",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-659",
    "departmentCode": "WSH",
    "shiftCode": "N0-T3",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-660",
    "departmentCode": "WSH",
    "shiftCode": "N1",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-661",
    "departmentCode": "WSH",
    "shiftCode": "N1-X",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-662",
    "departmentCode": "WSH",
    "shiftCode": "N1-ET",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-663",
    "departmentCode": "WSH",
    "shiftCode": "N1-T",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-664",
    "departmentCode": "WSH",
    "shiftCode": "N1-T1",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-665",
    "departmentCode": "WSH",
    "shiftCode": "N1-T2",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-666",
    "departmentCode": "WSH",
    "shiftCode": "N1-T3",
    "startTime": "20:00",
    "endTime": "05:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-667",
    "departmentCode": "WSH",
    "shiftCode": "N",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-668",
    "departmentCode": "WSH",
    "shiftCode": "N-X",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-669",
    "departmentCode": "WSH",
    "shiftCode": "N-ET",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-670",
    "departmentCode": "WSH",
    "shiftCode": "N-T",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-671",
    "departmentCode": "WSH",
    "shiftCode": "N-T1",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-672",
    "departmentCode": "WSH",
    "shiftCode": "N-T2",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-673",
    "departmentCode": "WSH",
    "shiftCode": "N-T3",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-674",
    "departmentCode": "WSH",
    "shiftCode": "N3",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-675",
    "departmentCode": "WSH",
    "shiftCode": "N3-X",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-676",
    "departmentCode": "WSH",
    "shiftCode": "N3-ET",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-677",
    "departmentCode": "WSH",
    "shiftCode": "N3-T",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-678",
    "departmentCode": "WSH",
    "shiftCode": "N3-T1",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-679",
    "departmentCode": "WSH",
    "shiftCode": "N3-T2",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-680",
    "departmentCode": "WSH",
    "shiftCode": "N3-T3",
    "startTime": "21:00",
    "endTime": "06:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-681",
    "departmentCode": "OVH",
    "shiftCode": "A4",
    "startTime": "19:00",
    "endTime": "04:30",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-682",
    "departmentCode": "BES/PSY2",
    "shiftCode": "N-X",
    "startTime": "20:30",
    "endTime": "06:00",
    "workHours": 8.0,
    "remark": ""
  },
  {
    "id": "sc-683",
    "departmentCode": "All",
    "shiftCode": "W",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Workshop"
  },
  {
    "id": "sc-684",
    "departmentCode": "All",
    "shiftCode": "AL",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Annual leave, Vacation"
  },
  {
    "id": "sc-685",
    "departmentCode": "All",
    "shiftCode": "AL2",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Annual leave - half day"
  },
  {
    "id": "sc-686",
    "departmentCode": "All",
    "shiftCode": "ALU",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Annual leave - Emergency (Unplan)"
  },
  {
    "id": "sc-687",
    "departmentCode": "All",
    "shiftCode": "AL2U",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Annual leave - Emergency half day"
  },
  {
    "id": "sc-688",
    "departmentCode": "All",
    "shiftCode": "CL",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Casual leave"
  },
  {
    "id": "sc-689",
    "departmentCode": "All",
    "shiftCode": "SL",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Sick leave"
  },
  {
    "id": "sc-690",
    "departmentCode": "All",
    "shiftCode": "SL2",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Sick leave - half day"
  },
  {
    "id": "sc-691",
    "departmentCode": "All",
    "shiftCode": "SLO",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Sick leave - No medical practitioner"
  },
  {
    "id": "sc-692",
    "departmentCode": "All",
    "shiftCode": "CO",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Connubial"
  },
  {
    "id": "sc-693",
    "departmentCode": "All",
    "shiftCode": "MA",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Maternity leave"
  },
  {
    "id": "sc-694",
    "departmentCode": "All",
    "shiftCode": "PA",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Paternity leave"
  },
  {
    "id": "sc-695",
    "departmentCode": "All",
    "shiftCode": "ST",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Sterilisation leave (certified medical practitioner)"
  },
  {
    "id": "sc-696",
    "departmentCode": "All",
    "shiftCode": "MI",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Military Service Leave"
  },
  {
    "id": "sc-697",
    "departmentCode": "All",
    "shiftCode": "RE",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Religious Ceremony leave"
  },
  {
    "id": "sc-698",
    "departmentCode": "All",
    "shiftCode": "PI",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Leave for Pigrimage to Mecca"
  },
  {
    "id": "sc-699",
    "departmentCode": "All",
    "shiftCode": "DS",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Support other project e.g. CoC"
  },
  {
    "id": "sc-700",
    "departmentCode": "All",
    "shiftCode": "CL2",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "Casual leave  half day"
  },
  {
    "id": "sc-701",
    "departmentCode": "All",
    "shiftCode": "SP",
    "startTime": "",
    "endTime": "",
    "workHours": 8.0,
    "remark": "TRW standby New Year & Songkran"
  },
  {
    "id": "sc-702",
    "departmentCode": "GM",
    "shiftCode": "H",
    "startTime": "",
    "endTime": "",
    "workHours": 0.0,
    "remark": "Holiday"
  },
  {
    "id": "sc-703",
    "departmentCode": "GM",
    "shiftCode": "A",
    "startTime": "06:00",
    "endTime": "14:30",
    "workHours": 8.0,
    "remark": "Morning Shift"
  },
  {
    "id": "sc-704",
    "departmentCode": "GM",
    "shiftCode": "E",
    "startTime": "14:00",
    "endTime": "22:30",
    "workHours": 8.0,
    "remark": "Evening Shift"
  },
  {
    "id": "sc-705",
    "departmentCode": "GM",
    "shiftCode": "AL",
    "startTime": "",
    "endTime": "",
    "workHours": 0.0,
    "remark": "Annual Leave"
  },
  {
    "id": "sc-706",
    "departmentCode": "GM",
    "shiftCode": "W",
    "startTime": "",
    "endTime": "",
    "workHours": 0.0,
    "remark": "Weekend/Off Day"
  },
  {
    "id": "sc-707",
    "departmentCode": "BES/PSY",
    "shiftCode": "AL",
    "startTime": "",
    "endTime": "",
    "workHours": 0.0,
    "remark": "Annual Leave"
  },
  {
    "id": "sc-708",
    "departmentCode": "BES/PSY",
    "shiftCode": "W",
    "startTime": "",
    "endTime": "",
    "workHours": 0.0,
    "remark": "Off Day"
  },
  {
    "id": "sc-709",
    "departmentCode": "BES/PSY",
    "shiftCode": "H",
    "startTime": "",
    "endTime": "",
    "workHours": 0.0,
    "remark": "Holiday"
  }
];

export const INITIAL_SHIFT_PLANS: ShiftPlanEntry[] = [
  {
    "id": "sp-0406-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 1,
    "shiftCode": "A"
  },
  {
    "id": "sp-0406-2026-5-3",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 3,
    "shiftCode": "E"
  },
  {
    "id": "sp-0406-2026-5-4",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 4,
    "shiftCode": "E"
  },
  {
    "id": "sp-0406-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 5,
    "shiftCode": "E"
  },
  {
    "id": "sp-0406-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 6,
    "shiftCode": "E"
  },
  {
    "id": "sp-0406-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 7,
    "shiftCode": "E"
  },
  {
    "id": "sp-0406-2026-5-11",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 11,
    "shiftCode": "N"
  },
  {
    "id": "sp-0406-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 12,
    "shiftCode": "N"
  },
  {
    "id": "sp-0406-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 13,
    "shiftCode": "N"
  },
  {
    "id": "sp-0406-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 14,
    "shiftCode": "N"
  },
  {
    "id": "sp-0406-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 15,
    "shiftCode": "N"
  },
  {
    "id": "sp-0406-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 16,
    "shiftCode": "N"
  },
  {
    "id": "sp-0406-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 19,
    "shiftCode": "A"
  },
  {
    "id": "sp-0406-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 20,
    "shiftCode": "A"
  },
  {
    "id": "sp-0406-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 21,
    "shiftCode": "A"
  },
  {
    "id": "sp-0406-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 22,
    "shiftCode": "A"
  },
  {
    "id": "sp-0406-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 23,
    "shiftCode": "A"
  },
  {
    "id": "sp-0406-2026-5-24",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 24,
    "shiftCode": "A"
  },
  {
    "id": "sp-0406-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 25,
    "shiftCode": "W"
  },
  {
    "id": "sp-0406-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 26,
    "shiftCode": "W"
  },
  {
    "id": "sp-0406-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 29,
    "shiftCode": "N"
  },
  {
    "id": "sp-0406-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 30,
    "shiftCode": "N"
  },
  {
    "id": "sp-0406-2026-5-31",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "day": 31,
    "shiftCode": "N"
  },
  {
    "id": "sp-0469-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 1,
    "shiftCode": "A"
  },
  {
    "id": "sp-0469-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 2,
    "shiftCode": "A"
  },
  {
    "id": "sp-0469-2026-5-3",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 3,
    "shiftCode": "A"
  },
  {
    "id": "sp-0469-2026-5-4",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 4,
    "shiftCode": "A"
  },
  {
    "id": "sp-0469-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 7,
    "shiftCode": "E"
  },
  {
    "id": "sp-0469-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 8,
    "shiftCode": "E"
  },
  {
    "id": "sp-0469-2026-5-11",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 11,
    "shiftCode": "N"
  },
  {
    "id": "sp-0469-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 12,
    "shiftCode": "N"
  },
  {
    "id": "sp-0469-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 13,
    "shiftCode": "N"
  },
  {
    "id": "sp-0469-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 14,
    "shiftCode": "N"
  },
  {
    "id": "sp-0469-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 15,
    "shiftCode": "N"
  },
  {
    "id": "sp-0469-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 16,
    "shiftCode": "AL"
  },
  {
    "id": "sp-0469-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 19,
    "shiftCode": "A"
  },
  {
    "id": "sp-0469-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 20,
    "shiftCode": "A"
  },
  {
    "id": "sp-0469-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 21,
    "shiftCode": "A"
  },
  {
    "id": "sp-0469-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 22,
    "shiftCode": "AL"
  },
  {
    "id": "sp-0469-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 25,
    "shiftCode": "W"
  },
  {
    "id": "sp-0469-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 26,
    "shiftCode": "W"
  },
  {
    "id": "sp-0469-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 27,
    "shiftCode": "A"
  },
  {
    "id": "sp-0469-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 28,
    "shiftCode": "A"
  },
  {
    "id": "sp-0469-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 29,
    "shiftCode": "A"
  },
  {
    "id": "sp-0469-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 30,
    "shiftCode": "A"
  },
  {
    "id": "sp-0469-2026-5-31",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "day": 31,
    "shiftCode": "AL"
  },
  {
    "id": "sp-0261-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 1,
    "shiftCode": "AL"
  },
  {
    "id": "sp-0261-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 2,
    "shiftCode": "AL"
  },
  {
    "id": "sp-0261-2026-5-3",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 3,
    "shiftCode": "A"
  },
  {
    "id": "sp-0261-2026-5-4",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 4,
    "shiftCode": "A"
  },
  {
    "id": "sp-0261-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 5,
    "shiftCode": "A"
  },
  {
    "id": "sp-0261-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 6,
    "shiftCode": "A"
  },
  {
    "id": "sp-0261-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 9,
    "shiftCode": "E"
  },
  {
    "id": "sp-0261-2026-5-10",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 10,
    "shiftCode": "E"
  },
  {
    "id": "sp-0261-2026-5-11",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 11,
    "shiftCode": "E"
  },
  {
    "id": "sp-0261-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 12,
    "shiftCode": "E"
  },
  {
    "id": "sp-0261-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 13,
    "shiftCode": "E"
  },
  {
    "id": "sp-0261-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 14,
    "shiftCode": "E"
  },
  {
    "id": "sp-0261-2026-5-17",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 17,
    "shiftCode": "AL"
  },
  {
    "id": "sp-0261-2026-5-18",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 18,
    "shiftCode": "N"
  },
  {
    "id": "sp-0261-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 19,
    "shiftCode": "N"
  },
  {
    "id": "sp-0261-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 20,
    "shiftCode": "N"
  },
  {
    "id": "sp-0261-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 21,
    "shiftCode": "N"
  },
  {
    "id": "sp-0261-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 22,
    "shiftCode": "N"
  },
  {
    "id": "sp-0261-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 25,
    "shiftCode": "AL"
  },
  {
    "id": "sp-0261-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 26,
    "shiftCode": "A"
  },
  {
    "id": "sp-0261-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 27,
    "shiftCode": "A"
  },
  {
    "id": "sp-0261-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 28,
    "shiftCode": "A"
  },
  {
    "id": "sp-0261-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 29,
    "shiftCode": "A"
  },
  {
    "id": "sp-0261-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "0261",
    "gid": "Z0261UZ",
    "day": 30,
    "shiftCode": "A"
  },
  {
    "id": "sp-0149-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 1,
    "shiftCode": "AL"
  },
  {
    "id": "sp-0149-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 2,
    "shiftCode": "AL"
  },
  {
    "id": "sp-0149-2026-5-3",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 3,
    "shiftCode": "AL"
  },
  {
    "id": "sp-0149-2026-5-4",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 4,
    "shiftCode": "E"
  },
  {
    "id": "sp-0149-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 5,
    "shiftCode": "A"
  },
  {
    "id": "sp-0149-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 6,
    "shiftCode": "A"
  },
  {
    "id": "sp-0149-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 9,
    "shiftCode": "E"
  },
  {
    "id": "sp-0149-2026-5-10",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 10,
    "shiftCode": "E"
  },
  {
    "id": "sp-0149-2026-5-11",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 11,
    "shiftCode": "E"
  },
  {
    "id": "sp-0149-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 12,
    "shiftCode": "E"
  },
  {
    "id": "sp-0149-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 13,
    "shiftCode": "E"
  },
  {
    "id": "sp-0149-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 14,
    "shiftCode": "E"
  },
  {
    "id": "sp-0149-2026-5-17",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 17,
    "shiftCode": "N"
  },
  {
    "id": "sp-0149-2026-5-18",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 18,
    "shiftCode": "N"
  },
  {
    "id": "sp-0149-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 19,
    "shiftCode": "N"
  },
  {
    "id": "sp-0149-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 20,
    "shiftCode": "N"
  },
  {
    "id": "sp-0149-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 21,
    "shiftCode": "N"
  },
  {
    "id": "sp-0149-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 22,
    "shiftCode": "N"
  },
  {
    "id": "sp-0149-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 25,
    "shiftCode": "E"
  },
  {
    "id": "sp-0149-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 26,
    "shiftCode": "E"
  },
  {
    "id": "sp-0149-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 27,
    "shiftCode": "E"
  },
  {
    "id": "sp-0149-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 28,
    "shiftCode": "E"
  },
  {
    "id": "sp-0149-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 29,
    "shiftCode": "E"
  },
  {
    "id": "sp-0149-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "0149",
    "gid": "Z0149UZ",
    "day": 30,
    "shiftCode": "E"
  },
  {
    "id": "sp-0173-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 1,
    "shiftCode": "N"
  },
  {
    "id": "sp-0173-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 2,
    "shiftCode": "N"
  },
  {
    "id": "sp-0173-2026-5-3",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 3,
    "shiftCode": "N"
  },
  {
    "id": "sp-0173-2026-5-4",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 4,
    "shiftCode": "N"
  },
  {
    "id": "sp-0173-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 7,
    "shiftCode": "A"
  },
  {
    "id": "sp-0173-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 8,
    "shiftCode": "A"
  },
  {
    "id": "sp-0173-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 9,
    "shiftCode": "A"
  },
  {
    "id": "sp-0173-2026-5-10",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 10,
    "shiftCode": "A"
  },
  {
    "id": "sp-0173-2026-5-11",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 11,
    "shiftCode": "A"
  },
  {
    "id": "sp-0173-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 12,
    "shiftCode": "A"
  },
  {
    "id": "sp-0173-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 15,
    "shiftCode": "E"
  },
  {
    "id": "sp-0173-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 16,
    "shiftCode": "E"
  },
  {
    "id": "sp-0173-2026-5-17",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 17,
    "shiftCode": "E"
  },
  {
    "id": "sp-0173-2026-5-18",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 18,
    "shiftCode": "AL"
  },
  {
    "id": "sp-0173-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 19,
    "shiftCode": "E"
  },
  {
    "id": "sp-0173-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 20,
    "shiftCode": "E"
  },
  {
    "id": "sp-0173-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 23,
    "shiftCode": "N"
  },
  {
    "id": "sp-0173-2026-5-24",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 24,
    "shiftCode": "N"
  },
  {
    "id": "sp-0173-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 25,
    "shiftCode": "N"
  },
  {
    "id": "sp-0173-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 26,
    "shiftCode": "N"
  },
  {
    "id": "sp-0173-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 27,
    "shiftCode": "N"
  },
  {
    "id": "sp-0173-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 28,
    "shiftCode": "N"
  },
  {
    "id": "sp-0173-2026-5-31",
    "year": 2026,
    "month": 5,
    "empNo": "0173",
    "gid": "Z0173UZ",
    "day": 31,
    "shiftCode": "A"
  },
  {
    "id": "sp-1403-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 1,
    "shiftCode": "N"
  },
  {
    "id": "sp-1403-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 2,
    "shiftCode": "N"
  },
  {
    "id": "sp-1403-2026-5-3",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 3,
    "shiftCode": "N"
  },
  {
    "id": "sp-1403-2026-5-4",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 4,
    "shiftCode": "N"
  },
  {
    "id": "sp-1403-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 7,
    "shiftCode": "A"
  },
  {
    "id": "sp-1403-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 8,
    "shiftCode": "A"
  },
  {
    "id": "sp-1403-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 9,
    "shiftCode": "A"
  },
  {
    "id": "sp-1403-2026-5-10",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 10,
    "shiftCode": "A"
  },
  {
    "id": "sp-1403-2026-5-11",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 11,
    "shiftCode": "AL"
  },
  {
    "id": "sp-1403-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 12,
    "shiftCode": "AL"
  },
  {
    "id": "sp-1403-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 15,
    "shiftCode": "E"
  },
  {
    "id": "sp-1403-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 16,
    "shiftCode": "E"
  },
  {
    "id": "sp-1403-2026-5-17",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 17,
    "shiftCode": "E"
  },
  {
    "id": "sp-1403-2026-5-18",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 18,
    "shiftCode": "E"
  },
  {
    "id": "sp-1403-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 19,
    "shiftCode": "E"
  },
  {
    "id": "sp-1403-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 20,
    "shiftCode": "E"
  },
  {
    "id": "sp-1403-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 23,
    "shiftCode": "E"
  },
  {
    "id": "sp-1403-2026-5-24",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 24,
    "shiftCode": "E"
  },
  {
    "id": "sp-1403-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 25,
    "shiftCode": "W"
  },
  {
    "id": "sp-1403-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 26,
    "shiftCode": "W"
  },
  {
    "id": "sp-1403-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 27,
    "shiftCode": "T"
  },
  {
    "id": "sp-1403-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 28,
    "shiftCode": "E"
  },
  {
    "id": "sp-1403-2026-5-31",
    "year": 2026,
    "month": 5,
    "empNo": "1403",
    "gid": "Z1403UZ",
    "day": 31,
    "shiftCode": "E"
  },
  {
    "id": "sp-0224-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 1,
    "shiftCode": "AL"
  },
  {
    "id": "sp-0224-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 2,
    "shiftCode": "A"
  },
  {
    "id": "sp-0224-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 5,
    "shiftCode": "N"
  },
  {
    "id": "sp-0224-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 6,
    "shiftCode": "N"
  },
  {
    "id": "sp-0224-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 7,
    "shiftCode": "N"
  },
  {
    "id": "sp-0224-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 8,
    "shiftCode": "N"
  },
  {
    "id": "sp-0224-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 9,
    "shiftCode": "N"
  },
  {
    "id": "sp-0224-2026-5-10",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 10,
    "shiftCode": "N"
  },
  {
    "id": "sp-0224-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 13,
    "shiftCode": "A"
  },
  {
    "id": "sp-0224-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 14,
    "shiftCode": "A"
  },
  {
    "id": "sp-0224-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 15,
    "shiftCode": "A"
  },
  {
    "id": "sp-0224-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 16,
    "shiftCode": "A"
  },
  {
    "id": "sp-0224-2026-5-17",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 17,
    "shiftCode": "A"
  },
  {
    "id": "sp-0224-2026-5-18",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 18,
    "shiftCode": "A"
  },
  {
    "id": "sp-0224-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 21,
    "shiftCode": "N"
  },
  {
    "id": "sp-0224-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 22,
    "shiftCode": "N"
  },
  {
    "id": "sp-0224-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 23,
    "shiftCode": "N"
  },
  {
    "id": "sp-0224-2026-5-24",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 24,
    "shiftCode": "N"
  },
  {
    "id": "sp-0224-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 25,
    "shiftCode": "N"
  },
  {
    "id": "sp-0224-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 26,
    "shiftCode": "N"
  },
  {
    "id": "sp-0224-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 29,
    "shiftCode": "E"
  },
  {
    "id": "sp-0224-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 30,
    "shiftCode": "E"
  },
  {
    "id": "sp-0224-2026-5-31",
    "year": 2026,
    "month": 5,
    "empNo": "0224",
    "gid": "Z0224UZ",
    "day": 31,
    "shiftCode": "E"
  },
  {
    "id": "sp-1219-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 1,
    "shiftCode": "E"
  },
  {
    "id": "sp-1219-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 2,
    "shiftCode": "E"
  },
  {
    "id": "sp-1219-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 5,
    "shiftCode": "N"
  },
  {
    "id": "sp-1219-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 6,
    "shiftCode": "N"
  },
  {
    "id": "sp-1219-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 7,
    "shiftCode": "N"
  },
  {
    "id": "sp-1219-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 8,
    "shiftCode": "N"
  },
  {
    "id": "sp-1219-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 9,
    "shiftCode": "N"
  },
  {
    "id": "sp-1219-2026-5-10",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 10,
    "shiftCode": "N"
  },
  {
    "id": "sp-1219-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 13,
    "shiftCode": "A"
  },
  {
    "id": "sp-1219-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 14,
    "shiftCode": "A"
  },
  {
    "id": "sp-1219-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 15,
    "shiftCode": "A"
  },
  {
    "id": "sp-1219-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 16,
    "shiftCode": "A"
  },
  {
    "id": "sp-1219-2026-5-17",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 17,
    "shiftCode": "A"
  },
  {
    "id": "sp-1219-2026-5-18",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 18,
    "shiftCode": "A"
  },
  {
    "id": "sp-1219-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 22,
    "shiftCode": "A"
  },
  {
    "id": "sp-1219-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 23,
    "shiftCode": "A"
  },
  {
    "id": "sp-1219-2026-5-24",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 24,
    "shiftCode": "A"
  },
  {
    "id": "sp-1219-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 25,
    "shiftCode": "W"
  },
  {
    "id": "sp-1219-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 26,
    "shiftCode": "W"
  },
  {
    "id": "sp-1219-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 27,
    "shiftCode": "E"
  },
  {
    "id": "sp-1219-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 29,
    "shiftCode": "N"
  },
  {
    "id": "sp-1219-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 30,
    "shiftCode": "N"
  },
  {
    "id": "sp-1219-2026-5-31",
    "year": 2026,
    "month": 5,
    "empNo": "1219",
    "gid": "Z1219UZ",
    "day": 31,
    "shiftCode": "N"
  },
  {
    "id": "sp-0179-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 1,
    "shiftCode": "E"
  },
  {
    "id": "sp-0179-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 2,
    "shiftCode": "E"
  },
  {
    "id": "sp-0179-2026-5-3",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 3,
    "shiftCode": "E"
  },
  {
    "id": "sp-0179-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 5,
    "shiftCode": "A"
  },
  {
    "id": "sp-0179-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 6,
    "shiftCode": "A"
  },
  {
    "id": "sp-0179-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 7,
    "shiftCode": "A"
  },
  {
    "id": "sp-0179-2026-5-10",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 10,
    "shiftCode": "A"
  },
  {
    "id": "sp-0179-2026-5-11",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 11,
    "shiftCode": "A"
  },
  {
    "id": "sp-0179-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 12,
    "shiftCode": "A"
  },
  {
    "id": "sp-0179-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 13,
    "shiftCode": "A"
  },
  {
    "id": "sp-0179-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 14,
    "shiftCode": "A"
  },
  {
    "id": "sp-0179-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 15,
    "shiftCode": "A"
  },
  {
    "id": "sp-0179-2026-5-18",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 18,
    "shiftCode": "E"
  },
  {
    "id": "sp-0179-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 19,
    "shiftCode": "E"
  },
  {
    "id": "sp-0179-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 20,
    "shiftCode": "E"
  },
  {
    "id": "sp-0179-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 21,
    "shiftCode": "E"
  },
  {
    "id": "sp-0179-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 22,
    "shiftCode": "E"
  },
  {
    "id": "sp-0179-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 23,
    "shiftCode": "E"
  },
  {
    "id": "sp-0179-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 25,
    "shiftCode": "W"
  },
  {
    "id": "sp-0179-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 26,
    "shiftCode": "W"
  },
  {
    "id": "sp-0179-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 27,
    "shiftCode": "N"
  },
  {
    "id": "sp-0179-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 28,
    "shiftCode": "N"
  },
  {
    "id": "sp-0179-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 29,
    "shiftCode": "N"
  },
  {
    "id": "sp-0179-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "0179",
    "gid": "Z0179UZ",
    "day": 30,
    "shiftCode": "N"
  },
  {
    "id": "sp-1432-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 1,
    "shiftCode": "AL"
  },
  {
    "id": "sp-1432-2026-5-4",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 4,
    "shiftCode": "AL"
  },
  {
    "id": "sp-1432-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 5,
    "shiftCode": "E"
  },
  {
    "id": "sp-1432-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 6,
    "shiftCode": "E"
  },
  {
    "id": "sp-1432-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 7,
    "shiftCode": "E"
  },
  {
    "id": "sp-1432-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 8,
    "shiftCode": "E"
  },
  {
    "id": "sp-1432-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 9,
    "shiftCode": "E"
  },
  {
    "id": "sp-1432-2026-5-10",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 10,
    "shiftCode": "E"
  },
  {
    "id": "sp-1432-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 12,
    "shiftCode": "N"
  },
  {
    "id": "sp-1432-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 13,
    "shiftCode": "N"
  },
  {
    "id": "sp-1432-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 14,
    "shiftCode": "N"
  },
  {
    "id": "sp-1432-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 15,
    "shiftCode": "N"
  },
  {
    "id": "sp-1432-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 16,
    "shiftCode": "N"
  },
  {
    "id": "sp-1432-2026-5-17",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 17,
    "shiftCode": "N"
  },
  {
    "id": "sp-1432-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 21,
    "shiftCode": "E"
  },
  {
    "id": "sp-1432-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 22,
    "shiftCode": "E"
  },
  {
    "id": "sp-1432-2026-5-24",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 24,
    "shiftCode": "E"
  },
  {
    "id": "sp-1432-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 25,
    "shiftCode": "E"
  },
  {
    "id": "sp-1432-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 26,
    "shiftCode": "A"
  },
  {
    "id": "sp-1432-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 27,
    "shiftCode": "T"
  },
  {
    "id": "sp-1432-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 29,
    "shiftCode": "A"
  },
  {
    "id": "sp-1432-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 30,
    "shiftCode": "A"
  },
  {
    "id": "sp-1432-2026-5-31",
    "year": 2026,
    "month": 5,
    "empNo": "1432",
    "gid": "Z1432UZ",
    "day": 31,
    "shiftCode": "A"
  },
  {
    "id": "sp-0058-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-0058-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-0058-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 9,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 12,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 16,
    "shiftCode": "AL"
  },
  {
    "id": "sp-0058-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 21,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 23,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 26,
    "shiftCode": "E"
  },
  {
    "id": "sp-0058-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 29,
    "shiftCode": "D"
  },
  {
    "id": "sp-0058-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "0058",
    "gid": "Z0058UZ",
    "day": 30,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-1467-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-1467-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 9,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 12,
    "shiftCode": "SL2"
  },
  {
    "id": "sp-1467-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 16,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 21,
    "shiftCode": "T"
  },
  {
    "id": "sp-1467-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 23,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 25,
    "shiftCode": "W"
  },
  {
    "id": "sp-1467-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 26,
    "shiftCode": "W"
  },
  {
    "id": "sp-1467-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 29,
    "shiftCode": "D"
  },
  {
    "id": "sp-1467-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "1467",
    "gid": "Z1467UZ",
    "day": 30,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-0195-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-0195-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 9,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 12,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 16,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 21,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 23,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 26,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 29,
    "shiftCode": "D"
  },
  {
    "id": "sp-0195-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "0195",
    "gid": "Z0195UZ",
    "day": 30,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-1447-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-1447-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 9,
    "shiftCode": "AL"
  },
  {
    "id": "sp-1447-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 12,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 16,
    "shiftCode": "AL"
  },
  {
    "id": "sp-1447-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 21,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 23,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 25,
    "shiftCode": "W"
  },
  {
    "id": "sp-1447-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 26,
    "shiftCode": "W"
  },
  {
    "id": "sp-1447-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 29,
    "shiftCode": "D"
  },
  {
    "id": "sp-1447-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "1447",
    "gid": "Z1447UZ",
    "day": 30,
    "shiftCode": "D"
  },
  {
    "id": "sp-1449-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 1,
    "shiftCode": "AL"
  },
  {
    "id": "sp-1449-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 2,
    "shiftCode": "AL"
  },
  {
    "id": "sp-1449-2026-5-3",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 3,
    "shiftCode": "AL"
  },
  {
    "id": "sp-1449-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 5,
    "shiftCode": "AL"
  },
  {
    "id": "sp-1449-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 6,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 7,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 8,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 9,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 12,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 13,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 14,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 15,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 16,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 19,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 20,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 21,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 22,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 23,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 25,
    "shiftCode": "W"
  },
  {
    "id": "sp-1449-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 26,
    "shiftCode": "W"
  },
  {
    "id": "sp-1449-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 27,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 28,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 29,
    "shiftCode": "D1"
  },
  {
    "id": "sp-1449-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "1449",
    "gid": "Z1449UZ",
    "day": 30,
    "shiftCode": "D1"
  },
  {
    "id": "sp-0232-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-0232-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-0232-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 9,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 12,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 16,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 21,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 23,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 26,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 29,
    "shiftCode": "D"
  },
  {
    "id": "sp-0232-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "0232",
    "gid": "Z0232UZ",
    "day": 30,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-1364-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-1364-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 9,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 12,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 16,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 21,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 23,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 26,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 29,
    "shiftCode": "D"
  },
  {
    "id": "sp-1364-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "1364",
    "gid": "Z1364UZ",
    "day": 30,
    "shiftCode": "D"
  },
  {
    "id": "sp-0057-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-0057-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-0057-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 5,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 6,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 7,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 8,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 9,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 12,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 13,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 14,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 15,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 16,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 19,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 20,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 21,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 22,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 23,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 26,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 27,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 28,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 29,
    "shiftCode": "D2"
  },
  {
    "id": "sp-0057-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "0057",
    "gid": "Z0057UZ",
    "day": 30,
    "shiftCode": "D2"
  },
  {
    "id": "sp-1459-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-1459-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-1459-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 9,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 12,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 16,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 21,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 23,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 26,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 29,
    "shiftCode": "D"
  },
  {
    "id": "sp-1459-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "1459",
    "gid": "Z1459UZ",
    "day": 30,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-1460-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-1460-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 9,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 12,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 16,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 21,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 23,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 26,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 29,
    "shiftCode": "D"
  },
  {
    "id": "sp-1460-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "1460",
    "gid": "Z1460UZ",
    "day": 30,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-0200-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-0200-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 9,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 12,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 16,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 21,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 23,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 26,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 29,
    "shiftCode": "D"
  },
  {
    "id": "sp-0200-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "0200",
    "gid": "Z0200UZ",
    "day": 30,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-1417-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-1417-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 9,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 12,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 16,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 21,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 23,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 26,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 29,
    "shiftCode": "D"
  },
  {
    "id": "sp-1417-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "1417",
    "gid": "Z1417UZ",
    "day": 30,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-1359-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-1359-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 9,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 12,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 16,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 21,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 23,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 26,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 29,
    "shiftCode": "D"
  },
  {
    "id": "sp-1359-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "1359",
    "gid": "Z1359UZ",
    "day": 30,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-1398-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-1398-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 9,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 12,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 16,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 21,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 23,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 26,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 29,
    "shiftCode": "D"
  },
  {
    "id": "sp-1398-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "1398",
    "gid": "Z1398UZ",
    "day": 30,
    "shiftCode": "D"
  },
  {
    "id": "sp-2530-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-2530-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-2530-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 5,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 6,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 7,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 8,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 9,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 12,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 13,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 14,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 15,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 16,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 19,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 20,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 21,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 22,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 23,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 26,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 27,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 28,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 29,
    "shiftCode": "D2"
  },
  {
    "id": "sp-2530-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "2530",
    "gid": "Z2530UZ",
    "day": 30,
    "shiftCode": "D2"
  },
  {
    "id": "sp-1485-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-1485-2026-5-2",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 2,
    "shiftCode": "H"
  },
  {
    "id": "sp-1485-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-9",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 9,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 12,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-16",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 16,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 21,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-23",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 23,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 26,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 29,
    "shiftCode": "D"
  },
  {
    "id": "sp-1485-2026-5-30",
    "year": 2026,
    "month": 5,
    "empNo": "1485",
    "gid": "Z1485UZ",
    "day": 30,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-1",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 1,
    "shiftCode": "H"
  },
  {
    "id": "sp-0950-2026-5-4",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 4,
    "shiftCode": "H"
  },
  {
    "id": "sp-0950-2026-5-5",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 5,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-6",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 6,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-7",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 7,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-8",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 8,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-11",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 11,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-12",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 12,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-13",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 13,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-14",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 14,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-15",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 15,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-18",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 18,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-19",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 19,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-20",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 20,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-21",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 21,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-22",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 22,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-25",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 25,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-26",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 26,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-27",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 27,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-28",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 28,
    "shiftCode": "D"
  },
  {
    "id": "sp-0950-2026-5-29",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "day": 29,
    "shiftCode": "D"
  }
];

export const INITIAL_ATTENDANCE: TimeAttendancePunch[] = [
  {
    "id": "att-1",
    "empNo": "0149",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "04:42",
    "terminalId": "01",
    "rawLine": "0149   I 260128 0442 01"
  },
  {
    "id": "att-2",
    "empNo": "0149",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "04:50",
    "terminalId": "01",
    "rawLine": "0149   I 260128 0450 01"
  },
  {
    "id": "att-3",
    "empNo": "0094",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:18",
    "terminalId": "01",
    "rawLine": "0094   I 260128 0518 01"
  },
  {
    "id": "att-4",
    "empNo": "1442",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:30",
    "terminalId": "01",
    "rawLine": "1442   I 260128 0530 01"
  },
  {
    "id": "att-5",
    "empNo": "0077",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:32",
    "terminalId": "01",
    "rawLine": "0077   I 260128 0532 01"
  },
  {
    "id": "att-6",
    "empNo": "0315",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:36",
    "terminalId": "01",
    "rawLine": "0315   I 260128 0536 01"
  },
  {
    "id": "att-7",
    "empNo": "1234",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:44",
    "terminalId": "01",
    "rawLine": "1234   I 260128 0544 01"
  },
  {
    "id": "att-8",
    "empNo": "1477",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:47",
    "terminalId": "01",
    "rawLine": "1477   I 260128 0547 01"
  },
  {
    "id": "att-9",
    "empNo": "0524",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:59",
    "terminalId": "01",
    "rawLine": "0524   I 260128 0559 01"
  },
  {
    "id": "att-10",
    "empNo": "0073",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "01",
    "rawLine": "0073   I 260128 0600 01"
  },
  {
    "id": "att-11",
    "empNo": "1383",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "01",
    "rawLine": "1383   O 260128 0600 01"
  },
  {
    "id": "att-12",
    "empNo": "1382",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "01",
    "rawLine": "1382   O 260128 0600 01"
  },
  {
    "id": "att-13",
    "empNo": "1481",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "01",
    "rawLine": "1481   O 260128 0600 01"
  },
  {
    "id": "att-14",
    "empNo": "1482",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "01",
    "rawLine": "1482   O 260128 0600 01"
  },
  {
    "id": "att-15",
    "empNo": "1422",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "01",
    "rawLine": "1422   O 260128 0600 01"
  },
  {
    "id": "att-16",
    "empNo": "1330",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "01",
    "rawLine": "1330   O 260128 0600 01"
  },
  {
    "id": "att-17",
    "empNo": "9014",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "01",
    "rawLine": "9014   O 260128 0600 01"
  },
  {
    "id": "att-18",
    "empNo": "1419",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:01",
    "terminalId": "01",
    "rawLine": "1419   O 260128 0601 01"
  },
  {
    "id": "att-19",
    "empNo": "1479",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:01",
    "terminalId": "01",
    "rawLine": "1479   O 260128 0601 01"
  },
  {
    "id": "att-20",
    "empNo": "0403",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:01",
    "terminalId": "01",
    "rawLine": "0403   O 260128 0601 01"
  },
  {
    "id": "att-21",
    "empNo": "0501",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:01",
    "terminalId": "01",
    "rawLine": "0501   O 260128 0601 01"
  },
  {
    "id": "att-22",
    "empNo": "0590",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:01",
    "terminalId": "01",
    "rawLine": "0590   O 260128 0601 01"
  },
  {
    "id": "att-23",
    "empNo": "0394",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:01",
    "terminalId": "01",
    "rawLine": "0394   O 260128 0601 01"
  },
  {
    "id": "att-24",
    "empNo": "1131",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:01",
    "terminalId": "01",
    "rawLine": "1131   O 260128 0601 01"
  },
  {
    "id": "att-25",
    "empNo": "1321",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:02",
    "terminalId": "01",
    "rawLine": "1321   O 260128 0602 01"
  },
  {
    "id": "att-26",
    "empNo": "1403",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:03",
    "terminalId": "01",
    "rawLine": "1403   I 260128 0603 01"
  },
  {
    "id": "att-27",
    "empNo": "1394",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:04",
    "terminalId": "01",
    "rawLine": "1394   I 260128 0604 01"
  },
  {
    "id": "att-28",
    "empNo": "0252",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:06",
    "terminalId": "01",
    "rawLine": "0252   O 260128 0606 01"
  },
  {
    "id": "att-29",
    "empNo": "0780",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:08",
    "terminalId": "01",
    "rawLine": "0780   O 260128 0608 01"
  },
  {
    "id": "att-30",
    "empNo": "1057",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:08",
    "terminalId": "01",
    "rawLine": "1057   O 260128 0608 01"
  },
  {
    "id": "att-31",
    "empNo": "0253",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:10",
    "terminalId": "01",
    "rawLine": "0253   O 260128 0610 01"
  },
  {
    "id": "att-32",
    "empNo": "1438",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:13",
    "terminalId": "01",
    "rawLine": "1438   O 260128 0613 01"
  },
  {
    "id": "att-33",
    "empNo": "0734",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:15",
    "terminalId": "01",
    "rawLine": "0734   O 260128 0615 01"
  },
  {
    "id": "att-34",
    "empNo": "0250",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:16",
    "terminalId": "01",
    "rawLine": "0250   I 260128 0616 01"
  },
  {
    "id": "att-35",
    "empNo": "1081",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:17",
    "terminalId": "01",
    "rawLine": "1081   I 260128 0617 01"
  },
  {
    "id": "att-36",
    "empNo": "0896",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:27",
    "terminalId": "01",
    "rawLine": "0896   I 260128 0627 01"
  },
  {
    "id": "att-37",
    "empNo": "0190",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:28",
    "terminalId": "01",
    "rawLine": "0190   I 260128 0628 01"
  },
  {
    "id": "att-38",
    "empNo": "0420",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:29",
    "terminalId": "01",
    "rawLine": "0420   I 260128 0629 01"
  },
  {
    "id": "att-39",
    "empNo": "0058",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:31",
    "terminalId": "01",
    "rawLine": "0058   I 260128 0631 01"
  },
  {
    "id": "att-40",
    "empNo": "0179",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:33",
    "terminalId": "01",
    "rawLine": "0179   O 260128 0633 01"
  },
  {
    "id": "att-41",
    "empNo": "0061",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:33",
    "terminalId": "01",
    "rawLine": "0061   I 260128 0633 01"
  },
  {
    "id": "att-42",
    "empNo": "1392",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:44",
    "terminalId": "01",
    "rawLine": "1392   I 260128 0644 01"
  },
  {
    "id": "att-43",
    "empNo": "0072",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:44",
    "terminalId": "01",
    "rawLine": "0072   O 260128 0644 01"
  },
  {
    "id": "att-44",
    "empNo": "0593",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:46",
    "terminalId": "01",
    "rawLine": "0593   I 260128 0646 01"
  },
  {
    "id": "att-45",
    "empNo": "1239",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:49",
    "terminalId": "01",
    "rawLine": "1239   O 260128 0649 01"
  },
  {
    "id": "att-46",
    "empNo": "1306",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:50",
    "terminalId": "01",
    "rawLine": "1306   I 260128 0650 01"
  },
  {
    "id": "att-47",
    "empNo": "0124",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:51",
    "terminalId": "01",
    "rawLine": "0124   I 260128 0651 01"
  },
  {
    "id": "att-48",
    "empNo": "0508",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:54",
    "terminalId": "01",
    "rawLine": "0508   I 260128 0654 01"
  },
  {
    "id": "att-49",
    "empNo": "1400",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:55",
    "terminalId": "01",
    "rawLine": "1400   I 260128 0655 01"
  },
  {
    "id": "att-50",
    "empNo": "0030",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "07:00",
    "terminalId": "01",
    "rawLine": "0030   O 260128 0700 01"
  },
  {
    "id": "att-51",
    "empNo": "1470",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "07:00",
    "terminalId": "01",
    "rawLine": "1470   O 260128 0700 01"
  },
  {
    "id": "att-52",
    "empNo": "0034",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:05",
    "terminalId": "01",
    "rawLine": "0034   I 260128 0705 01"
  },
  {
    "id": "att-53",
    "empNo": "0463",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:17",
    "terminalId": "01",
    "rawLine": "0463   I 260128 0717 01"
  },
  {
    "id": "att-54",
    "empNo": "1335",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:17",
    "terminalId": "01",
    "rawLine": "1335   I 260128 0717 01"
  },
  {
    "id": "att-55",
    "empNo": "1443",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:19",
    "terminalId": "01",
    "rawLine": "1443   I 260128 0719 01"
  },
  {
    "id": "att-56",
    "empNo": "0173",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "07:19",
    "terminalId": "01",
    "rawLine": "0173   O 260128 0719 01"
  },
  {
    "id": "att-57",
    "empNo": "0198",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:24",
    "terminalId": "01",
    "rawLine": "0198   I 260128 0724 01"
  },
  {
    "id": "att-58",
    "empNo": "1459",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:24",
    "terminalId": "01",
    "rawLine": "1459   I 260128 0724 01"
  },
  {
    "id": "att-59",
    "empNo": "1472",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:25",
    "terminalId": "01",
    "rawLine": "1472   I 260128 0725 01"
  },
  {
    "id": "att-60",
    "empNo": "0372",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "07:28",
    "terminalId": "01",
    "rawLine": "0372   O 260128 0728 01"
  },
  {
    "id": "att-61",
    "empNo": "1480",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:32",
    "terminalId": "01",
    "rawLine": "1480   I 260128 0732 01"
  },
  {
    "id": "att-62",
    "empNo": "0382",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:34",
    "terminalId": "01",
    "rawLine": "0382   I 260128 0734 01"
  },
  {
    "id": "att-63",
    "empNo": "1063",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:36",
    "terminalId": "01",
    "rawLine": "1063   I 260128 0736 01"
  },
  {
    "id": "att-64",
    "empNo": "0950",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:37",
    "terminalId": "01",
    "rawLine": "0950   I 260128 0737 01"
  },
  {
    "id": "att-65",
    "empNo": "1449",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:38",
    "terminalId": "01",
    "rawLine": "1449   I 260128 0738 01"
  },
  {
    "id": "att-66",
    "empNo": "1447",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:39",
    "terminalId": "01",
    "rawLine": "1447   I 260128 0739 01"
  },
  {
    "id": "att-67",
    "empNo": "0246",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:41",
    "terminalId": "01",
    "rawLine": "0246   I 260128 0741 01"
  },
  {
    "id": "att-68",
    "empNo": "1426",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:43",
    "terminalId": "01",
    "rawLine": "1426   I 260128 0743 01"
  },
  {
    "id": "att-69",
    "empNo": "1412",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:43",
    "terminalId": "01",
    "rawLine": "1412   I 260128 0743 01"
  },
  {
    "id": "att-70",
    "empNo": "0195",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:45",
    "terminalId": "01",
    "rawLine": "0195   I 260128 0745 01"
  },
  {
    "id": "att-71",
    "empNo": "0012",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:45",
    "terminalId": "01",
    "rawLine": "0012   I 260128 0745 01"
  },
  {
    "id": "att-72",
    "empNo": "9019",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:46",
    "terminalId": "01",
    "rawLine": "9019   I 260128 0746 01"
  },
  {
    "id": "att-73",
    "empNo": "0085",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:48",
    "terminalId": "01",
    "rawLine": "0085   I 260128 0748 01"
  },
  {
    "id": "att-74",
    "empNo": "1417",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:50",
    "terminalId": "01",
    "rawLine": "1417   I 260128 0750 01"
  },
  {
    "id": "att-75",
    "empNo": "1460",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:51",
    "terminalId": "01",
    "rawLine": "1460   I 260128 0751 01"
  },
  {
    "id": "att-76",
    "empNo": "1284",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:51",
    "terminalId": "01",
    "rawLine": "1284   I 260128 0751 01"
  },
  {
    "id": "att-77",
    "empNo": "1364",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:51",
    "terminalId": "01",
    "rawLine": "1364   I 260128 0751 01"
  },
  {
    "id": "att-78",
    "empNo": "1404",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:52",
    "terminalId": "01",
    "rawLine": "1404   I 260128 0752 01"
  },
  {
    "id": "att-79",
    "empNo": "1469",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:52",
    "terminalId": "01",
    "rawLine": "1469   I 260128 0752 01"
  },
  {
    "id": "att-80",
    "empNo": "1467",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:52",
    "terminalId": "01",
    "rawLine": "1467   I 260128 0752 01"
  },
  {
    "id": "att-81",
    "empNo": "1398",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:53",
    "terminalId": "01",
    "rawLine": "1398   I 260128 0753 01"
  },
  {
    "id": "att-82",
    "empNo": "0069",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:54",
    "terminalId": "01",
    "rawLine": "0069   I 260128 0754 01"
  },
  {
    "id": "att-83",
    "empNo": "1044",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:54",
    "terminalId": "01",
    "rawLine": "1044   I 260128 0754 01"
  },
  {
    "id": "att-85",
    "empNo": "0217",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:59",
    "terminalId": "01",
    "rawLine": "0217   I 260128 0759 01"
  },
  {
    "id": "att-86",
    "empNo": "0008",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "08:01",
    "terminalId": "01",
    "rawLine": "0008   I 260128 0801 01"
  },
  {
    "id": "att-87",
    "empNo": "0017",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "08:03",
    "terminalId": "01",
    "rawLine": "0017   I 260128 0803 01"
  },
  {
    "id": "att-88",
    "empNo": "9999",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "08:07",
    "terminalId": "01",
    "rawLine": "9999   I 260128 0807 01"
  },
  {
    "id": "att-89",
    "empNo": "0057",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "08:09",
    "terminalId": "01",
    "rawLine": "0057   I 260128 0809 01"
  },
  {
    "id": "att-90",
    "empNo": "0087",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "08:42",
    "terminalId": "01",
    "rawLine": "0087   I 260128 0842 01"
  },
  {
    "id": "att-91",
    "empNo": "0184",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "10:37",
    "terminalId": "01",
    "rawLine": "0184   I 260128 1037 01"
  },
  {
    "id": "att-92",
    "empNo": "0888",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "10:50",
    "terminalId": "01",
    "rawLine": "0888   I 260128 1050 01"
  },
  {
    "id": "att-93",
    "empNo": "0380",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "11:38",
    "terminalId": "01",
    "rawLine": "0380   I 260128 1138 01"
  },
  {
    "id": "att-94",
    "empNo": "1260",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "11:39",
    "terminalId": "01",
    "rawLine": "1260   I 260128 1139 01"
  },
  {
    "id": "att-95",
    "empNo": "0272",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "11:45",
    "terminalId": "01",
    "rawLine": "0272   I 260128 1145 01"
  },
  {
    "id": "att-96",
    "empNo": "0334",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "11:52",
    "terminalId": "01",
    "rawLine": "0334   I 260128 1152 01"
  },
  {
    "id": "att-97",
    "empNo": "0503",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "12:04",
    "terminalId": "01",
    "rawLine": "0503   I 260128 1204 01"
  },
  {
    "id": "att-98",
    "empNo": "0469",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "12:18",
    "terminalId": "01",
    "rawLine": "0469   I 260128 1218 01"
  },
  {
    "id": "att-99",
    "empNo": "1409",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "12:37",
    "terminalId": "01",
    "rawLine": "1409   I 260128 1237 01"
  },
  {
    "id": "att-100",
    "empNo": "0282",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "12:44",
    "terminalId": "01",
    "rawLine": "0282   I 260128 1244 01"
  },
  {
    "id": "att-101",
    "empNo": "0261",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "12:45",
    "terminalId": "01",
    "rawLine": "0261   I 260128 1245 01"
  },
  {
    "id": "att-102",
    "empNo": "1394",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "15:31",
    "terminalId": "01",
    "rawLine": "1394   O 260128 1531 01"
  },
  {
    "id": "att-103",
    "empNo": "1403",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "15:31",
    "terminalId": "01",
    "rawLine": "1403   O 260128 1531 01"
  },
  {
    "id": "att-104",
    "empNo": "0094",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "15:32",
    "terminalId": "01",
    "rawLine": "0094   O 260128 1532 01"
  },
  {
    "id": "att-105",
    "empNo": "0149",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "15:36",
    "terminalId": "01",
    "rawLine": "0149   O 260128 1536 01"
  },
  {
    "id": "att-106",
    "empNo": "0077",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "15:40",
    "terminalId": "01",
    "rawLine": "0077   O 260128 1540 01"
  },
  {
    "id": "att-107",
    "empNo": "0524",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "15:44",
    "terminalId": "01",
    "rawLine": "0524   O 260128 1544 01"
  },
  {
    "id": "att-108",
    "empNo": "0073",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "15:44",
    "terminalId": "01",
    "rawLine": "0073   O 260128 1544 01"
  },
  {
    "id": "att-109",
    "empNo": "1442",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:10",
    "terminalId": "01",
    "rawLine": "1442   O 260128 1610 01"
  },
  {
    "id": "att-110",
    "empNo": "1234",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:13",
    "terminalId": "01",
    "rawLine": "1234   O 260128 1613 01"
  },
  {
    "id": "att-111",
    "empNo": "0896",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:26",
    "terminalId": "01",
    "rawLine": "0896   O 260128 1626 01"
  },
  {
    "id": "att-112",
    "empNo": "1081",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:43",
    "terminalId": "01",
    "rawLine": "1081   O 260128 1643 01"
  },
  {
    "id": "att-113",
    "empNo": "0124",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:49",
    "terminalId": "01",
    "rawLine": "0124   O 260128 1649 01"
  },
  {
    "id": "att-114",
    "empNo": "0420",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:59",
    "terminalId": "01",
    "rawLine": "0420   O 260128 1659 01"
  },
  {
    "id": "att-115",
    "empNo": "0081",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:01",
    "terminalId": "01",
    "rawLine": "0081   O 260128 1701 01"
  },
  {
    "id": "att-116",
    "empNo": "1398",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:01",
    "terminalId": "01",
    "rawLine": "1398   O 260128 1701 01"
  },
  {
    "id": "att-118",
    "empNo": "0195",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:02",
    "terminalId": "01",
    "rawLine": "0195   O 260128 1702 01"
  },
  {
    "id": "att-119",
    "empNo": "0250",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:04",
    "terminalId": "01",
    "rawLine": "0250   O 260128 1704 01"
  },
  {
    "id": "att-120",
    "empNo": "0058",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:11",
    "terminalId": "01",
    "rawLine": "0058   O 260128 1711 01"
  },
  {
    "id": "att-121",
    "empNo": "0315",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:13",
    "terminalId": "01",
    "rawLine": "0315   O 260128 1713 01"
  },
  {
    "id": "att-122",
    "empNo": "1459",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "17:14",
    "terminalId": "01",
    "rawLine": "1459   I 260128 1714 01"
  },
  {
    "id": "att-123",
    "empNo": "1467",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:14",
    "terminalId": "01",
    "rawLine": "1467   O 260128 1714 01"
  },
  {
    "id": "att-124",
    "empNo": "1284",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:14",
    "terminalId": "01",
    "rawLine": "1284   O 260128 1714 01"
  },
  {
    "id": "att-125",
    "empNo": "0449",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:18",
    "terminalId": "01",
    "rawLine": "0449   O 260128 1718 01"
  },
  {
    "id": "att-126",
    "empNo": "0246",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:19",
    "terminalId": "01",
    "rawLine": "0246   O 260128 1719 01"
  },
  {
    "id": "att-127",
    "empNo": "1447",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:24",
    "terminalId": "01",
    "rawLine": "1447   O 260128 1724 01"
  },
  {
    "id": "att-128",
    "empNo": "0069",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:27",
    "terminalId": "01",
    "rawLine": "0069   O 260128 1727 01"
  },
  {
    "id": "att-129",
    "empNo": "1480",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:30",
    "terminalId": "01",
    "rawLine": "1480   O 260128 1730 01"
  },
  {
    "id": "att-130",
    "empNo": "1460",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:30",
    "terminalId": "01",
    "rawLine": "1460   O 260128 1730 01"
  },
  {
    "id": "att-131",
    "empNo": "1477",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:30",
    "terminalId": "01",
    "rawLine": "1477   O 260128 1730 01"
  },
  {
    "id": "att-132",
    "empNo": "1412",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:30",
    "terminalId": "01",
    "rawLine": "1412   O 260128 1730 01"
  },
  {
    "id": "att-133",
    "empNo": "0085",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:31",
    "terminalId": "01",
    "rawLine": "0085   O 260128 1731 01"
  },
  {
    "id": "att-134",
    "empNo": "1335",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:31",
    "terminalId": "01",
    "rawLine": "1335   O 260128 1731 01"
  },
  {
    "id": "att-135",
    "empNo": "1469",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:31",
    "terminalId": "01",
    "rawLine": "1469   O 260128 1731 01"
  },
  {
    "id": "att-136",
    "empNo": "1063",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:32",
    "terminalId": "01",
    "rawLine": "1063   O 260128 1732 01"
  },
  {
    "id": "att-137",
    "empNo": "1449",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:34",
    "terminalId": "01",
    "rawLine": "1449   O 260128 1734 01"
  },
  {
    "id": "att-138",
    "empNo": "0034",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:34",
    "terminalId": "01",
    "rawLine": "0034   O 260128 1734 01"
  },
  {
    "id": "att-139",
    "empNo": "0411",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:35",
    "terminalId": "01",
    "rawLine": "0411   O 260128 1735 01"
  },
  {
    "id": "att-140",
    "empNo": "1443",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:35",
    "terminalId": "01",
    "rawLine": "1443   O 260128 1735 01"
  },
  {
    "id": "att-141",
    "empNo": "0217",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:36",
    "terminalId": "01",
    "rawLine": "0217   O 260128 1736 01"
  },
  {
    "id": "att-142",
    "empNo": "9019",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:37",
    "terminalId": "01",
    "rawLine": "9019   O 260128 1737 01"
  },
  {
    "id": "att-143",
    "empNo": "0251",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:43",
    "terminalId": "01",
    "rawLine": "0251   O 260128 1743 01"
  },
  {
    "id": "att-144",
    "empNo": "0542",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:45",
    "terminalId": "01",
    "rawLine": "0542   O 260128 1745 01"
  },
  {
    "id": "att-145",
    "empNo": "1044",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:46",
    "terminalId": "01",
    "rawLine": "1044   O 260128 1746 01"
  },
  {
    "id": "att-146",
    "empNo": "0017",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:51",
    "terminalId": "01",
    "rawLine": "0017   O 260128 1751 01"
  },
  {
    "id": "att-147",
    "empNo": "0087",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "17:57",
    "terminalId": "01",
    "rawLine": "0087   I 260128 1757 01"
  },
  {
    "id": "att-148",
    "empNo": "0593",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:57",
    "terminalId": "01",
    "rawLine": "0593   O 260128 1757 01"
  },
  {
    "id": "att-149",
    "empNo": "0950",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:17",
    "terminalId": "01",
    "rawLine": "0950   O 260128 1817 01"
  },
  {
    "id": "att-150",
    "empNo": "0174",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:21",
    "terminalId": "01",
    "rawLine": "0174   O 260128 1821 01"
  },
  {
    "id": "att-151",
    "empNo": "0057",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:24",
    "terminalId": "01",
    "rawLine": "0057   O 260128 1824 01"
  },
  {
    "id": "att-152",
    "empNo": "0463",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:24",
    "terminalId": "01",
    "rawLine": "0463   O 260128 1824 01"
  },
  {
    "id": "att-153",
    "empNo": "1364",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:24",
    "terminalId": "01",
    "rawLine": "1364   O 260128 1824 01"
  },
  {
    "id": "att-154",
    "empNo": "0499",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "18:27",
    "terminalId": "01",
    "rawLine": "0499   I 260128 1827 01"
  },
  {
    "id": "att-155",
    "empNo": "0015",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:31",
    "terminalId": "01",
    "rawLine": "0015   O 260128 1831 01"
  },
  {
    "id": "att-156",
    "empNo": "0252",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "18:50",
    "terminalId": "01",
    "rawLine": "0252   I 260128 1850 01"
  },
  {
    "id": "att-157",
    "empNo": "0382",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:53",
    "terminalId": "01",
    "rawLine": "0382   O 260128 1853 01"
  },
  {
    "id": "att-158",
    "empNo": "9999",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "19:08",
    "terminalId": "01",
    "rawLine": "9999   O 260128 1908 01"
  },
  {
    "id": "att-159",
    "empNo": "1472",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "19:08",
    "terminalId": "01",
    "rawLine": "1472   O 260128 1908 01"
  },
  {
    "id": "att-160",
    "empNo": "1417",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "19:11",
    "terminalId": "01",
    "rawLine": "1417   O 260128 1911 01"
  },
  {
    "id": "att-161",
    "empNo": "1422",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:17",
    "terminalId": "01",
    "rawLine": "1422   I 260128 1917 01"
  },
  {
    "id": "att-162",
    "empNo": "0372",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:24",
    "terminalId": "01",
    "rawLine": "0372   I 260128 1924 01"
  },
  {
    "id": "att-163",
    "empNo": "1481",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:27",
    "terminalId": "01",
    "rawLine": "1481   I 260128 1927 01"
  },
  {
    "id": "att-164",
    "empNo": "1415",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:32",
    "terminalId": "01",
    "rawLine": "1415   I 260128 1932 01"
  },
  {
    "id": "att-165",
    "empNo": "0138",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:39",
    "terminalId": "01",
    "rawLine": "0138   I 260128 1939 01"
  },
  {
    "id": "att-166",
    "empNo": "1330",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:41",
    "terminalId": "01",
    "rawLine": "1330   I 260128 1941 01"
  },
  {
    "id": "att-167",
    "empNo": "0501",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:42",
    "terminalId": "01",
    "rawLine": "0501   I 260128 1942 01"
  },
  {
    "id": "att-168",
    "empNo": "1239",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:43",
    "terminalId": "01",
    "rawLine": "1239   I 260128 1943 01"
  },
  {
    "id": "att-169",
    "empNo": "0072",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:44",
    "terminalId": "01",
    "rawLine": "0072   I 260128 1944 01"
  },
  {
    "id": "att-170",
    "empNo": "1482",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:46",
    "terminalId": "01",
    "rawLine": "1482   I 260128 1946 01"
  },
  {
    "id": "att-171",
    "empNo": "0183",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:52",
    "terminalId": "01",
    "rawLine": "0183   I 260128 1952 01"
  },
  {
    "id": "att-172",
    "empNo": "9014",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:01",
    "terminalId": "01",
    "rawLine": "9014   I 260128 2001 01"
  },
  {
    "id": "att-173",
    "empNo": "1419",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:06",
    "terminalId": "01",
    "rawLine": "1419   I 260128 2006 01"
  },
  {
    "id": "att-174",
    "empNo": "1131",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:07",
    "terminalId": "01",
    "rawLine": "1131   I 260128 2007 01"
  },
  {
    "id": "att-175",
    "empNo": "0780",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:08",
    "terminalId": "01",
    "rawLine": "0780   I 260128 2008 01"
  },
  {
    "id": "att-176",
    "empNo": "0590",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:09",
    "terminalId": "01",
    "rawLine": "0590   I 260128 2009 01"
  },
  {
    "id": "att-177",
    "empNo": "0393",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:10",
    "terminalId": "01",
    "rawLine": "0393   I 260128 2010 01"
  },
  {
    "id": "att-178",
    "empNo": "1479",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:11",
    "terminalId": "01",
    "rawLine": "1479   I 260128 2011 01"
  },
  {
    "id": "att-179",
    "empNo": "1416",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:14",
    "terminalId": "01",
    "rawLine": "1416   I 260128 2014 01"
  },
  {
    "id": "att-180",
    "empNo": "0403",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:15",
    "terminalId": "01",
    "rawLine": "0403   I 260128 2015 01"
  },
  {
    "id": "att-181",
    "empNo": "1057",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:16",
    "terminalId": "01",
    "rawLine": "1057   I 260128 2016 01"
  },
  {
    "id": "att-182",
    "empNo": "1223",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:16",
    "terminalId": "01",
    "rawLine": "1223   I 260128 2016 01"
  },
  {
    "id": "att-183",
    "empNo": "0253",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:16",
    "terminalId": "01",
    "rawLine": "0253   I 260128 2016 01"
  },
  {
    "id": "att-184",
    "empNo": "0887",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:16",
    "terminalId": "01",
    "rawLine": "0887   I 260128 2016 01"
  },
  {
    "id": "att-185",
    "empNo": "0875",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:17",
    "terminalId": "01",
    "rawLine": "0875   I 260128 2017 01"
  },
  {
    "id": "att-186",
    "empNo": "1383",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:20",
    "terminalId": "01",
    "rawLine": "1383   I 260128 2020 01"
  },
  {
    "id": "att-187",
    "empNo": "0886",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:22",
    "terminalId": "01",
    "rawLine": "0886   I 260128 2022 01"
  },
  {
    "id": "att-188",
    "empNo": "1382",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:22",
    "terminalId": "01",
    "rawLine": "1382   I 260128 2022 01"
  },
  {
    "id": "att-189",
    "empNo": "1438",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:22",
    "terminalId": "01",
    "rawLine": "1438   I 260128 2022 01"
  },
  {
    "id": "att-190",
    "empNo": "1470",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:24",
    "terminalId": "01",
    "rawLine": "1470   I 260128 2024 01"
  },
  {
    "id": "att-191",
    "empNo": "0061",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "20:25",
    "terminalId": "01",
    "rawLine": "0061   O 260128 2025 01"
  },
  {
    "id": "att-192",
    "empNo": "0888",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "20:30",
    "terminalId": "01",
    "rawLine": "0888   O 260128 2030 01"
  },
  {
    "id": "att-193",
    "empNo": "0873",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:34",
    "terminalId": "01",
    "rawLine": "0873   I 260128 2034 01"
  },
  {
    "id": "att-194",
    "empNo": "0173",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:42",
    "terminalId": "01",
    "rawLine": "0173   I 260128 2042 01"
  },
  {
    "id": "att-195",
    "empNo": "0179",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:55",
    "terminalId": "01",
    "rawLine": "0179   I 260128 2055 01"
  },
  {
    "id": "att-196",
    "empNo": "0768",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "21:24",
    "terminalId": "01",
    "rawLine": "0768   I 260128 2124 01"
  },
  {
    "id": "att-197",
    "empNo": "0390",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "21:29",
    "terminalId": "01",
    "rawLine": "0390   I 260128 2129 01"
  },
  {
    "id": "att-198",
    "empNo": "0469",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "22:30",
    "terminalId": "01",
    "rawLine": "0469   O 260128 2230 01"
  },
  {
    "id": "att-199",
    "empNo": "1409",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "22:30",
    "terminalId": "01",
    "rawLine": "1409   O 260128 2230 01"
  },
  {
    "id": "att-200",
    "empNo": "0503",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "22:30",
    "terminalId": "01",
    "rawLine": "0503   O 260128 2230 01"
  },
  {
    "id": "att-201",
    "empNo": "0261",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "22:33",
    "terminalId": "01",
    "rawLine": "0261   O 260128 2233 01"
  },
  {
    "id": "att-202",
    "empNo": "0334",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "22:35",
    "terminalId": "01",
    "rawLine": "0334   O 260128 2235 01"
  },
  {
    "id": "att-203",
    "empNo": "1260",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "22:41",
    "terminalId": "01",
    "rawLine": "1260   O 260128 2241 01"
  },
  {
    "id": "att-204",
    "empNo": "0212",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:14",
    "terminalId": "02",
    "rawLine": "0212   I 260128 0514 02"
  },
  {
    "id": "att-205",
    "empNo": "0930",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:27",
    "terminalId": "02",
    "rawLine": "0930   I 260128 0527 02"
  },
  {
    "id": "att-206",
    "empNo": "0032",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:38",
    "terminalId": "02",
    "rawLine": "0032   I 260128 0538 02"
  },
  {
    "id": "att-207",
    "empNo": "1340",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:44",
    "terminalId": "02",
    "rawLine": "1340   I 260128 0544 02"
  },
  {
    "id": "att-208",
    "empNo": "0440",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:48",
    "terminalId": "02",
    "rawLine": "0440   I 260128 0548 02"
  },
  {
    "id": "att-209",
    "empNo": "0574",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:54",
    "terminalId": "02",
    "rawLine": "0574   I 260128 0554 02"
  },
  {
    "id": "att-210",
    "empNo": "0625",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:55",
    "terminalId": "02",
    "rawLine": "0625   I 260128 0555 02"
  },
  {
    "id": "att-211",
    "empNo": "0081",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:55",
    "terminalId": "02",
    "rawLine": "0081   I 260128 0555 02"
  },
  {
    "id": "att-212",
    "empNo": "0411",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:55",
    "terminalId": "02",
    "rawLine": "0411   I 260128 0555 02"
  },
  {
    "id": "att-213",
    "empNo": "0040",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "05:58",
    "terminalId": "02",
    "rawLine": "0040   I 260128 0558 02"
  },
  {
    "id": "att-214",
    "empNo": "0873",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "02",
    "rawLine": "0873   O 260128 0600 02"
  },
  {
    "id": "att-215",
    "empNo": "0066",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "02",
    "rawLine": "0066   O 260128 0600 02"
  },
  {
    "id": "att-216",
    "empNo": "0183",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "02",
    "rawLine": "0183   O 260128 0600 02"
  },
  {
    "id": "att-217",
    "empNo": "0065",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "02",
    "rawLine": "0065   O 260128 0600 02"
  },
  {
    "id": "att-218",
    "empNo": "1423",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "02",
    "rawLine": "1423   O 260128 0600 02"
  },
  {
    "id": "att-219",
    "empNo": "0138",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "02",
    "rawLine": "0138   O 260128 0600 02"
  },
  {
    "id": "att-220",
    "empNo": "1331",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:00",
    "terminalId": "02",
    "rawLine": "1331   O 260128 0600 02"
  },
  {
    "id": "att-221",
    "empNo": "1452",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:01",
    "terminalId": "02",
    "rawLine": "1452   O 260128 0601 02"
  },
  {
    "id": "att-222",
    "empNo": "0067",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:01",
    "terminalId": "02",
    "rawLine": "0067   O 260128 0601 02"
  },
  {
    "id": "att-223",
    "empNo": "0203",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:05",
    "terminalId": "02",
    "rawLine": "0203   O 260128 0605 02"
  },
  {
    "id": "att-224",
    "empNo": "1381",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:06",
    "terminalId": "02",
    "rawLine": "1381   O 260128 0606 02"
  },
  {
    "id": "att-225",
    "empNo": "0485",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:06",
    "terminalId": "02",
    "rawLine": "0485   O 260128 0606 02"
  },
  {
    "id": "att-226",
    "empNo": "0139",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:07",
    "terminalId": "02",
    "rawLine": "0139   O 260128 0607 02"
  },
  {
    "id": "att-227",
    "empNo": "0164",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:23",
    "terminalId": "02",
    "rawLine": "0164   I 260128 0623 02"
  },
  {
    "id": "att-228",
    "empNo": "0412",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:30",
    "terminalId": "02",
    "rawLine": "0412   O 260128 0630 02"
  },
  {
    "id": "att-229",
    "empNo": "1388",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "06:30",
    "terminalId": "02",
    "rawLine": "1388   O 260128 0630 02"
  },
  {
    "id": "att-230",
    "empNo": "0071",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:31",
    "terminalId": "02",
    "rawLine": "0071   I 260128 0631 02"
  },
  {
    "id": "att-231",
    "empNo": "0425",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:38",
    "terminalId": "02",
    "rawLine": "0425   I 260128 0638 02"
  },
  {
    "id": "att-232",
    "empNo": "0449",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:41",
    "terminalId": "02",
    "rawLine": "0449   I 260128 0641 02"
  },
  {
    "id": "att-233",
    "empNo": "0206",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:45",
    "terminalId": "02",
    "rawLine": "0206   I 260128 0645 02"
  },
  {
    "id": "att-234",
    "empNo": "0213",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:47",
    "terminalId": "02",
    "rawLine": "0213   I 260128 0647 02"
  },
  {
    "id": "att-235",
    "empNo": "0453",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:48",
    "terminalId": "02",
    "rawLine": "0453   I 260128 0648 02"
  },
  {
    "id": "att-236",
    "empNo": "1468",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:49",
    "terminalId": "02",
    "rawLine": "1468   I 260128 0649 02"
  },
  {
    "id": "att-237",
    "empNo": "1357",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:55",
    "terminalId": "02",
    "rawLine": "1357   I 260128 0655 02"
  },
  {
    "id": "att-238",
    "empNo": "1178",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:55",
    "terminalId": "02",
    "rawLine": "1178   I 260128 0655 02"
  },
  {
    "id": "att-239",
    "empNo": "0992",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:55",
    "terminalId": "02",
    "rawLine": "0992   I 260128 0655 02"
  },
  {
    "id": "att-240",
    "empNo": "0024",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "06:57",
    "terminalId": "02",
    "rawLine": "0024   I 260128 0657 02"
  },
  {
    "id": "att-241",
    "empNo": "0110",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "07:00",
    "terminalId": "02",
    "rawLine": "0110   O 260128 0700 02"
  },
  {
    "id": "att-242",
    "empNo": "0604",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "07:00",
    "terminalId": "02",
    "rawLine": "0604   O 260128 0700 02"
  },
  {
    "id": "att-243",
    "empNo": "0176",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:00",
    "terminalId": "02",
    "rawLine": "0176   I 260128 0700 02"
  },
  {
    "id": "att-244",
    "empNo": "0444",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:00",
    "terminalId": "02",
    "rawLine": "0444   I 260128 0700 02"
  },
  {
    "id": "att-245",
    "empNo": "1337",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "07:06",
    "terminalId": "02",
    "rawLine": "1337   O 260128 0706 02"
  },
  {
    "id": "att-246",
    "empNo": "0768",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "07:06",
    "terminalId": "02",
    "rawLine": "0768   O 260128 0706 02"
  },
  {
    "id": "att-247",
    "empNo": "0027",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "07:12",
    "terminalId": "02",
    "rawLine": "0027   O 260128 0712 02"
  },
  {
    "id": "att-248",
    "empNo": "0308",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:12",
    "terminalId": "02",
    "rawLine": "0308   I 260128 0712 02"
  },
  {
    "id": "att-249",
    "empNo": "0015",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:13",
    "terminalId": "02",
    "rawLine": "0015   I 260128 0713 02"
  },
  {
    "id": "att-250",
    "empNo": "1371",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:15",
    "terminalId": "02",
    "rawLine": "1371   I 260128 0715 02"
  },
  {
    "id": "att-251",
    "empNo": "0500",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "07:20",
    "terminalId": "02",
    "rawLine": "0500   O 260128 0720 02"
  },
  {
    "id": "att-252",
    "empNo": "0518",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:21",
    "terminalId": "02",
    "rawLine": "0518   I 260128 0721 02"
  },
  {
    "id": "att-253",
    "empNo": "0021",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:22",
    "terminalId": "02",
    "rawLine": "0021   I 260128 0722 02"
  },
  {
    "id": "att-254",
    "empNo": "0413",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:25",
    "terminalId": "02",
    "rawLine": "0413   I 260128 0725 02"
  },
  {
    "id": "att-255",
    "empNo": "0518",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:27",
    "terminalId": "02",
    "rawLine": "0518   I 260128 0727 02"
  },
  {
    "id": "att-256",
    "empNo": "0523",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:27",
    "terminalId": "02",
    "rawLine": "0523   I 260128 0727 02"
  },
  {
    "id": "att-257",
    "empNo": "0486",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:32",
    "terminalId": "02",
    "rawLine": "0486   I 260128 0732 02"
  },
  {
    "id": "att-258",
    "empNo": "1206",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:38",
    "terminalId": "02",
    "rawLine": "1206   I 260128 0738 02"
  },
  {
    "id": "att-259",
    "empNo": "1380",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:40",
    "terminalId": "02",
    "rawLine": "1380   I 260128 0740 02"
  },
  {
    "id": "att-260",
    "empNo": "0033",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:45",
    "terminalId": "02",
    "rawLine": "0033   I 260128 0745 02"
  },
  {
    "id": "att-261",
    "empNo": "0251",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:51",
    "terminalId": "02",
    "rawLine": "0251   I 260128 0751 02"
  },
  {
    "id": "att-262",
    "empNo": "0039",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:51",
    "terminalId": "02",
    "rawLine": "0039   I 260128 0751 02"
  },
  {
    "id": "att-263",
    "empNo": "0630",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:52",
    "terminalId": "02",
    "rawLine": "0630   I 260128 0752 02"
  },
  {
    "id": "att-264",
    "empNo": "1261",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:52",
    "terminalId": "02",
    "rawLine": "1261   I 260128 0752 02"
  },
  {
    "id": "att-265",
    "empNo": "1098",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:53",
    "terminalId": "02",
    "rawLine": "1098   I 260128 0753 02"
  },
  {
    "id": "att-266",
    "empNo": "0174",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:55",
    "terminalId": "02",
    "rawLine": "0174   I 260128 0755 02"
  },
  {
    "id": "att-267",
    "empNo": "0542",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "07:57",
    "terminalId": "02",
    "rawLine": "0542   I 260128 0757 02"
  },
  {
    "id": "att-268",
    "empNo": "1058",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "08:33",
    "terminalId": "02",
    "rawLine": "1058   I 260128 0833 02"
  },
  {
    "id": "att-269",
    "empNo": "0929",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "10:45",
    "terminalId": "02",
    "rawLine": "0929   I 260128 1045 02"
  },
  {
    "id": "att-270",
    "empNo": "0048",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "11:20",
    "terminalId": "02",
    "rawLine": "0048   I 260128 1120 02"
  },
  {
    "id": "att-271",
    "empNo": "0376",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "11:22",
    "terminalId": "02",
    "rawLine": "0376   I 260128 1122 02"
  },
  {
    "id": "att-272",
    "empNo": "1478",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "11:40",
    "terminalId": "02",
    "rawLine": "1478   I 260128 1140 02"
  },
  {
    "id": "att-273",
    "empNo": "0193",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "11:46",
    "terminalId": "02",
    "rawLine": "0193   I 260128 1146 02"
  },
  {
    "id": "att-274",
    "empNo": "0225",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "11:46",
    "terminalId": "02",
    "rawLine": "0225   I 260128 1146 02"
  },
  {
    "id": "att-275",
    "empNo": "0389",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "12:24",
    "terminalId": "02",
    "rawLine": "0389   I 260128 1224 02"
  },
  {
    "id": "att-276",
    "empNo": "1411",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "12:34",
    "terminalId": "02",
    "rawLine": "1411   I 260128 1234 02"
  },
  {
    "id": "att-277",
    "empNo": "1211",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "12:41",
    "terminalId": "02",
    "rawLine": "1211   I 260128 1241 02"
  },
  {
    "id": "att-278",
    "empNo": "0040",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "15:30",
    "terminalId": "02",
    "rawLine": "0040   O 260128 1530 02"
  },
  {
    "id": "att-279",
    "empNo": "1340",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "15:31",
    "terminalId": "02",
    "rawLine": "1340   O 260128 1531 02"
  },
  {
    "id": "att-280",
    "empNo": "0930",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "15:32",
    "terminalId": "02",
    "rawLine": "0930   O 260128 1532 02"
  },
  {
    "id": "att-281",
    "empNo": "0625",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "15:37",
    "terminalId": "02",
    "rawLine": "0625   O 260128 1537 02"
  },
  {
    "id": "att-282",
    "empNo": "0425",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:01",
    "terminalId": "02",
    "rawLine": "0425   O 260128 1601 02"
  },
  {
    "id": "att-283",
    "empNo": "0032",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:03",
    "terminalId": "02",
    "rawLine": "0032   O 260128 1603 02"
  },
  {
    "id": "att-284",
    "empNo": "0518",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:25",
    "terminalId": "02",
    "rawLine": "0518   O 260128 1625 02"
  },
  {
    "id": "att-285",
    "empNo": "0190",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:26",
    "terminalId": "02",
    "rawLine": "0190   O 260128 1626 02"
  },
  {
    "id": "att-286",
    "empNo": "0338",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "16:29",
    "terminalId": "02",
    "rawLine": "0338   I 260128 1629 02"
  },
  {
    "id": "att-287",
    "empNo": "0213",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:30",
    "terminalId": "02",
    "rawLine": "0213   O 260128 1630 02"
  },
  {
    "id": "att-288",
    "empNo": "1468",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:30",
    "terminalId": "02",
    "rawLine": "1468   O 260128 1630 02"
  },
  {
    "id": "att-289",
    "empNo": "0212",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:30",
    "terminalId": "02",
    "rawLine": "0212   O 260128 1630 02"
  },
  {
    "id": "att-290",
    "empNo": "1178",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:30",
    "terminalId": "02",
    "rawLine": "1178   O 260128 1630 02"
  },
  {
    "id": "att-291",
    "empNo": "0206",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:30",
    "terminalId": "02",
    "rawLine": "0206   O 260128 1630 02"
  },
  {
    "id": "att-292",
    "empNo": "0453",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:31",
    "terminalId": "02",
    "rawLine": "0453   O 260128 1631 02"
  },
  {
    "id": "att-293",
    "empNo": "0440",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:31",
    "terminalId": "02",
    "rawLine": "0440   O 260128 1631 02"
  },
  {
    "id": "att-294",
    "empNo": "1306",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:31",
    "terminalId": "02",
    "rawLine": "1306   O 260128 1631 02"
  },
  {
    "id": "att-295",
    "empNo": "0024",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:32",
    "terminalId": "02",
    "rawLine": "0024   O 260128 1632 02"
  },
  {
    "id": "att-296",
    "empNo": "0992",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:33",
    "terminalId": "02",
    "rawLine": "0992   O 260128 1633 02"
  },
  {
    "id": "att-297",
    "empNo": "1400",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:35",
    "terminalId": "02",
    "rawLine": "1400   O 260128 1635 02"
  },
  {
    "id": "att-298",
    "empNo": "0508",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:40",
    "terminalId": "02",
    "rawLine": "0508   O 260128 1640 02"
  },
  {
    "id": "att-299",
    "empNo": "1357",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "16:48",
    "terminalId": "02",
    "rawLine": "1357   O 260128 1648 02"
  },
  {
    "id": "att-300",
    "empNo": "0413",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:00",
    "terminalId": "02",
    "rawLine": "0413   O 260128 1700 02"
  },
  {
    "id": "att-301",
    "empNo": "0071",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "17:00",
    "terminalId": "02",
    "rawLine": "0071   I 260128 1700 02"
  },
  {
    "id": "att-302",
    "empNo": "1371",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:02",
    "terminalId": "02",
    "rawLine": "1371   O 260128 1702 02"
  },
  {
    "id": "att-303",
    "empNo": "0033",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:02",
    "terminalId": "02",
    "rawLine": "0033   O 260128 1702 02"
  },
  {
    "id": "att-304",
    "empNo": "1206",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:02",
    "terminalId": "02",
    "rawLine": "1206   O 260128 1702 02"
  },
  {
    "id": "att-305",
    "empNo": "0523",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:07",
    "terminalId": "02",
    "rawLine": "0523   O 260128 1707 02"
  },
  {
    "id": "att-306",
    "empNo": "0574",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:08",
    "terminalId": "02",
    "rawLine": "0574   O 260128 1708 02"
  },
  {
    "id": "att-307",
    "empNo": "0198",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:20",
    "terminalId": "02",
    "rawLine": "0198   O 260128 1720 02"
  },
  {
    "id": "att-308",
    "empNo": "0308",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:25",
    "terminalId": "02",
    "rawLine": "0308   O 260128 1725 02"
  },
  {
    "id": "att-309",
    "empNo": "0164",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:30",
    "terminalId": "02",
    "rawLine": "0164   O 260128 1730 02"
  },
  {
    "id": "att-310",
    "empNo": "1098",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:30",
    "terminalId": "02",
    "rawLine": "1098   O 260128 1730 02"
  },
  {
    "id": "att-311",
    "empNo": "1426",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:30",
    "terminalId": "02",
    "rawLine": "1426   O 260128 1730 02"
  },
  {
    "id": "att-312",
    "empNo": "0486",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:31",
    "terminalId": "02",
    "rawLine": "0486   O 260128 1731 02"
  },
  {
    "id": "att-313",
    "empNo": "0176",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:38",
    "terminalId": "02",
    "rawLine": "0176   O 260128 1738 02"
  },
  {
    "id": "att-314",
    "empNo": "0630",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "17:48",
    "terminalId": "02",
    "rawLine": "0630   O 260128 1748 02"
  },
  {
    "id": "att-315",
    "empNo": "0463",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:10",
    "terminalId": "02",
    "rawLine": "0463   O 260128 1810 02"
  },
  {
    "id": "att-316",
    "empNo": "1404",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:14",
    "terminalId": "02",
    "rawLine": "1404   O 260128 1814 02"
  },
  {
    "id": "att-317",
    "empNo": "1380",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:14",
    "terminalId": "02",
    "rawLine": "1380   O 260128 1814 02"
  },
  {
    "id": "att-318",
    "empNo": "0008",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:23",
    "terminalId": "02",
    "rawLine": "0008   O 260128 1823 02"
  },
  {
    "id": "att-319",
    "empNo": "0444",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:29",
    "terminalId": "02",
    "rawLine": "0444   O 260128 1829 02"
  },
  {
    "id": "att-320",
    "empNo": "0012",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:30",
    "terminalId": "02",
    "rawLine": "0012   O 260128 1830 02"
  },
  {
    "id": "att-321",
    "empNo": "0039",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "18:37",
    "terminalId": "02",
    "rawLine": "0039   I 260128 1837 02"
  },
  {
    "id": "att-322",
    "empNo": "0039",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:37",
    "terminalId": "02",
    "rawLine": "0039   O 260128 1837 02"
  },
  {
    "id": "att-323",
    "empNo": "0021",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "18:42",
    "terminalId": "02",
    "rawLine": "0021   O 260128 1842 02"
  },
  {
    "id": "att-324",
    "empNo": "0066",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:14",
    "terminalId": "02",
    "rawLine": "0066   I 260128 1914 02"
  },
  {
    "id": "att-325",
    "empNo": "0171",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:56",
    "terminalId": "02",
    "rawLine": "0171   I 260128 1956 02"
  },
  {
    "id": "att-326",
    "empNo": "0139",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "19:58",
    "terminalId": "02",
    "rawLine": "0139   I 260128 1958 02"
  },
  {
    "id": "att-327",
    "empNo": "0045",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:02",
    "terminalId": "02",
    "rawLine": "0045   I 260128 2002 02"
  },
  {
    "id": "att-328",
    "empNo": "1430",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:03",
    "terminalId": "02",
    "rawLine": "1430   I 260128 2003 02"
  },
  {
    "id": "att-329",
    "empNo": "0027",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:06",
    "terminalId": "02",
    "rawLine": "0027   I 260128 2006 02"
  },
  {
    "id": "att-330",
    "empNo": "0394",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:07",
    "terminalId": "02",
    "rawLine": "0394   I 260128 2007 02"
  },
  {
    "id": "att-331",
    "empNo": "0067",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:13",
    "terminalId": "02",
    "rawLine": "0067   I 260128 2013 02"
  },
  {
    "id": "att-332",
    "empNo": "1331",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:23",
    "terminalId": "02",
    "rawLine": "1331   I 260128 2023 02"
  },
  {
    "id": "att-333",
    "empNo": "0371",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:23",
    "terminalId": "02",
    "rawLine": "0371   I 260128 2023 02"
  },
  {
    "id": "att-334",
    "empNo": "1388",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:24",
    "terminalId": "02",
    "rawLine": "1388   I 260128 2024 02"
  },
  {
    "id": "att-335",
    "empNo": "0485",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:28",
    "terminalId": "02",
    "rawLine": "0485   I 260128 2028 02"
  },
  {
    "id": "att-336",
    "empNo": "1261",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "20:28",
    "terminalId": "02",
    "rawLine": "1261   O 260128 2028 02"
  },
  {
    "id": "att-337",
    "empNo": "1423",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:30",
    "terminalId": "02",
    "rawLine": "1423   I 260128 2030 02"
  },
  {
    "id": "att-338",
    "empNo": "0491",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:30",
    "terminalId": "02",
    "rawLine": "0491   I 260128 2030 02"
  },
  {
    "id": "att-339",
    "empNo": "1324",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:30",
    "terminalId": "02",
    "rawLine": "1324   I 260128 2030 02"
  },
  {
    "id": "att-340",
    "empNo": "0184",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "20:31",
    "terminalId": "02",
    "rawLine": "0184   O 260128 2031 02"
  },
  {
    "id": "att-341",
    "empNo": "0110",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:32",
    "terminalId": "02",
    "rawLine": "0110   I 260128 2032 02"
  },
  {
    "id": "att-342",
    "empNo": "1392",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "20:38",
    "terminalId": "02",
    "rawLine": "1392   O 260128 2038 02"
  },
  {
    "id": "att-343",
    "empNo": "1461",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:38",
    "terminalId": "02",
    "rawLine": "1461   I 260128 2038 02"
  },
  {
    "id": "att-344",
    "empNo": "1405",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "20:38",
    "terminalId": "02",
    "rawLine": "1405   I 260128 2038 02"
  },
  {
    "id": "att-345",
    "empNo": "1058",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "20:38",
    "terminalId": "02",
    "rawLine": "1058   O 260128 2038 02"
  },
  {
    "id": "att-346",
    "empNo": "0048",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "21:01",
    "terminalId": "02",
    "rawLine": "0048   O 260128 2101 02"
  },
  {
    "id": "att-347",
    "empNo": "0929",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "21:01",
    "terminalId": "02",
    "rawLine": "0929   O 260128 2101 02"
  },
  {
    "id": "att-348",
    "empNo": "0376",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "21:02",
    "terminalId": "02",
    "rawLine": "0376   O 260128 2102 02"
  },
  {
    "id": "att-349",
    "empNo": "1478",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "21:02",
    "terminalId": "02",
    "rawLine": "1478   O 260128 2102 02"
  },
  {
    "id": "att-350",
    "empNo": "1356",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "21:03",
    "terminalId": "02",
    "rawLine": "1356   I 260128 2103 02"
  },
  {
    "id": "att-351",
    "empNo": "1389",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "21:03",
    "terminalId": "02",
    "rawLine": "1389   I 260128 2103 02"
  },
  {
    "id": "att-352",
    "empNo": "0500",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "21:19",
    "terminalId": "02",
    "rawLine": "0500   I 260128 2119 02"
  },
  {
    "id": "att-353",
    "empNo": "1337",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "21:28",
    "terminalId": "02",
    "rawLine": "1337   I 260128 2128 02"
  },
  {
    "id": "att-354",
    "empNo": "1334",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "21:30",
    "terminalId": "02",
    "rawLine": "1334   I 260128 2130 02"
  },
  {
    "id": "att-355",
    "empNo": "0225",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "21:35",
    "terminalId": "02",
    "rawLine": "0225   O 260128 2135 02"
  },
  {
    "id": "att-356",
    "empNo": "0380",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "21:36",
    "terminalId": "02",
    "rawLine": "0380   O 260128 2136 02"
  },
  {
    "id": "att-357",
    "empNo": "1356",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "22:05",
    "terminalId": "02",
    "rawLine": "1356   O 260128 2205 02"
  },
  {
    "id": "att-358",
    "empNo": "1356",
    "punchType": "I",
    "punchDate": "2026-01-28",
    "punchTime": "22:05",
    "terminalId": "02",
    "rawLine": "1356   I 260128 2205 02"
  },
  {
    "id": "att-359",
    "empNo": "1211",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "22:30",
    "terminalId": "02",
    "rawLine": "1211   O 260128 2230 02"
  },
  {
    "id": "att-360",
    "empNo": "0389",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "22:30",
    "terminalId": "02",
    "rawLine": "0389   O 260128 2230 02"
  },
  {
    "id": "att-361",
    "empNo": "1411",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "22:30",
    "terminalId": "02",
    "rawLine": "1411   O 260128 2230 02"
  },
  {
    "id": "att-362",
    "empNo": "0282",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "22:30",
    "terminalId": "02",
    "rawLine": "0282   O 260128 2230 02"
  },
  {
    "id": "att-363",
    "empNo": "0272",
    "punchType": "O",
    "punchDate": "2026-01-28",
    "punchTime": "22:31",
    "terminalId": "02",
    "rawLine": "0272   O 260128 2231 02"
  }
];

export const INITIAL_OT_RECORDS: OTRecord[] = [
  {
    "id": "ot-1",
    "gid": "Z004X59B",
    "empNo": "1412",
    "department": "BES/PSY",
    "name": "Aisarawat Channongyao",
    "totalHours": 4.0,
    "reason": "601673275 BES-2 Support Subcont.repair pipe fire pump at S01",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "19:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-2",
    "gid": "Z004X59B",
    "empNo": "1412",
    "department": "BES/PSY",
    "name": "Aisarawat Channongyao",
    "totalHours": 1.0,
    "reason": "601686247 S10 FCP show COMMON TRBL ACT 03IM 14",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "16:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-3",
    "gid": "Z001RUEV",
    "empNo": "0072",
    "department": "TRW/TRD",
    "name": "Akarat Worakitchaiwat",
    "totalHours": 0.5,
    "reason": "WO601672895 DM0 MT-02 wash basin no.1 drain clogged (Retroactive overtime for 29 April 2026)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "19:10",
    "endTime": "19:40",
    "isRetroactive": true,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-4",
    "gid": "Z001RUEV",
    "empNo": "0072",
    "department": "TRW/TRD",
    "name": "Akarat Worakitchaiwat",
    "totalHours": 0.5,
    "reason": "WO601672896 DM0 WT-02 wash basin no.1 drain clogged (Retroactive overtime for 29 April 2026)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "19:40",
    "endTime": "20:10",
    "isRetroactive": true,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-5",
    "gid": "Z001RUEV",
    "empNo": "0072",
    "department": "TRW/TRD",
    "name": "Akarat Worakitchaiwat",
    "totalHours": 1.0,
    "reason": "WO601686240 DM0 MT-03 wash basin shelf no.2 loose",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "18:30",
    "endTime": "19:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-6",
    "gid": "Z001RUEV",
    "empNo": "0072",
    "department": "TRW/TRD",
    "name": "Akarat Worakitchaiwat",
    "totalHours": 1.5,
    "reason": "WO601704352 DM0 Support ADM Repair & cleaned shower",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "16:30",
    "endTime": "18:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-7",
    "gid": "Z001RUEV",
    "empNo": "0072",
    "department": "TRW/TRD",
    "name": "Akarat Worakitchaiwat",
    "totalHours": 1.0,
    "reason": "WO601704293 DM0 G MZ2 Men locker Wall Fan lond noise",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "18:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-8",
    "gid": "Z002SS5A",
    "empNo": "0248",
    "department": "STR",
    "name": "Alongkorn Keangkwasingh",
    "totalHours": 2.5,
    "reason": "Check Stock (Siemens TRW/TRL)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "16:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-9",
    "gid": "Z002SS5A",
    "empNo": "0248",
    "department": "STR",
    "name": "Alongkorn Keangkwasingh",
    "totalHours": 4.0,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-10",
    "gid": "Z002SS5A",
    "empNo": "0248",
    "department": "STR",
    "name": "Alongkorn Keangkwasingh",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Pallet store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-11",
    "gid": "Z002SS5A",
    "empNo": "0248",
    "department": "STR",
    "name": "Alongkorn Keangkwasingh",
    "totalHours": 3.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "10:00",
    "endTime": "13:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-12",
    "gid": "Z002SS5A",
    "empNo": "0248",
    "department": "STR",
    "name": "Alongkorn Keangkwasingh",
    "totalHours": 3.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "10:00",
    "endTime": "13:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-13",
    "gid": "Z00202SZ",
    "empNo": "0032",
    "department": "STR",
    "name": "Anuwat Sriarun",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Pallet store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "10:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-14",
    "gid": "Z00202SZ",
    "empNo": "0032",
    "department": "STR",
    "name": "Anuwat Sriarun",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-15",
    "gid": "Z00202SZ",
    "empNo": "0032",
    "department": "STR",
    "name": "Anuwat Sriarun",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-16",
    "gid": "Z00202SZ",
    "empNo": "0032",
    "department": "STR",
    "name": "Anuwat Sriarun",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-17",
    "gid": "Z00202SZ",
    "empNo": "0032",
    "department": "STR",
    "name": "Anuwat Sriarun",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens RST Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-18",
    "gid": "Z00430VC",
    "empNo": "0954",
    "department": "STR",
    "name": "Atiwit Chantachod",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens RST2 Tools  store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-19",
    "gid": "Z004SJ7Z",
    "empNo": "1388",
    "department": "STR",
    "name": "Chaiwat Raijaiboon",
    "totalHours": 1.5,
    "reason": "Check Stock (Siemens TRW/TRL)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "17:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-20",
    "gid": "Z004SJ7Z",
    "empNo": "1388",
    "department": "STR",
    "name": "Chaiwat Raijaiboon",
    "totalHours": 3.5,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-21",
    "gid": "Z004SJ7Z",
    "empNo": "1388",
    "department": "STR",
    "name": "Chaiwat Raijaiboon",
    "totalHours": 4.0,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-22",
    "gid": "",
    "empNo": "1388",
    "department": "STR",
    "name": "Chaiwat Raijaiboon",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-23",
    "gid": "Z004SJ7Z",
    "empNo": "1388",
    "department": "STR",
    "name": "Chaiwat Raijaiboon",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-24",
    "gid": "Z004SJ7Z",
    "empNo": "1388",
    "department": "STR",
    "name": "Chaiwat Raijaiboon",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Air cond store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-25",
    "gid": "Z003NVYY",
    "empNo": "0500",
    "department": "RST",
    "name": "Chanchai Chanthonthip",
    "totalHours": 1.5,
    "reason": "W/O: 601695546_Bogie loud noise while 50km/h. EMU04",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "20:00",
    "endTime": "21:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-26",
    "gid": "65090068",
    "empNo": "0068",
    "department": "STR",
    "name": "Den Thongprapa",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-27",
    "gid": "Z001RUEH",
    "empNo": "0068",
    "department": "STR",
    "name": "Den Thongprapa",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-28",
    "gid": "Z001RUEH",
    "empNo": "0068",
    "department": "STR",
    "name": "Den Thongprapa",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-29",
    "gid": "Z001RUEH",
    "empNo": "0068",
    "department": "STR",
    "name": "Den Thongprapa",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens RST Pallet store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-30",
    "gid": "Z001RUEH",
    "empNo": "0068",
    "department": "STR",
    "name": "Den Thongprapa",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens BES main store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-31",
    "gid": "Z001RUHZ",
    "empNo": "0155",
    "department": "STR",
    "name": "Janpheng Inthong",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens TRW/TRL)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-32",
    "gid": "Z001RUHZ",
    "empNo": "0155",
    "department": "STR",
    "name": "Janpheng Inthong",
    "totalHours": 2.0,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-33",
    "gid": "65090155",
    "empNo": "0155",
    "department": "STR",
    "name": "Janpheng Inthong",
    "totalHours": 4.0,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-34",
    "gid": "Z001RUHZ",
    "empNo": "0155",
    "department": "STR",
    "name": "Janpheng Inthong",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Air cond store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-35",
    "gid": "Z001RUHZ",
    "empNo": "0155",
    "department": "STR",
    "name": "Janpheng Inthong",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Pallet store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-36",
    "gid": "Z001RUHZ",
    "empNo": "0155",
    "department": "STR",
    "name": "Janpheng Inthong",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-37",
    "gid": "Z001RUHZ",
    "empNo": "0155",
    "department": "STR",
    "name": "Janpheng Inthong",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-38",
    "gid": "Z001RUHZ",
    "empNo": "0155",
    "department": "STR",
    "name": "Janpheng Inthong",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-39",
    "gid": "Z001RUHZ",
    "empNo": "0155",
    "department": "STR",
    "name": "Janpheng Inthong",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES main store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-40",
    "gid": "Z001RUHZ",
    "empNo": "0155",
    "department": "STR",
    "name": "Janpheng Inthong",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES main store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-41",
    "gid": "Z001RUHZ",
    "empNo": "0155",
    "department": "STR",
    "name": "Janpheng Inthong",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens RST Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-42",
    "gid": "Z004M0XJ",
    "empNo": "1360",
    "department": "BES/PSY2",
    "name": "Kamonwat Seeprae",
    "totalHours": 1.0,
    "reason": "601696020 : AK0 Floor 2 SPK Water leak",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "22:30",
    "endTime": "23:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-43",
    "gid": "Z004M0XJ",
    "empNo": "1360",
    "department": "BES/PSY2",
    "name": "Kamonwat Seeprae",
    "totalHours": 2.5,
    "reason": "601696020 : AK0 Floor 2 SPK Water leak",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "10:30",
    "endTime": "13:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-44",
    "gid": "Z004NA6S",
    "empNo": "1374",
    "department": "STR",
    "name": "Kanokpong Kongkaew",
    "totalHours": 2.0,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-45",
    "gid": "Z004NA6S",
    "empNo": "1374",
    "department": "STR",
    "name": "Kanokpong Kongkaew",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens BES main store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-46",
    "gid": "Z004NA6S",
    "empNo": "1374",
    "department": "STR",
    "name": "Kanokpong Kongkaew",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens RST Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-47",
    "gid": "Z004N5CD",
    "empNo": "1370",
    "department": "BES/PSY",
    "name": "Khanawut Kaeothongkham",
    "totalHours": 4.0,
    "reason": "Order: 601701952 DM0 WSH office adjust drain air cond.",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "19:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-48",
    "gid": "Z004N5CD",
    "empNo": "1370",
    "department": "BES/PSY",
    "name": "Khanawut Kaeothongkham",
    "totalHours": 1.5,
    "reason": "Order: 601702336. AM0 2nd Air AHU 2A-01 loud noise",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "17:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-49",
    "gid": "Z00590KU",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens TRW/TRL)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-50",
    "gid": "Z00590KU",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 2.0,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-51",
    "gid": "Z00590KU",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 4.0,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-52",
    "gid": "",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-53",
    "gid": "Z00590KU",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-54",
    "gid": "Z00590KU",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Air cond store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-55",
    "gid": "Z00590KU",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Pallet store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-56",
    "gid": "Z00590KU",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-57",
    "gid": "Z00590KU",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-58",
    "gid": "Z00590KU",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 4.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-59",
    "gid": "Z00590KU",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens RST Pallet store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-60",
    "gid": "Z00590KU",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES main store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-61",
    "gid": "Z00590KU",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES main store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-62",
    "gid": "Z00590KU",
    "empNo": "0000",
    "department": "STR",
    "name": "Khomsan Jantachot",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens RST Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-63",
    "gid": "Z0052SPW",
    "empNo": "1452",
    "department": "BES/PSY",
    "name": "Krissadakorn Pawarana",
    "totalHours": 3.0,
    "reason": "601673275 BES-2 Support Subcont.repair pipe fire pump at S01",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "18:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-64",
    "gid": "Z0052SPW",
    "empNo": "1452",
    "department": "BES/PSY",
    "name": "Krissadakorn Pawarana",
    "totalHours": 4.0,
    "reason": "601673275 BES-2 Support Subcont.repair pipe fire pump at S01",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "19:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-65",
    "gid": "Z003V9HU",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens TRW/TRL)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-66",
    "gid": "Z003V9HU",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 2.0,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-67",
    "gid": "Z003V9HU",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 4.0,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-68",
    "gid": "65090625",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-69",
    "gid": "Z003V9HU",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-70",
    "gid": "Z003V9HU",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Air cond store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-71",
    "gid": "Z003V9HU",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Pallet store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-72",
    "gid": "Z003V9HU",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-73",
    "gid": "Z003V9HU",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-74",
    "gid": "Z003V9HU",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 4.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-75",
    "gid": "Z003V9HU",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens RST Pallet store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-76",
    "gid": "Z003V9HU",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES main store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-77",
    "gid": "Z003V9HU",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES main store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-78",
    "gid": "Z003V9HU",
    "empNo": "0625",
    "department": "STR",
    "name": "Montree Kongsri",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens RST Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-79",
    "gid": "Z00430UZ",
    "empNo": "0950",
    "department": "QST",
    "name": "Napassawan Ngamsomsong",
    "totalHours": 3.0,
    "reason": "support for random Narcotics and Intoxicant Testing for Drivers",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "20:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-80",
    "gid": "65091246",
    "empNo": "1246",
    "department": "BES/PSY2",
    "name": "Narongsup Innun",
    "totalHours": 2.5,
    "reason": "601696020 : AK0 Floor 2 SPK Water leak",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "10:30",
    "endTime": "13:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-81",
    "gid": "Z0049YAH",
    "empNo": "1246",
    "department": "BES/PSY2",
    "name": "Narongsup Innun",
    "totalHours": 1.0,
    "reason": "601696020 : AK0 Floor 2 SPK Water leak",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "22:30",
    "endTime": "23:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-82",
    "gid": "Z004H14P",
    "empNo": "1451",
    "department": "STR",
    "name": "Nattaphong Semkaew",
    "totalHours": 3.0,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "10:00",
    "endTime": "13:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-83",
    "gid": "Z004H14P",
    "empNo": "1451",
    "department": "STR",
    "name": "Nattaphong Semkaew",
    "totalHours": 3.0,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "10:00",
    "endTime": "13:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-84",
    "gid": "Z004H14P",
    "empNo": "1451",
    "department": "STR",
    "name": "Nattaphong Semkaew",
    "totalHours": 4.0,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-85",
    "gid": "Z004H14P",
    "empNo": "1451",
    "department": "STR",
    "name": "Nattaphong Semkaew",
    "totalHours": 1.5,
    "reason": "Check Stock (Siemens Air cond store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "17:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-86",
    "gid": "Z004H14P",
    "empNo": "1451",
    "department": "STR",
    "name": "Nattaphong Semkaew",
    "totalHours": 1.5,
    "reason": "Check Stock (Siemens BES Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "17:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-87",
    "gid": "Z004H14P",
    "empNo": "1451",
    "department": "STR",
    "name": "Nattaphong Semkaew",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-88",
    "gid": "Z004H14P",
    "empNo": "1451",
    "department": "STR",
    "name": "Nattaphong Semkaew",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-89",
    "gid": "Z004H14P",
    "empNo": "1451",
    "department": "STR",
    "name": "Nattaphong Semkaew",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-90",
    "gid": "Z004H14P",
    "empNo": "1451",
    "department": "STR",
    "name": "Nattaphong Semkaew",
    "totalHours": 4.0,
    "reason": "Check Stock (Siemens BES main store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-91",
    "gid": "Z004H14P",
    "empNo": "1451",
    "department": "STR",
    "name": "Nattaphong Semkaew",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES main store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-92",
    "gid": "Z004H14P",
    "empNo": "1451",
    "department": "STR",
    "name": "Nattaphong Semkaew",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens RST Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-93",
    "gid": "Z0036MMY",
    "empNo": "0308",
    "department": "STR",
    "name": "Nittaya Songserm",
    "totalHours": 2.0,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-94",
    "gid": "Z0036MMY",
    "empNo": "0308",
    "department": "STR",
    "name": "Nittaya Songserm",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-95",
    "gid": "Z0036MMY",
    "empNo": "0308",
    "department": "STR",
    "name": "Nittaya Songserm",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-96",
    "gid": "Z003DMBU",
    "empNo": "0406",
    "department": "MCC",
    "name": "Nontapun Morlek",
    "totalHours": 0.5,
    "reason": "WO601681151 DM0 WSH MT-02(room-8) sprayer defect",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "20:30",
    "endTime": "21:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-97",
    "gid": "Z003DMBU",
    "empNo": "0406",
    "department": "MCC",
    "name": "Nontapun Morlek",
    "totalHours": 0.5,
    "reason": "WO601692785 DM1 MT(T-03a) room-3 sprayer water leak",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "20:30",
    "endTime": "21:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-98",
    "gid": "Z003DMBU",
    "empNo": "0406",
    "department": "MCC",
    "name": "Nontapun Morlek",
    "totalHours": 0.5,
    "reason": "WO601695419 DM1 WT(T-01a) room-1 sprayer water leak",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "20:30",
    "endTime": "21:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-99",
    "gid": "Z003DMBU",
    "empNo": "0406",
    "department": "MCC",
    "name": "Nontapun Morlek",
    "totalHours": 0.5,
    "reason": "WO601698224 DM0 MZ2 MT-03 (room-4) sprayer broken",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "12:30",
    "endTime": "13:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-100",
    "gid": "Z003DMBU",
    "empNo": "0406",
    "department": "MCC",
    "name": "Nontapun Morlek",
    "totalHours": 2.5,
    "reason": "WO601704352 DM0 Support ADM Repair & cleaned shower",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "18:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-101",
    "gid": "Z003DMBU",
    "empNo": "0406",
    "department": "MCC",
    "name": "Nontapun Morlek",
    "totalHours": 1.0,
    "reason": "WO601704293 DM0 G MZ2 Men locker Wall Fan lond noise",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "18:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-102",
    "gid": "Z003DMBU",
    "empNo": "0406",
    "department": "MCC",
    "name": "Nontapun Morlek",
    "totalHours": 1.5,
    "reason": "WO601704352 DM0 Support ADM Repair & cleaned shower",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "17:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-103",
    "gid": "Z004U1CD",
    "empNo": "1398",
    "department": "GM",
    "name": "Nopparat Chaiau",
    "totalHours": 3.0,
    "reason": "support for random Narcotics and Intoxicant Testing for Drivers",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "20:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-104",
    "gid": "Z002RH6V",
    "empNo": "0523",
    "department": "STR",
    "name": "Poommet Tantisuchote",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens TRW/TRL)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-105",
    "gid": "Z002RH6V",
    "empNo": "0523",
    "department": "STR",
    "name": "Poommet Tantisuchote",
    "totalHours": 2.0,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-106",
    "gid": "65090523",
    "empNo": "0523",
    "department": "STR",
    "name": "Poommet Tantisuchote",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-107",
    "gid": "Z002RH6V",
    "empNo": "0523",
    "department": "STR",
    "name": "Poommet Tantisuchote",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-108",
    "gid": "Z002RH6V",
    "empNo": "0523",
    "department": "STR",
    "name": "Poommet Tantisuchote",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-109",
    "gid": "Z003N2WS",
    "empNo": "0469",
    "department": "MCC",
    "name": "Poramat Kingthongsuk",
    "totalHours": 0.5,
    "reason": "WO601681151 DM0 WSH MT-02(room-8) sprayer defect",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "20:30",
    "endTime": "21:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-110",
    "gid": "Z003N2WS",
    "empNo": "0469",
    "department": "MCC",
    "name": "Poramat Kingthongsuk",
    "totalHours": 0.5,
    "reason": "WO601698224 DM0 MZ2 MT-03(room-4) sprayer broken",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "12:30",
    "endTime": "13:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-111",
    "gid": "Z00500WP",
    "empNo": "1431",
    "department": "DWE",
    "name": "Pornsak Keartchaiyaphum",
    "totalHours": 1.0,
    "reason": "DMO VMT445bCoolant water leak WO601682677",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:30",
    "endTime": "18:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-112",
    "gid": "Z0025JFY",
    "empNo": "0225",
    "department": "RST",
    "name": "Ratthaban Sumranphoom",
    "totalHours": 2.0,
    "reason": "W/O: 601695546_Bogie loud noise while 50km/h. EMU04",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "19:30",
    "endTime": "21:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-113",
    "gid": "Z003UEFV",
    "empNo": "0590",
    "department": "TRW/TRD",
    "name": "Richard Steven Thomas",
    "totalHours": 3.0,
    "reason": "Standby at Cen station after replacement Clamp locking device (Right hand side) of turnout T5144  (Refer workorder: 601674381)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "06:00",
    "endTime": "09:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-114",
    "gid": "Z004W5HV",
    "empNo": "1405",
    "department": "STR",
    "name": "Siraprapa Jantarapakdee",
    "totalHours": 3.0,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "10:00",
    "endTime": "13:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-115",
    "gid": "Z004W5HV",
    "empNo": "1405",
    "department": "STR",
    "name": "Siraprapa Jantarapakdee",
    "totalHours": 3.0,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "10:00",
    "endTime": "13:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-116",
    "gid": "Z004W5HV",
    "empNo": "1405",
    "department": "STR",
    "name": "Siraprapa Jantarapakdee",
    "totalHours": 3.0,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "10:00",
    "endTime": "13:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-117",
    "gid": "Z004W5HV",
    "empNo": "1405",
    "department": "STR",
    "name": "Siraprapa Jantarapakdee",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Air cond store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-118",
    "gid": "Z004W5HV",
    "empNo": "1405",
    "department": "STR",
    "name": "Siraprapa Jantarapakdee",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens BES Pallet store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-119",
    "gid": "Z004W5HV",
    "empNo": "1405",
    "department": "STR",
    "name": "Siraprapa Jantarapakdee",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens RST Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-120",
    "gid": "Z003P43R",
    "empNo": "0503",
    "department": "BES/PSY",
    "name": "Somjet Maneechay",
    "totalHours": 3.5,
    "reason": "601688208 AM0.Refill Fuel DFP.",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-121",
    "gid": "Z004RBVW",
    "empNo": "1384",
    "department": "BES/PSY",
    "name": "Somphong Wongsricha",
    "totalHours": 3.5,
    "reason": "601688208 AM0. Refill Fuel DFP.",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-122",
    "gid": "Z001RUJS",
    "empNo": "1211",
    "department": "STR",
    "name": "Somporn Suksawan",
    "totalHours": 1.5,
    "reason": "Check Stock (Siemens TRW/TRL)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "17:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-123",
    "gid": "Z001RUJS",
    "empNo": "1211",
    "department": "STR",
    "name": "Somporn Suksawan",
    "totalHours": 1.5,
    "reason": "Check stock Inventory (Siemens TRW/TRL Pallet room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "17:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-124",
    "gid": "65091211",
    "empNo": "1211",
    "department": "STR",
    "name": "Somporn Suksawan",
    "totalHours": 3.5,
    "reason": "Check Stock (Siemens TRW/TRL Pallet store)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-125",
    "gid": "Z001RUJS",
    "empNo": "1211",
    "department": "STR",
    "name": "Somporn Suksawan",
    "totalHours": 2.5,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "16:30",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-126",
    "gid": "Z001PN9T",
    "empNo": "0067",
    "department": "BES/PSY",
    "name": "Songsak Buphu",
    "totalHours": 4.5,
    "reason": "W/O 601696463 N08 FCP show fault 23/01,14:00-16:00 \u0e19., W/O 601616676 test flow fire pump DM1.18:00-20:00 \u0e19.",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "20:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-127",
    "gid": "Z005335M",
    "empNo": "1457",
    "department": "BES/PSY",
    "name": "Sutas Buapa",
    "totalHours": 3.0,
    "reason": "601673275 BES-2 Support Subcont.repair pipe fire pump at S01",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "18:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-128",
    "gid": "Z005335M",
    "empNo": "1457",
    "department": "BES/PSY",
    "name": "Sutas Buapa",
    "totalHours": 1.0,
    "reason": "601686247 S10 FCP show COMMON TRBL ACT 03IM 14",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "16:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-129",
    "gid": "65090386",
    "empNo": "0386",
    "department": "DWE",
    "name": "Uma Tanomwam",
    "totalHours": 1.0,
    "reason": "DMO VMT445 Coolant water leak WO601682677",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:30",
    "endTime": "18:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-130",
    "gid": "Z00575HF",
    "empNo": "0000",
    "department": "BES/PSY",
    "name": "Vatcharakon Swang a-rom",
    "totalHours": 4.0,
    "reason": "Order: 601701952 DM0 WSH office adjust drain air cond.",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "15:30",
    "endTime": "19:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-131",
    "gid": "Z00575HF",
    "empNo": "0000",
    "department": "BES/PSY",
    "name": "Vatcharakon Swang a-rom",
    "totalHours": 1.5,
    "reason": "Order: 601702336. AM0 2nd Air AHU 2A-01 loud noise",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "15:30",
    "endTime": "17:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-132",
    "gid": "Z003Z8EB",
    "empNo": "1319",
    "department": "BES/PSY2",
    "name": "Vikhanet Singthong",
    "totalHours": 2.5,
    "reason": "601696020 : AK0 Floor 2 SPK Water leak",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "10:30",
    "endTime": "13:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-133",
    "gid": "Z003Z8EB",
    "empNo": "1319",
    "department": "BES/PSY2",
    "name": "Vikhanet Singthong",
    "totalHours": 1.0,
    "reason": "601696020 : AK0 Floor 2 SPK Water leak",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "22:30",
    "endTime": "23:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-134",
    "gid": "Z003UYJR",
    "empNo": "0614",
    "department": "STR",
    "name": "Viroon Junhirun",
    "totalHours": 2.0,
    "reason": "Check Stock (Siemens BES Main store room)",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:00",
    "endTime": "19:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-135",
    "gid": "Z0020YPZ",
    "empNo": "0196",
    "department": "DWE",
    "name": "Wannachai Pikunthong",
    "totalHours": 1.0,
    "reason": "DMO VMT445 Coolant water leak WO601682677",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "17:00",
    "endTime": "18:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-136",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601655098_Repair Strap Hanger Saddle EMU25",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-137",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 6016518282_Repair stanchion assembly, EMU27",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-138",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601673870_Repair Duewag-support, EMU34",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-139",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601651836_Repair Trifurcate Pole, EMU25",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-140",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601651831_Repair stanchion assembly, EMU27",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-141",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601672659_Repair stanchion assembly, EMU18",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-142",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601672669_Repair Door cover, EMU18",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-143",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601672664_Repair T-clamping fitting, EMU23",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-144",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601653448_Repair STANCHION ASSEMBLY, EMU24",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-145",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601694835_Repair Duewag assembly, EMU23",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "16:30",
    "endTime": "20:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-146",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601692424_Repair Stanchion,Assy,Left. EMU23",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "16:30",
    "endTime": "20:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-147",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "WO: 601646776_Repair holder for draught screen, EMU18",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "16:30",
    "endTime": "20:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-148",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601697828_RepairDuewag support pole, EMU01",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "16:30",
    "endTime": "20:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-149",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601701201_Repair Trifurcate pole, EMU30",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "16:30",
    "endTime": "20:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-150",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601701203_Repair Duewag-support pole, EMU30",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "16:30",
    "endTime": "20:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-151",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601698727_Repair Holder for Draught screen, EMU20",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "16:30",
    "endTime": "20:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-152",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O:601703407_Repair Duewag-support pole, EMU07",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "16:30",
    "endTime": "20:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-153",
    "gid": "Z001RUFB",
    "empNo": "0061",
    "department": "RST",
    "name": "Watchara Arsane",
    "totalHours": 4.0,
    "reason": "W/O: 601701868_Repair T-clamp fitting, EMU08",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "16:30",
    "endTime": "20:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-154",
    "gid": "Z003TNKS",
    "empNo": "0573",
    "department": "BES/PSY2",
    "name": "Worapot Supsomboon",
    "totalHours": 6.0,
    "reason": "601696020 : AK0 Floor 2 SPK Water leak",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "17:30",
    "endTime": "23:30",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-155",
    "gid": "Z004TERR",
    "empNo": "1392",
    "department": "RST",
    "name": "Worawut Panjai",
    "totalHours": 4.0,
    "reason": "W/O: 601655098_Repair Strap Hanger Saddle EMU25",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-156",
    "gid": "Z004TERR",
    "empNo": "1392",
    "department": "RST",
    "name": "Worawut Panjai",
    "totalHours": 4.0,
    "reason": "W/O: 6016518282_Repair stanchion assembly, EMU27",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-157",
    "gid": "Z004TERR",
    "empNo": "1392",
    "department": "RST",
    "name": "Worawut Panjai",
    "totalHours": 4.0,
    "reason": "W/O: 601673870_Repair Duewag-support, EMU34",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-158",
    "gid": "Z004TERR",
    "empNo": "1392",
    "department": "RST",
    "name": "Worawut Panjai",
    "totalHours": 4.0,
    "reason": "W/O: 601651836_Repair Trifurcate Pole, EMU25",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-159",
    "gid": "Z004TERR",
    "empNo": "1392",
    "department": "RST",
    "name": "Worawut Panjai",
    "totalHours": 4.0,
    "reason": "W/O: 601650291_Repair T-clamping fitting, EMU19",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-160",
    "gid": "Z004TERR",
    "empNo": "1392",
    "department": "RST",
    "name": "Worawut Panjai",
    "totalHours": 4.0,
    "reason": "W/O: 601672659_Repair stanchion assembly, EMU18",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-161",
    "gid": "Z004TERR",
    "empNo": "1392",
    "department": "RST",
    "name": "Worawut Panjai",
    "totalHours": 4.0,
    "reason": "W/O: 601672669_Repair Door cover, EMU18",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-162",
    "gid": "Z004TERR",
    "empNo": "1392",
    "department": "RST",
    "name": "Worawut Panjai",
    "totalHours": 4.0,
    "reason": "W/O: 601672664_Repair T-clamping fitting, EMU23",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-20",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  },
  {
    "id": "ot-163",
    "gid": "Z004TERR",
    "empNo": "1392",
    "department": "RST",
    "name": "Worawut Panjai",
    "totalHours": 4.0,
    "reason": "W/O: 601653448_Repair STANCHION ASSEMBLY, EMU24",
    "status": "Approved",
    "requestDate": "2026-05-10",
    "otRecordDate": "2026-05-08",
    "beginTime": "08:00",
    "endTime": "12:00",
    "isRetroactive": false,
    "isConfirmedByAdmin": true
  }
];

export const INITIAL_ALLOWANCES: AllowanceRecord[] = [
  {
    "id": "al-1",
    "year": 2026,
    "month": 5,
    "empNo": "0950",
    "gid": "Z00430UZ",
    "type": "standby",
    "amount": 0,
    "date": "2026-05-20",
    "remark": "Normal standby"
  },
  {
    "id": "al-2",
    "year": 2026,
    "month": 5,
    "empNo": "0406",
    "gid": "Z0406UZ",
    "type": "shift_allowance",
    "amount": 1500,
    "date": "2026-05-31",
    "remark": "Night shift monthly allowance"
  },
  {
    "id": "al-3",
    "year": 2026,
    "month": 5,
    "empNo": "0469",
    "gid": "Z0469UZ",
    "type": "emergency",
    "amount": 800,
    "date": "2026-05-15",
    "remark": "Emergency repair call"
  }
];
