import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ReportGen10 = Payment => {
    const doc = new jsPDF();
    const tableColumn = ["Payment Method", "Amount", "Customer Name", "Transaction Date"];
    const tableRows = [];
    let totalCardPayments = 0;
    let creditCardCount = 0;
    let totalCashOnDelivery = 0;
    let cashOnDeliveryCount = 0;

    Payment.forEach(payment => {
        const paymentData = [
            payment.paymentMethod,
            payment.paymentAmount,
            payment.customerName,
            payment.transactionDate.split("T")[0],
        ];

        tableRows.push(paymentData);

        if (payment.paymentMethod === "Credit Card") {
            const paymentAmount = parseFloat(payment.paymentAmount);
            if (!isNaN(paymentAmount)) {
                totalCardPayments += paymentAmount;
                creditCardCount++;
            }
        } else if (payment.paymentMethod === "Cash on Delivery") {
            totalCashOnDelivery += parseFloat(payment.paymentAmount);
            cashOnDeliveryCount++;
        }
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.setFillColor(141, 94, 47);
    doc.rect(0, 0, doc.internal.pageSize.getWidth(), 40, 'F');
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('Furny Furniture Store', 105, 15, 'center');
    doc.setFontSize(10);
    doc.text('No 125/08, 123 Main Street, Colombo 02', 105, 22, 'center');
    doc.text('Phone: (+94) 77 456 7890', 105, 29, 'center');
    doc.text('', 14, 45);
    doc.setFontSize(16);
    doc.setTextColor(141, 94, 47);
    doc.text('Payments Report', 14, 50, 'left');
    doc.text(`Date: ${year}-${month}-${day}`, 160, 50, 'right');

    doc.autoTable({
        headStyles: { fillColor: [141, 94, 47], textColor: 255 },
        head: [tableColumn],
        body: tableRows,
        startY: 60,
    });

    doc.text(`Total Card Payments: ${totalCardPayments.toFixed(2)}`, 14, doc.autoTable.previous.finalY + 10);
    doc.text(`Number of Credit Card Payments: ${creditCardCount}`, 14, doc.autoTable.previous.finalY + 30);
    doc.text(`Total Cash on Delivery: ${totalCashOnDelivery.toFixed(2)}`, 14, doc.autoTable.previous.finalY + 20);
    doc.text(`Number of Cash on Delivery Payments: ${cashOnDeliveryCount}`, 14, doc.autoTable.previous.finalY + 40);

    doc.save(`Payments_${year}` + " " + `${month}` + " " + `${day}` + ".pdf");
};

export default ReportGen10;

