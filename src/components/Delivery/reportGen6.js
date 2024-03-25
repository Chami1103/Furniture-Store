import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGen6 = Delivery =>{

    const doc = new jsPDF();

    const tableColumn = ["Receiver Address","Phone","Driver", "Delivery Date", "Status", "Vehicle No"];
    const tableRows = [];

    Delivery.forEach(delivery => {
        const deliveryData = [

            delivery.receiverAddress,
            delivery.receiverContactNumber,
            delivery.assignedDriver,
            delivery.deliveryDate.split("T")[0],
            delivery.deliveryStatus,
            delivery.vehicleNo,
            
        ]

        
        tableRows.push(deliveryData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    
    // Set the background color of the header section and table header
    doc.setFillColor(141, 94, 47); // #724935 color
    doc.rect(0, 0, doc.internal.pageSize.getWidth(), 40, 'F'); // Create a filled rectangle for the header section

    // Add a beautiful header with white text color
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255); // Set text color to white

    doc.text('Furny Furniture Store', 105, 15, 'center');
    doc.setFontSize(10);
    doc.text('No 125/08, 123 Main Street, Colombo 02', 105, 22, 'center');
    doc.text('Phone: (+94) 77 456 7890', 105, 29, 'center');

    // Add space between header and report name/date row
    doc.text('', 14, 45); // Add space by simply adding an empty string

    // Add the report name on the left corner with the same text color as the date
    doc.setFontSize(16);
    doc.setTextColor(141, 94, 47); // Set text color to match the date color
    doc.text('All Delivery Report', 14, 50, 'left');

    // Add the current date to the PDF on the right corner
    doc.text(`Date: ${year}-${month}-${day}`, 160, 50, 'right');

    // Add the table to the PDF with the specified header color
    doc.autoTable({
        headStyles: { fillColor: [141, 94, 47], textColor: 255 },
        head: [tableColumn],
        body: tableRows,
        startY: 60,
    });

    doc.save(`Delivery_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGen6;