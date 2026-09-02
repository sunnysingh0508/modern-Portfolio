from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import inch

pdf_path = "public/assets/sunny-singh-resume.pdf"
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=0.5 * inch,
    rightMargin=0.5 * inch,
    topMargin=0.4 * inch,
    bottomMargin=0.4 * inch
)

styles = getSampleStyleSheet()

# Custom styles
name_style = ParagraphStyle(
    'NameStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=17,
    leading=21,
    alignment=1, # Center
    textColor=colors.HexColor('#111827')
)

contact_style = ParagraphStyle(
    'ContactStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=12,
    alignment=1, # Center
    textColor=colors.HexColor('#374151')
)

section_title = ParagraphStyle(
    'SectionTitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    textColor=colors.HexColor('#111827'),
    spaceBefore=4,
    spaceAfter=2
)

body_text = ParagraphStyle(
    'BodyText',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11.5,
    textColor=colors.HexColor('#1f2937')
)

bold_body = ParagraphStyle(
    'BoldBody',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=8.5,
    leading=11.5,
    textColor=colors.HexColor('#111827')
)

bullet_text = ParagraphStyle(
    'BulletText',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11,
    leftIndent=12,
    firstLineIndent=-8,
    textColor=colors.HexColor('#1f2937')
)

elements = []

# Name and Contact
elements.append(Paragraph("SUNNY SINGH", name_style))
elements.append(Spacer(1, 2))
elements.append(Paragraph("Aligarh, India &bull; +91 8449612175 &bull; sunnykashyap1608@gmail.com &bull; www.linkedin.com/in/sunny-singh0506", contact_style))
elements.append(Spacer(1, 6))

def add_section(title):
    elements.append(Paragraph(title, section_title))
    elements.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#111827'), spaceAfter=4, spaceBefore=1))

# Summary
add_section("Summary")
elements.append(Paragraph("Finance assistant and educator skilled in data accuracy, financial reporting, classroom management, technology tools, and problem-solving. Experienced in handling accounting tasks, improving academic outcomes, and delivering organized documentation.", body_text))
elements.append(Spacer(1, 4))

# Achievements
add_section("Achievements")
achievements = [
    "&bull; Participated in national-level hackathons (24-hour innovation challenge).",
    "&bull; Boosted student performance by 50% with targeted teaching methods.",
    "&bull; Increased classroom engagement by 70% through redesigned lessons.",
    "&bull; Completed Advanced Diploma in Computer Applications (MS Office, Tally)."
]
for a in achievements:
    elements.append(Paragraph(a, bullet_text))
elements.append(Spacer(1, 4))

# Experience
add_section("Experience")
elements.append(Paragraph("<b>Assistant Finance Manager</b> &mdash; BRS Finjasee Pvt. Ltd., Aligarh <font color='#4b5563'>Apr 2024 &ndash; Apr 2025</font>", body_text))
elements.append(Paragraph("&bull; Handled 500+ monthly transactions including data entry, invoicing, and payment posting, improving processing speed by 30%", bullet_text))
elements.append(Paragraph("&bull; Resolved 50+ vendor billing discrepancies monthly, reducing payment delays by 25%", bullet_text))
elements.append(Spacer(1, 2))
elements.append(Paragraph("<b>Teacher</b> &mdash; Local School, Aligarh <font color='#4b5563'>Apr 2023 &ndash; Mar 2024</font>", body_text))
elements.append(Paragraph("&bull; Delivered instruction, improved student outcomes, and prepared lesson plans.", bullet_text))
elements.append(Spacer(1, 4))

# Projects
add_section("Projects")
projects = [
    "&bull; <b>Veldora</b> &mdash; Veldora is a secure cloud storage application built with Next.js and TypeScript, featuring API Routes for backend services, MongoDB for metadata management, and Telegram Bot infrastructure as a service.",
    "&bull; <b>Campusmitra-AI</b> &mdash; A Smart College Life OS that helps students manage CGPA, attendance, assignments, notes, and timetables in one clean dashboard, with real-time insights, safe bunk tracking, and AI-powered features.",
    "&bull; <b>AI-based Resume Screening Portal</b> &mdash; AI-based resume screening portal project.",
    "&bull; <b>LPUCart-Admin</b> &mdash; Administration project for the LPUCart platform."
]
for p in projects:
    elements.append(Paragraph(p, bullet_text))
elements.append(Spacer(1, 4))

# Education
add_section("Education")
education = [
    "<b>B-Tech Computer Science</b> &mdash; LPU (2025&ndash;2029)",
    "<b>Intermediate (PCM)</b> &mdash; IPS Aligarh (2024)",
    "<b>High School (PCM)</b> &mdash; Ketan Convent (2022)"
]
for e in education:
    elements.append(Paragraph(e, body_text))
elements.append(Spacer(1, 4))

# Skills
add_section("Skills")
skills_data = [
    [Paragraph("HTML5, CSS3, JavaScript (ES6+)", body_text), Paragraph("TypeScript", body_text)],
    [Paragraph("React.js", body_text), Paragraph("Python", body_text)],
    [Paragraph("Next.js (App Router)", body_text), Paragraph("Tailwind CSS", body_text)],
    [Paragraph("Responsive Web Design", body_text), Paragraph("MS Office (Word, Excel, PPT)", body_text)],
    [Paragraph("Tally Accounting Software", body_text), Paragraph("Data Entry & Documentation", body_text)],
    [Paragraph("Problem-Solving", body_text), Paragraph("Classroom Management", body_text)],
    [Paragraph("Event Coordination", body_text), Paragraph("Time Management", body_text)]
]
skills_table = Table(skills_data, colWidths=[260, 260])
skills_table.setStyle(TableStyle([
    ('TOPPADDING', (0,0), (-1,-1), 0.5),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
elements.append(skills_table)
elements.append(Spacer(1, 4))

# Languages
add_section("Languages")
elements.append(Paragraph("English (Moderate) &bull; Hindi (Proficient) &bull; Urdu (Advanced)", body_text))
elements.append(Spacer(1, 4))

# Courses
add_section("Courses")
elements.append(Paragraph("Advanced Diploma in Computer Applications &bull; Time Management &bull; Participation in Hackathons &bull; Introduction to HTML,CSS,JavaScript &bull; Introduction to Artificial Intelligence (AI)", body_text))

doc.build(elements)
print("PDF generated successfully at", pdf_path)
