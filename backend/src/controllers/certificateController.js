const PDFDocument = require("pdfkit");

const generateCertificate = async (
  req,
  res
) => {
  const courseName =
    req.query.course || "Course";

  const studentName =
    "VISTA Learner";

  const doc =
    new PDFDocument({
      size: "A4",
      layout: "landscape",
    });

  res.setHeader(
    "Content-Type",
    "application/pdf"
  );

  res.setHeader(
    "Content-Disposition",
    `attachment; filename=certificate.pdf`
  );

  doc.pipe(res);

  doc.fontSize(30).text(
    "Certificate of Completion",
    {
      align: "center",
    }
  );

  doc.moveDown(2);

  doc.fontSize(20).text(
    `This certifies that`,
    {
      align: "center",
    }
  );

  doc.moveDown();

  doc.fontSize(28).text(
    studentName,
    {
      align: "center",
    }
  );

  doc.moveDown();

  doc.fontSize(20).text(
    `has successfully completed`,
    {
      align: "center",
    }
  );

  doc.moveDown();

  doc.fontSize(24).text(
    courseName,
    {
      align: "center",
    }
  );

  doc.end();
};

module.exports = {
  generateCertificate,
};