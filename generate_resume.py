import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import inch

pdf_path = "public/assets/sunny-singh-resume.pdf"

# Document setup with tight margins to fit perfectly on a single page
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=36,   # 0.5 inch
    rightMargin=36,
    topMargin=28,
    bottomMargin=28
)

styles = getSampleStyleSheet()

# Colors
HEADER_BLUE = colors.HexColor('#1E3A8A')  # Classic navy/indigo
TEXT_DARK = colors.HexColor('#111827')
MUTED_DARK = colors.HexColor('#374151')
LINE_COLOR = colors.HexColor('#1E3A8A')
GRAY_LINE = colors.HexColor('#9CA3AF')

# Styles using Times-Roman / Times-Bold for classic professional Ivy/ATS look
name_style = ParagraphStyle(
    'NameStyle',
    fontName='Times-Bold',
    fontSize=20,
    leading=22,
    textColor=HEADER_BLUE
)

contact_left_style = ParagraphStyle(
    'ContactLeft',
    fontName='Times-Roman',
    fontSize=9,
    leading=12,
    textColor=MUTED_DARK
)

contact_right_style = ParagraphStyle(
    'ContactRight',
    fontName='Times-Roman',
    fontSize=9,
    leading=12,
    alignment=2, # Right aligned
    textColor=MUTED_DARK
)

section_title_style = ParagraphStyle(
    'SectionTitle',
    fontName='Times-Bold',
    fontSize=10.5,
    leading=12,
    textColor=HEADER_BLUE,
    spaceBefore=0,
    spaceAfter=0
)

body_style = ParagraphStyle(
    'BodyStyle',
    fontName='Times-Roman',
    fontSize=8.5,
    leading=11,
    textColor=TEXT_DARK
)

bold_style = ParagraphStyle(
    'BoldStyle',
    fontName='Times-Bold',
    fontSize=8.5,
    leading=11,
    textColor=TEXT_DARK
)

bullet_style = ParagraphStyle(
    'BulletStyle',
    fontName='Times-Roman',
    fontSize=8.5,
    leading=11,
    leftIndent=10,
    firstLineIndent=-6,
    textColor=TEXT_DARK
)

skill_title_style = ParagraphStyle(
    'SkillTitle',
    fontName='Times-Bold',
    fontSize=8.5,
    leading=11,
    textColor=TEXT_DARK
)

skill_desc_style = ParagraphStyle(
    'SkillDesc',
    fontName='Times-Roman',
    fontSize=8.5,
    leading=11,
    textColor=TEXT_DARK
)

table_left_style = ParagraphStyle(
    'TableLeft',
    fontName='Times-Roman',
    fontSize=8.5,
    leading=11,
    textColor=TEXT_DARK
)

table_right_style = ParagraphStyle(
    'TableRight',
    fontName='Times-Roman',
    fontSize=8.5,
    leading=11,
    alignment=2, # Right
    textColor=TEXT_DARK
)

elements = []

# --- HEADER (2 Columns: Left Name + Address/Links, Right Email + Phone) ---
header_data = [
    [
        Paragraph("<b>SUNNY SINGH</b>", name_style),
        Paragraph("<b>Email:</b> sunnykashyap1608@gmail.com<br/><b>Mobile:</b> +91 8449612175", contact_right_style)
    ],
    [
        Paragraph("Aligarh, India<br/>LinkedIn: www.linkedin.com/in/sunny-singh0506<br/>GitHub: github.com/sunnysingh0508", contact_left_style),
        Paragraph("", contact_right_style)
    ]
]
header_table = Table(header_data, colWidths=[330, 210])
header_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('TOPPADDING', (0,0), (-1,-1), 0),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
elements.append(header_table)
elements.append(Spacer(1, 4))
elements.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#1E3A8A'), spaceAfter=4, spaceBefore=0))

def add_section_header(title):
    elements.append(Paragraph(title.upper(), section_title_style))
    elements.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#1E3A8A'), spaceAfter=3, spaceBefore=1))

# --- SUMMARY ---
add_section_header("SUMMARY")
elements.append(Paragraph("Finance assistant and educator skilled in data accuracy, financial reporting, classroom management, technology tools, and problem-solving. Experienced in handling accounting tasks, improving academic outcomes, and delivering organized documentation.", body_style))
elements.append(Spacer(1, 4))

# --- SKILLS ---
add_section_header("SKILLS")
skills_rows = [
    [
        Paragraph("<b>Frontend & Web Development</b>", skill_title_style),
        Paragraph("HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js (App Router), Tailwind CSS, Responsive Web Design", skill_desc_style)
    ],
    [
        Paragraph("<b>Programming & Technologies</b>", skill_title_style),
        Paragraph("C / C++, DBMS, Python, TypeScript, JavaScript, Artificial Intelligence (AI), SQL, Problem-Solving, Algorithms", skill_desc_style)
    ],
    [
        Paragraph("<b>Databases, Cloud & Tools</b>", skill_title_style),
        Paragraph("MongoDB, Vercel, Render, Git & GitHub, VS Code, Tally Accounting Software, MS Office (Word, Excel, PPT), Financial Reporting, Data Entry & Documentation", skill_desc_style)
    ],
    [
        Paragraph("<b>Management & Professional</b>", skill_title_style),
        Paragraph("Classroom Management, Time Management, Event Coordination, Targeted Teaching, Team Collaboration", skill_desc_style)
    ]
]
skills_table = Table(skills_rows, colWidths=[150, 390])
skills_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('TOPPADDING', (0,0), (-1,-1), 0.75),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0.75),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
elements.append(skills_table)
elements.append(Spacer(1, 4))

# --- PROJECTS ---
add_section_header("PROJECTS")
projects_list = [
    "&bull; <b>Veldora</b> &mdash; Secure cloud storage application built with Next.js and TypeScript, featuring API Routes, MongoDB metadata management, and Telegram Bot infrastructure.",
    "&bull; <b>Campusmitra-AI</b> &mdash; Smart College Life OS for CGPA, attendance, assignments, notes, and timetables, with real-time insights, safe bunk tracking, and AI-powered features.",
    "&bull; <b>AI-based Resume Screening Portal</b> &mdash; AI-based resume screening portal project.",
    "&bull; <b>LPUCart-Admin</b> &mdash; Administration project for the LPUCart platform."
]
for proj in projects_list:
    elements.append(Paragraph(proj, bullet_style))
elements.append(Spacer(1, 4))

# --- EXPERIENCE ---
add_section_header("EXPERIENCE")
# Job 1
exp1_header = [
    [
        Paragraph("<b>Assistant Finance Manager</b> &mdash; <b>BRS Finjasee Pvt. Ltd., Aligarh</b>", table_left_style),
        Paragraph("Apr 2024 &ndash; Apr 2025", table_right_style)
    ]
]
t_exp1 = Table(exp1_header, colWidths=[420, 120])
t_exp1.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('TOPPADDING', (0,0), (-1,-1), 0),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
elements.append(t_exp1)
elements.append(Paragraph("&bull; Handled 500+ monthly transactions including data entry, invoicing, and payment posting, improving processing speed by 30%.", bullet_style))
elements.append(Paragraph("&bull; Resolved 50+ vendor billing discrepancies monthly, reducing payment delays by 25%.", bullet_style))
elements.append(Spacer(1, 2))

# Job 2
exp2_header = [
    [
        Paragraph("<b>Teacher</b> &mdash; <b>Local School, Aligarh</b>", table_left_style),
        Paragraph("Apr 2023 &ndash; Mar 2024", table_right_style)
    ]
]
t_exp2 = Table(exp2_header, colWidths=[420, 120])
t_exp2.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('TOPPADDING', (0,0), (-1,-1), 0),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
elements.append(t_exp2)
elements.append(Paragraph("&bull; Delivered instruction, improved student outcomes, and prepared lesson plans.", bullet_style))
elements.append(Spacer(1, 4))

# --- ACHIEVEMENTS ---
add_section_header("ACHIEVEMENTS")
achievements_list = [
    "&bull; Participated in national-level hackathons (24-hour innovation challenge).",
    "&bull; Boosted student performance by 50% with targeted teaching methods.",
    "&bull; Increased classroom engagement by 70% through redesigned lessons.",
    "&bull; Completed Advanced Diploma in Computer Applications (MS Office, Tally)."
]
for ach in achievements_list:
    elements.append(Paragraph(ach, bullet_style))
elements.append(Spacer(1, 4))

# --- EDUCATION ---
add_section_header("EDUCATION")
edu_rows = [
    [
        Paragraph("&bull; <b>B-Tech Computer Science</b> &mdash; LPU", table_left_style),
        Paragraph("2025&ndash;2029", table_right_style)
    ],
    [
        Paragraph("&bull; <b>Intermediate (PCM)</b> &mdash; IPS Aligarh", table_left_style),
        Paragraph("2024", table_right_style)
    ],
    [
        Paragraph("&bull; <b>High School (PCM)</b> &mdash; Ketan Convent", table_left_style),
        Paragraph("2022", table_right_style)
    ]
]
edu_table = Table(edu_rows, colWidths=[440, 100])
edu_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('TOPPADDING', (0,0), (-1,-1), 0.5),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
elements.append(edu_table)
elements.append(Spacer(1, 4))

# --- LANGUAGES ---
add_section_header("LANGUAGES")
elements.append(Paragraph("English (Moderate) &bull; Hindi (Proficient) &bull; Urdu (Advanced)", body_style))
elements.append(Spacer(1, 4))

# --- COURSES & CERTIFICATES ---
add_section_header("COURSES & CERTIFICATES")
certificates_list = [
    "&bull; <b>Community Development Project</b> &mdash; Times Foundation & The Times of India (in collab with LPU) &mdash; Certified Completion",
    "&bull; <b>Advanced Diploma in Computer Applications (ADCA)</b> &mdash; National Institute of Computer Education &mdash; Issued 2024",
    "&bull; <b>Effective Time Management (MOOC)</b> &mdash; Tech Veda &mdash; Issued 29 Oct 2025",
    "&bull; <b>Introduction to Artificial Intelligence (AI)</b> &mdash; IBM / Coursera &mdash; Issued 04 Feb 2026",
    "&bull; <b>Introduction to HTML, CSS, & JavaScript</b> &mdash; IBM / Coursera",
    "&bull; <b>WEB-A-THON 2.0 (University-Level Hackathon)</b> &mdash; Certificate of Participation",
    "&bull; <b>PROMPT BUILDER 2026 (Technical Innovation Challenge)</b> &mdash; Technical Participation Certificate &mdash; LPU"
]
for cert in certificates_list:
    elements.append(Paragraph(cert, bullet_style))

# Build document
doc.build(elements)
print(f"Resume PDF successfully generated at {pdf_path}")
