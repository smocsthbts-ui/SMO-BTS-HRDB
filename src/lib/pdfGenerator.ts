import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MonthlyTimeSheet } from '../types';

/**
 * Generates a high-fidelity Siemens Time Sheet PDF
 * matching the layout in Time Sheet.png
 */
export function generateTimeSheetPDF(timeSheet: MonthlyTimeSheet, previewOnly = false): jsPDF {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4' // 297mm x 210mm
  });

  const emp = timeSheet.employee;

  // 1. SIEMENS Header & Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(0, 100, 110); // Siemens Petrol
  doc.text('SIEMENS', 14, 15);

  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text('Time Sheet', 55, 15);

  // Red instruction in Thai/English
  doc.setFontSize(9);
  doc.setTextColor(200, 0, 0);
  doc.text('If writing or editing, cross out (do not erase) and sign at every point.', 105, 15);

  // Right Title
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text('MO CS BTS', 255, 15);

  // 2. Metadata Box
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.3);
  doc.rect(14, 19, 269, 14); // x, y, w, h

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 30, 30);

  // Row 1
  doc.text('Empno. / GID', 16, 24);
  doc.setFont('helvetica', 'normal');
  doc.text(:     , 38, 24);

  doc.setFont('helvetica', 'bold');
  doc.text('Firstname', 78, 24);
  doc.setFont('helvetica', 'normal');
  doc.text(: , 98, 24);

  doc.setFont('helvetica', 'bold');
  doc.text('Familyname', 135, 24);
  doc.setFont('helvetica', 'normal');
  doc.text(: , 158, 24);

  doc.setFont('helvetica', 'bold');
  doc.text('Department', 205, 24);
  doc.setFont('helvetica', 'normal');
  doc.text(: , 226, 24);

  // Row 2
  doc.setFont('helvetica', 'bold');
  doc.text('Division', 16, 30);
  doc.setFont('helvetica', 'normal');
  doc.text(: , 38, 30);

  doc.setFont('helvetica', 'bold');
  doc.text('Shift Status', 78, 30);
  doc.setFont('helvetica', 'normal');
  doc.text(: , 98, 30);

  doc.setFont('helvetica', 'bold');
  doc.text('Function', 135, 30);
  doc.setFont('helvetica', 'normal');
  doc.text(: , 158, 30);

  doc.setFont('helvetica', 'bold');
  doc.text('Cost Center', 205, 30);
  doc.setFont('helvetica', 'normal');
  doc.text(: , 226, 30);

  // 3. Multi-level Table Headers
  const head = [
    [
      { content: 'Date', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
      { content: 'Shift\nCode', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
      { content: 'Shift\nIn', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
      { content: 'Real Time I', colSpan: 2, styles: { halign: 'center' } },
      { content: 'Diff. I\n(H)', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
      { content: 'Late\n(H)', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
      { content: 'Real Time II', colSpan: 2, styles: { halign: 'center' } },
      { content: 'Diff. II\n(H)', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
      { content: 'Working Hours', colSpan: 3, styles: { halign: 'center' } },
      { content: 'Stand by\nAllowance', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
      { content: 'Emergency\nAllowance', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
      { content: 'Code\nLeave', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
      { content: 'Code', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
      { content: 'Remark', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } }
    ],
    [
      { content: 'In', styles: { halign: 'center' } },
      { content: 'Out', styles: { halign: 'center' } },
      { content: 'In', styles: { halign: 'center' } },
      { content: 'Out', styles: { halign: 'center' } },
      { content: 'Total', styles: { halign: 'center' } },
      { content: 'OT 1.5', styles: { halign: 'center' } },
      { content: 'OT 3.0', styles: { halign: 'center' } }
    ]
  ];

  // Table Body Rows
  const body = timeSheet.rows.map(r => [
    r.dateStr,
    r.shiftCode || '',
    r.shiftIn || '',
    r.realIn1 || '',
    r.realOut1 || '',
    r.diff1 || '',
    r.late || '',
    r.realIn2 || '',
    r.realOut2 || '',
    r.diff2 || '',
    r.totalWorkingHours ? String(r.totalWorkingHours) : '0',
    r.ot15 ? String(r.ot15) : '0',
    r.ot30 ? String(r.ot30) : '0',
    r.standbyAllowance ? String(r.standbyAllowance) : '0',
    r.emergencyAllowance ? String(r.emergencyAllowance) : '0',
    r.codeLeave || '',
    r.code || '',
    r.remark || ''
  ]);

  // Total Summary Row
  const foot = [
    [
      { content: 'Total :', styles: { halign: 'center', fontStyle: 'bold' } },
      { content: '', styles: { halign: 'center' } },
      { content: '', styles: { halign: 'center' } },
      { content: String(timeSheet.totalShiftsWorked), colSpan: 2, styles: { halign: 'center', fontStyle: 'bold' } },
      { content: timeSheet.totalDiff1Formatted, styles: { halign: 'center', fontStyle: 'bold' } },
      { content: timeSheet.totalLateFormatted, styles: { halign: 'center', fontStyle: 'bold' } },
      { content: '', colSpan: 2, styles: { halign: 'center' } },
      { content: '', styles: { halign: 'center' } },
      { content: String(timeSheet.totalWorkingHours), styles: { halign: 'center', fontStyle: 'bold' } },
      { content: String(timeSheet.totalOt15), styles: { halign: 'center', fontStyle: 'bold' } },
      { content: String(timeSheet.totalOt30), styles: { halign: 'center', fontStyle: 'bold' } },
      { content: String(timeSheet.totalStandby), styles: { halign: 'center', fontStyle: 'bold' } },
      { content: String(timeSheet.totalEmergency), styles: { halign: 'center', fontStyle: 'bold' } },
      { content: String(timeSheet.totalLeave), styles: { halign: 'center', fontStyle: 'bold' } },
      { content: '', styles: { halign: 'center' } },
      { content: '', styles: { halign: 'center' } }
    ]
  ];

  autoTable(doc, {
    head: head as any,
    body: body,
    foot: foot as any,
    startY: 35,
    margin: { left: 14, right: 14 },
    theme: 'grid',
    styles: {
      fontSize: 6.5,
      cellPadding: 1,
      lineColor: [0, 0, 0],
      lineWidth: 0.15,
      textColor: [0, 0, 0]
    },
    headStyles: {
      fillColor: [255, 255, 255],
      textColor: [0, 0, 0],
      fontStyle: 'bold',
      lineWidth: 0.25,
      lineColor: [0, 0, 0]
    },
    footStyles: {
      fillColor: [255, 255, 255],
      textColor: [0, 0, 0],
      fontStyle: 'bold',
      lineWidth: 0.25,
      lineColor: [0, 0, 0]
    },
    columnStyles: {
      0: { cellWidth: 18, halign: 'left' },
      1: { cellWidth: 8, halign: 'center' },
      2: { cellWidth: 10, halign: 'center' },
      3: { cellWidth: 11, halign: 'center' },
      4: { cellWidth: 11, halign: 'center' },
      5: { cellWidth: 13, halign: 'center' },
      6: { cellWidth: 11, halign: 'center' },
      7: { cellWidth: 10, halign: 'center' },
      8: { cellWidth: 10, halign: 'center' },
      9: { cellWidth: 11, halign: 'center' },
      10: { cellWidth: 10, halign: 'center' },
      11: { cellWidth: 10, halign: 'center' },
      12: { cellWidth: 10, halign: 'center' },
      13: { cellWidth: 15, halign: 'center' },
      14: { cellWidth: 16, halign: 'center' },
      15: { cellWidth: 10, halign: 'center' },
      16: { cellWidth: 9, halign: 'center' },
      17: { cellWidth: 'auto', halign: 'left' }
    },
    didParseCell: function(data) {
      if (data.section === 'body') {
        const rowIndex = data.row.index;
        const rowData = timeSheet.rows[rowIndex];
        if (rowData && rowData.isWeekend) {
          data.cell.styles.fillColor = [220, 220, 220]; // Grey shading for Saturday/Sunday
        }
      }
    }
  });

  const finalY = (doc as any).lastAutoTable.finalY || 180;

  // 4. Footer Notes & Signatures
  doc.rect(14, finalY + 2, 269, 18);

  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');
  doc.text('Remark : A-Annual Leave, C-Casual Leave, S-Sick Leave, O-Other Leave', 16, finalY + 6);
  doc.text('X-Forgot to use the Card, Y-Forgot to bring the Card, O-Others', 27, finalY + 10);

  // Signatures
  doc.line(135, finalY + 14, 185, finalY + 14);
  doc.text('Signature Originator/Date', 145, finalY + 17);

  doc.line(205, finalY + 14, 265, finalY + 14);
  doc.text('Approval Signature/Date', 220, finalY + 17);

  if (!previewOnly) {
    doc.save(TimeSheet__-.pdf);
  }

  return doc;
}
